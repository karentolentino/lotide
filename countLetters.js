const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const results = {};
  for (let letter of string) {
    if (letter !== " ") { 
      if (results[letter]) { 
        results[letter] += 1;
      } else { 
        results[letter] = 1;
      }
    }
  }
  return results;
};

console.log(countLetters("birds fly in the sky"));


// Initially declare function 
// Define an empty object -> const result {} return result
// Loop over string
// Count string