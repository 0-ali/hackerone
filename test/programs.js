var expect = require('chai').expect;
var assert = require('assert');
var hackerone = require('../index');
var Hackerone = new hackerone('api_example_company', 'Ke+2jinhe5jM87P95aAVOz7L3ZWrtSiERtyOkkh5tEQ=');

describe('Programs', function () {

    describe('Read a program', function () {
        it('respond with a program object', function (done) {
            var _this = this;
            Hackerone.programs.read(1337, function (err, res) {
                if (err.errors[0].status == 403) {
                    _this.skip();
                } else {
                    assert.equal(res.data.id, 1337);
                }
                done();
            });
        });
    });

    describe('Programs ► Reporters', function () {
        describe('Query reporters for a program', function () {
            it('respond with paginated user objects', function (done) {
                var _this = this;
                Hackerone.programs.reporters.query(11000, function (err, res) {
                    assert.equal(typeof res.data, 'object');
                    done();
                });
            });
        });

    });

    describe('Programs ► Bounties', function () {
        describe('Create a bounty for a program', function () {
            it('respond with a bounty object', function (done) {
                var _this = this;
                Hackerone.programs.bounties.create(11000, {
                    amount: 100,
                    reference: 'JIRA1239',
                    title: 'Reflected XSS on marketing.example.com',
                    recipient: 'hacker@hackerone.com',
                    currency: 'USD'
                }, function (err, res) {
                    if (err.errors[0].status == 403) {
                        _this.skip();
                    } else {
                        assert.equal(typeof res.data, 'object');
                    }
                    done();
                });
            });
        });

    });

});
