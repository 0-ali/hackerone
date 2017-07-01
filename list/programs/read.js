/*!
 * hackerone.programs.read (https://github.com/xc0d3rz/hackerone)
 * Copyright 2016-2017 xc0d3rz(x.c0d3rz000@gmail.com)
 * Licensed under the MIT license
 */

/**
 *
 * @param id
 * @param callback
 */
module.exports = function (id, callback) {
    this.get('programs/' + id, {}, callback);
};