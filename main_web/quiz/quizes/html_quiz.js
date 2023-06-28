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
    new Question("Hyper Text Markup Language Stand For?", ["JavaScript", "XHTML","CSS", "HTML"], "HTML"),
    new Question("HTML uses..",["User defined tags","Pre-specified tags","Fixed tags defined by the language","Tags only for linking"],"Fixed tags defined by the language"),
    new Question("What should be the first tag in any HTML document?",["head","title","html","document"],"html"),
    new Question("Which tag inserts a line horizontally on your web page?", ["hr","line","line directio","tr"], "hr"),
    new Question("How can you make a numbered list?", ["dl", "ol", "list","ul" ], "ol"),
    new Question("Choose the correct HTML tag to make a text italic.",["ii", "italics", "italic", "i"], "i"),
    new Question("Which attribute is used to name an element uniquely?",  ["class", "id", "dot", "all of above"], "id"),
    new Question("Which is correct for create a blank line in web page?.", ["press Enter two times", "press Shift + Enter", "insert br tag", "insert <BLINE>"], "insert br tag"),
    new Question("HTML supports... ", ["ordered lists", "unordered lists", "both type of lists","does not support those types"], "both type of lists") ,
    new Question("A webpage displays a picture. What tag was used to display that picture?", ["picture", "mage", "img", "src"], "img"),
    new Question("Which attribute you’ll use with TD tag to merge two cells horizontally?", ["merge=colspan2", "rowspan=2", "colspan=2", "merge=row2"], "colspan=2"),
    new Question("b tag makes the enclosed text bold. What is other tag to make text bold?", ["strong tag", "dar tag", "black tag", "emp tag" ], "strong tag"),
    new Question("HTML web pages can be read and rendered by ___.", ["Compiler","Server", "Web Browser","Interpreter"], "Web Browser"),
    new Question("Which HTML tag produces the biggest heading?", ["h7","h9", "h4","h1"],"h1"),
    new Question("Which of the following tags do not require a terminator?", ["u", "br", "b","none of the above"], "br")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
display();