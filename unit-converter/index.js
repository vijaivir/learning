let heading = document.getElementById("input");
let textBox1 = document.getElementById("length");
let textBox2 = document.getElementById("volume");
let textBox3 = document.getElementById("mass");

function convert(){

    //let result = document.getElementById("user-input");
    //let num = result.value;
    let num = 20;
    heading.innerHTML = num;

    let feet = (num * 3.28084).toFixed(3);
    let meters = (num /3.28084).toFixed(3);
    textBox1.textContent = num + " meters = " + feet + " feet | " + num + " feet = " + meters + " meters";

    let litres = (num * 3.785411784).toFixed(3);
    let gallons = (num / 3.785411784).toFixed(3);
    textBox2.textContent = num + " litres = " + gallons + " gallons | " + num + " gallons = " + litres + " litres";
   
    let kilos = (num * 0.454).toFixed(3);
    let pounds = (num * 2.205).toFixed(3);
    textBox3.textContent = num + " kilos = " + pounds + " lbs | " + num + " lbs = " + kilos + " kg";

}

/* <form id="form" onsubmit="convert()" novalidate >
<input type="text" name="value" id="user-input" placeholder="Enter Number For Conversion...">
</form>
*/
convert() 
