
// # pantone

var request     = require('request')
  , cheerio     = require('cheerio')
  , querystring = require('querystring')
  , _           = require('underscore')

// Optiman's query url
var url = 'http://www.netfront.fr/Services/rgb2pantone/pantone.htm' // ?r=0&g=0&b=0&rgb=000000'

// default options
var defaults = {
    r   : 0
  , g   : 0
  , b   : 0
  , rgb : ''
}

// globals to reduce callback nesting
var options, callback

// main function with callback
function pantone(_options, _callback) {

  options  = _options
  callback = _callback

  // check types
  if (typeof options !== 'object')
    return callback(new Error('pantone - `options` is not an object'))

  if (typeof callback !== 'function')
    throw new Error('pantone - `callback` is not a function')

  // if user passed defaults.hex convert it to defaults.rgb
  if ('hex' in defaults) {
    if (typeof defaults.hex === 'string') {
      defaults.rgb = defaults.hex
    }
    delete defaults.hex
  }

  // set defaults
  options = _.defaults(options, defaults)

  // prepare querystring
  var qs = querystring.stringify(options)

  // send request
  request(url + '?' + qs, sendRequest)

}

var rows = []

function sendRequest(err, res, body) {

  if (err) {
    err.message = err.message + '\nPlease visit https://github.com/teelaunch/pms-pantone-color-chart/ to report issues.'
    return callback(err)
  }

  var $ = cheerio.load(body)

  if ($('#content table').length === 0)
    return callback(new Error('pantone - color match not available for your request'))

  $('#content table tr').each(parseTable);

  // remove header row
  rows = rows.slice(2, rows.length)

  callback(null, rows)

}

function parseTable(i,tr) {
  var $   = require('cheerio')
    , $td = $(tr).find('td')
  rows.push({
      dist : $td.eq(0).text()
    , name : $td.eq(1).text()
    , r    : parseInt($td.eq(2).text(), 10)
    , g    : parseInt($td.eq(3).text(), 10)
    , b    : parseInt($td.eq(4).text(), 10)
    , hex  : $td.eq(5).text()
  })
}

module.exports = pantone
