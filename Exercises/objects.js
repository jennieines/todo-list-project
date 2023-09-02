//objects in javascript are data structures that allow you to store
// information in key-value pairs

//example object: contacts

let contacts = {
    "John" : "555-1234",
    "Susie" : "234-0098",
    "Mark" : "245-3323",
}

//console.log(contacts);

//look things up in objects

//look up Mark's number and store as a separate variable.

let marksNumber = contacts["Mark"];

//console.log("marksNumber:", marksNumber);

//add things to the object
//Mary's number is 456-0987. Add her to the contacts object
contacts["Mary"] = "456-0987";

//oops, Mary gave you the wrong number, the right one is actually 456-0988
//update her number in the contacts object
contacts["Mary"] = "456-0988"
//console.log(contacts);

//Suppose you habe a terrible business idea and decide to open a video rental store
//Create a movie object that stores the following properties for the movie:
//title, releaseYear, rating, numCopies

const movie1 = {
    title : "Barbie",
    releaseYear: "2023",
    rating: "PG-13",
    numCopies : 0,
}

const movie2 = {
    title : "Monty Python And The Holy Grail",
    releaseYear : "1975",
    rating : "PG",
    numCopies : 6,
}

let inventory = [movie1, movie2];

//write a function that lets people check out a movie by giving its title
//find the movie and decrease the number of copies by 1

function rentMovie(title) {
    // loop through the movies in the inventory
for (let movie of inventory) {
    // if the movies title equals the title parameter passed in
    if (movie.title.toLowerCase() == title.toLowerCase()) {
        //check if any copies are available
        if (movie.numCopies > 0) { 
        //decrease the movie's copies by 1 and return
        movie.numCopies--;
        console.log("Great, here's your movie! Please return in 15 minutes.");
  return;
    } else {
// if not, say we are out and return
console.log("Sorry all copies are rented currently");
return;
  }
}
}
//if loop finishes without ever returning, that means we don't have the movie
console.log("Sorry we don't have this movie");
}

rentMovie("Monty Python And The Holy Grail");
rentMovie("Barbie");
rentMovie("Hannah Montana: The Movie");

//console.log(movie1);

//print out a statement summarizing the movie info
//Eg. "Barbie was released in 2023 and has a PG-13 rating. We have 3 copies."

//let summary1 = `${movie1.title} was released in ${movie1.releaseYear} and has a ${movie1.rating} rating. We have ${movie1.numCopies} copies`

//console.log(summary1);