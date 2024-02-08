function answerDialouge() {
    var question = document.getElementById("question");
    var answer = document.getElementById("answer");

    question.style.display = "none";
    answer.style.display = "block";
}

document.getElementById('answerForm').addEventListener('submit', function (event) {

    event.preventDefault();

    var x = this.finalAnswer.value;

    if (x == "b") {
        window.location.href = "clear.html";
    } else {
        window.location.href = "fail.html";

    };
});