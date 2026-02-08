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
}