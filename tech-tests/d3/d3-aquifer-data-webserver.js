console.log('d3-aquifer-data-webserver.js loaded.');

// Source Data Vars.
//var dataDirectory = 'OriginalRuns/';
var dataDirectory = 'ModifiedRechargeRuns/';
var dataType = '.csv'; // Can be of types- '.json'; or '.csv';
//var targetFileName = '000018c0c8747e51ed8a454641757d12';
//var targetFileName = '00098f955aceb3833d19c83d4b498739';
var targetFileName = '000b8af36f663b77a1fa7fe3e63ac2aa';

var dataSource = dataDirectory + targetFileName + dataType;
console.log('Loading data from file: ' + dataSource);

// Filtering Vars.
var dataLabelFilter = 'DRAINS';
/*
 * Options:
 *
 * DRAINS
 * DRYCELLS
 * WELLS
 * HEAD
 * RECHARGE
 * uniform pumping modification [conductivity zone #][ALLTIMES]     // (where # is 1-11)
 */
var dataCalculationFilter = '';
/*
 * Options:
 *
 * ''   // Empty Set
 * VALUE
 * SUM
 * MIN
 * TIME_INTEGRAL
 * TIME_WEIGHTED_AVG
 * AVG_RATE
 */
var dataTimeFilter = 'ALLTIMES';
// NOTE: This filters based on a !== comparison.
/*
 * Options:
 *
 * ''                   // Empty Set
 * Numeric Values (ex. '1 1', '1 2')
 * ALLTIMES
 * STRESS_PERIOD_#      // (where # is 1 to 120)
 * year #               // (where # is 1 to 10)
 */
var dataLocationFilter = 'Barton Springs';
/*
 * Options:
 *
 * Barton Springs
 * Cold Springs
 * ALLCELLS
 * conductivity zone #  // (where # is 1 - 11)
 */
var dataValueFilter = '';
/*
 * Options:
 *
 * Numeric Range from 0 - 2000000000 (including up to 6 decimal places)
 */
var dataUnitsFilter = '';
/*
 * Options:
 *
 * ''   // Empty Set
 * cfs
 * cfs (time step average)
 * cfs (monthly minimum)
 * cfs (monthly average)
 * feet (monthly average)
 * feet (yearly average)
 * ft3 (monthly total)
 * ft3 (total for entire model)
 * dry cell days in month
 * dry cell days (for 10 year period)
 * number of dry cells at beginning of month
 */

var filterConfiguration = 'dataLabel: ' + dataLabelFilter + ', ' + 'Calculation: ' + dataCalculationFilter + ', ' + 'Time: ' + dataTimeFilter + ', ' + 'Location: ' + dataLocationFilter + ', ' + 'Value: ' + dataValueFilter + ', ' + 'Units: ' + dataUnitsFilter;
console.log('Currently filtering by the following... ');
console.log(filterConfiguration);

// D3 JSON / CSV external data loading method.
d3.csv(dataSource, function(data) {

    // Filter the csv data for desired attributes.
    var filteredData = data.filter(function(d) {
        if (d.dataLabel === dataLabelFilter && d.location === dataLocationFilter) {
            return d;
        }
    });
    //console.log(filteredData); // 3121 Objects returned.

    // Canvas element dimensions.
    var canvasWidth = 1150;
    var canvasHeight = filteredData.length * 30 + 50;
    var scalingConstantLower = 0;
    var scalingConstantUpper = 200;
    /*
     * scalingConstantUpper Options:
     *
     * 2000000000       //for all data.
     * 200              // Barton Springs.
     * 15               // Cold Springs.
     * 600000000        // ALLCELLS
     * 1400             // HEAD + conductivity zone #
     */

    var numberTicks = 20;

    var widthScale = d3.scale.linear()
        .domain([scalingConstantLower, scalingConstantUpper])
        .range([0, canvasWidth]);

    var color = d3.scale.linear()
        .domain([scalingConstantLower, scalingConstantUpper])
        .range(['#0000FF', '#FF0000']);

    var axis = d3.svg.axis()
        .ticks(numberTicks)
        .scale(widthScale);

    var canvas = d3.select('body')
        .append('svg')
        .attr('width', canvasWidth)
        .attr('height', canvasHeight)
        .append('g')
        .attr('transform', 'translate(20, 60)');

    canvas.selectAll('rect')
    //.data(data)
    .data(filteredData)
        .enter()
        .append('rect')
        .attr('width', function(d) {
            return widthScale(d.value);
        })
    //.attr('width', 800)
    .attr('height', 20)
        .attr('y', function(d, i) {
            return i * 30;
        })
        .attr('fill', function(d) {
            return color(d.value);
        });

    canvas.selectAll('text')
    //.data(data)
    .data(filteredData)
        .enter()
        .append('text')
        .attr('fill', 'white')
        .attr('y', function(d, i) {
            return i * 30 + 15;
        })
        .text(function(d) {
            var textDisplay = '';
            textDisplay = d.dataLabel + ", " + d.location + ", timestamp: " + d.time + ', value: ' + d.value + ' in ' + d.units;
            return textDisplay;
        })

    canvas.append('g')
        .attr('transform', 'translate(0, -30)')
        .attr('fill', '#FFCC00')
    //.attr('stroke', 'gold') // looks awful on text.
    .call(axis);
})

// Reference: Pure JS JSON external data loading method.
// Requires cross origin permission (server side only).
/*
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