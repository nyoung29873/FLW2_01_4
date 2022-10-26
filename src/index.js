// task 1: Create your own JavaScript object representing your
//    favorite movie. Include at least 5 properties: movie title,
//    director, release year, actors (make this an array with at
//    least 3 elements), and length of movie in minutes.
//    Feel free to add more!

let favMovie = {
  title: "Shawshank Redemption",
  director: "Frank Darabont",
  release_year: 1994,
  actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
  running_time_minutes: 144
};

// task 2: After you have created your movie object, console log the
//    title of your movie using dot notation.
console.log(favMovie.title);

// task 3: Console log the director's name
console.log(favMovie.director);

// task 4: Console log the release year.
console.log(favMovie.release_year);

// task 5: Use bracket notation in combination with dot notation to
//    access one of the actors and console log their name.
console.log(favMovie.actors[1]);

// task 6: Add an actor to the arrays of actors. Console log the array
//    to check the actor was added.
favMovie.actors[3] = "Big Bird";
// or favMovie.actors.push("Big Bird");
console.log(favMovie.actors);

// task 7: Oh, no! One of the actors has been cancelled! Remove one
//    of the actors from the array. Console log the array to check
//    the actor was removed.

favMovie.actors.pop();
console.log(favMovie.actors);

favMovie.actors.splice(0, 1, "Big Bird", "Oscar");

// task 8: An extended director's cut has been release for your movie!
//    Add 20 minutes to the duration. Console log duration.

favMovie.running_time_minutes = favMovie.running_time_minutes + 20;
console.log(favMovie.running_time_minutes);