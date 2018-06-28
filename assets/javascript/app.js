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

var count = 120
var questionsArray = [{
    
    question: "What is the capital of Michigan?",
    answers: ["A. Detroit", "B. Saginaw", "C. Ann Arbor", "D. Lansing"],
    correctAnswer: 3,
    stateImage: ["https://bulbcycle.com/wp-content/uploads/2015/09/bulbcycle-image-michigan.png"]
},
{ 
    question: "What is the capital of Idaho?",
    answers: ["A. Boise", "B. Lewiston", "C. Twin Falls", "D. Meridian"],
    correctAnswer: 0,
    stateImage: ["https://cdn.weednews.co/wp-content/uploads/idaho-marijuana-cannabis.jpg"]
},
{
    question: "What is the capital of Mississippi?",
    answers: ["A. Tupelo", "B. Biloxi", "C. Jackson", "D. Starkville"],
    correctAnswer: 2,
    stateImage: ["https://timeincsecure-a.akamaihd.net/rtmp_uds/474428695/201611/3466/474428695_5219416274001_5219190833001-vs.jpg?pubId=474428695&videoId=5219190833001"]
},
{
    question: "What is the capital of Vermont?",
    answers: ["A. Burlington", "B. Montpelier", "C. Manchester", "D. Stowe"],
    correctAnswer: 1,
    stateImage: ["https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2012/10/01/100014358-vermont-welcome-sign-gettyp.jpg?v=1349112508"]
},
{
    question: "What is the capital of Oregon?",
    answers: ["A. Salem", "B. Portland", "C. Bend", "D. Eugene"],
    correctAnswer: 0,
    stateImage: ["http://thatoregonlife.com/wp-content/uploads/2015/02/stopmoving.jpg"]
},
{
    question: "What is the capital of Texas?",
    answers: ["A. San Antonio", "B. Austin", "C. Houston", "D. El Paso"],
    correctAnswer: 1,
    stateImage: ["https://businessintexas.com/sites/default/files/home_image_3.png"]
},
{
    question:"What is the capital of Illinois?",
    answers: ["A. Chicago", "B. Springfield", "D. Peoria", "C. Carbondale"],
    correctAnswer: 1,
    stateImage: ["https://tr4.cbsistatic.com/hub/i/r/2016/12/15/febb0a44-6e42-4434-a040-e4a0c6eeaffe/resize/770x/73068e532151d1f6465c14b3d6e47c07/illinois-state-sign.jpg"]
},
{
   question: "What is the capital of Missouri?",
   answers: ["A. St. Louis", "B. Columbia", "C. Kansas City", "D. Jefferson City"],
   correctAnswer: 3,
   stateImage: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkgJQeRq1B1EZorDvJKO45XA1M8eTKsgx6JIJJ63ygc9-HiVshYw"]
}];

var correctCounter = 0;
var incorrectCounter = 0;
var allAnswered = false;



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
   



//this is where we'll create our questions//
function createQuestions (){
    
for (var i = 0; i < questionsArray.length; i++) {
    var questionWrap = $("<div class = question>");
    var images = $('<img>' + questionsArray[i].images + '<img.');//i attempted to create img to correspond to each question but failed to load/
    var questionP = $("<p>" + questionsArray[i].question + "</p>");
    var ul = $('<ul>');
    var questionBox = $('#questionBox');
    var img = $('<img src="' + questionsArray[i].stateImage + '"' + ' alt="Question">' + questionsArray[i].stateImage.length + '</img>')//this is where it was unable to load the images
    img.css({
        "background-image":"url('" + (questionsArray[i].stateImage) + "')",
        "background-size":"cover"
        
    })
    questionBox.prepend(img);
    questionWrap.append(images);
    questionWrap.append(questionP);
    questionBox.append(questionWrap);
    for(var j = 0; j < questionsArray[i].answers.length; j++){
        var li = $('<li class="answer" data-correct="'+ questionsArray[i].correctAnswer +'" data-userAnswer="' + j + '">' + questionsArray[i].answers[j] + "</li>");
        ul.append(li)
        
        
    
    }
    questionBox.append(ul);
    // for(var idx =0; idx < questionsArray[i].stateImage.length; idx++ ) {
    //     var img = $('<img src=" " alt="Question">' + questionsArray[i].stateImage.length + '</img>')//this is where it was unable to load the images
    //     img.css({
    //         "background-image":"url('" + (questionsArray[i].stateImage) + "')",
    //         "background-size":"cover"
            
    //     })
    // questionBox.prepend(img);
    // }  
  }

} 
createQuestions();

$(document).on("click", ".answer", handleAnswerClick)

function runGame(){
    createQuestions();
    timer();
    endgame();
}

function handleAnswerClick(){
    var userguess = $(this).attr('data-useranswer');
    var correctguess = $(this).attr('data-correct');
    console.log(userguess);
    console.log(correctguess);
    
    if (userguess === correctguess) {
        correctCounter++;
        $('#correctAnswer').text(correctCounter);//I've been able to log the correct and incorrect questions but unable to have the counter work
        
    } else {
        incorrectCounter++
        $('#correctAnswer').text(correctCounter);
    
        
    
    }
    
}
  

