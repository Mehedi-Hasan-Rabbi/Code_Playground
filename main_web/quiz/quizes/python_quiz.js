function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function (answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}

Quiz.prototype.isEnded = function () {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function (choice) {
    return this.answer === choice;
}


function display() {
    if (quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
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
    new Question("What is a correct syntax to output 'Hello World' in Python?", ["echo 'Hello World'", 'print("Hello World)"','echo("Hello World)"', 'p("Hello World)"'], 'print("Hello World)"'),
    new Question("How do you insert COMMENTS in Python code?", ['//This is a comment','#This is a Comment','/*This is a Comment*/', '**This is a Comment'], '#This is a Comment'),
    new Question("Which one is NOT a legal variable name?", ["my-var", "Myvar", "my_var", "__myvar"], "my-var"),
    new Question("How Do You create a variable with numberic Value 5?",["x = int(5)","Both the Other answers are correct","x=5","None Of Given Options"],"Both the Other answers are correct"),    
    new Question("What is the correct file extension for Python files?",[".pt",".py",".pyth",".pyt"],".py"),
    new Question("What is the correct syntax to output the type of a variable or object in Python?",["print(typeOf(x))","print(typeof(x))","print(tyof x)","print(type(x))"],"print(type(x))"),
    new Question("What is the correct syntax to return the first character in a string?",["function myFunction()","def myFunction()","create myFunction()","func myFunction()"],"def myFunction()"),
    new Question("What is the correct way to create a function in Python?",['x = sub("Hello", 0, 1)','x = "Hello"[0]','x = "Hello".sub(0,1)',"None of the given Options"],'x = "Hello"[0]'),
    new Question("Which method can be used to remove any whitespace from both the beginning and the end of a string?",["ptrim()","strip()","trim()","len()"],"trim()"),
    new Question("Which method can be used to replace parts of a string?",["replaceString()","switch()","replace()","repl()"],"replace()"),
    new Question("Which of these collections defines a LIST?",['{"apple","banana","cherry"}','["apple","banana","cherry"]','{"name":"apple","color":"green"}','("apple";"banana";"cherry")'],'["apple","banana","cherry"]'),
    new Question("Which of these collections defines a tuple?",['{"apple","banana","cherry"}','["apple","banana","cherry"]','{"name":"apple","color":"green"}','("apple";"banana";"cherry")'],'("apple";"banana";"cherry")'),
    new Question("Which of these collections defines a DICTIONARY?",['{"apple","banana","cherry"}','["apple","banana","cherry"]','{"name":"apple","color":"green"}','("apple";"banana";"cherry")'],'{"name":"apple","color":"green"}'),
    new Question("Which collection is ordered, changeable, and allows duplicate members?",["List","Dictionary","tuple","sets"],"List"),
    new Question("Which collection doesn't allow duplicate members?",["List","Dictionary","tuple","sets"],"sets")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
display();
