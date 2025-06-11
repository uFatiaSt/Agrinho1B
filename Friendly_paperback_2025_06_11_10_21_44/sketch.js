let questions = [
  {
    question: "Qual é a capital do Brasil?",
    options: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
    answer: 1
  },
  {
    question: "Quem escreveu 'Dom Casmurro'?",
    options: ["Machado de Assis", "José de Alencar", "Clarice Lispector", "Carlos Drummond"],
    answer: 0
  },
  {
    question: "Qual é o resultado de 5 * 3?",
    options: ["8", "15", "10", "20"],
    answer: 1
  }
];

let currentQuestion = 0;
let score = 0;
let quizFinished = false;

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(240);
  
  if (quizFinished) {
    textSize(28);
    fill(50);
    text("Quiz Finalizado!", width / 2, height / 2 - 40);
    text("Pontuação: " + score + "/" + questions.length, width / 2, height / 2);
    return;
  }

  displayQuestion();
}

function displayQuestion() {
  let q = questions[currentQuestion];
  textSize(20);
  fill(0);
  text(q.question, width / 2, 60);

  for (let i = 0; i < q.options.length; i++) {
    drawOption(i, q.options[i]);
  }
}

function drawOption(index, optionText) {
  let x = width / 2;
  let y = 150 + index * 60;
  let w = 300;
  let h = 40;

  fill(200);
  rectMode(CENTER);
  rect(x, y, w, h, 10);

  fill(0);
  textSize(16);
  text(optionText, x, y);
}

function mousePressed() {
  if (quizFinished) return;

  let q = questions[currentQuestion];
  for (let i = 0; i < q.options.length; i++) {
    let x = width / 2;
    let y = 150 + i * 60;
    let w = 300;
    let h = 40;
    
    if (
      mouseX > x - w / 2 &&
      mouseX < x + w / 2 &&
      mouseY > y - h / 2 &&
      mouseY < y + h / 2
    ) {
      if (i === q.answer) {
        score++;
      }

      currentQuestion++;
      if (currentQuestion >= questions.length) {
        quizFinished = true;
      }
      break;
    }
  }
}
