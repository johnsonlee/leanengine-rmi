var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const API_SERVER = process.env.LC_API_SERVER || 'http://localhost:3000';

(function() {

    this.invoke = function(fn, args, options) {
        var self = this;
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (4 === this.readyState) {
                switch (this.status) {
                case 200:
                    try {
                        return (options.success || console.log)(JSON.parse(this.responseText).result);
                    } catch (e) {
                        return (options.error || console.error)(e);
                    }
                default:
                    try {
                        return (options.error || console.error)(JSON.parse(this.responseText));
                    } catch (e) {
                        return (options.error || console.error)({
                            code : this.status,
                            message : this.statusText,
                        });
                    }
                }
            }
        };
        xhr.open('POST', API_SERVER + '/1.1/functions/' + fn);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('X-AVOSCloud-Application-Id', process.env.LC_APP_ID);
        xhr.setRequestHeader('X-AVOSCloud-Application-Key', process.env.LC_APP_KEY);
        xhr.setRequestHeader('X-AVOSCloud-Master-Key', process.env.LC_APP_MASTER_KEY);
        xhr.send(JSON.stringify(args || {}));
    };

}).call(module.exports);
