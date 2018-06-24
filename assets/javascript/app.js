/*
1. Create Variables:
var userChoice
var questions
var options

2. create 30 second timer to initiate the game and end game at the end of the timer(use simple timer exercise). 
if clock === 0, then answers are submitted;
3. Create a new $(<div>) to hold 8 questions. 
4. Create if/else statements to determine whether questions are right or wrong.
5. create counters to see if answers are correct.
6. create a formula to determine what percentage someone got with conditions above 70% means ok but study up, over 80% is great job, over 90% is excellent
7. use on-click method to determine answers when a user hits submit
*/



//lets create our variables//
var userChoice;
var options;
var count = 120;
var questions=[
    "What is the capital of Michigan?", 
    "What is the capital of Idaho?",
    "What is the capital of Mississippi?",
    "What is the capital of Vermont?",
    "What is the capital of Oregon?",
    "What is the capital of Texas?",
    "What is the capital of Illinois?",
    "What is the capital of Missouri?"
]



var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
function timer(){
  
    count=count-1;
  
    if (count <= 0)
  {
     clearInterval(counter);
     //counter ended, do something here
     return;
  }
   document.getElementById("timer").innerHTML=count + " seconds left"; // watch for spelling
}
    


var questionContainer = $(".questionContainer");

for (var i = 0; i < questions.length; i++) {

    var questionDiv = $("<div>" + questions[i] + "</div>");

    questionContainer.append(questionDiv);
}

