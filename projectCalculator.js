function add(a,b) {
  return a + b;
}

function subtract(a,b) {
  return a - b;	
}

function sum(array) {
  let sums = array.reduce((total, suma) => {
	  return total + suma;
  }, 0);
  return sums
}

function multiply(array) {
  let multi = array.reduce((total, multid) => {
    return total * multid;
  }, 1);
  return multi
}

function power(a,b) {
	return Math.pow(a,b)
}

function factorial(a) {
  let h = 1
  if (a === 0 || a === 1) {
    return 1
  }
  else {
    for (let i = 1; i <= a; i++) {
      h =  h * i;
    }
  return h;
  }
}
