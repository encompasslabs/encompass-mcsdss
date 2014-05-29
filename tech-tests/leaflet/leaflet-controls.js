console.log('leaflet-controls.js loaded.');
/*
 * Layer Groups & Layer Controls
 */

/*
 * Layer Groups
 *
 * Lets suppose you have a bunch of layers you want to combine into a group to handle them as one in your code:
 */
var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
    denver = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
    aurora = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
    golden = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');

// Instead of adding them directly to the map, you can do the following, using the LayerGroup class:
var cities = L.layerGroup([littleton, denver, aurora, golden]);

/*
 * Layer Controls
 *
 * There are two types of layers — base layers that are mutually exclusive (only one can be visible on your map),
 * e.g. tile layers, and overlays — all the other stuff you put over the base layers.
 * In this example, we want to have two base layers (minimal and night-style base map) to switch between,
 * and two overlays to switch on and off — a pink motorways overlay and city markers (those we created earlier).
 * Lets create those layers and add the default ones to the map.
 */
var cloudmadeUrl = 'http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/{styleId}/256/{z}/{x}/{y}.png',
    cloudmadeAttribution = 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade';

var minimal = L.tileLayer(cloudmadeUrl, {
    styleId: 22677,
    attribution: cloudmadeAttribution
}),
    midnight = L.tileLayer(cloudmadeUrl, {
        styleId: 999,
        attribution: cloudmadeAttribution
    }),
    motorways = L.tileLayer(cloudmadeUrl, {
        styleId: 46561,
        attribution: cloudmadeAttribution
    });

var map = L.map('map', {
    center: new L.LatLng(39.73, -104.99),
    zoom: 10,
    layers: [minimal, motorways, cities]
});

/*
 * Next, we’ll create two objects. One will contain our base layers and one will contain our overlays.
 * These are just simple objects with key/value pairs. The key is what sets the text for the layer in the control (e.g. “Night View”).
 * The corresponding value is a reference to the layer (e.g. midnight).
 */
var baseMaps = {
    "Minimal": minimal,
    "Night View": midnight
};

var overlayMaps = {
    "Motorways": motorways,
    "Cities": cities
};

/*
 * Now, all that’s left to do is to create a Layers Control and add it to the map.
 * The first argument passed when creating the layers control is the base layers object.
 * The second argument is the overlays object. Both arguments are optional — for example,
 * you can pass just a base layers object by ommiting the second argument,
 * or just an overlays objects by passing null as the first argument.
 *
 * Note that we added minimal, motorways and cities layers to the map but didn’t add midnight.
 * The layers control is smart enough to detect what layers we’ve already added and have corresponding checkboxes and radioboxes set.
 *
 * Also note that when using multiple base layers, only one of them should be added to the map at instantiation,
 * but all of them should be present in the base layers object when creating the layers control.
 */
L.control.layers(baseMaps, overlayMaps).addTo(map);