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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅  Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
  }
};

// OBJ: Return a subset of a given array, remove unwanted elements
// FXN: 1) source Array 2) itemsToRemove Array
// RETURN NEW ARRAY: elements from source not present in itemsToRemove 
// TEST CASE W/: assertArraysEqual

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    let removeItem = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        removeItem = true;
      }
    }
    if (removeItem === false) {
      newArray.push(source[i]);
    }
  }
  return newArray;
}

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

