var expect = require('chai').expect;
var assert = require('assert');
var hackerone = require('../index');
var Hackerone = new hackerone('api_example_company', 'Ke+2jinhe5jM87P95aAVOz7L3ZWrtSiERtyOkkh5tEQ=');

describe('Programs', function () {

    describe('Me ► Programs', function () {
        describe('Query your programs', function () {
            it('respond without any error', function (done) {
                Hackerone.me.programs.query({
                    size: 5
                }, function (err, res) {
                    assert.equal(typeof res.data, 'object');
                    done();
                });
            });
        });
    });

});