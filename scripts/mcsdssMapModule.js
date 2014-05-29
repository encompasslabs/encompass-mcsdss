var mapModule = (function() {
    console.log('Loading mapModule...');

    // Private Variables.
    var name = 'mapModule';
    var map = L.map('map').setView([43.5, -112.5], 8);

    L.control.layers({
        'MCSDSS EAA Basemap 02': L.mapbox.tileLayer('encompasslabs.h8n2c5om').addTo(map),
        'MCSDSS EAA Basemap 01': L.mapbox.tileLayer('encompasslabs.h8n13iki'),
        'Base Map': L.mapbox.tileLayer('examples.map-zgrqqx0w'),
        'Grey Map': L.mapbox.tileLayer('dnoll.g7i1h04g')
    }, {
        'Land Use': L.mapbox.tileLayer('dnoll.nkkxzuxr'),
        'Raod Access': L.mapbox.tileLayer('dnoll.qohnz5mi'),
        'Transmission Lines': L.mapbox.tileLayer('dnoll.7xzp8pvi'),
        'Fault Zones': L.mapbox.tileLayer('dnoll.qga7zaor')
    }).addTo(map);

    var featureGroup = L.featureGroup().addTo(map);

    var drawControl = new L.Control.Draw({
        edit: {
            featureGroup: featureGroup
        }
    }).addTo(map);

    map.on('draw:created', function(e) {
        featureGroup.addLayer(e.layer);
    });

    // Private Methods.
    var testMethod = function() {
        console.log('You called the ' + name + '.testMethod()');
    };

    console.log('- mapModule loaded.');

    // Public Variables and Methods.
    return {
        map: map,
        testMethod: testMethod
    };
    // }(mapModule || {}));
})();