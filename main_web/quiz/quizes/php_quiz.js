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
    new Question("PHP is a ............", ["Open Source Language", "Widely Used Language", "Server side scripting language", "All of the above"], "All of the above"),
    new Question("Which of the following symbol is used to add multiple line comments in PHP ?", ["//", "/* */", "{{ }}", "{/ \}"], "/* */"),
    new Question("Which of following is not a Superglobals in PHP?", ["$_SERVER", "$_ENV", "$_FILES", "$_PUT"], "$_PUT"),
    new Question("Which function is used to get ASCII value of a character in PHP ?", ["asc()", "chr( )", "ascii()", "val( )"], "chr( )"),
    new Question("A function in PHP which starts with _ (double underscore) is known as _____ .", ["Inbuilt Function", "Default Function", "Magic Function", "User Defined Function"], "Magic Function"),
    new Question("PHP’s numerically indexed array begin with position _____ .", ["-1", "0", "1", "2"], " 0"),
    new Question("How to define a function in PHP?",
        ["function {function body}",
            "functionName(parameters) {function body}",
            "function functionName(parameters) {function body}",
            "None of the above"], "function functionName(parameters) {function body}"),
    new Question("Which PHP function is used to find files?",
        ["file()", "fold()", "glob()",
            "None of the above"], "glob()"),
    new Question("Which of the following variables is not a predefined variable in PHP?",
        ["$get", "$post",
            "$request",
            "$ask"], "$ask"),
    new Question("Which of the functions is used to sort an array in descending order?",
        ["asort()", "sort()", "rsort()", "dsort()"], "rsort()"),
    new Question("Which of the following is not true?",
        ["PHP can be used to develop web applications", "PHP makes a website dynamic",
            "PHP applications can not be compile", "PHP can not be embedded into html"], "PHP can not be embedded into html"),
    new Question("Which of the following method sends input to a script via a URL?",
        ["Get", "Post", "Both", "None"], "Get"),
    new Question("Which of the following function returns a text in title case from a variable?",
        ["ucwords($var)", "upper($var)",
            "toupper($var)", "ucword($var)"], "ucwords($var)"),
    new Question("Which of the following function returns the number of characters in a string variable?",
        ["count($variable)", "len($variable)",
            "strcount($variable)", "strlen($variable)"], "strlen($variable)"),
    new Question("When function have same prototype in base class as well as in derived class the function is called",
        ["Overloading function",
            "Overriding function",
            "Chained function",
            "All of them"], "Overriding function")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
display();