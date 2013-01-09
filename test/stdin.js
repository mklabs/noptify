var noptify = require('..');
var assert = require('assert');


describe('Stdin mixin', function() {

  it('provides the helper method to read from stdin', function() {
    var program = noptify();
    assert.ok(typeof program.stdin === 'function', 'stdin defined');
  });

  it('is invoked only when .parse() is called', function(done) {
    var program = noptify(['', '']);
    var str = 'testing out stdin helper';
    program.stdin(function(err, res) {
      assert.equal(res, str);
      done();
    });

    program.parse();

    process.nextTick(function() {
      process.stdin.emit('data', str);
      process.stdin.emit('end');
    });
  });

});
