const result = document.getElementById("user-input");
const heading = document.getElementById("input");
const textBox1 = document.getElementById("length");
const textBox2 = document.getElementById("volume");
const textBox3 = document.getElementById("mass");

function convert(){
    let num = result.value;
    heading.textContent = num;

    let feet = num * 3.281;
    let meters = num * 0.305;
    textBox1.textContent = num + " meters = " + feet + " feet | " + num + " feet = " + meters + " meters";

    let gallons = num * 0.264;
    let litres = num * 4.546;
    textBox2.textContent = num + " litres = " + gallons + " gallons | " + num + " gallons = " + litres + " litres";
   
    let kilos = num * 0.454;
    let pounds = num * 2.205;
    textBox3.textContent = num + " kilos = " + pounds + " lbs | " + num + " lbs = " + kilos + " kg";

}
