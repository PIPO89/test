//let request = require('supertest')
let expect = require('chai').expect;
let assert = require('assert');

describe('test.js', () => {
    // it('GET', (done) => {
    //     request('http://localhost:8080')
    //         .get('/')
    //         .end((err, res) => {
    //             if (err) {
    //                 throw err;
    //             }
    //             expect(res.status).equal(200);
    //             done();
    //         });
    // });
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(1));
        });
        it('should return 1 when the value is present', function () {
            assert.equal(1, [1, 2, 3].indexOf(2));
        });
    });
});