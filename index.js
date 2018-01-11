var css_colors = require('css-color-names')


var random = function(arr){
  arr[Math.floor(Math.random()*arr.length)]
}

var randomColor = function(){

}

console.log(randomColor())
console.log(randomColor({rgb: true}))
