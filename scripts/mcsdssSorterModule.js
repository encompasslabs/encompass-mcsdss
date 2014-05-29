var sorterModule = (function() {
    console.log('Loading sorterModule...');

    // Private Variables.
    var name = 'sorterModule';

    // Private Methods.
    var testMethod = function() {
        console.log('You called the ' + name + '.testMethod()');
    };

    var chartMaker = function() {
        var x = {};
        x.order = [];

        //data is the array of objects containing the data
        //order is an array of the field names
        x.makeTable = function(data) {
            var order = x.order;
            var i, j, len, table, field = order.length;
            table = '<table border = "1" id="resultTable"><tr>';
            for (i = 0; i < field; i++) {
                table += '<th>' + order[i] + '</th>';
            }
            table += '</tr>';

            len = data.length;
            for (i = 0; i < len; i++) {
                table += '<tr>';
                for (j = 0; j < field; j++) {
                    table += '<td>' + data[i][order[j]] + '</td>';
                }
                table += '</tr>';
            }
            table += '</table>';

            return table;
        };

        //data is an array of objects, storageField is a field name
        //in the object that will hold the value, factor is an
        //object with the same field names as the ones in data array
        //
        x.calc = function(data, storageField, factor) {
            var i, j, num, tmp, rd, total, len, field = [],
                con = [];
            for (i in factor) {
                field.push(i);
                con.push(factor[i]);
            }

            len = data.length;
            num = field.length;

            for (i = 0; i < len; i++) {
                total = 0;
                for (j = 0; j < num; j++) {
                    tmp = data[i][field[j]];
                    tmp = tmp * con[j];
                    total += tmp;
                }
                data[i][storageField] = data[i][storageField] + total;
                rd = data[i][storageField];
                rd = rd * 100;
                rd = Math.round(rd);
                rd = rd / 100;
                data[i][storageField] = rd;
            }
            data = x.sortObj(data, storageField);
            return data;
        };

        //gets an array of objects and sorts by the value of specified property
        //returns the array in order of greatest-least with property values
        //should only be used to sort numeric properties
        x.sortObj = function(arr, prop) {
            var i, tmp, /*there,*/ len, keys = {},
                valueSort = [],
                returnSort = [],
                finalSort = [];
            len = arr.length;
            for (i = 0; i < len; i++) {
                tmp = arr[i][prop];
                if (!keys[tmp]) {
                    keys[tmp] = [];
                }
                keys[tmp].push(i); //this will hold the offsets to orig. array
                if (valueSort.indexOf(tmp) == -1) {
                    valueSort.push(tmp);
                }
            }
            valueSort.sort(function(a, b) {
                return b - a;
            }); //sort the values
            len = valueSort.length;
            for (i = 0; i < len; i++) { //put indices of arr array in order
                returnSort = returnSort.concat(keys[valueSort[i]]);
            }

            len = returnSort.length;
            for (i = 0; i < len; i++) { //load them into the array
                finalSort.push(arr[returnSort[i]]);
            }
            return finalSort;
        };

        //==========================
        x.purify = function(arr, storageField) {
            var i, len = arr.length;
            for (i = 0; i < len; i++) {
                arr[i][storageField] = 0;
            }
            return arr;
        };

        //==========================
        x.init = function(key, storageField, fieldArr) {
            x.order.push(storageField);
            x.order.push(key);
            x.order = x.order.concat(fieldArr);
        };
        return x;
    };

    console.log('- sorterModule loaded.');

    // Public Variables and Methods.
    return {
        testMethod: testMethod,
        chartMaker: chartMaker
    };
})();