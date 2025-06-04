// Quiz questions array
const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Transfer Machine Language", "Hyperlink Tool Markup"],
    correct: 0
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-weight", "text-size", "font-size"],
    correct: 2
  },
 {
  "question": "Which of these is JavaScript commonly used for on a website?",
  "options": ["Styling web pages", "Structuring content", "Adding interactivity"],
  "correct": 2
},
  {
    question: "Which is not a JavaScript data type?",
    options: ["string", "number", "float"],
    correct: 2
  }
];

// DOM elements
const quizBox = document.getElementById('quiz-box');
const questionEl = document.getElementById('question');
const optionsList = document.getElementById('options');
const submitBtn = document.getElementById('submit-btn');
const resultBox = document.getElementById('result-box');
const scoreEl = document.getElementById('score');
const restartBtn = document.getElementById('restart-btn');

let currentQuestion = 0;
let score = 0;

// Load first question
loadQuestion();

function loadQuestion() {
  const current = quizData[currentQuestion];
  questionEl.innerText = current.question;
  optionsList.innerHTML = "";

  current.options.forEach((option, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <label>
        <input type="radio" name="option" value="${index}" />
        ${option}
      </label>
    `;
    optionsList.appendChild(li);
  });
}

// Handle submit
submitBtn.addEventListener('click', () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');

  if (!selectedOption) {
    alert("Please select an option!");
    return;
  }

  const answer = parseInt(selectedOption.value);
  if (answer === quizData[currentQuestion].correct) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quizBox.classList.add('hidden');
  resultBox.classList.remove('hidden');
  scoreEl.innerText = `${score} / ${quizData.length}`;
}

// Restart quiz
restartBtn.addEventListener('click', () => {
  currentQuestion = 0;
  score = 0;
  quizBox.classList.remove('hidden');
  resultBox.classList.add('hidden');
  loadQuestion();
});
