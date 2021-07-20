// let arr1 = [1,2,3]
// let arr2 = [4,1,9]

// let arr1 = [1,2,3]
// let arr2 = [4,9]

let arr1 = [1, 2, 3]
let arr2 = [4, 9, 5]

let up = null

function sameSquared(arr1, arr2) {
  const map = {}
  up = map
  if (arr1.length !== arr2.length) {
    return false
  }

  for (let i = 0; i < arr2.length; i++) {
    map[arr2[i]] = ++map[arr2[i]] || 1

    //         console.log(map)
  }

  let counter = 0

  for (let i = 0; i < arr1.length; i++) {
    let squared = Math.pow(arr1[i], 2)
    //         console.log(squared)
    if (map[squared] !== undefined && map[squared] > 0) {
      map[squared]--
      counter++

      //             console.log(counter)
    }
  }
  console.log("counter: ", counter)

  return counter == arr1.length
}

function sameSquared2(arr1, arr2) {
  let found = false
  for (let i = 0; i < arr1.length; i++) {
    found = false
    for (let j = 0; j < arr2.length; j++) {
      //             if (arr2[j] === true) {
      //                 continue
      //             }
      if (arr2[j] === Math.pow(arr1[i], 2)) {
        arr2[j] = true
        found = true
        break
      }
    }
    if (!found) {
      return false
    }
  }
  return true
}

// sameSquared(arr1, arr2)

let arr11 = [1, 2, 1]
let arr12 = [4, 4, 1]
let arr21 = [1, 2, 2]
let arr22 = [4, 4, 1]
let arr31 = [2, 3, 6, 8, 8]
let arr32 = [64, 36, 4, 9, 64]
let a = sameSquared(arr11, arr12) // must be false
let b = sameSquared(arr21, arr22) // must be true
let c = sameSquared(arr31, arr32) // true

console.log(a, b, c)

let a1 = sameSquared2(arr11, arr12) // must be false
let b1 = sameSquared2(arr21, arr22) // must be true
let c1 = sameSquared2(arr31, arr32) // true

console.log(a1, b1, c1)
