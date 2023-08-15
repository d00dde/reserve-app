function compare(operator, a, b) {
  switch (operator) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return Math.floor(a / b);
    default: throw new Error(`Not expected operator: ${operator}`);
  }
}

function plus(b) {
  return ["+", b];
}

function minus(b) {
  return ["-", b];
}

function times(b) {
  return ["*", b];
}

function dividedBy(b) {
  return ["/", b];
}

function zero(arg) {
  if(!arg) {
    return 0;
  }
  return compare(arg[0], 0, arg[1]);
}

function one(arg) {
  if(!arg) {
    return 1;
  }
  return compare(arg[0], 1, arg[1]);
}

function two(arg) {
  if(!arg) {
    return 2;
  }
  return compare(arg[0], 2, arg[1]);
}

function three(arg) {
  if(!arg) {
    return 3;
  }
  return compare(arg[0], 3, arg[1]);
}

function four(arg) {
  if(!arg) {
    return 4;
  }
  return compare(arg[0], 4, arg[1]);
}

function five(arg) {
  if(!arg) {
    return 5;
  }
  return compare(arg[0], 5, arg[1]);
}

function six(arg) {
  if(!arg) {
    return 6;
  }
  return compare(arg[0], 6, arg[1]);
}

function seven(arg) {
  if(!arg) {
    return 7;
  }
  return compare(arg[0], 7, arg[1]);
}

function eight(arg) {
  if(!arg) {
    return 8;
  }
  return compare(arg[0], 8, arg[1]);
}

function nine(arg) {
  if(!arg) {
    return 9;
  }
  return compare(arg[0], 9, arg[1]);
}

console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3
