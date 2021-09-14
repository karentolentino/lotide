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