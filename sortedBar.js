//data, grabbed from out dataSets.js file, to be used in our visualizations
var data = dataSet;
var usPopulationData = data.usPopulation;
var unrulyPassengers = data.unrulyPassengers.data;

//your code here

// set height and width for the *chart*
var width = 960;
var height = 500;


// create an svg canvas upon which to build your graph
// set the height and width for the overall window for the canvas
var svg = d3.select(".graph").append("svg")
    .attr("width", width+200)
    .attr("height", height+200)
    .style("padding","40px")
    // append container for visualization
    .append("g")
    .attr("class","container");

// set up date parsing function for time-series data
var parseDate = d3.time.format("%Y-%m-%d").parse;
unrulyPassengers.forEach(function(d){
  d[0] = parseDate(d[0]);
})
unrulyPassengers = unrulyPassengers.sort(function(a, b) { return a[0]-b[0]; })



// establish scales for the bar graph
var x = d3.scale.ordinal().rangeRoundBands([0, width], .05,0.5),
    y = d3.scale.linear().range([height, 0]),
    xAxis = d3.svg.axis().scale(x).orient("bottom").tickFormat(d3.time.format("%Y")),
    yAxis = d3.svg.axis().scale(y).orient("left").ticks(10);


//get min and max for x (time) and y (number of passengers) axes
x.domain(unrulyPassengers.map(function(d){ return d[0]; }));
y.domain([0,d3.max(unrulyPassengers, function(d){ return d[1]; }) ]).nice();

svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate("+0+"," + height  + ")")
      .style("padding","20px")
      .call(xAxis)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)");

 svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .attr("transform", "translate("+0+"," + 0 + ")")
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0)
      .attr("dy", "2em")
      .style("text-anchor", "end")
      .text("# Unruly Passengers");


svg.selectAll(".bar")
      .data(unrulyPassengers)
      .enter().append("rect")
      .style("fill", "orange")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d[0]); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d[1]); })
      .attr("height", function(d) { return height - y(d[1]); });


  d3.select("input").on("change", change);

  // var sortTimeout = setTimeout(function() {
  //   d3.select("input").property("checked", true).each(change);
  // }, 2000);


  function change() {
    //clearTimeout(sortTimeout);

    // Copy-on-write since tweens are evaluated after a delay.
    var x0 = x.domain(unrulyPassengers.sort(this.checked
        ? function(a, b) { return b[1] - a[1]; }
        : function(a, b) { return d3.descending(a[0],b[0]); })
        .map(function(d) { return d[0]; }))
        .copy();

    svg.selectAll(".bar")
        .sort(function(a, b) { return x0(a[0]) - x0(b[0]); });

    var transition = svg.transition().duration(750),
        delay = function(d, i) { return i * 50; };

    transition.selectAll(".bar")
        .delay(delay)
        .attr("x", function(d) { return x0(d[0]); });

    transition.select(".x.axis")
        .call(xAxis)
        .selectAll("g")
        .delay(delay)
        .selectAll(".x.axis text")
        .style("text-anchor", "end")
      .attr("dy", "-.55em");
  }