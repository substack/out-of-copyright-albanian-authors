var vdiqme = /vdiq\s+më\s+(?:\[*\d+\s+\w+\]*\s+)?\[*(\d{4})\]*/i
var vdekja = /(?:died|DV|ditëvdekja)\s*=\s*(?:\[*\d+\s+\w+\]*\s+)?\[*(\d{4})\]*/i
var xvdekja = /(?:died|DV|ditëvdekja)\s*=\s*{{(.+?)}}/i
var yrange = /\b\[*(\d{3,4})\]*\s+[-–]\s+\[*(\d{3,4})\]*\b/

module.exports = function (body) {
  var m
  m = vdiqme.exec(body)
  if (m) return m[1]
  m = vdekja.exec(body)
  if (m) return m[1]
  m = xvdekja.exec(body)
  if (m) {
    var parts = m[1].split('|').map(Number).filter(ok)
    return Math.max.apply(null, parts)
  }
  m = yrange.exec(body)
  if (m) {
    var b = Number(m[1]), d = Number(m[2])
    if (d > b && d - b > 20) return d
  }
  return null
}

function ok (x) { return x && !isNaN(x) }
