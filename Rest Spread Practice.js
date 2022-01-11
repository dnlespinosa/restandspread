// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

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


function removeRandom(items) {

}

const extend = (array1, array2) => {
    let newArr = [...array1, ...array2];
    return newArr;
}

// const addKeyVal = (obj, key, val) => {
//     let newObj = {...obj, /
//     return newObj;
// }


