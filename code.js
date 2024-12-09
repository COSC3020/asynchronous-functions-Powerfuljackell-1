/*function nmPMR(arr, key, cb) {
    var Parallel = require('paralleljs'),
    p = new Parallel(arr);
    global.process.env.key = key;
    p.map(function(i) { return i == global.process.env.key; })
    .reduce(function(d) { return d[0] + d[1]; })
    .then(cb);
}*/

async function nmAsync(arr, key, cb) {
    array = arr.map((i)=>i == key).reduce((accum, next)=> accum + next)
    cb(array);
}


/*
let arr = Array.from('aaaaaaabcdef1hijk')
console.log(arr)
var logResult = function (){console.log(arguments[0])}
nmAsync(arr, "a", logResult)
*/

