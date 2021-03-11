//create a variable that contains your name as the value 
let firstName = 'Joseph'; 
    console.log(firstName);

//create a constant that contains the number of states in the US and name them 
 const numOfStates = 50; 
    console.log(numOfState);

//compute the results of adding 5 and 4 and store it in a name variable
 let sum = 5 + 4; 
    console.log(sum);

//write a function called sayHello that displays an alert that sayd hello world, call the function
 function sayHello(){
    console.log('Hello World')
	};
	sayHello();
	

//write a function called checkAge that takes two arguments one for a name and one for age,	if age < 21 display sorry not old enough
 function checkAge(name, age) {
  if (age < 21) {
      alert('Sorry ' + name + ', you aren\'t old enough to view this page!');
   }
}

checkAge('Joseph', 29);
checkAge('Demetrius', 28);
checkAge('Bryan', 31);
checkAge('Jayla', 18); 
checkAge('Darion', 19);


//create an array of your favorite vegetables and name it 
 let favVeggies = ["broccoli", "brussels", "fruit", "carrot"];

// Use a loop to display each of my favorite vegetables to the console.
for (i = 0; i < favVeggies.length; i++){
	console.log(favVeggies[i])

// 3 arguments in a for loop: what we use to index through array, how long we want it to go, so in this case the length of favVeggies then how do we incremeant
// favVeggies[i] means evertytime it will loop through all of them in the array

 let pet = {
	name: "ace", breed: 'dalmation'};
  console.log(pet.name, pet.breed)

// console log inside of a function will run only when it is called and console.log outside of function will run when page loads

 let personArray = [
	{ name: 'Joseph', age: 29},
	{ name: "Bryan",age: 31},
	{ name: "Dylan",age: 27},
	{ name: "darion", age: 18 },
	{ name: "Brittany", age: 29 },
];

////  A loop to call the checkAge function for each object in the array, passing the object's name and age as arguments.
for (let i = 0; i < personArray.length; i++) {
	checkAge(personArray[i].name, personArray[i].age)
}

// getLength function that takes any word as an argument and returns the number of characters in the string
function getLength(string) {
  return string.length;
}

// Call the getLength function, passing 'Hello World' as the argument. Store the result in variable length.
let length = getLength('Hello World!');

// If the length is even, display 'The world is nice and even!' in the console. Otherwise, if the length is odd, display 'The world is an odd place!' in the console.
if (length % 2 == 0) {
  console.log('The world is nice and even!');
}
else {
  console.log('The world is an odd place!');
   }
}
