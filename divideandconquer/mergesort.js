function merge(leftArr, rightArr) {
var sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr[0]);
      leftArr = leftArr.slice(1)
   } else {
      sortedArr.push(rightArr[0]);
      rightArr = rightArr.slice(1)
     }
   }
  while (leftArr.length)
    sortedArr.push(leftArr.shift());
  while (rightArr.length)
    sortedArr.push(rightArr.shift());
  return sortedArr;
}
function mergesort(arr) {
  if (arr.length < 2) {
    return arr; }
  else {
    var midpoint = parseInt(arr.length / 2);
    var leftArr   = arr.slice(0, midpoint);
    var rightArr  = arr.slice(midpoint, arr.length);
    return merge(mergesort(leftArr), mergesort(rightArr));
  }
}
let unsortedArr = [3, 94,	86,	82,	90, 10,	87,	36,	61,	8, 17, 15, 22,	10,	23, 78,	25,	2, 30, 45, 98, 43, 98, 59, 53, 57, 2, 64,	1, 41, 
  32,	58,	19,	99,	60, 74,	48,	80,	44,	25, 68,	1,	89,	77,	60, 25,	99,	30,	76,	32, 57,	82,	52,	44,	72, 87,	34,	87,	65,	30, 54,	6,	31,	
  33,	44, 44,	42,	82,	90,	17, 9, 98,	28,	86,	69, 3, 17,	8,	45,	98, 12,	47,	95,	43,	72, 39,	41,	82,	74,	56, 65,	79,	50,	26,	67,
  100,	24, 67,	38,	57];
console.log('This should be the sorted array!')
console.log(mergesort(unsortedArr));