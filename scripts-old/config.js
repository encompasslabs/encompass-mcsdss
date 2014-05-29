console.log('scripts/config.js loaded...');
/*Configuration for all the custom javascript objects*/

// Legend and Cell Colors.
var color0 = '#CCCCCC';
var color1 = '#EEF2FE';
var color2 = '#BFCFE0';
var color3 = '#B3D3EC';
var color4 = '#96C4E3';
var color5 = '#6FA5C7';
var color6 = '#60A4D0';
var color7 = '#488CBF';
var color8 = '#3479B4';
var color9 = '#215F99';
var color10 = '#0B4C8F';
var color11 = '#FF0000';
var color12 = '#00FF00';
var color13 = '#0000FF';
var color14 = '#FF00FF';

// Color arrays used by various components.
var calculationColors = [color1, color2, color3, color4, color5, color6, color7, color8, color9, color10];
var roadsLegendColors = [color1, color10];
var terrainLegendColors = [color11, color12, color13, color14];
var faultLegendColors = [color11, color12, color13, color14];
var transLegendColors = [color11, color12, color13, color14];
var useLegendColors = [color11, color12, color13, color14];
var watertempLegendColors = [color11, color12, color13, color14];
var bsltthckLegendColors = [color11, color12, color13, color14];
var baseLegendColor = [color0];

// Heatseeker configuration.
var config = {};

config.sought = ['roads', 'terrain', 'fault', 'trans', 'use', 'watertemp', 'bsltthck'];
config.alias = ['Road Access', 'Terrain Slope', 'Faulting', 'Transmission', 'Land Use', '200F Isotherm Depth', 'Basalt Thickness'];
config.key = 'OBJECTID';

config.set1 = ['roads', 'trans', 'use', 'terrain'];
config.set1weight = 100;
config.set1dest = "slide1Div";
config.set1alias = ['roads', 'trans', 'use', 'terrain'];

config.set2weight = 100;
config.set2 = ['fault', 'watertemp', 'bsltthck'];
config.set2dest = "slide2Div";
config.set2alias = ['fault', 'watertemp', 'bsltthck'];

config.sum = 'Weight';
//config.color = ['#EEF2FE', '#BFCFE0', '#B3D3EC', '#96C4E3', '#6FA5C7', '#60A4D0', '#488CBF', '#3479B4', '#215F99', '#0B4C8F'];
config.color = calculationColors;
config.opacity = 1;
config.makeDraggable = ['dashB', 'legendWrapper', 'export', 'chartCont'];
config.exportUrl = ['http://dnoll.com/thesis/new/export/'];

var layerFill = [{
  name: 'roads',
  //colors: ['#EEF2FE', '#0B4C8F'],
  colors: roadsLegendColors,
  opacity: [1, 1]
},

{
  name: 'terrain',
  //colors: ['#FF0000', '#00FF00', '#0000FF', '#FF00FF'],
  colors: terrainLegendColors,
  opacity: [1, 1, 1, 1]
},

{
  name: 'fault',
  //colors: ['#FF0000', '#00FF00', '#0000FF', '#FF00FF'],
  colors: faultLegendColors,
  opacity: [1, 1, 1, 1]
},

{
  name: 'trans',
  //colors: ['#FF0000', '#00FF00', '#0000FF', '#FF00FF'],
  colors: transLegendColors,
  opacity: [1, 1, 1, 1]
},

{
  name: 'use',
  //colors: ['#FF0000', '#00FF00', '#0000FF', '#FF00FF'],
  colors: useLegendColors,
  opacity: [1, 1, 1, 1]
},

{
  name: 'watertemp',
  //colors: ['#FF0000', '#00FF00', '#0000FF', '#FF00FF'],
  colors: watertempLegendColors,
  opacity: [1, 1, 1, 1]
},

{
  name: 'bsltthck',
  //colors: ['#FF0000', '#00FF00', '#0000FF', '#FF00FF'],
  colors: bsltthckLegendColors,
  opacity: [1, 1, 1, 1]
},

{
  name: 'BASE',
  //colors: ['#CCCCCC'],
  colors: baseLegendColor,
  opacity: [1]
}];
