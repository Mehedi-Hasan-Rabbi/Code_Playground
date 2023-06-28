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
    gameOverHTML += `<h3>Your scores: ${quiz.score}/${questions.length}</h3>
    <button class="btn btn-primary" onclick="location.reload()">Play Again</button>`;
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
    element.style.marginLeft = '15vh';
};

// create questions here
var questions = [
    new Question("C is ___ type of programming language.?",
        ["Object Oriented",
            "Procedural",
            "Bit level language",
            "Functional"], "Procedural"),
    new Question("An Identifier can start with.?",
        ["Alphabet", "Underscore ( _ )", "Any character that can be typed on a keyboard",
            "Option A & Option B"], "Option A & Option B"),
    new Question("What is the default C Storage Class for a variable.?",
        ["static", "auto", "register",
            "extern"], "auto"),
    new Question("Output of an arithmetic expression with integers and real numbers is _ by default.?", ["Integer", "Real number", "Depends on the numbers used in the expression",
        "None of the above"], "Real"),
    new Question("What is the other name for C Language ?: Question Mark Colon Operator.?"
        , ["Comparison Operator",
            "If-Else Operator", "Binary Operator", "Ternary Operator"], "Ternary Operator"),
    new Question("Choose a right C Statement",
        ["Loops or Repetition block executes a group of statements repeatedly.",
            "Loop is usually executed as long as a condition is met.",
            "Loops usually take advantage of Loop Counter",
            "All the above."], "All the above."),
    new Question("Loops in C Language are implemented using.?",
        ["While Block", "For Block", "Do While Block", "All the above"], "All the above"),
    new Question("Which loop is faster in C Language, for, while or Do While.?",
        ["for", "while", "do while", "All work at same speed"], "All work at same speed"),
    new Question("Choose a correct statement about a C Switch Construct.",
        ["default case is optional inside switch.",
            "break; causes the control to exit the switch immediately and avoid fall down to other CASE statements.",
            "You can not use duplicate CASE Constants inside a Switch construct.",
            "All the above."], "All the above."),
    new Question("A function which calls itself is called a ___ function.",
        ["Self Function", "Auto Function", "Recursive Function", "Static Function"], "Recursive Function"),
    new Question("How many values can a C Function return at a time.?",
        ["Only One Value", "Maximum of two values", "Maximum of three values", "Maximum of 8 values"], "Only One Value"),
    new Question("What is an array Base Address in C language.?",
        ["Base address is the address of 0th index element.", "An array b[] base address is &b[0]", "An array b[] base address can be printed with value of b", "All the above"], "All the above"),
    new Question("What is a String in C Language.?",
        ["String is a new Data Type in C",
            "String is an array of Characters with null character as the last element of array.",
            "String is an array of Characters with null character as the first element of array",
            "String is an array of Integers with 0 as the last element of array."],
        "String is an array of Characters with null character as the last element of array."),
    new Question("What is the Format specifier used to print a String or Character array in C Printf or Scanf function.?",
        ["%c", "%C", "%s", "%w"], "%s"),
    new Question("Choose a correct C Statement about Strings.",
        ["PRINTF is capable of printing a multi word string.",
            "PUTS is capable of printing a multi word string.",
            "GETS is capable of accepting a multi word string from console or command prompt",
            "All the above"], "All the above"),
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
display();