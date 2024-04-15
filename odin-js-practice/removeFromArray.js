// Remove from Array TOP exercise 04
// removeFromArray([1, 2, 3, 4], 3);  should remove 3 and return [1,2,4]

//looked through array methods and .filter seemed like it would work
function removeFromArray(arr,target){
    return arr.filter((num) => num != target);
}
//so this works, what they said this also works 
//also they talked about  - Rest operator- which looks like "...args" and allows for an unlimited
//number of parameters. I assume this is if you want to remove different targets

//their work:
const removeFromArray2 = function(arr, ...args){
  const newArray = [];
  
  arr.forEach((item) =>{
      
      if(!args.includes(item)){ //if args doesnt include current number
          newArray.push(item);
      }
  });
  
  return newArray;
};

//I know you can put functions into variables like that, its just new to me.
//Also the ; after array.forEach feels unnatural to me.

console.log(removeFromArray([1,2,3,4],3));
console.log(removeFromArray2([1,2,3,4],3));