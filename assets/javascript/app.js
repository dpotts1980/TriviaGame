/*
1. Create Variables:
var userChoice
var questions
var options

2. create 30 second timer to initiate the game and end game at the end of the timer(use simple timer exercise)

3. Create a new $(<div>) to hold 8 questions. 

4. Create if/else statements to determine whether questions are right or wrong

5. create counters to see if answers are correct.

6. create a formula to determine what percentage someone got with conditions above 70% means ok but study up, over 80% is great job, over 90% is excellent
*/



//lets create our variables//
var userChoice;
var options;
var counter = 120;
var questions={
    q1: "what is my favorite color?", 
    q2: "how old am I?",
    q3: "Where was the last place I went on vacation?",
    q4: "Where was I born?",
    q5: "where will I die?",
    q6: "what did I eat for breakfast?",
    q7: "What are my talents?",
    q8: "How many siblings do I have?"
}

//test//
console.log(questions.q3);

function setup() {
    noCanvas()
    var startTimer = select("#startTimer");
   $("#startTimer").html(counter);
    console.log(startTimer);

    function timeIt() {
        counter --;
        startTimer.html(counter);
    }
    setTimeout(timeIt, 120000);
 
}
