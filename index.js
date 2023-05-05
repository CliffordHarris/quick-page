"use strict";
let meh = "meh...", wow = "Wow!!!";
let textId = document.getElementById("text");
function changeText(start){
    let text = "";
    if (start === meh) {
        text = start = wow;
        changeClass("text1");
    } else {
        text = start = meh;
        changeClass("text2");
    }
    textId.innerHTML = text;
}
function changeClass(txt) {
    textId.className = txt;
}