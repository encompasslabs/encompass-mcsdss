console.log('scripts/usersnap.js loaded...');

/* global document, _usersnapconfig */
(function (_usersnapconfig) {
    console.log('pre-method');
    console.log('typeof _usersnapconfig: ' + typeof(_usersnapconfig));
    console.log('_usersnapconfig: ' + _usersnapconfig.apiKey);
    console.log('_usersnapconfig: ' + _usersnapconfig.lang);

    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;

    var lM = {
        'en': 'en',
        'fr': 'fr',
        'es': 'es',
        'pl': 'pl',
        'fa': 'fa',
        'de': 'de-formal',
        'de-formal': 'de-formal',
        'de-informal': 'de-informal',
        'it': 'it',
        'jp': 'jp',
        'ko': 'ko',
        'hu': 'hu',
        'da': 'da',
        'sk': 'sk',
        'cz': 'cz',
        'no': 'no',
        'nl': 'nl',
        'fi': 'fi',
        'pt': 'pt',
        'tr': 'tr',
        'ru': 'ru'
    };

    if ((typeof (_usersnapconfig) !== 'undefined') && (typeof (_usersnapconfig.lang) !== 'undefined')) {
        if (typeof (lM[_usersnapconfig.lang]) === 'undefined') {
            s.src = '//d3mvnvhjmkxpjz.cloudfront.net/js/5300/usersnap-5300-en.js';
        } else {
            s.src = '//d3mvnvhjmkxpjz.cloudfront.net/js/5300/usersnap-5300-' + lM[_usersnapconfig.lang] + '.js';
        }
    } else {
        s.src = '//d3mvnvhjmkxpjz.cloudfront.net/js/5300/usersnap-5300-en.js';
    }

    var x = document.getElementsByTagName('head')[0];
    x.appendChild(s);

    console.log('post-method');
    console.log('typeof _usersnapconfig: ' + typeof(_usersnapconfig));
    console.log('_usersnapconfig: ' + _usersnapconfig.apiKey);
    console.log('_usersnapconfig: ' + _usersnapconfig.lang);
}(_usersnapconfig));
