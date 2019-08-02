const bubbleSort = arr => {
    const l = arr.length;
    for (let i = 0; i < l; i++ ) {
      for (let j = 0; j < l - 1 - i; j++ ) {
        if ( arr[ j ] > arr[ j + 1 ] ) {
          [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];
        }
      }
    }
    return arr;
  };
const arr = [10, 4, 7, 90, 105, 1, 3];
  console.log(`El array antes de ordenarlo: ${arr}`);
const result = bubbleSort(arr);
  console.log(`El array despues de ordenarlo: ${result}`);