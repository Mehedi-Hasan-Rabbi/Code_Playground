function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function display() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        display();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += 
    `
            <h3>Your scores: ${quiz.score}/${questions.length}</h3>
            <button class="btn btn-primary" onclick="location.reload()">Play Again</button>
        `;
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
    element.style.marginLeft = '15vh';
};
 
// create questions here
var questions = [
    new Question("What is a correct syntax to output 'Hello World' in C++?", ['echo "Hello World";','cout<<"Hello World";','echo("Hello World)";','p("Hello World)";'],'cout<<"Hello World";'),
    new Question("C++ is an alias of C#", ["True","False","Can not Say","None"], "False"),
    new Question("Which data type is used to create a variable that should store text?", ["Txt","String","string", "myString"], "string"),
    new Question("How do you create a variable with the numeric value 5?", ['int x = 5;','double x = 5;','num x = 5;','x = 5;'],'int x = 5;'),
    new Question("How do you create a variable with the floating number 2.8?", ['byte x = 2.8;','double x = 2.8;','int x = 2.8;','x = 2.8;'],'double x = 2.8;'),
    new Question("Which method can be used to find the length of a string?", ["length()","getLength()",'len()','getSize();'],"length()"),
    new Question("The value of a string variable can be surrounded by single quotes.", ["True","False","Can not Say", "None"], "False"),
    new Question("Which header file lets us work with input and output objects?", ['#include<iostream>','#include<iostring>','#include<inputstr>','#include<stram>'],'#include<iostream>'),
    new Question("To declare an array in C++, define the variable type with:", ['{}','()','None','[]'],'[]'),
    new Question("Array indexes start with:", ["0", "-1","1", "2"], "0"),
    new Question("How do you create a function in C++?", ["functionName.", "functionName[]",'(functionName)', 'functionName()'],'functionName()'),
    new Question("Which keyword is used to create a class in C++?", ["className", "myClass","class", "class()"], "class")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
display();
