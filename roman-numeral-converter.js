function convertToRoman(num) {
  let str = [];

  while (num > 0) {
    if (num >= 1000) {
      num -= 1000;
      str.push('M');
    } else if (num >= 900) {
      num -= 900;
      str.push('CM');
    } else if (num >= 500) {
      num -= 500;
      str.push('D');
    } else if (num >= 400) {
      num -= 400;
      str.push('CD');
    } else if (num >= 100) {
      num -= 100;
      str.push('C');
    } else if (num >= 90) {
      num -= 90;
      str.push('XC');
    } else if (num >= 50) {
      num -= 50;
      str.push('L');
    } else if (num >= 40) {
      num -= 40;
      str.push('XL');
    } else if (num >= 10) {
      num -= 10;
      str.push('X');
    } else if (num >= 9) {
      num -= 9;
      str.push('IX');
    } else if (num >= 5) {
      num -= 5;
      str.push('V');
    } else if (num >= 4) {
      num -= 4;
      str.push('IV');
    } else if (num >= 1) {
      num -= 1;
      str.push('I');
    }
  }

  str = str.join('');
  return str;
}

convertToRoman(36);