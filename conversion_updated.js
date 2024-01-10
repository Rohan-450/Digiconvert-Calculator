export function frequency(a){
    let count = 0;
    for(let i = 0; i <a.length; i++){
        if(a[i] == '.'){
            count ++;
        }
    }
    if(count == 0 || count == 1){
        return 1;
    }
    else{
        return 0;
    }
}


//Decimal to Binary

export function decimalToBinary(num){
    let check = frequency(num);
    if(check == 1){
        const decimal = parseFloat(num);
        const hex = decimal.toString(2).toUpperCase();
        if(hex.includes('.')){
            let splitted = hex.split('.');
            if (splitted[1].length == 0){
                return splitted[0];
            }
            else if(splitted[1].length < 5){
                let txt = (splitted[0] + '.')
                for(let i = 0;i<splitted[1].length;i++){
                    txt += splitted[1][i];
                }
                return txt;
            }
            else{
                let txt = (splitted[0] + '.')
                for(let i = 0;i<5;i++){
                    txt += splitted[1][i];
                }
                return txt;
            }
        }
        else{
            return hex;
        }
    }
    else if (check == 0){
        return ('Error');
    }
}




//Decimal to Hexadecimal

export function decimalToHexadecimal(num){
    let check = frequency(num);
    if(check == 1){
        const decimal = parseFloat(num);
        const hex = decimal.toString(16).toUpperCase();
        if(hex.includes('.')){
            let splitted = hex.split('.');
            if (splitted[1].length == 0){
                return splitted[0];
            }
            else if(splitted[1].length < 5){
                let txt = (splitted[0] + '.')
                for(let i = 0;i<splitted[1].length;i++){
                    txt += splitted[1][i];
                }
                return txt;
            }
            else{
                let txt = (splitted[0] + '.')
                for(let i = 0;i<5;i++){
                    txt += splitted[1][i];
                }
                return txt;
            }
        }
        else{
            return hex;
        }
    }
    else if (check == 0){
        return('Error');
    }
}




//Decimal to Octal


export function decimalToOctal(num){
    let check = frequency(num);
    if(check == 1){
        const decimal = parseFloat(num);
        const hex = decimal.toString(8).toUpperCase();
        if(hex.includes('.')){
            let splitted = hex.split('.');
            if (splitted[1].length == 0){
                return splitted[0];
            }
            else if(splitted[1].length < 5){
                let txt = (splitted[0] + '.')
                for(let i = 0;i<splitted[1].length;i++){
                    txt += splitted[1][i];
                }
                return txt;
            }
            else{
                let txt = (splitted[0] + '.')
                for(let i = 0;i<5;i++){
                    txt += splitted[1][i];
                }
                return txt;
            }
        }
        else{
            return hex;
        }
    }
    else if (check == 0){
        return('Error');
    }
}




//Binary to Decimal


export function binaryToDecimal(bin){
    let check = frequency(bin);
    if(check == 1){
        if (bin.includes('.')) {
            let bin_array = bin.split('.');
            let m = bin_array[0].length - 1;
            let n = bin_array[1].length;
            let sum1 = 0, sum2 = 0;
            for (let i = 0; i < bin_array[0].length; i++) {
                sum1 += (parseInt(bin_array[0][i]) * Math.pow(2, m));
                m--;
            }
            if (n !== 0) {
                let p = -1;
                for (let i = 0; i < bin_array[1].length; i++) {
                    sum2 += (parseInt(bin_array[1][i]) * Math.pow(2, p));
                    p--;
                }
            }
            let sum = sum1 + sum2;
            let str = sum.toString();
            let ov_arr = str.split('.');

            if (ov_arr[1] && ov_arr[1].length > 5) {
                return (ov_arr[0] + '.' + ov_arr[1].slice(0, 5));
            } else {
                return str;
            }
        } else {
            let decimalNumber = parseInt(bin, 2);
            return decimalNumber.toString();
        }
    }
    else if(check == 0){
        return('Error');
    }
}




//Binary to Hexadecimal


export function binaryToHexadecimal(hex){
    let check = frequency(hex);
    if(check == 1){
        const conv_obj = {
            "0000": "0",
            "0001": "1",
            "0010": "2",
            "0011": "3",
            "0100": "4",
            "0101": "5",
            "0110": "6",
            "0111": "7",
            "1000": "8",
            "1001": "9",
            "1010": "A",
            "1011": "B",
            "1100": "C",
            "1101": "D",
            "1110": "E",
            "1111": "F"
        };

        if (hex.includes('.')) {
            let whole_array = [];
            let fractional_array = [];
            let whole_str = "";
            let fractional_str = "";
            let splitted = hex.split('.');

            let count = splitted[0].length % 4;
            if (count > 0) {
                splitted[0] = "0".repeat(4 - count) + splitted[0];
            }

            for (let i = 0; i < splitted[0].length; i += 4) {
                whole_array.push(splitted[0].slice(i, i + 4));
            }

            for (let i = 0; i < whole_array.length; i++) {
                whole_str += conv_obj[whole_array[i]];
            }

            if (splitted[1].length > 0) {
                let count = splitted[1].length % 4;
                if (count > 0) {
                    splitted[1] += "0".repeat(4 - count);
                }

                for (let i = 0; i < splitted[1].length; i += 4) {
                    fractional_array.push(splitted[1].slice(i, i + 4));
                }

                for (let i = 0; i < fractional_array.length; i++) {
                    fractional_str += conv_obj[fractional_array[i]];
                }

                if (fractional_str.length <= 5) {
                    return whole_str + '.' + fractional_str;
                } else {
                    return whole_str + '.' + fractional_str.slice(0, 5);
                }
            } else {
                return whole_str;
            }
        } else {
            let dec = parseInt(hex, 2);
            let hexa = dec.toString(16).toUpperCase();
            return hexa;
        }
    }
    else if (check == 0){
        return('Error');
    }
}




//Binary to Octal


export function binaryToOctal(binary){
    let check = frequency(binary);
    if(check == 1){
        const conv_obj = {
            "000": "0",
            "001": "1",
            "010": "2",
            "011": "3",
            "100": "4",
            "101": "5",
            "110": "6",
            "111": "7",
        };

        if (binary.includes('.')) {
            let whole_array = [];
            let fractional_array = [];
            let whole_str = "";
            let fractional_str = "";
            let splitted = binary.split('.');

            let count = splitted[0].length % 3;
            if (count > 0) {
                splitted[0] = "0".repeat(3 - count) + splitted[0];
            }

            for (let i = 0; i < splitted[0].length; i += 3) {
                whole_array.push(splitted[0].slice(i, i + 3));
            }

            for (let i = 0; i < whole_array.length; i++) {
                whole_str += conv_obj[whole_array[i]];
            }

            if (splitted[1].length > 0) {
                let count = splitted[1].length % 3;
                if (count > 0) {
                    splitted[1] += "0".repeat(3 - count);
                }

                for (let i = 0; i < splitted[1].length; i += 3) {
                    fractional_array.push(splitted[1].slice(i, i + 3));
                }

                for (let i = 0; i < fractional_array.length; i++) {
                    fractional_str += conv_obj[fractional_array[i]];
                }

                if (fractional_str.length <= 5) {
                    return whole_str + '.' + fractional_str;
                } else {
                    return whole_str + '.' + fractional_str.slice(0, 5);
                }
            } else {
                return whole_str;
            }
        } else {
            let dec = parseInt(binary, 2);
            let octal = dec.toString(8);
            return octal;
        }
    }
    else if(check == 0){
        return('Error');
    }
}




//Hexadecimal to Binary


export function hexadecimalToBinary(hex){
    let check = frequency(hex);
    if(check == 1){
        let conv_obj = {
            "0":"0000",
            "1":"0001",
            "2":"0010",
            "3":"0011",
            "4":"0100",
            "5":"0101",
            "6":"0110",
            "7":"0111",
            "8":"1000",
            "9":"1001",
            "A":"1010",
            "B":"1011",
            "C":"1100",
            "D":"1101",
            "E":"1110",
            "F":"1111",
        }
        if(hex.includes('.')){
            let hex_array = hex.split('.');
            let hex1_str = "";
            let hex2_str = "";
            for(let i = 0; i < hex_array[0].length; i++){
                hex1_str += conv_obj[hex_array[0][i]];
            }
            for(let i = 0; i < hex_array[1].length; i++){
                hex2_str += conv_obj[hex_array[1][i]];
            }
            if(hex2_str.length == 0){
                return hex1_str;
            }
            else if (hex2_str.length <= 5){
                return (hex1_str + '.' + hex2_str);
            }
            else{
                let c = hex2_str.slice(0,5);
                return (hex1_str + '.' + c);
            }
        }
        else{
            let fin_str = "";
            for (let i = 0; i <hex.length;i++){
                fin_str += conv_obj[hex[i]];
            }
            return fin_str;
        }
    }
    else if(check == 0){
        return('Error');
    }
}




//Hexadecimal to Decimal


export function hexadecimalToDecimal(hex){
    let check = frequency(hex);
    if(check == 1){
        let s = hexadecimalToBinary(hex);
        let y = binaryToDecimal(s);
        return y;
    }
    else if (check == 0){
        return('Error');
    }
}




//Hexadecimal to Octal


export function hexadecimalToOctal(hex){
    let check = frequency(hex);
    if(check == 1){
        let s = hexadecimalToBinary(hex);
        let y = binaryToOctal(s);
        return y;
    }
    else if(check == 0){
        return('Error');
    }
}




//Octal to Decimal


export function octalToDecimal(oct){
    let check = frequency(oct);
    if(check == 1){
        if (oct.includes('.')) {
            let oct_array = oct.split('.');
            let m = oct_array[0].length - 1;
            let n = oct_array[1].length;
            let sum1 = 0, sum2 = 0;

            for (let i = 0; i < oct_array[0].length; i++) {
                sum1 += (parseInt(oct_array[0][i]) * Math.pow(8, m));
                m--;
            }

            if (n !== 0) {
                let p = -1;
                for (let i = 0; i < oct_array[1].length; i++) {
                    sum2 += (parseInt(oct_array[1][i]) * Math.pow(8, p));
                    p--;
                }
            }

            let sum = sum1 + sum2;
            let str = sum.toString();
            let ov_arr = str.split('.');

            if (ov_arr[1] && ov_arr[1].length > 5) {
                return (ov_arr[0] + '.' + ov_arr[1].slice(0, 5));
            } else {
                return str;
            }
        } else {
            let decimalNumber = parseInt(oct, 8);
            return decimalNumber.toString();
        }
    }
    else if(check == 0){
        return('Error');
    }
}




//Octal to Binary


export function octalToBinary(octal){
    let check = frequency(octal);
    if(check == 1){
        let s = octalToDecimal(octal);
        let v = decimalToBinary(s);
        return v;
    }
    else if(check == 0){
        return('Error');
    }
}




//Octal to Hexadecimal


export function octalToHexadecimal(octal){
    let check = frequency(octal);
    if(check == 1){
        let s = octalToDecimal(octal);
        let v = decimalToHexadecimal(s);
        return v;
    }
    else if (check == 0){
        return('Error');
    }
}
