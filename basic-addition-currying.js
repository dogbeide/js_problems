function addTogether(...args) {
  
  for (let arg of args) {
    if (typeof arg != 'number') {
      return undefined;
    }
  }

  if (args.length == 1) {
    return function(num2) {
      if (typeof num2 == 'number') {
        return args[0] + num2;
      } else {
        return undefined;
      }
      
    }
  } else {
    return args[0] + args[1];
  }
}

console.log(addTogether(2, 3))
console.log(addTogether(2)([3]));