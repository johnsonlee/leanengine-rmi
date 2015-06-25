var should = require('should');
var rmi = require('../');

describe('hello', function() {
    it('should return a hello message', function(done) {
        rmi.invoke('hello', null, {
            success : function(result) {
                result.should.be.a.Object();
                return done();
            },
            error : function(e) {
                return done(e);
            },
        });
    });
});
