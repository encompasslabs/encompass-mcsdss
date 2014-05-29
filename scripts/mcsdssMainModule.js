var mainModule = (function(window) {
    console.log('Loading mainModule...');

    // Private Variables.
    var name = 'mainModule';
    var /*map,*/ grabber, slider1, slider2, sorter, slate, recorder, master;

    // Private Methods.
    var testMethod = function() {
        console.log('You called the ' + name + '.testMethod()');
    };

    // This sets up the application
    //the global variables 'config' and 'style' were set in config.js
    window.onload = function() {
        setUpMain();

        // set initial display states to hidden on components.
        document.getElementById('legendView').style.display = 'none';
        document.getElementById('settingsView').style.display = 'none';
        document.getElementById('chartView').style.display = 'none';
        document.getElementById('exportView').style.display = 'none';
    };

    //instantiates the objects needed to run the program
    var setUpMain = function() {
        //set up slate to provide status data and general info storage
        //this is actually a relic from the esri map--retained but of little use
        slate = {
            graphics_exist: "no",
            iframe: null,
            current: null,
            width: null,
            height: null
        };

        //========create the controller objects
        grabber = processModule.doMap(dataModule.masterGrid, mapModule.map, configurationModule.config, configurationModule.layerFill);
        grabber.makeButtons('radio'); //create layer toggle buttons

        //create MASTER selector for sliders
        master = slidesetModule.makeMaster("masterSet");

        //create slider sets
        slider1 = slidesetModule.balancer(configurationModule.config.set1dest, configurationModule.config.set1weight, configurationModule.config.set1, configurationModule.config.set1alias);
        slate.temp = document.getElementById(configurationModule.config.set1dest);
        //create hr between them
        slate.el = document.createElement('hr');
        slate.el.id = "divider1";
        slate.temp.appendChild(slate.el);
        //
        slider2 = slidesetModule.balancer(configurationModule.config.set2dest, configurationModule.config.set2weight, configurationModule.config.set2, configurationModule.config.set2alias);

        //now the sorter
        sorter = sorterModule.chartMaker();
        sorter.init(configurationModule.config.key, configurationModule.config.sum, configurationModule.config.sought);

        //now export
        recorder = exportModule.exporter();

        // UI Listeners.

        // TODO - Fix Reset Button!!
        //RESET
        var ref = document.getElementById('resetMapBtn');
        ref.onclick = function() {
            slate.graphics_exist = 'no';
            grabber.setVisible('BASE');
            recorder.buffer = '';
            var tar = document.getElementById('chart');
            tar.innerHTML = '<h3>No Chart Currently Exists</h3>';
            console.log('reset map clicked, slate.graphics_exist = ' + slate.graphics_exist);
        };

        //LEGEND
        ref = document.getElementById('showLegendBtn');
        ref.onclick = function() {
            var targetView = document.getElementById('legendView');
            if (targetView.style.display == 'block') {
                targetView.style.display = 'none';
            } else {
                targetView.style.display = 'block';
                adjustZ(targetView);
            }
        };
        // close button on component.
        ref = document.getElementById('legendFade');
        ref.onclick = function() {
            var k = document.getElementById('legendView');
            k.style.display = "none";
        };

        //SHOW CONTROLS
        ref = document.getElementById('mapSettingsBtn');
        ref.onclick = function() {
            var targetView = document.getElementById('settingsView');
            if (targetView.style.display == 'block') {
                targetView.style.display = 'none';
            } else {
                targetView.style.display = 'block';
                adjustZ(targetView);
            }
        };
        // close button on component.
        ref = document.getElementById('selectFade');
        ref.onclick = function() {
            document.getElementById('settingsView').style.display = 'none';
        };

        //SET UP CHART DIV
        ref = document.getElementById('chartDataBtn');
        ref.onclick = function() {
            var targetView = document.getElementById('chartView');
            if (targetView.style.display == 'block') {
                targetView.style.display = 'none';
            } else {
                targetView.style.display = 'block';
                adjustZ(targetView);
            }
        };
        // close button on component.
        ref = document.getElementById('chartFade');
        ref.onclick = function() {
            document.getElementById('chartView').style.display = 'none';
        };

        // EXPORT ACTION
        ref = document.getElementById('exportDataBtn');
        ref.onclick = function() {
            var targetView = document.getElementById('exportView');
            if (targetView.style.display == 'block') {
                targetView.style.display = 'none';
            } else {
                targetView.style.display = 'block';
                adjustZ(targetView);
            }
        };
        // close button on component.
        ref = document.getElementById('exportFade');
        ref.onclick = function() {
            document.getElementById('exportView').style.display = 'none';
        };

        //Generate Chart Button.
        ref = document.getElementById('generateChart');
        ref.onclick = function() {
            calculate();
        };

        // if indicated in config.js, make divs draggable
        // create function to make divs draggable
        var makeDrag = function(el) {

            var x = {};
            x.motion = false;
            x.init = false;
            x.xoff = 0;
            x.yoff = 0;
            x.left = 0;
            x.top = 0;
            x.el = document.getElementById(el);

            x.pos = function(e) {
                var /*par,*/ el;

                el = x.el;
                do {
                    x.left += el.offsetLeft;
                    x.top += el.offsetTop;
                    el = el.offsetParent;
                } while (el !== null);
                x.el.style.top = x.top + 'px';
                x.el.style.left = x.left + 'px';
                x.xoff = e.clientX - x.left;
                x.yoff = e.clientY - x.top;
                x.init = true;
            };

            x.el.onmousedown = function(e) {
                x.motion = true;
                adjustZ(x.el.id);
                if (!x.init) {
                    x.pos(e);
                    x.el.style.position = 'absolute';
                }
                x.xoff = e.clientX - x.left;
                x.yoff = e.clientY - x.top;
                return false;
            };

            x.el.onmousemove = function(e) {
                if (!x.motion) {
                    return false;
                }
                x.left = e.clientX - x.xoff;
                x.top = e.clientY - x.yoff;
                x.el.style.top = x.top + 'px';
                x.el.style.left = x.left + 'px';
                return false;
            };

            x.el.onmouseout = function() {
                x.motion = false;
                return false;
            };

            x.el.onmouseup = function() {
                x.motion = false;
                return false;
            };

            return x;
        };

        //if indicated in config.js, make the controllers and stick them in an array in slate
        // so the divs in the array will be draggable
        if (configurationModule.config.makeDraggable && configurationModule.config.makeDraggable.length > 0) {
            slate.drag = [];
            var i, obj, len = configurationModule.config.makeDraggable.length;
            for (i = 0; i < len; i++) {
                obj = makeDrag(configurationModule.config.makeDraggable[i]);
                slate.drag.push(obj);
            }
        }
    };

    //---------GENERAL UTILITY FUNCTIONS------------------------------

    //sets z-index of main containers to bring the one whose id is the arg to the top

    var adjustZ = function(id) {
        var set = ["chartView", "exportView", "settingsView", "legendView"];
        var ref, i, start = 1000,
            len = set.length;
        for (i = 0; i < len; i++) {
            ref = document.getElementById(set[i]);
            if (set[i] == id) {
                ref.style.zIndex = 10000;
            } else {
                ref.style.zIndex = start;
                start = (start * 1) + 100;
            }
        }
    };

    //calculates from present settings--makes chart and sets colors by rank

    var calculate = function() {
        sorter.purify(grabber.data, configurationModule.config.sum);
        grabber.setVisible('BASE');
        slate.graphics_exist = 'yes';
        //put data in original order
        grabber.data = sorter.sortObj(grabber.data, configurationModule.config.key);
        grabber.data = grabber.data.reverse();
        var prime, minor, i, out;
        prime = slider1.giveSet();
        prime = master.adjustOne(prime);
        minor = slider2.giveSet();
        minor = master.adjustTwo(minor);
        //merge into prime
        for (i in minor) {
            prime[i] = minor[i];
        }

        grabber.data = sorter.calc(grabber.data, configurationModule.config.sum, prime);

        recorder.buffer = prime;
        out = sorter.makeTable(grabber.data);
        document.getElementById('chart').innerHTML = out;
        grabber.setGradient();
    };

    var getSlateGraphicState = function() {
        return slate.graphics_exist;
    };

    console.log('- mainModule loaded.');

    // Public Variables and Methods.
    return {
        testMethod: testMethod,
        adjustZ: adjustZ,
        calculate: calculate,
        slateState: getSlateGraphicState
    };
})(window);