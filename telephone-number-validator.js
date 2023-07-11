function telephoneCheck(str) {
  const numRegex_ = /^(1*)([0-9]{3})(-|\s)/;

  const country = "^([1]{0,1})";
  const area = "(([0-9]{3})|(\\(([0-9]{3})\\)))";
  const prefix = "([0-9]{3})";
  const line = "([0-9]{4}$)";
  const sep = "(-|\\s)*";
  
  const numRegex = new RegExp(
    country + sep +
    area + sep +
    prefix + sep+
    line
  )

  // console.log(numRegex)
  const isValid = numRegex.test(str);
  // console.log(isValid)
  return isValid;
}

telephoneCheck("11 555-555-5555")
telephoneCheck("27576227382")
telephoneCheck("555-555-5555");
telephoneCheck("(555)555-5555");
telephoneCheck("(555) 555-5555");
telephoneCheck("555 555 5555");
telephoneCheck("5555555555");
telephoneCheck("1 555 555 5555");