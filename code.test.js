const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

let masterArr = [1,1,1,2,2,2,2,3,3,3,3,3,4,4,5]; // 1 -> 3, 2 -> 4, 3 -> 5, 4 -> 2, 5 -> 1

let key1 = 1;
nmAsync(masterArr, key1, (result) => assert(result === 3));

let key2 = 2;
nmAsync(masterArr, key2, (result) => assert(result === 4));

let key3 = 3;
nmAsync(masterArr, key3, (result) => assert(result === 5));

let key4 = 4;
nmAsync(masterArr, key4, (result) => assert(result === 2));

let key5 = 5;
nmAsync(masterArr, key5, (result) => assert(result === 1));

console.log("All Tests Passed");

