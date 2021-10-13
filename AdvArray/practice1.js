// forEach

function doubleValues(arr){
    const doublesArr = [];
    arr.forEach(function(num){
        doublesArr.push(num*2);
    });
    return doublesArr;
}

function onlyEvenValues(arr){
    const evensArr = [];
    arr.forEach(function(num){
        if (num % 2 === 0){
            evensArr.push(num);
        }
    });
    return evensArr;
}

function showFirstAndLast(arr){
    const newArr = [];
    arr.forEach(function(str){
        newArr.push(`${str[0]}${str[str.length-1]}`);
    });
    return newArr;
}

function addKeyAndValue(arr, key, val){
    arr.forEach(function(obj){
        obj[key] = val;
    });
    return arr;
}

function vowelCount(str){
    const vowels = 'aeiou';
    let obj = {};
    let strArr = [];
    for (let i = 0; i < str.length; i++){
        strArr.push(str[i]);
    }
    strArr.forEach(function(letter){
        let lowerCasedLetter = letter.toLowerCase();
        if (vowels.includes(lowerCasedLetter)){
            if (obj[lowerCasedLetter]){
                obj[lowerCasedLetter]++;
            } else {
                obj[lowerCasedLetter] = 1;
            }
        }
    });
    return obj;
}

// map

function doubleValuesWithMap(arr){
    let newArr = arr.map(function(num){
        return num * 2;
    });
    return newArr;
}

function valTimesIndex(arr){
    let newArr = arr.map(function(num, ind){
        return num * ind;
    });
    return newArr;
}

function extractKey(arr, key){
    let newArr = arr.map(function(val){
        return val[key];
    });
    return newArr;
}

function extractFullName(arr){
    return arr.map(function(name){
        return name.first + ' ' + name.last;
    });
}

// filter

function filterByValue(arr, key){
    return arr.filter(function(val){
        return val[key];
    })
}

function find(arr, num){
    return arr.filter(function(val){
        return val === num;
    })[0];
}

function findInObj(arr, key, searchVal){
    return arr.filter(function(val){
        return val[key] === searchVal;
    })[0];
}

function removeVowels(str){
    const vowels = 'aeiou';
    let arr = str.split('');
    return arr.filter(function(letter){
        let lowerCasedLetter = letter.toLowerCase();
        return !vowels.includes(lowerCasedLetter); 
    })
    .join('');
}

function doubleOddNumbers(arr){
    let newArr = arr.filter(function(num){
        return (num % 2 !== 0);
    });
    return newArr.map(function(val){
        return val * 2
    });
}