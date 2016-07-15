(function (window) {
    'use strict';

    if(!('elSearch' in window.location)) {
        window.location.elSearch = function () {
            var queryParams = {};
            var pairs = window.location.search.replace('?', '').split('&');
            pairs.map(function (pair) {
                var firstEqualsIndex = pair.indexOf('=');
                return pair.replace(/=.+/g, function (match, offset) {
                    if (offset === firstEqualsIndex) {
                        return '=' + encodeURIComponent(match.substr(1));
                    }
                    return match;
                });
            }).forEach(function (pair) {
                var params = pair.split('=');
                queryParams[params[0]] = decodeURIComponent(params[1]);
            });
            return queryParams;
        };
    }
}(this));
