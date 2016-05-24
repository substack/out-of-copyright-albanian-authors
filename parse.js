var trumpet = require('trumpet')
var fs = require('fs')
var concat = require('concat-stream')
var qm = require('quotemeta')
var re = RegExp(qm('[[Kategoria:Biografi shqiptarësh]]'), 'i')

var tr = trumpet()
tr.selectAll('page', function (elem) {
  var t = trumpet()
  var pending = 2, title = null, src = null
  t.select('title').createReadStream()
    .pipe(concat({ encoding: 'string' }, function (body) {
      title = body
      if (--pending === 0) done()
    }))
  t.select('text').createReadStream()
    .pipe(concat({ encoding: 'string' }, function (body) {
      if (re.test(body)) src = body
      if (--pending === 0) done()
    }))
  elem.createReadStream().pipe(t)

  function done () {
    if (src) {
      console.log(title)
    }
  }
})
fs.createReadStream('articles.xml').pipe(tr)
