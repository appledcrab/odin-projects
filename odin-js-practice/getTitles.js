// Exercise #11 Get the Titles!
/*
You are given an array of objects that represent books with an author and a title that looks like this:

const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]
Your job is to write a function that takes the array and returns an array of titles:

getTheTitles(books) // ['Book','Book2']
*/

// ?hint is to ...use a built in js method to do most of the work
// im assuming the..uhh map one. map method for arrs
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

function getTheTitles(arr){
    return arr.map((book)=> `${book.title}`);
}

console.log(getTheTitles(books));