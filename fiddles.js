// fiddles
// different function approach


// operation w/ multiple arguments
const add = function () {
    let sumR = 0;
    for (let i = 0; i < arguments.length; i++) {
      sumR += arguments[i];
    }
    return sumR;
}
const subtract = function () {
    let subR = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
      subR -= arguments[i];
    }
    return subR;
}
const multiply = function () {
    let mulR = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
      mulR *= arguments[i];
    }
    return mulR;
}
const divide = function () {
    let divR = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
      divR /= arguments[i];
    }
    return divR;
}

