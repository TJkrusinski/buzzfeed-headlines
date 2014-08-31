'use strict';

var assert = require('chai').assert;
var buzzfeed = require('..');

// basic test cause lazy
describe('scraper', function(){
  this.timeout(20000); // long timeout cause much servers
  it('scrapes pages of buzzfeed articles', function(d){
    buzzfeed(function(err, links){
      assert.isNull(err);
      links.forEach(function(link){
        assert.isString(link);
      });
      d();
    });
  });
});
