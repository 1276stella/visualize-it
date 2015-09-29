//data, grabbed from out dataSets.js file, to be used in our visualizations
var data = dataSet;
var usPopulationData = data.usPopulation.data;

//var dates = usPopulationData.map(function(d) {return d[0];});
var pop = usPopulationData.map(function(d) {return d[1];});
//your code here
var margin = 50;
var w = 1000 - (margin*2);
var h = 500 - (margin*2);

var svg = d3.select(".graph")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .style('padding','60px')
            .append('g')
            .attr('class','container')

// create date parsing function
var parseDate = d3.time.format("%Y-%m-%d").parse;

usPopulationData.forEach(function(d,i){
  // if (i===0) {console.log(typeof d[0]);}
  d[0] = parseDate(d[0]);
});

// why doesn't this work????
// dates.forEach(function(d,i){
//   if (i===0){console.log(typeof d)}
//   d = parseDate(d);
// })


var x = d3.scale.ordinal().rangeRoundBands([0, w], .05, .5);
var y = d3.scale.linear().range([h, 0]);


var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .tickFormat(d3.time.format("%Y"));

var yAxis = d3.svg.axis()
    .scale(y)
    .orient('left')
    .ticks(10);

x.domain(usPopulationData.map(function(d){return d[0]}));
y.domain([0,d3.max(pop)]).nice();

svg.append('g')
    .attr('class', 'x axis')
    .attr("transform", "translate(0," + h + ")")
    .call(xAxis)
    .selectAll('text')
    .style('text-anchor', 'end')
    .attr('dx', '-.8em')
    .attr('dy', '-.55em')
    .attr('transform', 'rotate(-90)');  

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Thousands of people");


svg.selectAll("rect")
   .data(usPopulationData) 
   .enter().append("rect")
   .style("fill","orange")
   .attr("x",function(d){ return x(d[0]); })
   .attr("y",function(d) { return y(d[1]); })
   .attr("width", x.rangeBand())
   .attr("height", function(d) { return h - y(d[1]) });
