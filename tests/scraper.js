'use strict';

var assert = require('chai').assert;
var scraper = require('../lib/scraper');

// basic test cause lazy
describe('scraper', function(){
  this.timeout(30000); // long timeout cause much servers
  it('scrapes pages of buzzfeed articles', function(d){
    scraper(function(err, links){
      assert.isNull(err);
      links.forEach(function(link){
        assert.isString(link);
      });
      d();
    });
  });
});
