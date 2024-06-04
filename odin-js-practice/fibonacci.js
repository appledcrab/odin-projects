// Exercise #10 Fibonacci
/*
Create a function that returns a specific member of the Fibonacci sequence:

A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.
*/

function fibo(pos){
    // pos for position
    if (pos == 0){
        return 0;
    }else if (pos ==1){
        return 1;
    }

    // otherwise pos is 2+
    result = 0;

    prev_1 = 0;
    prev_2 = 1;

    for (let i = 2;i<=pos; i++){
        result = prev_1 + prev_2;
        prev_1=prev_2;
        prev_2 = result;
    }
    return result;

}