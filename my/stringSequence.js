// the longest unique sequence

function stringSequence(str) {
  let map = {}
  const res = { i: 0, j: 0 }
  let i = 0
  for (let j = 0; j < str.length; j++) {
    console.log(i, j)
    if (map[str[j]]) {
      if (res.j - res.i < j - i) {
        res.i = i
        res.j = j - 1
        console.log(res)
      }

      i = j
      map = {}
    } else {
      map[str[j]] = str[j]
    }
  }

  return res
}

stringSequence("hellothere")
