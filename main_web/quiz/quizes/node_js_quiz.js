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
    new Question(" REPL Stands For", ["Research Eval Program Learn", "Read Event Print Loop","Read Earn Print Loop", "Read Eval Print Loop"], "Read Event Print Loop"),
    new Question("Which of the following command will show version of Node?", ["$npm --version", "$node --version","$npm getVersion", "$node getVersion"], "$node --version"),
    new Question("Which of the following statement is correct?", ["js is Server Side Language.", "js is the Client Side Language.","js is both Server Side and Client Side Language.", "None of the above."], "js is Server Side Language."),
    new Question("Which of the following command is used to start a REPL session?", ["$ node", "$ node repl","$ node start", "$ node console"], "$ node"),
    new Question("In which language is Node.js written?", ["JavaScript", "C","C++", "All of the above"], "All of the above"),
    new Question("Which of the following command is used to install the Node.js express module?", ["$ npm install express", "$ node install express","$ install express", "None of the above"], "$ npm install express"),
    new Question("Which of the following extension is used to save the Node.js files?", [".js", ".node",".java", ".txt"], ".js"),
    new Question("Which of the following module is not a built-in node module?", ["zlib", "https","http", "fsread"], "fsread"),
    new Question("Which of the following code print the platform of operating system?", ["console.log('platform : ' + os.platform);", "console.log('platform : ' + os.platform());","console.log('platform : ' + os.getPlatform());", "None of the above."], "console.log('platform : ' + os.platform());"),
    new Question("Which of the following method is used to return the current working directory of the process?", ["cwd();", "dwd();","pwd();", "None of the above."], "cwd();"),
    new Question("Which of the following is not a valid language for Node.js?", ["JavaScript", "C","java", "C++"], "java"),
    new Question("Which of the following shortcut command is used to kill a process in Node.js?", ["Ctrl + B", "Ctrl + K","Ctrl + T", "Ctrl + C"], "Ctrl + C"),
    new Question("How many Node object methods are available?", ["21", "18","19", "20"], "18"),
    new Question("Which of the following route parameter formats are valid?", ["/books/!:from-:to", "/flights/:from-:to","/users/:userId/books/:bookId", "None of the above"], "/books/!:from-:to"),
    new Question("Which of the following module is required to create a web server?", ["net module", "http module","inet module", "url module"], "net module")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
display();
