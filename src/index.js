const button = document.querySelector("button");
const player01 = document.querySelector("#player01");
const player02 = document.querySelector("#player02");
const output = document.querySelector("#output");

button.addEventListener("click", function () {
    console.log("works");
    let rolls = [roll(6), roll(6)];
    let resultText;
    if (rolls[0] == rolls[1]) {
        resultText = "Game Draw";
    } else if (rolls[0] > rolls[1]) {
        resultText = "Player 01 Won";
    } else {
        resultText = "Player 02 Won";
    }
    output.innerHTML = resultText;
    player01.innerHTML = rolls[0];
    player02.innerHTML = rolls[1];
    console.log(rolls);
});

function roll(num) {
    let rNum = Math.floor(Math.random() * num) + 1;
    let n = 9855 + rNum;
    let char = "&#" + n + ";";
    return rNum + " " + char;
}
