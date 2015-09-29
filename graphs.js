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
            .attr('class','line-chart')
            .attr("width", w)
            .attr("height", h)
            .style('padding','60px')
            .append('g')
            .attr('class','container')

// create date parsing function
var parseDate = d3.time.format("%Y-%m-%d").parse;

usPopulationData.forEach(function(d,i){
  d[0] = parseDate(d[0]);
});

// sort data in ascending year order
usPopulationData = usPopulationData.sort(function(a, b) { return a[0]-b[0]; })

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

/// start pie chart graph

var margin = 10;
var w = 1000 - (margin*2);
var h = 500 - (margin*2);
var radius = Math.min(w, h) / 2;

var colors = d3.scale.category20();

var arc = d3.svg.arc()
            .outerRadius(radius - 10)
            .innerRadius(100);

var pie = d3.layout.pie()
            .sort(null)
            .value(function(d){ return d.immigration_perc; });

var svg = d3.select(".graph")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .attr('class','pie-chart')
            .style('padding','60px')
            .append('g')
            .attr('class','container')
            .attr('transform','translate('+ w/2 +',' + h/2 + ')');

d3.csv("immigration.csv", function(error, data) {
//Total,41347945,100.0

  data.forEach(function(d) {
    d.country = d.Country;
    d.immigration_num = +d.Estimate;
    d.immigration_perc = +d.Percent;
  });

var pie_chart = svg.selectAll(".arc")
                   .data(pie(data))
                   .enter()
                   .append('g')
                   .attr('class','arc');

pie_chart.append('path')
         .attr('d',arc)
         .style('fill',function(d,i){ return colors(i); });

pie_chart.append("text")
      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
      .attr("dy", ".35em")
      .style("text-anchor", "middle")
      .text(function(d) { if (d.value > 3) {return d.data.country; }});

console.log(pie(data));
// console.log(data)
  // g.append("path")
  //     .attr("d", arc)
  //     .style("fill", function(d) { return color(d.data.age); });

  // g.append("text")
  //     .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
  //     .attr("dy", ".35em")
  //     .style("text-anchor", "middle")
  //     .text(function(d) { return d.data.age; });

});




































