function hasOddNumber(arr){
    return arr.some(function(num){
        return num%2 !== 0;
    });
};

function hasAZero(num){
    const numArr = num.toString().split('');
    return numArr.some(function(val){
        return val === '0';
    });
};

function hasOnlyOddNumbers(arr){
    return arr.every(function(num){
        return num%2 !== 0;
    });
};

function hasNoDuplicates(arr){
    return arr.every(function(num){
        return arr.indexOf(num) === arr.lastIndexOf(num);
    });
};

function hasCertainKey(arr, key){
    return arr.every(function(obj){
        return obj[key];
    });
};

function hasCertainValue(arr,key,val){
    return arr.every(function(obj){
        return obj[key] === val;
    });
};

