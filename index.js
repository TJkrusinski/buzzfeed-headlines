'use strict';

var scraper = require('./lib/scraper');

/**
 *  Expose `buzzfeed`
 */

module.exports = buzzfeed;

/**
 *  Buzzfeed
 *
 *  @param {Function} cb
 *  @return undefined
 *  @api public
 */

function buzzfeed(cb) {
  if (typeof cb != 'function') throw new Error('Expected callback function');
  scraper(cb);
};
