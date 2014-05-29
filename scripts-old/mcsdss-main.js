console.log('scripts/mcsdss-main.js loaded...');

var _usersnapconfig = {
    apiKey: '1d4650f1-8120-4a7b-9bea-f98fae1eab20',
    valign: 'bottom',
    halign: 'right',
    tools: ["pen", "highlight", "note"],
    lang: 'en',
    commentBox: true,
    emailBox: true
};
(function () {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    //s.src = '//api.usersnap.com/usersnap.js';
    s.src = 'usersnap.js';
    var x = document.getElementsByTagName('head')[0];
    x.appendChild(s);
})();
