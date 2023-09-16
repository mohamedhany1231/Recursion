function mergeSort(arr) {
  if (arr.length == 1) return arr;
  else {
    // split
    let half;
    if (arr.length % 2 == 0) half = arr.length / 2;
    else half = Math.floor(arr.length / 2);
    let leftArr = mergeSort([...arr].slice(0, half));
    let rightArr = mergeSort([...arr].slice(half));

    // sort
    let leftLength = leftArr.length;
    let rightLength = rightArr.length;
    let sortedArr = [];
    let i = 0,
      j = 0,
      k = 0;
    while (true) {
      if (leftArr[i] < rightArr[j]) sortedArr[k++] = leftArr[i++];
      else sortedArr[k++] = rightArr[j++];
      if (i == leftLength) {
        sortedArr = [...sortedArr, ...rightArr.slice(j)];
        break;
      }
      if (j == rightLength) {
        sortedArr = [...sortedArr, ...leftArr.slice(i)];
        break;
      }
    }
    return sortedArr;
  }
}

console.log(mergeSort([1, 5, 3, 7, 9, 0, 3, 341, 4456, 1, 4, -33, -4, -25]));
