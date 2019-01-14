// Given 2 arrays, create a function return true/false if these two arrays contain any common items
// For example;
const array1 = ['a', 'b', 'c', 'd']
const array2 = ['a', 'x', 'b', 'z']
// returns true

// Brute force - nested loops

// TIL forEach can't break or return
const naivelyCompareTwOArrays = (arr1, arr2) => {
  for (let i of arr1) {
    for (let j of arr2) {
      if (i === j) {
        return true
      }
    }
  }
  return false
}

naivelyCompareTwOArrays(array1, array2)
