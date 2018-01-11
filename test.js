var tape = require('tape')
var randomColor = require('./index.js')
var css_colors = require('css-color-names')


tape('Test if function output', function (t) {
  var input = Object.values(css_colors)
  t.true(input.includes(randomColor()) , 'is a color')
  t.end()
})
