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
//var count = 120;
var questionsArray = [{
    question: "What is the capital of Michigan?",
    answers: ["A. Detroit", "B. Saginaw", "C. Ann Arbor", "D. Lansing"],
    correctAnswer: 3,
},
{ 
    question: "What is the capital of Idaho?",
    answers: ["A. Boise", "B. Lewiston", "C. Twin Falls", "D. Meridian"],
    correctAnswer: 0,
},
{
    question: "What is the capital of Mississippi?",
    answers: ["A. Tupelo", "B. Biloxi", "C. Jackson", "D. Starkville"],
    correctAnswer: 2,
},
{
    question: "What is the capital of Vermont?",
    answers: ["A. Burlington", "B. Montpelier", "C. Manchester", "D. Stowe"],
    correctAnswer: 1,
},
{
    question: "What is the capital of Oregon?",
    answers: ["A. Salem", "B. Portland", "C. Bend", "D. Eugene"],
    correctAnswer: 0,
},
{
    question: "What is the capital of Texas?",
    answers: ["A. San Antonio", "B. Austin", "C. Houston", "D. El Paso"],
    correctAnswer: 1,
},
{
    question:"What is the capital of Illinois?",
    answers: ["A. Chicago", "B. Springfield", "D. Peoria", "C. Carbondale"],
    correctAnswer: 1,
},
{
   question: "What is the capital of Missouri?",
   answers: ["A. St. Louis", "B. Columbia", "C. Kansas City", "D. Jefferson City"],
   correctAnswer: 3,
}];

var correctCounter = 0;
var incorrectCounter = 0;
var allAnswered = false;


/*
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
*/    



function createQuestions (){
for (var i = 0; i < questionsArray.length; i++) {
    var questionContainer = $("<div class = question>");
    var questionP = $("<p>" + questionsArray[i].question + "</p>");
    var ul = $('<ul>');
    var questionBox = $('#questionBox');
   

    questionBox.append(questionContainer);
    for(var j = 0; j < questionsArray[i].answers; j++){
        var li = $('<li class="answer" data-correct="'+ questionsArray[i].correctanswer +'" data-userAnswer="' + j + '">' + questionsArray[i].answers[j] + "</li>");
        ul.append(li)
    }
    questionBox.append(ul);
  }
}


$(document).on("click", ".answer", function(){
    handleAnswerClick();
})

function runGame(){
    createQuestions();
    timer();
    endgame();
}

function handleAnswerClick(){
    var userguess = $(this).attr('data-userAnswer');
    var correctguess = $(this).attr('data-correct');
    if (userguess === correctguess) {
        correctCounter++
    } else {
        incorrectCounter++
    }
}
    /*this is a for loop inside of a for loop
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