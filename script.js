/*************************************************************
* Variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job);

// variable naming rules
var _3years = 3:
var johnMark = 'John and Mark';
var if = 23 // cannot do
*/


/**************************************************************
 * Variable mutation and type coercion
*/
/*
 var firstName = 'John';
 var age = 28;

 // Type Correction
 console.log(firstName + ' ' +age);

 var job, isMarried;
 job = 'Teacher';
 isMarried = false;

 console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

 //variable mutation

 age = 'twenty eight'; // var keyword not needed as already defined.
 job = 'driver';

 alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

 var lastName = prompt('What is his last name');
 console.log(firstName + ' ' + lastName);
*/

/***************************************************************
  * Basic operators
*/


/*

//Math Operators

var yearJohn = 2018 - 28;
var yearMark = 2018 - 33;

console.log(yearJohn);

// to make things cleaner and more adaptable create a new var for year

var year = 2020;
var yearJohn = year - 28;
var yearMark = year - 33;

console.log(yearJohn);

//to tidy further we can do :

var year, yearJohn, yearMark;
now = 2020;  //slight change for rest of the demo
yearJohn = year - 28;
yearMark = year - 33;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


//Logical Operators

var now, ageJohn, ageMark;
now = 2020; 
ageJohn = 28;
ageMark = 33;

var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//typeof operator

console.log(typeof johnOlder); //returns boolean
console.log(typeof ageJohn); //returns number
console.log(typeof 'Mark is older than john'); //returns String

var x;
console.log(typeof x); //returns undefined
*/


/***************************************************************
  * Operator Precedence
*/

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//multiple operators
var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

// Grouping
var ageJohn =  now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) /2;

console.log(average);

// Multiple assignments

var x, y;
x = y = (3 + 5) * 4 - 6; //8 * 4 - 6 // 32 - 6 //26
console.log(x, y);

// More operators

x = x * 2; //can be simplified to:
x *= 2;
console.log(x); 

x +=10; // same as x = x + 10
console.log(x);

x = x +1; // same as
x +=1;//same as
x++

x = x - 1; //same as
x -=1; //same as
x--;




