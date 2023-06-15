function palindrome(str) {
  const nonAlpha = /[\W|_]/g;
  str = str.replace(nonAlpha, '').toLowerCase();
  return str == str.split('').reverse().join('')
}

console.log(palindrome("eye"));
console.log(palindrome("e ye"));
console.log(palindrome("E ye"));
console.log(palindrome("E _ ye_"));