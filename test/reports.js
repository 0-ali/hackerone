var expect = require('chai').expect;
var assert = require('assert');
var hackerone = require('../index');
var Hackerone = new hackerone('api_example_company', 'Ke+2jinhe5jM87P95aAVOz7L3ZWrtSiERtyOkkh5tEQ=');

describe('Reports', function () {
    describe('Read', function () {
        it('returns report id', function (done) {
            Hackerone.reports.read(129329, function (err, res) {
                assert.equal(res.data.id, 129329);
                done();
            });
        });
    });
    describe('Query', function () {
        it('returns no error', function (done) {
            Hackerone.reports.query({
                program: 'john_doe_example_company'
            }, function (err, res) {
                assert.equal(err, null);
                done();
            });
        });
    });

    describe('Comments', function () {
        describe('Create', function () {
            it('returns no error', function (done) {
                Hackerone.reports.comments.create(129329, {
                    message: 'A fix has been deployed. Can you retest, please?',
                    internal: false
                }, function (err, res) {
                    assert.equal(err, null);
                    done();
                });

            });
        });
    });

    describe('Assignee', function () {
        describe('Update', function () {
            it('returns no error', function (done) {
                Hackerone.reports.assignee.update(129329, {
                    id: 1337,
                    type: 'user',
                    message: '@member Please check this out!'
                }, function (err, res) {
                    assert.equal(err, null);
                    done();
                });

            });
        });
    });

});
