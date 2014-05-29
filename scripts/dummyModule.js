var dummyModule = (function() {
    console.log('Loading dummyModule...');

    // Private Variables.
    var name = 'dummyModule';

    // Private Methods.
    var testMethod = function() {
        console.log('You called the ' + name + '.testMethod()');
    };

    console.log('- dummyModule loaded.');

    // Public Variables and Methods.
    return {
        testMethod: testMethod
    };
})();