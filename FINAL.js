

const filterOutOdds = (...arguments) => {
    var nums = arguments
    return nums.filter((num)=>{ return num % 2 ===0})
}

const findMin = (...arguments) => {
    return arguments.reduce((min, currVal)=> {
        return currVal < min ? currVal : min;
    });
};

const mergeObjects = (obj1, obj2) => {
    let newObj = {...obj1, ...obj2};
    return newObj
}

const doubleAndReturnArgs = (arr, ...arguments) => {
    let doubled = arguments.map((i) => {
        return i * 2
    })
    let newArr = [...arr, ...doubled];
    return newArr;
}


const removeRandom = (items) => {
    let deleteNum = Math.floor((Math.random()*items.length)+1)
    items.splice(deleteNum, 1);
    return items
}

const extend = (array1, array2) => {
    let newArr = [...array1, ...array2];
    return newArr;
}

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key]=val;
    return newObj;
}

const removeKey = (obj, key) => {
    delete obj[key];
}

const combine = (obj1, obj2) => {
    return newObj = {...obj1, ...obj2};
}

const update = (obj, key, val) => {
    obj[key]=val;
    return newObj = {...obj};

}

