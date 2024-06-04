// Excerise #9
/*
Write a function that determines whether or not a given string is a palindrome.

A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks:

some palindromes:
A car, a man, a maraca.
Rats live on no evil star.
Lid off a daffodil.
Animal loots foliated detail of stool lamina.
A nut for a jar of tuna.
palindromes('racecar') // true
*/

function isPalindrome(str){
    // can i do a filter of isalphanumeric on each individual string of the str
    function isAlphanumeric(str) {
        return str.search(/^[a-zA-Z0-9]+$/) !== -1;
      }

    const new_str = str.split('')
                    .filter((character) => isAlphanumeric(character))
                    .join('')
                    .toLowerCase();
    const reversed_str = new_str.split('').reverse().join('');
    // console.log(`${new_str} and ${reversed_str}`);
    return new_str === reversed_str;
}