function smallestCommons(arr) {
  //gen range, smallest to largest
  const min = Math.min(arr[0], arr[1]);
  const max = Math.max(arr[0], arr[1]);
  const nums = [...new Array(max+1).keys()].slice(min);
  //binary number size of array
  let toggle = 2 ** nums.length - 1;
  let scm = Number.POSITIVE_INFINITY;
  console.log('configurations:', toggle);

  //for each multiplication configuration
  const arrSize = nums.length
  for (toggle; toggle > 0; toggle--) {
    let toggle2 = toggle.toString(2);
    const diff = arrSize - toggle2.length;
    toggle2 = '0'.repeat(diff) + toggle2;
    console.log('bin mult set', toggle2);

    //multiply each active digit in set
    let product = 1;
    for (let i = 0; i < toggle2.length; i++) {
      //if active
      if (toggle2[i] == '1') {
        product *= nums[i]; //multiply active num in arr
      }
    }
    console.log('product', product);

    
    //update if common multiple
    if (checkDivisors(product, nums)) {
      scm = updateSCM(scm, product);
    }
    console.log('');
  }
  console.log('semi-final:', scm, '\n');

  //check outliers
  const semiFinal = scm;
  console.log('Checking outliers: \n------')
  for (let i = 2 ; i <= min; i++) {
    const outlier = semiFinal / i;
    if (checkDivisors(outlier, nums)) {
      scm = updateSCM(scm, outlier);
    } else {
      console.log('NO', outlier);
    }
  }

  console.log('\nFinal SCM:', scm)

  return scm;
}

//check divisors
function checkDivisors(product, divisors) {
  let isCM = true;
  for (let i = 0; i < divisors.length; i++) {
    if (product % divisors[i] != 0) {
      isCM = false;
      break;
    }
  }
  return isCM;
}

function updateSCM(old, fresh) {
  console.log('YES', old, '->' , fresh);
  const scm = fresh < old ? fresh : old; 
  return scm;
}

// smallestCommons([1,5]);
smallestCommons([23,18]);