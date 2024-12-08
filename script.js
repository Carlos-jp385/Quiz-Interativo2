const  quizData =[
{
 question:"Qual é a capital do Brasil?",
 answers:["São Paulo","Rio de Janeiro","Brasília", " Salvador" ],
 correct: "Brasília",
},
{
    question: "Quantos planetas existem no Sistema Solar?",
    answers: ["7", "8", "9", "10"],
    correct: "8",
  },
  {
    question: "Qual é o maior oceano do mundo?",
    answers: ["Atlântico", "Índico", "Ártico", "Pacífico"],
    correct: "Pacífico",
  },
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const questionData = quizData[currentQuestion];
  const questionElement = document.getElementById("question");
  const answersElement = document.getElementById("answers");

  questionElement.textContent = questionData.question;
  answersElement.innerHTML = ""; // Limpa as respostas anteriores

  questionData.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("answer");
    button.onclick = () => checkAnswer(answer);
    answersElement.appendChild(button);
  });
}

function checkAnswer(selectedAnswer) {
  const questionData = quizData[currentQuestion];

  if (selectedAnswer === questionData.correct) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const quizElement = document.getElementById("quiz");
  const resultElement = document.getElementById("result");

  quizElement.style.display = "none";
  resultElement.textContent = `Você acertou ${score} de ${quizData.length} perguntas!`;
}

// Inicializa o quiz
loadQuestion();














