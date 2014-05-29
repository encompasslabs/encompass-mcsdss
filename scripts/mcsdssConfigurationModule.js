var configurationModule = (function() {
    console.log('Loading configurationModule...');

    // Private Variables.
    var name = 'configurationModule';

    // Legend and Cell Colors.
    // baseLegendColor.
    var color0 = '#FFFFFF';
    // calculationLegendColors.
    var color1 = '#EEF2FE',
        color2 = '#BFCFE0',
        color3 = '#B3D3EC',
        color4 = '#96C4E3',
        color5 = '#6FA5C7',
        color6 = '#60A4D0',
        color7 = '#488CBF',
        color8 = '#3479B4',
        color9 = '#215F99',
        color10 = '#0B4C8F';
    // roadsLegendColors.
    var color20 = '#365902',
        color21 = '#F2CB05',
        color22 = '#CE5100',
        color23 = '#A61204',
        color24 = '#C200C3';
    // terrainLegendColors.
    var color30 = '#194025',
        color31 = '#328049',
        color32 = '#47B568',
        color33 = '#57DE80',
        color34 = '#64FF93';
    // faultLegendColors.
    var color40 = '#593418',
        color41 = '#783B0E',
        color42 = '#C26017',
        color43 = '#EF7D2F',
        color44 = '#FFBB7C';
    // transLegendColors.
    var color50 = '#391C40',
        color51 = '#744380',
        color52 = '#A56BB5',
        color53 = '#CD93DE',
        color54 = '#F1BBFF';
    // useLegendColors.
    var color60 = '#590705',
        color61 = '#781C19',
        color62 = '#C24C48',
        color63 = '#EF8883',
        color64 = '#FFB6B3';
    // watertempLegendColors.
    var color70 = '#092840',
        color71 = '#245C80',
        color72 = '#4D91B5',
        color73 = '#80BFDE',
        color74 = '#BAEBFF';
    // basaltThicknessLegendColors.
    var color80 = '#374038',
        color81 = '#59806E',
        color82 = '#58B593',
        color83 = '#40DEB4',
        color84 = '#13FFCA';

    // Color arrays used by various components.
    var baseLegendColor = [color0];
    var calculationLegendColors = [color1, color2, color3, color4, color5, color6, color7, color8, color9, color10];
    var roadsLegendColors = [color20, color22];
    var terrainLegendColors = [color30, color32, color33, color34];
    var faultLegendColors = [color40, color42, color43, color44];
    var transLegendColors = [color50, color52, color53, color54];
    var useLegendColors = [color60, color62, color63, color64];
    var watertempLegendColors = [color70, color72, color73, color74];
    var basaltThicknessLegendColors = [color80, color82, color83, color84];

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
    config.color = calculationLegendColors;
    config.opacity = 1;
    config.makeDraggable = ['settingsView', 'legendView', 'exportView', 'chartView'];
    config.exportUrl = ['http://dnoll.com/thesis/new/export/'];

    // Legend configuration.
    var layerFill = [{
        name: 'roads',
        colors: roadsLegendColors,
        opacity: [1, 1]
    }, {
        name: 'terrain',
        colors: terrainLegendColors,
        opacity: [1, 1, 1, 1]
    }, {
        name: 'fault',
        colors: faultLegendColors,
        opacity: [1, 1, 1, 1]
    }, {
        name: 'trans',
        colors: transLegendColors,
        opacity: [1, 1, 1, 1]
    }, {
        name: 'use',
        colors: useLegendColors,
        opacity: [1, 1, 1, 1]
    }, {
        name: 'watertemp',
        colors: watertempLegendColors,
        opacity: [1, 1, 1, 1]
    }, {
        name: 'bsltthck',
        colors: basaltThicknessLegendColors,
        opacity: [1, 1, 1, 1]
    }, {
        name: 'BASE',
        colors: baseLegendColor,
        opacity: [1]
    }];

    // Private Methods.
    var testMethod = function() {
        console.log('You called the ' + name + '.testMethod()');
    };

    console.log('- configurationModule loaded.');

    // Public Variables and Methods.
    return {
        config: config,
        layerFill: layerFill,
        testMethod: testMethod
    };
})();