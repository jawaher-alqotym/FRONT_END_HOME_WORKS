//Q1: Using forEach log out each of my friends but with their name all lower-cased. Use the <str>.toLowerCase() method.
const friends = ["Melissa", "Marc", "Andrew", "Nick"];

friends.forEach(function(friend) {
  console.log("I have a friend named " + friend.toLowerCase());
});

// Q2: Create an array that has the numbers of the array numbers squared
const numbers = [1, 5, 8]
const numbersSquared = numbers.map(num => num ** 2);
console.log('')
console.log(numbersSquared)

//Q3: Use map to create a new array that adds the string " is awesome" to each element in the array.
const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];
const awesome_instructors = instructors.map(elem => elem + ' is an awesome instructer')
console.log(awesome_instructors)

//Q4: Given the array nums try to count the number of even numbers using reduce() and put it in the variable evenNumbers:
const nums = [25, 6, 100, 3];
let sum = nums.reduce((acc, num) => acc + num);
  console.log(sum)

//Q5: Filter out all "jerks"!, Put them in an array called jerks
const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];
const jerks = people.filter(elem => elem.toLowerCase() == 'jerks');
console.log(jerks)

//Arrow Methods
//Create a function to get the average of a group of numbers avg([8, 2, 2, 4]) // should return 4

//Create a function to reverse the letters in a word reverse("caterpillar") // should return "rallipretac"


//Create a function to reverse the letters in a word reverse("caterpillar") // should return "rallipretac"