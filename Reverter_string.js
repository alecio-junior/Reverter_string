let newStr = '';

function reverseAStrings(str){
    for (let i = str.length-1; i >= 0; i--){
        newStr += str(i);
    }
    console.log(newStr);
}

let resultado = reverseAStrings('Hello Gama Academy');