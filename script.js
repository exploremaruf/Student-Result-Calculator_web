const calculate = () => {
    // Input values
    let math = parseFloat(document.getElementById('math').value);
    let phys = parseFloat(document.getElementById('physics').value);
    let chem = parseFloat(document.getElementById('chemistry').value);
    let eng = parseFloat(document.getElementById('english').value);

    // Validation: যতি কোনো ফিল্ড খালি থাকে
    if (isNaN(math) || isNaN(phys) || isNaN(chem) || isNaN(eng)) {
        alert("দয়া করে সব বিষয়ের নম্বর সঠিকভাবে দিন!");
        return;
    }

    let totalGrades = math + phys + chem + eng;
    let perc = ((totalGrades / 400) * 100).toFixed(2);
    
    let grades = "";
    let status = "Pass";
    let color = "#28a745"; // Green for pass

    // Logic improvement
    if (math < 33 || phys < 33 || chem < 33 || eng < 33 || perc < 33) {
        status = "Fail";
        grades = "F";
        color = "#e74c3c"; // Red for fail
    } else {
        if (perc >= 80) grades = "A+";
        else if (perc >= 70) grades = "A";
        else if (perc >= 60) grades = "B";
        else if (perc >= 40) grades = "C";
        else grades = "D";
    }

    // Result Display with Animation
    const resultElement = document.getElementById('showData');
    resultElement.style.display = "block";
    resultElement.style.borderLeft = `5px solid ${color}`;
    
    resultElement.innerHTML = `
        <div style="font-size: 15px; color: #555;">Total: <b>${totalGrades}</b> / 400</div>
        <div style="font-size: 18px; margin: 10px 0;">Percentage: <b>${perc}%</b></div>
        <div style="font-size: 20px; color: ${color}; font-weight: bold;">
            Grade: ${grades} (${status})
        </div>
    `;
}