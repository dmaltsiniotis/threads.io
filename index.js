var ThreadsIo = function (apikey, options) {
    'use strict';
    var https = require('https'),
        util = require('util'),
        baseoptions = {
            hostname: 'input.threads.io',
            port: 443,
            path: '/v1/',
            method: 'POST',
            auth: apikey + ':' + ''
        },
        dontsend = options.dontsend;

    function sendRequest(apimethod, data, callback) {
        if (!dontsend) {
            var options = util._extend({}, baseoptions),
                postdata = JSON.stringify(data),
                request;
            options.path += apimethod;
            options.headers = {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(postdata)
            };
            request = https.request(options, function (response) {
                response.setEncoding('utf8');
                response.on('data', function (apiresult) {
                    if (response.statusCode === 200) {
                        apiresult = JSON.parse(apiresult);
                        if (apiresult.success === true) {
                            callback(null, apiresult);
                        } else {
                            callback(apiresult);
                        }
                    } else {
                        callback(apiresult);
                    }
                });
            });

            request.on('error', function (error) {
                callback(error);
            });

            request.write(postdata);
            request.end();
        } else {
            callback(null, true);
        }
    }

    this.identify = function (params, callback) {
        if (params.userid) {
            var identifyparams = {
                timestamp: new Date().toISOString(),
                userId: params.userid,
                traits: params.traits
            };
            sendRequest('identify', identifyparams, function (apierror, result) {
                if (callback !== undefined) {
                    callback(apierror, result);
                }
            });
        } else {
            if (callback !== undefined) {
                callback('No userid specificed for identify to threads.');
            }
        }
    };

    this.track = function (params, callback) {
        if (params.userid && params.event) {
            var trackparams = {
                timestamp: new Date().toISOString(),
                userId: params.userid,
                event: params.event,
                properties: params.properties
            };
            sendRequest('track', trackparams, function (apierror, result) {
                if (callback !== undefined) {
                    callback(apierror, result);
                }
            });
        } else {
            if (callback !== undefined) {
                callback('No userid or event specificed for track to threads.');
            }
        }
    };

    this.page = function (params, callback) {
        if (params.userid && params.name) {
            var trackparams = {
                timestamp: new Date().toISOString(),
                userId: params.userid,
                eventKey: config.threadsio.key,
                name: params.name,
                properties: params.properties
            };
            sendRequest('page', trackparams, function (apierror, result) {
                if (callback !== undefined) {
                    callback(apierror, result);
                }
            });
        } else {
            if (callback !== undefined) {
                callback('No userid or name specificed for record page view to threads.');
            }
        }
    };

    this.remove = function (params, callback) {
        if (params.userid) {
            var removeparams = {
                timestamp: new Date().toISOString(),
                userId: params.userid
            };
            sendRequest('remove', removeparams, function (apierror, result) {
                if (callback !== undefined) {
                    callback(apierror, result);
                }
            });
        } else {
            if (callback !== undefined) {
                callback('No userid specificed for remove to threads.');
            }
        }
    };
};

module.exports = function (apikey, options) {
    if (options === undefined) {
        options = {};
    }
    return new ThreadsIo(apikey, options);
};