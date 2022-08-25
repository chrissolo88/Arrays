function doubleValues(arr) {
    const newArr = [];
    arr.forEach(function(num){
        newArr.push(num * 2);
    });
    return newArr;
};

function onlyEvenValues(arr) {
    const newArr = [];
    arr.forEach(function(num){
        if (num%2 == 0){newArr.push(num)};
    });
    return newArr;
};

function showFirstAndLast(arr) {
    const newArr = [];
    arr.forEach(function(name){
        newArr.push(`${name.charAt(0)}${name.charAt(name.length -1)}`);
    });
    return newArr;
};

function addKeyAndValue(arr, key, value) {
    const newArr = [];
    arr.forEach(function(obj){
        obj[key] = value;
        newArr.push(obj);
    });
    return newArr;
};

function vowelCount(str){
    const arr = str.toLowerCase().split('')
    const newArr = [];
    const vowels = ['a','e','i','o','u'];
    const obj = {};
    let count = 0
    vowels.forEach(function(vowel){
        if(arr.includes(vowel)){
            arr.forEach(function(letter){
                if(vowel === letter){++count;}
            });
        obj[vowel] = count;
        count = 0
        }
    });
    newArr.push(obj);
    return newArr;
};

function doubleValuesWithMap(arr){
    return arr.map(function(value){
        return value * 2;
    });
}

function valTimesIndex(arr){
    return arr.map(function(value, index){
        return value * index;
    });
};

function extractKey(arr,key){
    return arr.map(function(obj){
        return obj[key];
    });
}

function extractFullName(arr){
    return arr.map(function(obj){
        return `${obj.first} ${obj.last}`;
    });
}

function filterByValue(arr, key){
    return arr.filter(function(obj){
        return obj[key];
    });
};

function find(arr, num){
    return arr.filter(function(val){
        return val === num;
    })[0];

}

function findInObject(arr,key,val){
    return arr.filter(function(obj){
        return obj[key] === val;
    })[0];
}

function removeVowels(str){
    const vowels = ['a','e','i','o','u'];
    const arr = str.toLowerCase().split('');
    return arr.filter(function(letter){
        return vowels.indexOf(letter) === -1;
    }).join('');
}

function doubleOddNumbers(arr){
    return arr.filter(function(num){
        return num%2 !== 0;
    }).map(function(num){
        return num * 2;
    });
};