// TEST/ASSERTION FUNCTIONS
const eqArrays = function(array1, array2) {
  let bothArrays = true;
  if (array1.length !== array2.length) {
    bothArrays = false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      bothArrays = false;
    }
  }
  return bothArrays;
};

const assertArraysEqual = function(actual, expected) {
if (eqArrays(actual, expected)) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//

// ACTUAL FUNCTION

// RETURN: middle element(s) of an array (length of returned elements could vary)
//  ONE OR TWO elements RETURN empty array =? []
//  ODD # of elements RETURN single middle element => [2]
//  EVEN # of elements RETURN two elements in the middle  => [2, 3]


const middle = function(array) {
  if (array.length <=2) {
    return []; // one or two elements
  } else if (array.length % 2 === 0) {
    return [array[Math.ceil(array.length / 2) - 1], array[Math.ceil(array.length / 2)]]; // even #
  } else {
    return array[Math.floor(array.length / 2)]; // odd #
  }
  };

// TEST CODE
console.log(middle([]));            // undefined
console.log(middle([0]));           // 0
console.log(middle([0,1]));         // [0, 1]
console.log(middle([0,1,2]));       // 1
console.log(middle([0,1,2,3]));     // [1, 2]
console.log(middle([0,1,2,3,4]));   // 2