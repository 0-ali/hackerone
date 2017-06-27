/*!
 * hackerone.reports.query (https://github.com/xc0d3rz/hackerone)
 * Copyright 2016-2017 xc0d3rz(x.c0d3rz000@gmail.com)
 * Licensed under the MIT license
 */

/**
 *
 * @param query
 * @param callback
 */
module.exports = function (query, callback) {
    var param = {filter: {}};
    query = query || {};
    for (var o in query) {
        param.filter[o] = [query[o]];
    }
    this.get('reports', param, callback);
};
