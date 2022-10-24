// Initialise the array
const strings = ["a", "b", "c", "d"];

// push method
// push is an O(1) operation as it does not loop/iterate
// through the elements present in the array,
// it just adds the element to the end of the array
strings.push("e");

// pop method
// pop is an O(1) operation as it does not loop/iterate
// it simply remove the last element of the array
strings.pop();

// unshift method (essentially the opposite of push)
// unshift is an O(n) operation as it loops/iterates through
// all of the elements present in the array and will
// reassign the index of each element + 1
strings.unshift("x");

// shift method (essentially the opposite of pop)
// shift is an O(n) operation as it loops/iterate through all elements
// shift method will remove the first element in the array
// all other elements to a lower index
strings.shift();

// splice method
// splice will change the contents of an array by removing
// or replacing existing elements and/or adding new elements in place
// splice is an O(n) operation as it loops/iterates through
// all of the elements present in the array and will reassign the index
strings.splice(0, 2, "alien");

// join method
// join method will join all the array elements into a string
const joined = strings.join("");

// common interview excercises
// 1. reverse a string
function reverseStr(str) {
  const arr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    arr.push(str[i]);
  }
  //console.log(arr.join(""));
  return arr.join("");
}

reverseStr("hello");

// 2. merge sorted arrays
function mergeSortedArrays(arr1, arr2) {
  // initliase the merged array
  const mergedArray = [];

  // index 0 items of both arrays
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];

  // counter variables
  let i = 1;
  let j = 1;

  // check the input, if the arrays are empty, return the other array
  if (arr1.length === 0) {
    return arr2;
  } else if (arr2.length === 0) {
    return arr1;
  }

  //while arr1Item and arr2Item are defined
  while (arr1Item || arr2Item) {
    // if arr2Item is undefined or arr1Item is less than arr2Item
    if (!arr2Item || arr1Item < arr2Item) {
      // push arr1Item into the mergedArray
      mergedArray.push(arr1Item);
      // increment arr1Item
      arr1Item = arr1[i];
      i++;
    } else {
      // push arr2Item into the mergedArray
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }
  // return the merged array
  console.log(mergedArray);
  return mergedArray;
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
