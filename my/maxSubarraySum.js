function maxSubarraySum(arr, n) {
  if (n > arr.length || arr.length === 0) {
    return null
  }

  let sum = 0
  let maxSum = 0
  let i = 0
  for (let j = 0; j < arr.length; j++) {
    console.log(i, j)
    if (j - i < n) {
      sum += arr[j]
      maxSum = sum
      console.log(sum)
      // console.log("  ",i, j)
      continue
    }

    sum -= arr[i++]
    sum += arr[j]
    console.log(sum)

    if (maxSum < sum) {
      maxSum = sum
    }
  }

  return maxSum
}

// maxSubarraySum([1,2,5,2,8,1,5],2) // 10
// maxSubarraySum([-1],1) //
maxSubarraySum([-1, -2, -5, -2, -8, -1, -5], 2) // 10
// maxSubarraySum([1,2,5,2,8,1,5],4) // 17
// maxSubarraySum([4,2,1,6],1) // 6
// maxSubarraySum([4,2,1,6,2],4) // 13
// maxSubarraySum([],4) // null
