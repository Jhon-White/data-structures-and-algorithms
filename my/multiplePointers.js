// Write a function called sumZero which accepts a sorted array
// of integers. The function should find the first pair where
// the sum is 0. Return an array that includes both values that
// sum to zero or undefined if a pair does not exist

// function sumZero(arr) {

//     for (let i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) {
// //         console.log('i: '+ i + " j: " + j)
//         if (arr[i] + arr[j] === 0) {
//             return [arr[i], arr[j]]
//         }
//     }

//     return undefined
// }

function sumZero(arr) {
  for (let i = 0, j = arr.length - 1; true; ) {
    console.log("i: " + i + " j: " + j)
    if (arr[i] >= 0 || arr[j] < 0) {
      break
    }

    if (arr[i] + arr[j] === 0) {
      return [arr[i], arr[j]]
    }

    if (Math.abs(arr[i]) > arr[j]) {
      i++
    } else {
      j--
    }
  }

  return undefined
}

let res = {}

res["1"] = sumZero([-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]) // [-3,3]
res["2"] = sumZero([-2, 0, 1, 3]) // undefined
res["3"] = sumZero([1, 2, 3]) // undefined
res["4"] = sumZero([-4, -3, -2, -1, 0, 1, 2, 5]) // [-2,2]
