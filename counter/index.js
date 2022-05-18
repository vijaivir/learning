//document refers to the html document
// document.getElementById("count-el").innerText = 5;

let countEl = document.getElementById("count-el"); //using DOM
let saveEl = document.getElementById("save-el");
let count = 0;


function increment(){
    count += 1;
    countEl.textContent = count; //using DOM
}

function save(){
    let temp = count + " - ";
    saveEl.textContent += temp;
    count = 0;
    countEl.textContent = 0;
}

