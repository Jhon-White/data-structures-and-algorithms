// function countUniqueValues(arr) {

//     let temp = undefined;
//     let counter = 0
//     for(let i = 0; i < arr.length; i++) {

//         if (arr[i] === arr[i - 1]) {
//             continue
//         }
//         counter++
//     }

//     return counter
// }

// function countUniqueValues(arr) {

//     let temp = undefined;
//     let counter = 0
//     for(let i = 0, j = arr.length - 1; i < j; ) {

//         if (arr[i] === arr[i - 1]) {
//             i++
//             continue
//         } else {
//             counter++
//             i++
//         }

//         if (arr[j] === arr[j + 1]) {
//             j--
//             continue
//         } else {
//             counter++
//             j--
//         }

//     }

//     return counter
// }

function countUniqueValues(arr) {
  let i = 0
  for (j = 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      continue
    } else {
      i++
      arr[i] = arr[j]
    }
  }

  return i ? i + 1 : i
}

let res = {}

res["1"] = countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
res["2"] = countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
res["3"] = countUniqueValues([]) // 0
res["4"] = countUniqueValues([-2, -1, -1, 0, 1]) // 4

res
