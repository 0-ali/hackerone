var expect = require('chai').expect;
var assert = require('assert');
var hackerone = require('../index');
var Hackerone = new hackerone('api_example_company', 'Ke+2jinhe5jM87P95aAVOz7L3ZWrtSiERtyOkkh5tEQ=');

describe('Programs', function () {

    describe('Read a program', function () {
        it('respond with a program object', function (done) {
            Hackerone.programs.read(1337, function (err, res) {
                assert.equal(res.data.id, 1337);
                done();
            });
        });
    });

    describe('Programs ► Reporters', function () {
        describe('Query reporters for a program', function () {
            it('respond with paginated user objects', function (done) {
                var _this = this;
                Hackerone.programs.reports.query(11000, function (err, res) {
                    assert.equal(res.data[0].id, 1337);
                    done();
                });
            });
        });

    });

});
