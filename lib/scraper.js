'use strict';

var jsdom = require('jsdom');
var document = jsdom.jsdom(undefined, {
  virtualConsole: jsdom.createVirtualConsole().sendTo(console)
});

var basePages = [
  'http://www.buzzfeed.com/life',
  'http://www.buzzfeed.com/quizzes',
  'http://www.buzzfeed.com/omg'
  // TODO: add some more pages
];

/**
 *  Expose `scrapePage`
 */

module.exports = scrapePage;

/**
 *  Scrape a page
 *
 *  @param {Function} cb
 *  @param {Number} pages - max number of pages
 *  @param {String} links - the links accumulated thus far
 *  @return undefined
 *  @api public
 */

function scrapePage(cb, pages, links) {
  links = links || [];
  pages = pages || basePages.slice();

  var url = pages.pop();

  jsdom.env({
    url: url,
    scripts: ['http://code.jquery.com/jquery.js'],
    done: function(err, window){
      if (err) return cb(err);
      _getLinks(window, links);
      if (!pages.length) return cb(null, links);
      scrapePage(cb, pages, links);
    }
  });
};


/**
 *  Get article links from the page
 *
 *  @param {Object} window - jsdom `window` object
 *  @param {Array} links - array of headline links
 *  @api private
 */

function _getLinks (window, links) {
  var $ = window.$;

  $('a.lede__link').each(function(){
    var text = $(this).text().trim();
    if (!text) return;
    links.push(text);
  });
};
