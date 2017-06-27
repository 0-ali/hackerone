/*!
 * hackerone (https://github.com/xc0d3rz/hackerone)
 * Copyright 2016-2017 xc0d3rz(x.c0d3rz000@gmail.com)
 * Licensed under the MIT license
 */
(function () {

    /**
     *
     * @param user
     * @param password
     * @constructor
     */
    function Hackerone(user, password) {
        this.authentication(user, password);
        this.reports = this.list('reports');
    }

    /**
     *
     * @type {string}
     */
    Hackerone.prototype.endpoint = 'https://api.hackerone.com/v1/';

    /**
     *
     * @param user
     * @param password
     */
    Hackerone.prototype.authentication = function (user, password) {
        this._authentication = {
            user: user,
            password: password
        };
    };

    /**
     *
     * @param obj
     * @param prefix
     * @returns {string}
     * @copyright https://stackoverflow.com/a/1714899
     */
    Hackerone.prototype.serialize = function (obj, prefix) {
        var str = [], p;
        for (p in obj) {
            if (obj.hasOwnProperty(p)) {

                var k = prefix ? prefix + '[' + ((isNaN(p)) ? p : '') + ']' : p, v = obj[p];
                str.push((v !== null && typeof v === 'object') ?
                    this.serialize(v, k) :
                encodeURIComponent(k) + '=' + encodeURIComponent(v));
            }
        }
        return str.join('&');
    };

    /**
     *
     * @param path
     * @param param
     * @returns {string}
     */
    Hackerone.prototype.url = function (path, param) {
        return this.endpoint + path + '?' + this.serialize(param || {});
    };

    /**
     *
     * @param path
     * @param param
     * @param callback
     */
    Hackerone.prototype.get = function (path, param, callback) {
        var _this = this, request = require('request');
        request(
            {
                url: _this.url(path, param),
                auth: _this._authentication,
                json: true
            }, function (err, response, body) {
                if (err && typeof callback == 'function') callback(err, null);
                if (body && 'errors' in body && typeof callback == 'function') {
                    callback(body, null);
                } else {
                    callback(null, body);
                }
            }
        );
    };

    /**
     *
     * @param path
     * @param param
     * @param callback
     */
    Hackerone.prototype.post = function (path, param, callback) {
        var _this = this, request = require('request');
        request.post(
            {
                url: _this.url(path, {}),
                auth: _this._authentication,
                form: param,
                json: true
            }, function (err, response, body) {
                if (err && typeof callback == 'function') callback(err, null);
                if (body && 'errors' in body && typeof callback == 'function') {
                    callback(body, null);
                } else {
                    callback(null, body);
                }
            }
        );
    };

    /**
     *
     * @param path
     * @param param
     * @param callback
     */
    Hackerone.prototype.put = function (path, param, callback) {
        var _this = this, request = require('request');
        request.put(
            {
                url: _this.url(path, {}),
                auth: _this._authentication,
                form: param,
                json: true
            }, function (err, response, body) {
                if (err && typeof callback == 'function') callback(err, null);
                if (body && 'errors' in body && typeof callback == 'function') {
                    callback(body, null);
                } else {
                    callback(null, body);
                }
            }
        );
    };

    /**
     *
     * @param t
     * @returns {*}
     */
    Hackerone.prototype.list = function (t) {
        var fs = require('fs'),
            path = require('path'),
            _list = {},
            _this = this;
        fs.readdirSync(path.join(__dirname, 'list', t)).forEach(function (file) {
            if (fs.statSync(path.join(__dirname, 'list', t, file)).isDirectory()) {
                var group = file;
                _list[group] = {};
                fs.readdirSync(path.join(__dirname, 'list', t, file)).forEach(function (_file) {
                    var name = _file.replace(new RegExp(path.extname(_file), 'g'), '');
                    var controller = require(path.join(__dirname, 'list', t, file, _file));
                    if (typeof controller == 'function') {
                        _list[group][name] = function () {
                            controller.apply(_this, arguments);
                        };
                    }
                });
            } else {
                var name = file.replace(new RegExp(path.extname(file), 'g'), '');
                var controller = require(path.join(__dirname, 'list', t, file));
                if (typeof controller == 'function') {
                    _list[name] = function () {
                        controller.apply(_this, arguments);
                    };
                }
            }
        });

        return _list;
    };

    module.exports = Hackerone;
}.call(module.exports));