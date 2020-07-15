/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
if(votingAge > 18){
    let votingAge=20;
    console.log('Ok')
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let videoGames = '$15'
if(videoGames == '$60'){
    console.log('Should I save or buy?');
  } else if(videoGames == '$15'){
    console.log('Thats a steal!');
  }




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
Number('1999') === 1999




//Task d: Write a function to multiply a*b 
function multiply(a, b){
    return a*b;
}
console.log(multiply(4,16));




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
let myAge = 19;
let earlyYears = 2;
earlyYears *= 10.5;
let laterYears = myAge - 2;
laterYears *= 4;
let myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);



/************************************************************** Task 3 **************************************************************/
// Dog feeder 
// takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

// feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
function feeder(dogAge, dogWeight){
  if(dogAge>=1, dogWeight === 1,2,3,4,5){
  return dogWeight*.05
  }
  else if (dogAge === 6 || dogAge === 7 || dogAge === 8 || dogAge === 9 || dogAge === 10){
      return dogWeight*0.04
  }
  else if (dogAge === 11 || dogAge === 12 || dogAge === 13 || dogAge === 14 || dogAge === 15){
      return dogWeight*0.03
  }
  else if(dogAge>=1, dogWeight>15){
      return dogW*0.02
  }
  else if(dogAge === 0.20 || dogAge === 0.26 ||dogAge === 0.32 || dogAge === 39){
      return dogAge*0.10
  }
  else if(dogAge === 0.40 || dogAge === 0.45 || dogAge === 0.60 || dogAge === 0.69){
      return dogAge*0.05
  }
  else if (dogAge === .70 || dogAge === .75 || dogAge === .83 || dogAge === .92){
      return dogAge*0.04
  }
}
console.log(feeder(3,9))


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
const game= () => {
  const randomNumber = (Math.floor(Math.random() * 3))
  if (randomNumber === 0){
    return 'Rock';
  }
  else if (randomNumber === 1){
    return 'Paper';
  }
  else if (randomNumber === 2){
  return 'Scissor';
  }
    }
console.log(game());
  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
var kilometers = parseInt(5);
var miles = kilometers / 1.6;
console.log(miles + " Miles");




//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
var feet = parseInt(13);
var centimeters = feet / 0.032808;
console.log(centimeters + " cm");




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
var bottles;
for (counter = 99; counter >= 1; counter = counter - 1) 
{
    if (counter == 1) {
        bottles = 'bottle';
    } else {
        bottles = 'bottles';
    }
    console.log(counter+" "+bottles+" of beer on the wall.");
    if (counter < 99) {
        console.log("");
        console.log(counter+" "+bottles+" of beer on the wall.");
    }
    console.log(counter+" "+bottles+" of beer.");
    console.log("Take one down.");
    console.log("Pass it around.");
    if (counter == 1) {
        console.log("No bottles of beer on the wall.");
    }
}




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function grades(num1){
  if(num1 >= 90){
    console.log('A')
  }else if(num1 >= 80){
    console.log('B')
  }else if(num1 >= 70){
    console.log('C')
  }else if(num1 >= 60){
    console.log('D')
  }else if(num1 < 60){
    console.log('F')
} 
console.log(grades(66));
}
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





