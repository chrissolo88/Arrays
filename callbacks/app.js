function holler() {
    console.log('Hey You');
};

const whisper = function () {
    console.log('pssst I have a secret');
};

function add(x, y) {
    return x + y;
};

function subtract(x, y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
};

function divide(x, y) {
    return x/y;
};
function power(x, y) {
    return x**y;
};
const mathFuncs = [add, subtract, multiply, divide, power];

setTimeout(whisper, 4000);

function doMath(a,b,mathFunc) {
    return mathFunc(a,b);
};

doMath(30,2, function(a,b){
    return a**b
})

function doAllMath(a,b,mathFuncs) {
    for(let func of mathFuncs){
        console.log(func(a,b))
    }
}
