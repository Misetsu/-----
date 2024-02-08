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

function wifeDialogue() {
    document.getElementById("describe").innerHTML = "バーバラ・ウィンスロー (アーサーの妻)：<br>「アーサーの死は信じられない。彼が突然倒れたと聞いたわ。彼の財産は私たちのものだったはずよ。」<br><button onclick='wifeChat()'>対話＞</button>";
}

function wifeChat() {
    document.getElementById("describe").innerHTML = "";
}

function businessmanDialogue() {
    document.getElementById("describe").innerHTML = "リチャード・ブラックウェル <br>(アーサーのビジネスパートナー)：<br>「信じられない…私たちは親友だった。」<br><button onclick='businessmanChat()'>対話＞</button>";
}

function businessmanChat() {
    document.getElementById("describe").innerHTML = "";
}

function sonDialogue() {
    document.getElementById("describe").innerHTML = "エレノア・ウィンスロー (アーサーの息子)：<br>「パ…父上の死に動揺しています。パ…父上が殺されたとは信じられない…（小さな声で）パパ上…」<br><button onclick='sonChat()'>対話＞</button>";
}

function sonChat() {
    document.getElementById("describe").innerHTML = "";
}

function secretaryDialogue() {
    document.getElementById("describe").innerHTML = "ヴィクター・スミス (アーサーの秘書)：<br>「旦那様は最近誰かとの取引に関わっていたようですが、詳細は知りません。彼の個人的な情報は私が管理していましたが、何か重要なものが失われているようです。ですがアーサーとリチャードはビジネスで対立していたようです。」<br><button onclick='secretaryChat()'>対話＞</button>";
}

function secretaryChat() {
    document.getElementById("describe").innerHTML = "";
}

function bookDialouge() {

}

function clockDialouge() {

}

function dokuDialouge() {

}

function knifeDialouge() {

}