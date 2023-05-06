"use strict";
let meh = "meh...", wow = "Wow!!!";
let start = meh;
let textId = document.getElementById("text");
function changeText(){
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