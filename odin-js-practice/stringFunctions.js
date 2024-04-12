//Chosen js exercises from TOP.

//02_repeatString
function repeatString(str,amt){
    result = '';
    for(let i =0; i < amt;i++){
        result +=str;
    }
    return result;
}
// The solution made me consider negative numbers.
// ALSO! str.repeat(x) exists!!!

//03_reverseString
function reverseString(str){
    if (str === ''){
        return str;
    }else{
    let middle = parseInt((str.length-1)/2);
    let result='';
    return result += reverseString(str.substring(middle+1)) + str.charAt(middle)+ reverseString(str.substring(0,middle));
    }
}
// Looking at solution there is a better way to do this. with str.split('').reverse().join('') :/ thats ok