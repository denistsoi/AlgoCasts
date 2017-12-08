// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// attempt
// function reverseInt(n) {
//   if (Math.sign(n) == 0) {
//     return 0;
//   }
//   if (Math.sign(n) == 1) {
//     return parseInt(n.toString().split('').reverse('').join(''));
//   } else if (Math.sign(n) == -1) {
//     return parseInt(n.toString().split('-')[1].split('').reverse('').join('')) * -1;
//   }
// }

// solution
function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('')

  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
