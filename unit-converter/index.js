const result = document.getElementById("user-input");
const heading = document.getElementById("input");
const textBox1 = document.getElementById("length");
const textBox2 = document.getElementById("volume");
const textBox3 = document.getElementById("mass");

function convert(){
    num = result.value;
    heading.textContent = num;
    feet = num * 3.281;
    meters = num/3.281;
    textBox1.textContent = num + " meters = " + feet + " feet | " + num + " feet = " + meters + " meters";

}