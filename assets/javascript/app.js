/*
1. Create Variables:
var userChoice
var questions
var options

2. create 120 second timer to initiate the game and end game at the end of the timer(use simple timer exercise). 
if clock === 0, then answers are submitted;
3. Create a new $(<div>) to hold 8 questions. 
4. Create if/else statements to determine whether questions are right or wrong.
5. create counters for correct and incorrect answers
6. create a formula to determine what percentage someone got with conditions above 70% means ok but study up, over 80% is great job, over 90% is excellent
7. use on-click(event listen) method to determine answers when a user hits submit
*/



//lets create our variables//
var userChoice;
var options;
var count = 120;
var questions = [
    "What is the capital of Michigan?", 
    "What is the capital of Idaho?",
    "What is the capital of Mississippi?",
    "What is the capital of Vermont?",
    "What is the capital of Oregon?",
    "What is the capital of Texas?",
    "What is the capital of Illinois?",
    "What is the capital of Missouri?"
];

var answers = [
["A. Detroit", "B. Saginaw", "C. Ann Arbor", "D. Lansing"], 
["A. Boise", "B. Lewiston", "C. Twin Falls", "D. Meridian"],
["A. Tupelo", "B. Biloxi", "C. Jackson", "D. Starkville"],
["A. Burlington", "B. Montpelier", "C. Manchester", "D. Stowe"],
["A. Salem", "B. Portland", "C. Bend", "D. Eugene"],
["A. San Antonio", "B. Austin", "C. Houston", "D. El Paso"],
["A. Chicago", "B. Springfield", "D. Peoria", "C. Carbondale"],
["A. St. Louis", "B. Columbia", "C. Kansas City", "D. Jefferson City"]
]

console.log(answers);



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
    
    //this is a for loop inside of a for loop//
     for(var idx = 0; idx < answers.length; idx++){
        var answerDiv = $("<div>" + answers[idx] + "</div>");
    
       
    }
}



/*var elements = $();
for(x = 0; x < 1000; x++) {
    elements = elements.add('<div>'+x+'</div>');
    // or 
    // var element = $('<div>'+x+'</div>');
    // elements = elements.add(element);
}
$('body').append(elements);*/