// time series motion graphic of tornadoes in the US by month

var data = dataSet.tornadoesInUS.data;

//your code here
var margin = 50;
var w = 1000 - (margin*2);
var h = 500 - (margin*2);

var svg = d3.select(".graph")
            .append("svg")
            .attr('class','tornado-chart')
            .attr("width", w)
            .attr("height", h)
            .style('padding','60px')
            .append('g') //do we need it?
            .attr('class','container')

// create date parsing function
var parseDate = d3.time.format("%Y-%m-%d").parse;

data.forEach(function(d){
  d[0] = parseDate(d[0]);
});

var colors = ["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2","#2d004b"]
data = data.sort(function(a, b) { return a[0]-b[0]; })

dataObj = {};
for (var i=0; i< data.length; i++){
  dataObj[data[i][0].getFullYear()] = data[i].slice(2);
}

var x = d3.scale.ordinal().rangeRoundBands([0, w], .05, .5);
var y = d3.scale.linear().range([h, 0]);

var xlabel = dataSet.tornadoesInUS.column_names.slice(2);
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .tickValues(xlabel);

var yAxis = d3.svg.axis()
    .scale(y)
    .orient('left')
    .ticks(10);

x.domain(xlabel.map(function(d){return d;}));
y.domain([0, 400]).nice();

svg.append('g')
    .attr('class', 'x axis')
    .attr("transform", "translate(0," + h + ")")
    .call(xAxis)
    .selectAll('text')
    .style('text-anchor', 'end')
    .attr('dx', '1em')
    .attr('dy', '1em');  

svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
  .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Number of Tornadoes");


var bars = svg.selectAll("rect")
   .data(dataObj[1950]) 
   .enter().append("rect")
   .style("fill",function(d,i){return colors[i];})
   .call(position);

function position(bars) {
   bars.attr("x",function(d, i){ return x(xlabel[i]); })
   .transition()
   .duration(50)
   .attr("y",function(d) { return y(d); })
   .attr("width", x.rangeBand())
   .attr("height", function(d) { return h - y(d) });
}

var label = svg.append("text")
    .attr("class", "year label")
    .attr("text-anchor", "end")
    .attr("y", h - 300)
    .attr("x", w)
    .text(1950);

  svg.transition()
      .duration(30000)
      .delay(1000)
      .ease("linear")
      .tween('year', tweenYear)
      .each("end", enableInteraction);

var box = label.node().getBBox();

var overlay = svg.append("rect")
        .attr("class", "overlay")
        .attr("x", box.x)
        .attr("y", box.y)
        .attr("width", box.width)
        .attr("height", box.height)
        .on("mouseover", enableInteraction);

function tweenYear() {
  var year = d3.interpolateNumber(1950, 1994);
  return function(t) {displayYear(year(t));};
};
  // After the transition finishes, you can mouseover to change the year.
function enableInteraction() {
    var yearScale = d3.scale.linear()
        .domain([1950, 1994])
        .range([box.x + 10, box.x + box.width - 10])
        .clamp(true);

    // Cancel the current transition, if any.
    svg.transition().duration(0);

    overlay
        .on("mouseover", mouseover)
        .on("mouseout", mouseout)
        .on("mousemove", mousemove)
        .on("touchmove", mousemove);

    function mouseover() {
      label.classed("active", true);
    }

    function mouseout() {
      label.classed("active", false);
    }

    function mousemove() {
      displayYear(yearScale.invert(d3.mouse(this)[0]));
    }
  }

function displayYear(year) {
    bars.data(dataObj[Math.round(year)]).call(position);
    label.text(Math.round(year));
  }

