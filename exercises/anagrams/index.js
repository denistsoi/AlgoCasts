// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// solution
function cleanString(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

// attempt
// function genMap(string) {
//   let charMap = {}
//   for (let char of string) {
//     charMap[char] = charMap[char]++ || 1;
//   }

//   return charMap;
// }

// function anagrams(stringA, stringB) {
//   let first = stringA.replace(/[^\w]/g, '').toLowerCase();
//   let second = stringB.replace(/[^\w]/g, '').toLowerCase();

//   if (first.length != second.length) {
//     return false;
//   }

//   let firstCharMap = genMap(first);
//   let secondCharMap = genMap(second);

//   // char map has different key length
//   if (Object.keys(firstCharMap).length != Object.keys(secondCharMap).length) {
//     return false;
//   }

//   for (let key in firstCharMap) {
//     if (firstCharMap[key] != secondCharMap[key]) {
//       return false;
//     }
//   }
//   return true
// }

module.exports = anagrams;
