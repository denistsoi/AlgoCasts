// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// attempt
// function chunk(array, size) {
//   let arr = [];
//   let temp = []; // of length size
//   array.forEach(val => {
//     if (temp.length < size) {
//       temp.push(val)
//     } else {
//       arr.push(temp);
//       temp = []; // clear temp
//       temp.push(val);
//     }
//   })
//   arr.push(temp); // push the last temp to arr
//   return arr
// }

// solution 1
// function chunk(array, size) {
//   const chunked = []; // of length size

//   for (let el of array) {
//     const last = chunked[chunked.length - 1];

//     if (!last || last.length === size) {
//       chunked.push([el]);
//     } else {
//       last.push(el);
//     }
//   }
  
//   return chunked
// }

// solution 2 while
function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

module.exports = chunk;
