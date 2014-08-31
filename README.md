## buzzfeed-headlines

Get a bunch of the most recent headlines from buzzfeed.com.

## Installation

```bash
$ npm install buzzfeed-headlines
```

## Usage

```javascript

var buzzfeed = require('buzzfeed-headlines');

buzzfeed(function(err, headlines){
  console.log(headlines);
  // an array of rediculous headlines
});
```

### `buzzfeed(cb)`

Takes on argument, a node-style callback with the second argument being an array of titles of buzzfeed posts.

## Tests

Tests run using [mocha](/visionmedia/mocha)

```bash
$ npm test
```
