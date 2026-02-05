const quizData = [
    { question: "What is the capital of India?", options: ["Mumbai", "Delhi", "Chennai", "Kolkata"], answer: 1 },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Venus", "Jupiter"], answer: 1 },
    { question: "Who invented the telephone?", options: ["Newton", "Edison", "Bell", "Tesla"], answer: 2 },
    { question: "What is the national animal of India?", options: ["Lion", "Elephant", "Tiger", "Horse"], answer: 2 },
    { question: "Which ocean is the largest?", options: ["Indian", "Atlantic", "Arctic", "Pacific"], answer: 3 },
    { question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: 2 },
    { question: "Which gas do plants absorb?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: 1 },
    { question: "Who is the father of computers?", options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"], answer: 0 },
    { question: "Which is the smallest prime number?", options: ["0", "1", "2", "3"], answer: 2 },
    { question: "Which country gifted the Statue of Liberty to the USA?", options: ["UK", "France", "Germany", "Canada"], answer: 1 }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const options = document.querySelectorAll(".option");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");
const optionsList = document.getElementById("optionsList");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;

    options.forEach((btn, index) => {
        btn.textContent = q.options[index];
        btn.classList.remove("correct", "wrong");
        btn.disabled = false;
    });
}

function checkAnswer(selected) {
    const correctIndex = quizData[currentQuestion].answer;

    options[correctIndex].classList.add("correct");

    if (selected !== correctIndex) {
        options[selected].classList.add("wrong");
    } else {
        score++;
    }

    options.forEach(btn => btn.disabled = true);
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        finishQuiz();
    }
}

function goBack() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    scoreEl.textContent = "";
    optionsList.style.display = "block";
    nextBtn.style.display = "inline-block";
    restartBtn.style.display = "none";
    loadQuestion();
}

function closeQuiz() {
    document.querySelector(".quiz-container").style.display = "none";
}

function finishQuiz() {
    questionEl.textContent = "Quiz Finished!";
    optionsList.style.display = "none";
    nextBtn.style.display = "none";
    restartBtn.style.display = "inline-block";
    scoreEl.textContent = `Your Score: ${score}/10`;
}

loadQuestion();
