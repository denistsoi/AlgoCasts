// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


// recursion
// function pyramid(n, row = 0, level = '') {
//   if (row === n) {
//     return;
//   }

//   if (level.length === 2 * n - 1) {
//     console.log(level);
//     return pyramid(n, row + 1);
//   }

//   const mid = Math.floor((2 * n - 1) / 2);
//   let add;

//   if (mid - row <= level.length && mid + row >= level.length) {
//     add = '#';
//   } else {
//     add = ' ';
//   }

//   pyramid (n, row, level + add);
// }

function pyramid(n) {
  let maxLength = 2 * n - 1;
  let mid = Math.floor(maxLength / 2);

  for (var levels = 0; levels < n; levels++) {
    let str = '';

    for (var column = 0; column < 2 * n - 1; column++) {
      if (mid - levels <= column && mid + levels >= column) {
        str += '#';
      } else {
        str += ' ';
      }
    }

    console.log(str)
  }
}

// function pyramid(n) {
//     // if (n === 1) {
//     //   return '#';
//     // } 
//     for (var i = 2; i <= n; i++) {
//       let hash = Array((2*i)+1).join('#');
//       console.log(hash)
//       // let space = Array(n-i+1).join(' ');
//       // console.log([].unshift(' ').concat(hash.concat(space)));
//     }
// }




module.exports = pyramid;
