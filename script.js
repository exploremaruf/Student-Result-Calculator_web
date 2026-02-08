// script.js
const calculate = () => {
    let math = document.getElementById('math').value;
    let phys = document.getElementById('physics').value;
    let chem = document.getElementById('chemistry').value;
    let eng = document.getElementById('english').value;

    let totalGrades = parseFloat(math) + parseFloat(phys) + parseFloat(chem) + parseFloat(eng);
    let perc = (totalGrades / 400) * 100;
    
    // Initial result show (Updated in next steps)
    document.getElementById('showData').innerHTML = `Total: ${totalGrades}, Percentage: ${perc}%`;

    let grades = "";
if (perc <= 100 && perc >= 80) { grades = "A+"; } 
else if (perc >= 70) { grades = "A"; } 
else if (perc >= 60) { grades = "B"; } 
else if (perc >= 40) { grades = "C"; } 
else { grades = "F"; }

let status = "Pass";
if (math < 33 || phys < 33 || chem < 33 || eng < 33) {
    status = "Fail";
    grades = "F";
}

// Final Output update
document.getElementById('showData').innerHTML = 
    `Out of 400 your total is ${totalGrades} and percentage is ${perc}%. <br> 
     Your grade is ${grades}. You are ${status}.`;

}