
var calc = require('./calc.js');
require('style-loader!css-loader!../css/index.css');
function say(){
    console.log("say function");
}
say();
console.log(calc.add(10,20));