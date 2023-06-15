function rot13(str) {
  let str13 = [];
  for (let char of str) {
    if (/[A-Z]/.test(char)) {
      let code = char.charCodeAt(0);

      code -= 65;
      if (code >= 13) {
        code -= 13;
      } else {
        code += 13
      }
      code += 65;

      str13.push(String.fromCharCode(code));
    } else {
      str13.push(char);
    }
  }
    
  str13 = str13.join('')
  return str13;
}

rot13("SERR PBQR PNZC");