//Decimal to Binary
export function dectobin(decimalNumber){
    let binaryNumber = decimalNumber.toString(2);
    return binaryNumber;
}

// Decimal to Hexadecimal
export function dectohex(decimalNumber){
    let hexadecimalNumber = decimalNumber.toString(16).toUpperCase();
    return hexadecimalNumber;
}

//Decimal to Octal
export function dectooct(decimalNumber){
    let octalNumber = decimalNumber.toString(8);
    return octalNumber;
}


//Binary to Decimal
export function bintodec(binaryNumber){
    let decimalNumber = parseInt(binaryNumber, 2);
    return decimalNumber;
}

// Binary to Hexadecimal
export function bintohex(binaryNumber){
    let hexadecimalNumber = parseInt(binaryNumber, 2).toString(16).toUpperCase();
    return hexadecimalNumber;
}

// // Binary to Octal
export function bintooct(binaryNumber){
    let octalNumber = parseInt(binaryNumber, 2).toString(8);
    return octalNumber;
}


//Hexadecimal to Decimal
export function hextodec(hexadecimalNumber){
    let decimalNumber = parseInt(hexadecimalNumber, 16);
    return decimalNumber;
}

// Hexadecimal to Binary
export function hextobin(hexadecimalNumber){
    let binaryNumber = parseInt(hexadecimalNumber, 16).toString(2);
    return binaryNumber;
}

// Hexadecimal to Octal
export function hextooct(hexadecimalNumber){
    let octalNumber = parseInt(hexadecimalNumber, 16).toString(8);
    return octalNumber;
}


//Octal to Decimal
export function octtodec(octalNumber){
    let decimalNumber = parseInt(octalNumber, 8);
    return decimalNumber;
}

// Octal to Binary
export function octtobin(octalNumber){
    let binaryNumber = parseInt(octalNumber, 8).toString(2);
    return binaryNumber;
}

// Octal to Hexadecimal
export function octtohex(octalNumber){
    let hexadecimalNumber = parseInt(octalNumber, 8).toString(16).toUpperCase();
    return hexadecimalNumber;
}
