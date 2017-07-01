/*!
 * hackerone.programs.bounties.create (https://github.com/xc0d3rz/hackerone)
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
    this.post('programs/' + id + '/bounties', {
        data: {
            type: 'bounty',
            attributes: {
                amount: param.amount,
                reference: param.reference,
                title: param.title,
                recipient: param.recipient,
                currency: param.currency
            }
        }
    }, callback);
};