function steamrollArray(arr) {
  //base case
  if (arr.length == 0) {
    console.log('base case size 0:', arr, '\n');
    return arr; // base case size 0
  }
  if (arr.length == 1) {
    if (!Array.isArray(arr[0])) {
      console.log('base case size 1:', arr, '\n');
      return arr; //base case 1
    } else {
      return steamrollArray(arr[0]); //unfold 1 array
    }
  } else {
    console.log('split recur:', arr.slice(0, -1),'~' ,arr.slice(-1));
    return [...steamrollArray(arr.slice(0, -1)), ...steamrollArray(arr.slice(-1))];
  }
}

const res = steamrollArray([1, [2], [3, [[4]]]]);
console.log('------', '\nFINAL steamrolled:', res);