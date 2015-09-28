# Visualize It

## Learning Objectives

As a software engineer, one of the most powerful skills you can learn is how to elegantly and efficiently navigate uncertain terrain.

During your own projects (and on the job), a clear set of steps will rarely be provided. Often, you'll be given a vague goal, and your job will be to discover which tools you need, learn how to use them, and then chart a clear path to an [MVP](http://en.wikipedia.org/wiki/Minimum_viable_product) on your own.

95% (at least) of the code you write will depend on external modules and libraries, the majority of which are poorly documented. D3's documentation isn't bad, but there's a lot of it. You'll need to sort through the mountains of documentation and examples to learn what you'll need for this sprint. Exposing you to this is one of the main goals of this sprint.

D3's API is very well designed.  As you learn it, pay attention to the choices the implementors made.  Many similar libraries were written years earlier, but this one achieved a lot of success relatively late in the game because of the design choices made by its implementors.  Many such libraries remain to be written.  When you write code, pay attention to things that are painful and repetitive, and how you might improve those processes.

The resources provided in this sprint contain a lot of prebuilt code. It is in your benefit if you do not directly reference this code, instead, utilize your other given and familiar resources(walkthroughs, tutorials, fellows, etc,.). Your restraint will pay dividends for your education and comprehension of this powerful library.

Enjoy.

## Basic Requirements

Learn about `enter`, `update`, `exit`, and `key` (fundamental aspects of D3) by working through the following tutorials:

  - [ ] [General Update Patterns I](http://bl.ocks.org/3808218)
  - [ ] [General Update Patterns II](http://bl.ocks.org/3808221)
  - [ ] [General Update Patterns III](http://bl.ocks.org/mbostock/3808234)
  
Skim through the official [D3 API Reference](https://github.com/mbostock/d3/wiki/API-Reference). You'll need to reference it heavily as you work through this sprint. It is good practice to always have the documentation of your framework readily accessible.

Unlike other sprints, which are test driven, you and your pair will have the freedom to get extremely creative. As an alternative to the traditional solution lecture, you will be asked to present your sprint - this is the first of many occasions you will be able to present your work to your peers. 

####Step 1
- [ ] Work through 4 - 13 of [Interactive Data Visualization](http://alignedleft.com/tutorials/d3)
- [ ] Using this tutorial, build a bar chart.
- [ ] Apply aspects of the provided dataset to your bar chart.(The specifics are up to you)
- [ ] Visualize it in a way that easily conveys the data.

####Step 2
- [ ] Build a chart using one of the following styles: [Area Chart](http://bl.ocks.org/mbostock/3883195), [Pie Chart](http://bl.ocks.org/mbostock/3887235),
  [Scatter Plot](http://bl.ocks.org/mbostock/3887118)
- [ ] Apply aspects of the provided dataset to your visualization. 
- [ ] Include basic user interactions utilizing CSS.

####Step 3
- [ ] Choose any visualization you like from this [site](https://github.com/mbostock/d3/wiki/Gallery).
- [ ] Rebuild it with your own code
- [ ] Apply aspects of the provided dataset to your visualization. 
- [ ] Add D3 animations and transitions using [this site](http://alignedleft.com/projects/2014/easy-as-pi/) as a reference and interactive tutorial. 


## Extra Credit
- [ ] Instead of using the provided data, find an API to fetch data from.
- [ ] Utilize [D3 get requests](https://github.com/mbostock/d3/wiki/Requests) to retrieve data.
- [ ] Format and replace the new data with the new on one of your existing graphs.

Some API's you could use, but are not limited to, include:
- [Los Angeles Open Data](https://data.lacity.org/)
- [The Uber API](https://developer.uber.com/)
- [San Francisco Crimespotting API](http://sanfrancisco.crimespotting.org/api)
- [Chuck Norris Jokes API](http://www.icndb.com/api/)

##Nightmare Mode
- [ ] Using D3, make your visualizations respond to click and/or drag events.
- [ ] Develop collision detection for when your graphs physically interact.
- [ ] Maintain an accurate count of all collisions between graphs.



### Extra content:

Learn more D3 by following along with one of the tutorials on [this page]. Recommended order:


  - [ ] Learn how to handle SVG's for real with [this tutorial](https://www.dashingd3js.com/svg-paths-and-d3js).
  - [ ] Even more about SVG [here](http://alignedleft.com/tutorials/d3/an-svg-primer).
  - [ ] This is a serious tutorial on building a business intelligence dashboard with D3. Some sweet startup might want one of these if you were on their early engineering team: [Dashboard tutorial](http://mobiledevmemo.com/building-a-lightweight-flexible-d3-js-dashboard-part-1-of-2/).


[d3]:http://d3js.org/
[svg element]:https://developer.mozilla.org/en-US/docs/SVG
[css3 animations]:https://developer.mozilla.org/en-US/docs/CSS/Tutorials/Using_CSS_animations
[this page]:https://github.com/mbostock/d3/wiki/Tutorials
[Manipulating data like a boss with d3]:http://www.jeromecukier.net/blog/2012/05/28/manipulating-data-like-a-boss-with-d3/
[particle system]:http://en.wikipedia.org/wiki/Particle_system
[thread]:http://en.wikipedia.org/wiki/Thread_(computing)
[Using animations and transitions effectively]:http://blog.visual.ly/creating-animations-and-transitions-with-d3-js/
[Animated Pie Charts with Text]:http://blog.stephenboak.com/2011/08/07/easy-as-a-pie.html
