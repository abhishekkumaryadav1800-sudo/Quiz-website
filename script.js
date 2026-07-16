let current = 0;
let score = 0;

function startQuiz() {

const name = document.getElementById("playerName").value;

if (name.trim() === "") {
alert("Enter Your Name");
return;
}

document.getElementById("quizBox").style.display = "block";

showQuestion();
}

function showQuestion() {

let q = questions[current];

document.getElementById("question").innerText = q.q;

let html = "";

q.o.forEach(opt => {

html += `
<button class="option" onclick="checkAnswer('${opt}')">
${opt}
</button>
`;

});

document.getElementById("options").innerHTML = html;
}

function checkAnswer(ans) {

const buttons = document.querySelectorAll(".option");

buttons.forEach(btn => {

btn.disabled = true;

if (btn.innerText === questions[current].a) {
btn.style.backgroundColor = "green";
}

if (btn.innerText === ans && ans !== questions[current].a) {
btn.style.backgroundColor = "red";
}

});

if (ans === questions[current].a) {
score++;
}
}

function nextQuestion() {

current++;

if (current < questions.length) {
showQuestion();
} else {
finishQuiz();
}
}

function finishQuiz() {

document.getElementById("quizBox").style.display = "none";

document.getElementById("result").innerHTML =
`Your Score: ${score}/${questions.length}`;
}
