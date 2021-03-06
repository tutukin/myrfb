var sinon = require('sinon');

module.exports = function (options) {
    var stream = {};
    
    stream.receive = sinon.stub();
    stream.setAsyncMode = sinon.spy();
    stream.setPixelFormat = sinon.spy();
    return stream;
};