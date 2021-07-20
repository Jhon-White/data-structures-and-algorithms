function mergeArrays(arr1, arr2) {
  const newArr = []
  //     for (let i = 0; i < arr1.length; i++) {
  //       if(arr1[i] >= arr1[i]) {
  //           newArr.push(arr2[i])
  //           newArr.push(arr1[i])
  //       } else {
  //           newArr.push(arr1[i])
  //           newArr.push(arr2[i])
  //       }
  let i = 0,
    j = 0
  let fail_safe = 0

  while (i < arr1.length || j < arr2.length) {
    fail_safe++
    if (fail_safe > 100) {
      console.log("oops! infinite loop")
      break
    }

    //           while(j < arr2.length && arr1[i] > arr2[j]) {
    //             newArr.push(arr2[j])
    //             j++
    //           }

    if ((j < arr2.length && arr1[i] > arr2[j]) || arr1[i] === undefined) {
      newArr.push(arr2[j])
      j++
      //             continue
    } else {
      newArr.push(arr1[i])
      i++
    }

    //           if((i < arr1.length && arr1[i] < arr2[j]) || arr2[j] === undefined) {
    //             newArr.push(arr1[i])
    //             i++
    //           }

    //           if (j > arr2.length - 1) {
    //            while(i < arr1.length) {
    //              newArr.push(arr1[i])
    //              i++
    //            }
    //            break
    //           }

    //           while(i < arr1.length && arr1[i] < arr2[j]) {
    //             newArr.push(arr1[i])
    //             i++
    //           }
  }

  return newArr
}

function mergeSort2(arr) {
  console.log(arr)
  if (arr.length === 1) {
    return arr
  }

  const secondHalf = arr.splice(Math.floor(arr.length / 2))

  return mergeArrays(mergeSort2(arr), mergeSort2(secondHalf))
}

const arr = [7, 8, 9, 1, 1, 10]
console.log(mergeSort2(arr))

// [9,5,3,6,2,8,6]
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  }

  let start = 0
  let end = arr.length - 1

  function mergeArrays(start1, end1, start2, end2) {}

  function helper(start1, end1, start2, end2) {
    if (end1 - start1 > 0) {
      // split up
      let middle1 = Math.floor((end1 - start1) / 2)
      // recursion
      helper(start1, middle1, middle1 + 1, end1)
    }

    if (end2 - start2 > 0) {
      // split up
      let middle1 = Math.floor((end2 - start2) / 2)
      // recursion
      helper(start2, middle1, middle1 + 1, end2)
    }

    return sort(start1, end1, start2, end2)
  }

  let middle = Math.floor((end - start) / 2)

  return helper(0, middle, middle + 1, end)
}
// [7, 8, 9, 11, |12|, 1, 1, 10, 100]
function mergeArrays2(arr, start1, end1, start2, end2) {
  let temp = undefined
  let k = 0
  while (start1 <= end1 || start2 <= end2) {
    if (start1 > start2) {
      temp = arr[start1]
      arr[start1] = arr[start2]
      arr[start2] = temp

      start1++
      start2++
      k++
    }

    if (start1 < start2) {
      // for (let i = end1 + 1; i < ) {

      // }
      start1++
    }
  }

  // console.log(arr, start1, end1, start2, end2)
  return arr
}
// console.log(mergeArrays([4, 5, 8], [2, 3, 7]))
// console.log(mergeArrays([4, 5, 8, 9], [2, 3, 3, 7]))

// const arr = [7, 8, 9, 1, 1, 10]
// let middle = Math.floor((arr.length - 1) / 2)
// console.log(mergeArrays2(arr, 0, middle, middle + 1, arr.length - 1))

// console.log(mergeArrays([8, 8, 8, 9], [2, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5, 6, 6, 6]))

// console.log(mergeArrays([7, 7, 7, 8, 8, 10], [2, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5, 6, 6, 6, 9, 9, 9]))
