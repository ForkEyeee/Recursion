function fibs(num) {
  let array = []
  for (let i = 0; i < num; i++) {
    if (i < 2) {
      array.push(i)
    } else {
      array.push(array[array.length - 2] + array[array.length - 1])
    }
  }
  return array
}

function fibsRec(n, arr = [0, 1]) {
  if (n <= 0) {
    return []
  } else if (n == 1) {
    return [0]
  } else if (n == 2) {
    return arr
  } else {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    return fibsRec(n - 1, arr)
  }
}
