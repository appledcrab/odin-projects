// Sum All TOP exercise 05
// sumAll(1, 4) returns the sum of 1 + 2 + 3 + 4 which is 10
//in this it takes two integers and returns the num of every number between and including them

function sumAll(start,end){
    let sum = 0;
    for (let i = start; i <=end;i++){
        sum += i;
    }
    return sum;
}

//first thought that popped into my head and make the most sense to me.

// this doesnt take into the consideration that they could input 4,1 or if what is inputted are not numbers

function sumAll2(start,end){
    // taking care of edge cases
    if (!Number.isInteger(start) || !Number.isInteger(end)){
        return "Non-Integers included :(";
    }
    if(start > end){
        //swap them
        const temp = end;
        end = start;
        start = temp;
    }
    let sum = 0;
    for (let i = start; i <=end;i++){
        sum += i;
    }
    return sum;
}
console.log(sumAll2(4,1));