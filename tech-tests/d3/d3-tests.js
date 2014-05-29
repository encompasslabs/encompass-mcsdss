console.log('d3-test.js loaded.');

// Some dummy data in a string.
var testData = '1,10,20,30,40,50,60,70';

// Convert string into array object.
var testDataArray = testData.split(','); //testData; //['booger', 'snot']; //testData.split(',');
console.log(testDataArray);

// Canvas element dimensions.
var width = 800;
var height = 400;

var widthScale = d3.scale.linear()
    .domain([0, 80])
    .range([0, width]);

var color = d3.scale.linear()
    .domain([0, 80])
    .range(['purple', 'gold']);

var axis = d3.svg.axis()
    .ticks(20)
    .scale(widthScale);

var canvas = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(20, 30)');

var bars = canvas.selectAll('rect')
    .data(testDataArray)
    .enter()
    .append('rect')
    .attr('width', function(d) {
        return widthScale(d);
    })
    .attr('height', 20)
    .attr('fill', function(d) {
        return color(d);
    })
    .attr('y', function(d, i) {
        return i * 30;
    });

// styles should be pplied to the elemnt containing the axis. look into using css next.
canvas.append('g')
    .attr('transform', 'translate(0, -30)')
    .attr('fill', 'white')
    .attr('stroke', 'gold')
    .call(axis);