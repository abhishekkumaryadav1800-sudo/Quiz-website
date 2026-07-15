
async function loadQuiz() {
    const response = await fetch(
        "https://opentdb.com/api.php?amount=1&type=multiple"
    );

    const data = await response.json();
    const q = data.results[0];

    document.getElementById("question").innerHTML = q.question;

    let answers = [...q.incorrect_answers];
    answers.push(q.correct_answer);

    answers.sort(() => Math.random() - 0.5);

    let html = "";

    answers.forEach(answer => {
        html += `
        <button class="option">
            ${answer}
        </button><br><br>
        `;
    });

    document.getElementById("options").innerHTML = html;
}

if(window.location.pathname.includes("quiz.html")){
    loadQuiz();
}
