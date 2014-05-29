console.log('d3-aquifer-data.js loaded.');

// Some dummy data in a string.
var testData = '1,10,20,30,40,50,60,70';

// Convert string into array object.
var testDataArray = testData.split(','); //testData; //['booger', 'snot']; //testData.split(',');
//console.log(testDataArray);

// Works by saving json as object literal and import with script tag.
// For online deployment  will need to load via XMLHttpRequest from webserver.
console.log(rechargeRun_000018c0c8747e51ed8a454641757d12); // Entire object.
//console.log(rechargeRun_000018c0c8747e51ed8a454641757d12.aquifer[0].value); // 1.9
//for (var i = 0; i < rechargeRun_000018c0c8747e51ed8a454641757d12.aquifer.length; i++) { // The full array takes almost 2 minutes to loop through.
for (var i = 0; i < 10; i++) {
    var timestamp = new Date().toUTCString();
    var seconds = new Date().getSeconds();
    var milliseconds = new Date().getMilliseconds();
    console.log('timestamp: ' + timestamp);
    console.log('seconds elapsed: ' + seconds);
    console.log('milliseconds elapsed: ' + milliseconds);
    console.log('aquifer value: ' + rechargeRun_000018c0c8747e51ed8a454641757d12.aquifer[i].value); // all values in the aquifer array.
}

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

// D3 JSON / CSV external data loading method.
/*
// Fails due to cross-origin issues.
d3.csv('000018c0c8747e51ed8a454641757d12.csv', function(data) {
    var canvas = d3.select('body')
        .append('svg')
        .attr('width', 1024)
        .attr('height', 768);

    canvas.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('width', function(d) {
            return d.DRAINS * 5;
        })
        .attr('y', function(d, i) {
            return i * 50;
        })
        .attr('fill', 'purple');
})
*/

/*
var display = function(data) {
    var canvas = d3.select('body')
        .append('svg')
        .attr('width', 1024)
        .attr('height', 768);

    canvas.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('width', function(d) {
            return d.DRAINS * 5;
        })
        .attr('y', function(d, i) {
            return i * 50;
        })
        .attr('fill', 'purple');
};

// Fails due to invalie NaN values.
display(testDataArray);
*/

// Pure JS JSON external data loading method.
/*
// Fails due to cross orogon restrictons.
// Cross origin requests are allowd for http only.
function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '000018c0c8747e51ed8a454641757d12.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

loadJSON(function(response) {
    // Parse JSON string into object
    var rechargeRun_000018c0c8747e51ed8a454641757d12 = JSON.parse(response);
});
*/