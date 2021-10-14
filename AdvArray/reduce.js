function extractValue(arr, key){
    return arr.reduce(function(accum, nextVal){
        accum.push(nextVal[key]);
        return accum;
    }, []);
}

function vowelCount(str){
    const vowels = 'aeiou';
    return str.split('').reduce(function(accum, next){
        let lowerCasedLetter = next.toLowerCase();
        if (vowels.includes(lowerCasedLetter)){
            if (accum[lowerCasedLetter]){
                accum[lowerCasedLetter]++;
            } else {
                accum[lowerCasedLetter] = 1;
            }
        }
        return accum;
    }, {});
}

function addKeyAndValue(arr, key, val){
    return arr.reduce(function(accum, nextObj, index){
        accum[index][key] = val;
        return accum;
    }, arr)
}

function partition(arr, callback){
    return arr.reduce(function(accum, next){
       if (callback(next) === true){
           accum[0].push(next);
       } else {
           accum[1].push(next);
       }
       return accum;
    }, [[], []]);
}