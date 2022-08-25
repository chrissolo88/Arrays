function findUserByUsername(arr, name){
    return arr.find(function(obj){
        return obj.username === name;
    })
};

function removeUser(arr, name){
    let userIndex = arr.findIndex(function(obj){
        return obj.username === name;
    })
    if(userIndex === -1) return;

    return arr.splice(userIndex,1)[0];
};