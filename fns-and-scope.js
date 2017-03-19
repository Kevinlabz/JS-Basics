//////////////////PROBLEM 1////////////////////
var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
function isTyler(name) {
  if (name === 'Tyler') {
    return true;
  } else { 
    return false;
  }
}

console.log('Show me return: ' + isTyler(name));
//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.
function getName() {
  var tempInput = prompt('What is your name user? ', 'your name here');
  return tempInput;
}

  //Code Here


//////////////////PROBLEM 3////////////////////
//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome() {
  var tempName =  getName();
  alert('Welcome, ' + tempName);
}

  //Code Here


//////////////////PROBLEM 4////////////////////

//What is the difference between arguments and parameters?
  //Answer Here
//Argument is what function receive when functions are called
//Parameters are what function initiates with variable.


//////////////////PROBLEM 5////////////////////
//What are all the falsy values in JavaScript and how do you check if something is falsy?
  //Answer Here

/*
NaN
undefined
false
0
''
null
*/



//////////////////PROBLEM 6////////////////////
//Create a function called myName that returns your name
  //Code Here
function myName() {
  var nameVal = getName();
  return nameVal;
}


//Now save the function definition of myName into a new variable called newMyName
var newMyName = myName;
  //Code Here

//Now alert the result of invoking newMyName
alert('Welcome, ' + newMyName);


//////////////////PROBLEM 7////////////////////
//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

//Now invoke innerFn.
