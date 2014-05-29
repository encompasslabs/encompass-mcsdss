/////////////////////////////////////////////////////////////
// JSHint Options.
/* jshint devel:true, undef:true, unused:true, freeze:true, indent:4 */
// Assume a browser.
/* global clearInterval: false, clearTimeout: false, document: false, event: false, frames: false, history: false, Image: false, location: false, name: false, navigator: false, Option: false, parent: false, screen: false, setInterval: false, setTimeout: false, window: false, XMLHttpRequest: false */
// Assume developer.
/* global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
// Vars from 3rd party libs.
/* global L:false, masterGrid:false */

var monolithicModule = (function() {
    console.log('Loading monolithicModule...');

    // Private Variables.
    var name = 'monolithicModule';

    // Private Methods.
    var testMethod = function() {
        console.log('You called the ' + name + '.testMethod()');
    };

    console.log('- monolithicModule loaded.');

    // Public Variables and Methods.
    return {
        testMethod: testMethod
    };
})();