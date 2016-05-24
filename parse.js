var trumpet = require('trumpet')
var fs = require('fs')
var concat = require('concat-stream')
var qm = require('quotemeta')
var re = RegExp(qm('[[Kategoria:Biografi shqiptarësh]]'), 'i')

var tr = trumpet()
var ctitle = null
tr.selectAll('page title', function (elem) {
  elem.createReadStream()
    .pipe(concat({ encoding: 'string' }, function (body) {
      ctitle = body
    }))
})
tr.selectAll('page text', function (elem) {
  var title = ctitle
  if (/^(MediaWiki|Wikipedia):/.test(title)) return
  elem.createReadStream()
    .pipe(concat({ encoding: 'string' }, function (body) {
      if (re.test(body)) {
        console.log(title)
      }
    }))
})
fs.createReadStream('articles.xml').pipe(tr)
