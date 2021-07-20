// function charCount(str) {
//     const map = {}

//     str.split('').forEach((char) => {
//         if (map[char] !== undefined) {
//             map[char]++
//         } else {
//             map[char] = 1
//         }
//     })

//     console.log(map)
// }

// charCount('aagfgfasfhfg')

// charCount('my phone number is 17853')

// ------------------------------------
// const arrLetters = ['a', 'b', 'c']
// const arrCounters = [0, 0, 0]

// const str = 'abccbacbc'

// for (let i = 0; i < str.length; i++) {
//     switch(str[i]) {
//         case arrLetters[0]: arrCounters[0]++; break;
//         case arrLetters[1]: arrCounters[1]++; break;
//         case arrLetters[2]: arrCounters[2]++; break;
//     }
// }

// for (let i = 0; i < arrLetters.length; i++) {
//     console.log(`${arrLetters[i]}: ${arrCounters[i]}`)
// }

let resArr = []
let letters = []
let str = "abckdfldabljds"
for (let i = 0; i < str.length; i++) {
  resArr[i] = []
  for (let j = i + 1; j < str.length; j++) {
    if (str[i] === str[j]) {
      resArr[i].push(str[i])
    }
  }
}
