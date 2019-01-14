const { performance } = require('perf_hooks')
const nemo = ['nemo']
const allFishes = ['nemo', 'dory', 'marlin', 'crush', 'bubbles']

//  O(n) --> Linear time
const findNemo = arr => {
  let t1 = performance.now()
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'nemo') {
      console.log('Found')
    }
  }
  let t2 = performance.now()
  // Time comparison, not definitive
  console.log(arr.length, t2 - t1)
}

function findingNemo (arr) {
  let t1 = performance.now()
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'nemo') {
      console.log('Found')
    }
  }
  let t2 = performance.now()
  // Time comparison
  console.log(t2 - t1, arr.length)
}

findNemo(nemo)
findNemo(allFishes)
findingNemo(allFishes)
findingNemo(nemo)

// Constant time --> O(1)

const logFirstTwo = arr => {
  console.log(arr[0])
  console.log(arr[1])
}

logFirstTwo(allFishes)

// Quadratic loop - 0(N^2)

// Log all element pairs in an array
const letters = ['a', 'b', 'c', 'd', 'e', 'f']

const logAllPairs = array =>
  array.forEach(i => array.forEach(j => console.log(i, j)))

logAllPairs(letters)
