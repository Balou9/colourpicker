var css_colors = require('css-color-names')
var hex2rgbtransformer = {'0' : 0, '1': 1, '2': 2, '3': 3, '4': 4,
'5': 5, '6': 6, '7': 7, '8': 8, '9': 9, 'a': 10, 'b': 11, 'c': 12,
'd': 13, 'e': 14, 'f': 14}

function random (arr) {
  return arr[ Math.floor(Math.random() * arr.length) ]
}

function dot (a,b) {
  var len = Math.max(a.length, b.length)
  var sum = 0
  for (var i = 0; i < len; i++) sum += (a[i] || 0) * (b[i] || 0)
  return sum
}

function hex2rgb (hex) {
  var rgb = hex.slice(1).match(/.{2}|.{1,2}/g)
  return rgb
}


/*
  opts: allow colors to be returned as rgb instead of hex
  if opts looks like { rgb: true } return color as rgb
*/
function randomColor (opts) {
  return random(Object.values(css_colors))
}

/*
  task: convert hexstring to rgb object { r: 75, g: 67, b: 255 }
  'ffffff' -> { r: 255, g: 255, b: 255 }
*/

/* '#ffffff'
  + split into duplets -< [ 'ff', 'ff', 'ff' ]
  + setup a translation object: { '0': 0, '1': 1, ..., 'f': 15 }
  + dotproduct: dot(a, b) -> scalar: hexadecimal byte 'ff' tp decimal:
    = 16 * 15 + 1 * 15 = 255
*/

module.exports = randomColor

var opt = randomColor()
console.log(opt)
console.log(hex2rgb(opt))
// console.log(randomColor({rgb: true}))
