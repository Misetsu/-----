var flag = 0;

function answerDialouge() {
    var question = document.getElementById("question");
    var answer = document.getElementById("answer");

    question.style.display = "none";
    answer.style.display = "block";

    document.getElementById("describe").innerHTML = "プレイヤー：「皆さん、ほかに不信に思ったことはありませんか？」<br>バーバラ：「リチャード、あなた最近主人と言い合いしていたわよね。犯人はあなたなんじゃないの？」<br>リチャード：「私たちは親友だったんだぞ！バーバラこそ昨夜なにやら書斎でこそこそしていたじゃないか！」<br>プレイヤー：「心の声(バーバラは書斎でなにをしていたのだろうか…)」<br>バーバラ：「ただ本を読んでいただけよ。何が悪いの？」";
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
    document.getElementById("describe").innerHTML = "バーバラ・ウィンスロー (アーサーの妻)：<br>「アーサーの死は信じられない。彼が突然倒れたと聞いたわ。彼の財産は私たちのものだったはずよ。」<br><button onclick='wifeTime()'>アリバイ＞</button>";
}

function businessmanDialogue() {
    document.getElementById("describe").innerHTML = "リチャード・ブラックウェル <br>(アーサーのビジネスパートナー)：<br>「信じられない…私たちは親友だった。」<br><button onclick='businessmanChat()'>対話＞</button>";
}

function businessmanChat() {
    document.getElementById("describe").innerHTML = "プレイヤー：「リチャードさん、アーサーさんとのビジネス上の対立は何に関するものでしたか？」<br>リチャード：「確かに、私たちはビジネスの意見の相違があったが、それは私が彼を殺害する動機にはならない」<br><button onclick='businessmanTime()'>アリバイ＞</button>";
}

function sonDialogue() {
    document.getElementById("describe").innerHTML = "エレノア・ウィンスロー (アーサーの息子)：<br>「パ…父上の死に動揺しています。パ…父上が殺されたとは信じられない…（小さな声で）パパ上…」<br><button onclick='sonChat()'>対話＞</button>";
}

function sonChat() {
    document.getElementById("describe").innerHTML = "プレイヤー：「エレノアさん、父親の死について何か気づいたことはありますか？」<br>エレノア：「パ…父上は最近不安げでしたが、何か問題があったようです。父上は財産を守るために誰かと対立していたかもしれません。実は先ほど書斎で本棚の隙間からこんなものを見つけたのですが…」<br><button onclick='sonTime()'>アリバイ＞</button>";
    document.getElementById("doku").style.display = "block";
}

function secretaryDialogue() {
    document.getElementById("describe").innerHTML = "ヴィクター・スミス (アーサーの秘書)：<br>「旦那様は最近誰かとの取引に関わっていたようですが、詳細は知りません。彼の個人的な情報は私が管理していましたが、何か重要なものが失われているようです。ですがアーサーとリチャードはビジネスで対立していたようです。」<br><button onclick='secretaryChat()'>対話＞</button>";
}

function secretaryChat() {
    document.getElementById("describe").innerHTML = "プレイヤー：「ヴィクターさん、アーサーさんの個人的な情報について何か分かりますか？」<br>ヴィクター：「旦那様の個人的な情報は私が管理していましたが、最近何かが失われたことに気づきました。それが何か、そしてそれが事件とどのように関連しているのか、私はまだ理解していません。それと旦那様の近くに壊れた時計が落ちていました。」<br><button onclick='secretaryTime()'>アリバイ＞</button>";
    document.getElementById("clock").style.display = "block";
}

function bookDialogue() {
    document.getElementById("describe").innerHTML = "アーサーの机の上に見つけた手記<br>「私の財産は私の妻と息子に受け継がれるはずだ。しかし、誰かがそれを奪おうとしたのだろうか？」";
}

function clockDialogue() {
    document.getElementById("describe").innerHTML = "壊れた懐中時計<br>時計が止まっている時間に殺されたのだろうか…";
}

function dokuDialogue() {
    document.getElementById("describe").innerHTML = "毒入り瓶<br>死因の１つかもしれない…";
}

function knifeDialogue() {
    document.getElementById("describe").innerHTML = "死体のとなりで見つけたナイフ。<br><br><button onclick='businessmanKnife()'>リチャードに聞く＞</button>&emsp;<button onclick='wifeKnife()'>バーバラに聞く＞</button><br><br><button onclick='secretaryKnife()'>ヴィクターに聞く＞</button>&emsp;<button onclick='sonKnife()'>エレノアに聞く＞</button>";
}

function businessmanKnife() {
    document.getElementById("describe").innerHTML = "リチャード：「見たことないな。」<br><button onclick='knifeDialogue()'>他の人に聞く＞</button>";
}

function wifeKnife() {
    document.getElementById("describe").innerHTML = "バーバラ：「ええ、私もそのナイフを見たわ。でも私、ナイフなんて握ったことがないの。別の誰かがアーサーを襲った証拠じゃない？」<br><button onclick='knifeDialogue()'>他の人に聞く＞</button>";
}

function sonKnife() {
    document.getElementById("describe").innerHTML = "エレノア：「知らない。」<br><button onclick='knifeDialogue()'>他の人に聞く＞</button>";
}

function secretaryKnife() {
    document.getElementById("describe").innerHTML = "ヴィクター：「これは、キッチンのナイフですね。」<br><button onclick='knifeDialogue()'>他の人に聞く＞</button>";
}

function wifeTime() {
    document.getElementById("describe").innerHTML = "死亡推定時刻には自宅の庭で散歩していた。家政婦がそれを証言している。<br>アーサーの死後、彼の書斎に立ち入っておらず、彼の遺体を発見するまで知らなかった。";
    flag = flag + 1;
    if (flag == 4) {
        document.getElementById("toAnswer").style.display = "block";
    }
}

function businessmanTime() {
    document.getElementById("describe").innerHTML = "死亡推定時刻にはアーサーの書斎にいた。二人の言い合う声を聞いたと家政婦が証言している。<br>アーサーとの対立があったようだが、殺害の意図があるかどうかは不明。";
    flag = flag + 1;
    if (flag == 4) {
        document.getElementById("toAnswer").style.display = "block";
    }
}

function sonTime() {
    document.getElementById("describe").innerHTML = "死亡推定時刻には自室で本を読んでいた。<br>パ……父上の死に驚愕し、彼の死後、探偵の取り調べに協力している。";
    flag = flag + 1;
    if (flag == 4) {
        document.getElementById("toAnswer").style.display = "block";
    }
}

function secretaryTime() {
    document.getElementById("describe").innerHTML = "死亡推定時刻にはアーサーのスケジュールを整理しており、アーサーの書斎にいなかったことを同僚に報告している。<br>アーサーの個人的な情報に詳しいが、その情報を悪用した形跡は見られない。";
    flag = flag + 1;
    if (flag == 4) {
        document.getElementById("toAnswer").style.display = "block";
    }
}

function showHint() {
    document.getElementById("describe").innerHTML = "バーバラはアーサーの死亡推定時刻には庭を散歩していたようだが、違う時間には書斎にいた<br>リチャードは昨夜アーサーとなにか言い合いをしていた<br>エレノアはパパ上と仲が良かったようだが、アリバイがない<br>ヴィクターはアリバイがあるが、なにやら隠し事をしているようだ";
}