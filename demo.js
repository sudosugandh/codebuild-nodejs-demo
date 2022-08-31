
var test = require(unit.js);
var str = 'hello, world!';

test.string(str).startWith('hello');

if (test.string(str).startWith('hello')){
    console.log("Passed");
}

