// Exercise #12 Find the Oldest
/*
Given an array of objects representing people with a birth and death year, return the oldest person.

Now that you've reached the final exercise, you should be fairly comfortable getting the information you need from test case(s). Take a look at how the array of objects is constructed in this exercise's test cases to help you write your function.
*/
// looking at the specs they had.. i didnt feel like forking each thing so it all goes here...
// its read like "yearOfBirth" and "yearOfDeath"

function findOldest(arr){
    // im trying hard to not look at my previous "arr cardio" cause i should be bale to know this
    // were returning the OLDest person so only one person. might be able to use .reduce

    // oldest as an obj.
    const defaultperson = {
        name: "default",
        yearOfBirth: 2000,
        yearOfDeath: 2000,
    }
    const oldest = arr.reduce((oldest, curr_person) => {
            if ((oldest.yearOfDeath - oldest.yearOfBirth) < (curr_person.yearOfDeath - curr_person.yearOfBirth)){
                return curr_person;
            }else{
                return oldest;
            }
    },defaultperson);
    return oldest;
}

const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ];

console.log(findOldest(people));


// ! this does NOT account if someone doesnt have a death year :/
