const { log } = console

// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2, 5, 6, 7) === 20

function addAll(...nums) {
  return nums.reduce((acc, num) => {
    return acc + num
  }, 0)
}

const add = addAll(2, 5, 6, 7)
log('Sum is: ',add)

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) === 17

function sumAllPrimes(n) {
  let total = 0

  function checkForPrime(i) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false
      }
    }
    return true
  }

  for (let i = 2; i <= n; i++) {
    if (checkForPrime(i)) {
      total += i
    }
  }
  return total
}

const sumPrimes = sumAllPrimes(10)
log('Sum all primes: ', sumPrimes)


// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy(arr, ...rest) {
  const newArray = arr.concat(rest)
  const uniqueSet = [...new Set(newArray)]
  const result = uniqueSet.filter(val => !rest.includes(val))
  return result
}

// const destroy = seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6)
log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6,))


// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order withouth moving the trees
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(arr) {
  const arr1 = []
  const arr2 = []

  arr.forEach((val, i) => {
    if (val === -1) {
      arr1.push(i)
    } else {
      arr2.push(val)
    }
  })

  const sortArr = arr2.sort((a, b) => a - b)
  arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1))
  return sortArr
}

const sortedHeight = sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])
log('Sorted Array: ', sortedHeight)

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") === "d"
// misssingLetters("abcdefghjklmno") === "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") === undefined

function missingLetters(str) {
  let compare = str.charCodeAt(0)
  let missing

  str.split('').map((char, i) => {
    if (str.charCodeAt(i) === compare) {
      ++compare
    } else {
      missing = String.fromCharCode(compare)
    }
  })
  return missing
}

const missingLet = missingLetters('abcdefghjklmno')
log('The missing letter is: ', missingLet)

// CHALLENGE 6: EVEN & ODDS SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) === [170, 116]

function evenOddSums(arr) {
  const arr1 = []
  const arr2 = []
  arr.forEach(val => {
    if (val % 2 === 0) {
      arr1.push(val)
    } else {
      arr2.push(val)
    }
  })

  const evenTotal = arr1.reduce((acc, num) => acc + num)
  const oddTotal = arr2.reduce((acc, num) => acc + num)
  return [evenTotal, oddTotal]
}

const evenOdds = evenOddSums([50, 60, 60, 45, 71])
log('Even + Odds result: ', evenOdds)