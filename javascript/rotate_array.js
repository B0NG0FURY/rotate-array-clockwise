function rotateArray(arr, k) {
  if (arr.length === 0) {
    return [];
  }

  let toFront;

  while (k > 0) {
    toFront = arr.pop();
    arr.unshift(toFront);
    k--;
  }

  return arr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));
}

module.exports = rotateArray;

// Please add your pseudocode to this file

// 1. while k > 0, toFront is result of arr.pop().
// 2. arr.unshift(toFront) and decrease k by 1.
// 3. return arr once done looping.

// And a written explanation of your solution
