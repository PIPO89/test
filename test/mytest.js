let request = require('supertest')
let expect = require('chai').expect;

describe('test.js', () => {
    it('GET', (done) => {
        request('http://localhost:8080')
            .get('/')
            .end((err, res) => {
                if (err) {
                    throw err;
                }
                expect(res.status).equal(200);
                done();
            });
    });
});