function extractValue(arr, key){
    return arr.reduce(function(acc, nextVal){
        acc.push(nextVal[key])
        return acc
    },[]);
};

function vowelCount(str){
    const vowels = 'aeiou';
    const arr = str.toLowerCase().split('');
    return arr.reduce(function(acc,next){
        if(vowels.indexOf(next) !== -1){
            if(acc[next]){
                acc[next]++;
            } else {
                acc[next] = 1;
            }

        }
        return acc;
    },{});
};

function addKeyAndValue(arr, key, val){
    return arr.reduce(function(acc,next,i){
        acc[i][key] = val;
        return acc;
    },arr);
};
function isEven(val){
    return val%2 === 0;
}

function isLongerThanThreeCharacters(val){
    return val.length > 3;
}

function partition(arr, callback){
    return arr.reduce(function(acc,next){
        if(callback(next)){
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    },[[],[]])
};