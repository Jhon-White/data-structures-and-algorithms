function validAnagram(str1, str2) {
  const map = {}
  up = map
  if (str1.length !== str2.length) {
    return false
  }

  for (let i = 0; i < str1.length; i++) {
    map[str1[i]] = ++map[str1[i]] || 1

    //         console.log(map)
  }

  let counter = 0

  for (let i = 0; i < str2.length; i++) {
    //         console.log(squared)
    if (map[str2[i]] !== undefined && map[str2[i]] > 0) {
      map[str2[i]]--
      counter++

      //             console.log(counter)
    }
  }
  console.log("counter: ", counter)

  return counter == str1.length
}

let res = {}

res["1"] = validAnagram("", "") // true
res["2"] = validAnagram("aaz", "zza") // false
res["3"] = validAnagram("anagram", "nagaram") // true
res["4"] = validAnagram("rat", "car") // false) // false
res["5"] = validAnagram("awesome", "awesom") // false
res["6"] = validAnagram("qwerty", "qeywrt") // true
res["7"] = validAnagram("texttwisttime", "timetwisttext") // true

console.log(res)

// function isEquall (val1, val2) {
//   if (val1 === undefined || val1 === null || val2 === undefined || val2 === null) {
//       return false;
//   }

//   return val1.length === val2.length;
// }

// function validAnagram(str1, str2) {
//   if (!isEquall(str1, str2)) {
//       return false;
//   }

//   const output = {};

//   for(const letter of str1) {
//     output[letter] ? output[letter] +=1 : output[letter] = 1;
//   }

//   for(const letter of str2) {
//     if (output[letter]) {
//       --output[letter]
//       continue;
//     }

//     return false;
//   }

//   return true;
// }
