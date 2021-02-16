function power(a,b) {
	return Math.pow(a,b)
}

function operate(a,b,operator) {
  if (operator === "add") {
    operation.c = a + b;
  }
  else if (operator === "sub") {
    operation.c = a - b;
  }
  else if (operator === "multi") {
    operation.c = a * b;
  }
  else if (operator === "div" && b != 0) {
    operation.c = a / b;
  }
  else if (operator === "div" && b === 0) {
    clearDiv();
  }
}

let operation = {
  a:undefined,
  b:undefined,
  oper:" ",
  c:undefined,
  pos:true,
  coma: ""
};

let b = ""
let displayNumber = document.querySelectorAll("#number")
displayNumber.forEach((button) => {
  button.addEventListener("click", () => {
    if (operation.oper === " ") {
      let showClearDivDisplay = document.querySelector("#divError");
      showClearDivDisplay.textContent = ""
      let buttonContent = button.textContent;
      let showDisplay = document.querySelector("#display");
      showDisplay.textContent += buttonContent;
      let a = showDisplay.textContent
      operation.a = parseFloat(a);
    } else if (operation.a != undefined && operation.oper != " " && operation.pos == true) {
      let showClearDivDisplay = document.querySelector("#divError");
      showClearDivDisplay.textContent = ""
      let buttonContent = button.textContent;
      let showDisplay = document.querySelector("#display");
      showDisplay.textContent += buttonContent;
      b += operation.coma
      b += buttonContent;
      operation.b = parseFloat(b);
      operation.coma = ""
    } else if (operation.a != undefined && operation.oper != " " && operation.pos == false) {
      let showClearDivDisplay = document.querySelector("#divError");
      showClearDivDisplay.textContent = ""
      let buttonContent = button.textContent;
      let showDisplay = document.querySelector("#display");
      showDisplay.textContent += buttonContent;
      b += operation.coma
      b += buttonContent;
      operation.b = parseFloat(-b);
      operation.coma = ""
    }
  });
});

let displaySum = document.querySelector("#sum")
displaySum.addEventListener("click", () => {
  check(); displaySums();
});

function displaySums() {
  if (operation.a === undefined) {
    
  } else if (checks.length - checks.sum == 1) {

  } else if (operation.oper != " " && operation.a != undefined && operation.b != undefined) {
    let sumContent = " " + displaySum.textContent + " ";
    let showSumDisplay = document.querySelector("#display");
    showSumDisplay.textContent += sumContent;
    doTheMathButNoShow();
    operation.oper = "add"
    operation.pos = true
  } else {
    let sumContent = " " + displaySum.textContent + " ";
    let showSumDisplay = document.querySelector("#display");
    showSumDisplay.textContent += sumContent;
    operation.oper = "add";
    operation.pos = true
  }
};

let displayEqual = document.querySelector("#equal")
displayEqual.addEventListener("click", () => {
  check(); doTheMath();
});

function doTheMath() {
  if (checks.length - checks.sum == 1 && operation.b != undefined) {
    let showEqual = document.querySelector("#display");
    showEqual.textContent = Math.round(operation.c * 100) / 100;
    operation.a = operation.c
    operation.b = undefined
    operation.oper = " "
    b = ""
  } else if (operation.a != undefined && operation.b == undefined) {
    let showEqual = document.querySelector("#display")
    showEqual.textContent = Math.round(operation.a * 100) / 100;
    operation.oper = " "
  } else if (operation.a != undefined && operation.b == 0 && operation.oper == "div") {
    operate(operation.a,operation.b,operation.oper)
    let showEqual = document.querySelector("#display");
    showEqual.textContent = operation.c
    operation.a = operation.c
    operation.b = undefined
    operation.oper = " "
    b = ""
  } else {
  operate(operation.a,operation.b,operation.oper)
  let showEqual = document.querySelector("#display");
  showEqual.textContent = Math.round(operation.c * 100) / 100;
  operation.a = operation.c
  operation.b = undefined
  operation.oper = " "
  b = ""
  }
}

function doTheMathButNoShow() {
  operate(operation.a,operation.b,operation.oper)
  operation.a = operation.c
  operation.b = undefined
  b = ""
}

let checks = {
  sum:-1,
  length:undefined
};

function check() {
  let checkDisplay = document.querySelector("#display");
  checks.sum = checkDisplay.textContent.lastIndexOf(" ")
  checks.length = checkDisplay.textContent.length
}

let displaySub = document.querySelector("#sub")
displaySub.addEventListener("click", () => {
  check(); displaySubs();
});

function displaySubs() {
  if (operation.a === undefined) {
    
  } else if (checks.length - checks.sum == 1) {

  } else if (operation.oper != " " && operation.a != undefined && operation.b != undefined) {
    let subContent = " " + displaySub.textContent + " ";
    let showSubDisplay = document.querySelector("#display");
    showSubDisplay.textContent += subContent;
    doTheMathButNoShow();
    operation.oper = "sub"
    operation.pos = true
  } else {
    let subContent = " " + displaySub.textContent + " ";
    let showSubDisplay = document.querySelector("#display");
    showSubDisplay.textContent += subContent;
    operation.oper = "sub";
    operation.pos = true
  }
};

let displayMulti = document.querySelector("#multi")
displayMulti.addEventListener("click", () => {
  check(); displayMultis();
});

function displayMultis() {
  if (operation.a === undefined) {
    
  } else if (checks.length - checks.sum == 1) {

  } else if (operation.oper != " " && operation.a != undefined && operation.b != undefined) {
    let multiContent = " " + displayMulti.textContent + " ";
    let showMultiDisplay = document.querySelector("#display");
    showMultiDisplay.textContent += multiContent;
    doTheMathButNoShow();
    operation.oper = "multi"
    operation.pos = true
  } else {
    let multiContent = " " + displayMulti.textContent + " ";
    let showMultiDisplay = document.querySelector("#display");
    showMultiDisplay.textContent += multiContent;
    operation.oper = "multi";
    operation.pos = true
  }
};

let displayDiv = document.querySelector("#div")
displayDiv.addEventListener("click", () => {
  check(); displayDivs();
});

function displayDivs() {
  if (operation.a === undefined) {
    
  } else if (checks.length - checks.sum == 1) {

  } else if (operation.oper != " " && operation.a != undefined && operation.b != undefined) {
    let divContent = " " + displayDiv.textContent + " ";
    let showDivDisplay = document.querySelector("#display");
    showDivDisplay.textContent += divContent;
    doTheMathButNoShow();
    operation.oper = "div"
    operation.pos = true
  } else {
    let divContent = " " + displayDiv.textContent + " ";
    let showDivDisplay = document.querySelector("#display");
    showDivDisplay.textContent += divContent;
    operation.oper = "div";
    operation.pos = true
  }
};

let clearButton = document.querySelector("#clear")
clearButton.addEventListener("click", () => {
  clear();
});

function clear() {
  operation.a = undefined;
  operation.b = undefined;
  operation.oper = " ";
  operation.c = undefined;
  operation.pos = true;
  let showClearDisplay = document.querySelector("#display");
  showClearDisplay.textContent = " "
  let showClearDivDisplay = document.querySelector("#divError");
  showClearDivDisplay.textContent = ""
}


function clearDiv() {
  operation.a = undefined;
  operation.b = undefined;
  operation.oper = " ";
  operation.c = undefined;
  operation.pos = true;
  let showClearDivDisplay = document.querySelector("#divError");
  showClearDivDisplay.textContent = "NO SE PUEDE DIVIDIR POR 0 AMIGO"
  let showClearDisplay = document.querySelector("#display");
  showClearDisplay.textContent = " "
}
 
let toggleNegative = document.querySelector("#negative")
toggleNegative.addEventListener("click", () => {
  toggle();
});

function toggle() {
  if (operation.oper === " " && operation.a == undefined && operation.pos == true) {
    let showDisplay = document.querySelector("#display");
    showDisplay.textContent = "-"
    operation.pos = false
  } else if (operation.oper === " " && operation.a == undefined && operation.pos == false) {
    let showDisplay = document.querySelector("#display");
    showDisplay.textContent = ""
    operation.pos = true
  } else if (operation.oper === " " && operation.a != undefined && operation.pos == true) {
    let showDisplay = document.querySelector("#display");
    showDisplay.textContent = "-".concat(showDisplay.textContent); 
    let a = showDisplay.textContent
    operation.a = parseFloat(a);
    operation.pos = false
  } else if (operation.oper === " " && operation.a != undefined && operation.pos == false) {
    let showDisplay = document.querySelector("#display");
    showDisplay.textContent = showDisplay.textContent.slice(1);
    let a = showDisplay.textContent
    operation.a = parseFloat(a);
    operation.pos = true
  } else if (operation.oper != " " && operation.pos == true && operation.b == undefined) {
    let showDisplay = document.querySelector("#display")
    showDisplay.textContent = showDisplay.textContent.concat("-");
    operation.pos = false;
  } else if (operation.oper != " " && operation.pos == false && operation.b == undefined) {
    let showDisplay = document.querySelector("#display")
    showDisplay.textContent = showDisplay.textContent.slice(0,-1);
    operation.pos = true;
  } else if (operation.oper != " " && operation.pos == true && operation.b != undefined) {
    let showDisplay = document.querySelector("#display")
    x = showDisplay.textContent.lastIndexOf(" ") + 1
    showDisplay.textContent = showDisplay.textContent.slice(0,x) + "-" + showDisplay.textContent.slice(x);
    let b = showDisplay.textContent.slice(x)
    operation.b = parseFloat(b)
    operation.pos = false;
  } else if (operation.oper != " " && operation.pos == false && operation.b != undefined) {
    let showDisplay = document.querySelector("#display")
    x = showDisplay.textContent.lastIndexOf("-") 
    y = x + 1
    showDisplay.textContent = showDisplay.textContent.slice(0,x) + showDisplay.textContent.slice(y);
    let b = showDisplay.textContent.slice(x)
    operation.b = parseFloat(b)
    operation.pos = true;
  }
}

let decimal = document.querySelector("#decimal")
decimal.addEventListener("click", () => {
  decimals();
});

function decimals() {
  if (operation.a == undefined && operation.oper == " " && operation.pos == true) {
    let showDisplay = document.querySelector("#display")
    showDisplay.textContent = "0."
    operation.a = 0
  } else if (operation.a == undefined && operation.oper == " " && operation.pos == false) {
    let showDisplay = document.querySelector("#display")
    showDisplay.textContent = "-0."
    operation.a = 0
  } else if (operation.a != undefined && operation.oper == " ") {
    let showDisplay = document.querySelector("#display")
    let x = showDisplay.textContent.lastIndexOf(".")
    function checksX() {
     if (x == -1) {
      showDisplay.textContent = showDisplay.textContent.concat(".")
     }
    }
    checksX();
    let a = showDisplay.textContent
    operation.a = parseFloat(a)
  } else if (operation.oper != " " && operation.b == undefined && operation.pos == true) {
    let showDisplay = document.querySelector("#display")
    let x = showDisplay.textContent.lastIndexOf(" 0.")
    function checksComa() {
      if (x == -1) {
      showDisplay.textContent = showDisplay.textContent.concat("0.")  
      operation.coma = "0."
      operation.b = ""
      }
    }
    checksComa();
  } else if (operation.oper != " " && operation.b == undefined && operation.pos == false) {
    let showDisplay = document.querySelector("#display")
    let x = showDisplay.textContent.lastIndexOf(" -0.")
    function checksComa() {
      if (x == -1) {
      showDisplay.textContent = showDisplay.textContent.concat("0.")
      operation.coma = "0."
      operation.b = ""
      }
    }
    checksComa();
  } else if (operation.oper != " " && operation.b != undefined && operation.pos == true) {
    let showDisplay = document.querySelector("#display")
    let x = showDisplay.textContent.lastIndexOf(" ") + 1
    let y = showDisplay.textContent.slice(x)
    let z = y.lastIndexOf(".")
    function checksX() {
     if (z == -1) {
      showDisplay.textContent = showDisplay.textContent.concat(".")
      operation.coma = "."
     }
    }
    checksX();
    } else if (operation.oper != " " && operation.b != undefined && operation.pos == false) {
    let showDisplay = document.querySelector("#display")
    let x = showDisplay.textContent.lastIndexOf(" ") + 1
    let y = showDisplay.textContent.slice(x)
    let z = y.lastIndexOf(".")
    function checksX() {
     if (z == -1) {
      showDisplay.textContent = showDisplay.textContent.concat(".")
      operation.coma = "."
     }
    }
    checksX();
    }
}
