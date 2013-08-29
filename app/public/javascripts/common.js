window.testing = {
    getFromQueryString: function(q) {
        /// <summary>Converts the params of a URL into an object</summary>

        // Remove everything before the ?
        q = q.substr(q.indexOf('?') + 1);

        // Split everything on &
        q = q.split('&');

        // Split all items on =
        var params = { };
        var i;
        for (i = 0; i < q.length; i++) {
            var param = q[i].split('=');

            params[decodeURIComponent(param[0])] = decodeURIComponent(param[1]);
        }
        return params;
    },
    freewheelConfig: {
        serverUrl: 'http://5c264.v.fwmrm.net',
        networkId: 377444
    }
};

var ready = false;



var my = function () {
    if (!ready && window.$ && typeof(player) != 'undefined' ) {
        window.$('body').append('<div id="log"></div>');
        ready = true;
    }
    if (ready) {
        window.$('#log').append('<p>' + player && player.get && player.get("STATUS") + '</p>');    
    }
    
    //setTimeout(my, 1000);
};
my();
