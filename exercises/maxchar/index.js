// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charMap = {};
  for (let char of str) {
    charMap[char] = charMap[char]++ || 1;
  }

  let max = 0;
  let char;
  for (let key in charMap) {
    if (charMap[key] > max) {
      max = charMap[key];
      char = key;      
    }
  }
  return char;
}

module.exports = maxChar;
