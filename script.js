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
}