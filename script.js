function startQuiz(){

const name =
document.getElementById("playerName").value;

if(name===""){
alert("Enter Name");
return;
}

document.getElementById("quizBox").style.display="block";

showQuestion();
}
