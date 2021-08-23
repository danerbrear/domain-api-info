process.env.NODE_ENV = 'test';

let app = require('../../server.ts');

describe('The handler application', function() {
  describe('should handle a get request', function() {
    it('should return the proper response', (done) => {
      const expected = "Get request successful";
      // @ts-ignore
      chai.request(app)
        .get('/')
        .end((err, res) => {
          res.should.equal(expected);
          done();
        })
    });
  });
});