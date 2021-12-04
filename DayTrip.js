"use strict"
let destination = [ "Las Vegas" , "California" , "Arizona" , "Florida" ];
let resturant = [ "steak 44" , "Mcdonalds", "In and Out" , "Del Taco" ];
let transportation = [ "bus" , "rent car", "Air plane", " Train"];
let entertainment = [ "Danceing", "Movies", "Hiking", "Sky Diving"];

function randomArray(array){
  return array[Math.floor(Math.random() * array.length)];
}
var randDest = randomArray(destination);
console.log(randDest);

var randEnt = randomArray(entertainment);
console.log(randEnt);

var randTrans = randomArray(transportation);
console.log(randTrans);

var randRest = randomArray(resturant);
console.log(randRest);

let trip = [
  `Destination : ${randDest}`, 
  `Entertainment : ${randEnt}`, 
  `Transportation : ${randTrans}`, 
  `Resturant : ${randRest}`,]

function displayTrip(arrayFeatures){
  let TripIt = ""
  for(let i =0; i< arrayFeatures.length; i++){
    TripIt+= arrayFeatures[i] + "\n";

  }
  alert(TripIt);

 }
 displayTrip(trip);
 function app(){
   let userSatisfied = false;
   while(userSatisfied === false){
    displayTrip(trip);
    let userInput = prompt("Do you like this trip, YES or NO")
    if (userInput === "YES"){
      userSatisfied = true;
      displayTrip(trip);
    }else {
      //call a function that gives the user a option to reselect a trip
 reselectTripFeature();
    }
   }
  alert("Congradulations On Your Trip!")

 }

 function reselectTripFeature(){
   let userChoice = prompt("which feature will you change?\n 1 for Destination\n 2 For Restaurant\n 3 for Trsansportation\n 4 for Entertainment");
switch(userChoice){
    case "1" || "Destination" :
        trip[0] = `Destination: ${randomArray(destination)}`;
        break;
    case "2" || "Resturant" :
         trip[1] = `Resturant: ${randomArray (resturant)}`;
        break;
    case "3" || "Transportation" :
         trip[2] = `Transpotation: ${randomArray(transportation)}`;
      break;
    case "4" || "Entertainment":
           trip[3] = `Entertainment: ${randomArray(entertainment)}`;
      break;
   default:
        alert("option selected unavaliable. Please try again! please pick 1-4 instead."
        );
        reselectTripFeature();

}

 }
 
app()