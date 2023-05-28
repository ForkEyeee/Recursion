function mergeSort(arr) {
  if (arr.length === 1) {
    return arr
  }
  let half = Math.ceil(arr.length / 2)
  let firstHalf = arr.slice(0, half)
  let secondHalf = arr.slice(half)
  return merge(mergeSort(firstHalf), mergeSort(secondHalf))

  function merge(firstHalf, secondHalf) {
    const arr = []
    while (firstHalf.length && secondHalf.length)
      if (firstHalf[0] <= secondHalf[0]) {
        arr.push(firstHalf.shift())
      } else {
        arr.push(secondHalf.shift())
      }
    return arr.concat(firstHalf.slice().concat(secondHalf.slice()))
  }
}
