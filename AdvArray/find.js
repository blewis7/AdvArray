function findUserByUsername(arr, username){
    return arr.find(function(value){
        return value.username === username;
    });
}

function removeUser(arr, username){
    let index = arr.findIndex(function(obj){
        return obj.username === username;
    })
    if (index === -1){
        return undefined;
    } else {
        return arr.splice(index, 1)[0];
    }
}