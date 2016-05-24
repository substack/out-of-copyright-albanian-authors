var trumpet = require('trumpet')
var fs = require('fs')
var concat = require('concat-stream')
var qm = require('quotemeta')
var category = RegExp(qm('[[Kategoria:Biografi shqiptarësh]]'), 'i')
var died = require('./died.js')
var thisYear = new Date().getFullYear()

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
      if (category.test(body)) {
        var d = died(body)
        if (d && (thisYear - d) > 70) console.log(title + ',' + d)
      }
    }))
})
fs.createReadStream('articles.xml').pipe(tr)
