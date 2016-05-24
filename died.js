var vdiqme = /vdiq\s+më\s+(?:\[*\d+\s+\w+\]*\s+)?\[*(\d{4})\]*/i
var vdekja = /(?:died|DV|ditëvdekja)\s*=\s*(?:\[*\d+\s+\w+\]*\s+)?\[*(\d{4})\]*/i
var xvdekja = /(?:died|DV|ditëvdekja)\s*=\s*{{(.+?)}}/i

module.exports = function (body) {
  var m
  m = vdiqme.exec(body)
  if (m) return m[1]
  m = vdekja.exec(body)
  if (m) return m[1]
  m = xvdekja.exec(body)
  if (m) return Math.max.apply(null, m[1].split('|').map(Number).filter(ok))
  return null
}

function ok (x) { return x && !isNaN(x) }
