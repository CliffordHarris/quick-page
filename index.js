"use strict";
let textId = document.getElementById("text");
function changeText(start){
    let text = "";
    if (start === "Meh...") {
        text = start = "Wow!!!";
        changeClass("text1");
    } else {
        text = start = "Meh...";
        changeClass("text1");
    }
    textId.innerHTML = text;
}
function changeClass(txt) {
    textId.className = txt;
}