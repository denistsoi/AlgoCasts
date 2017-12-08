// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/**
 * unshift
 */

// function reverse(str) {
//   let arr = str.split('');
//   let res = [];
//
//   arr.forEach(s => {
//     res.unshift(s);
//   })
//
//   return res.join('')
// };

/**
 * reverse
 */

// function reverse(str) {
//   return str.split('').reverse('').join('');
// }

/**
 * reduce
 */

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
