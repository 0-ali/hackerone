/*!
 * hackerone.reports.comments.create (https://github.com/xc0d3rz/hackerone)
 * Copyright 2016-2017 xc0d3rz(x.c0d3rz000@gmail.com)
 * Licensed under the MIT license
 */

/**
 *
 * @param id
 * @param param
 * @param callback
 */
module.exports = function (id, param, callback) {
    if (param.hasOwnProperty('message') && param.hasOwnProperty('internal')) {

        this.post('reports/' + id + '/activities', {
            data: {
                type: "activity-comment",
                attributes: {
                    message: param.message,
                    internal: param.internal
                }
            }
        }, callback);
    }
};
