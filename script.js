const calculate = () => {
    // Input gulo ke number-e convert kora ebong khali thakle 0 dhore neya
    let math = Number(document.getElementById('math').value) || 0;
    let phys = Number(document.getElementById('physics').value) || 0;
    let chem = Number(document.getElementById('chemistry').value) || 0;
    let eng = Number(document.getElementById('english').value) || 0;

    let totalGrades = math + phys + chem + eng;
    let perc = ((totalGrades / 400) * 100).toFixed(2); // 2 ghor porjonto rakhbe
    
    let grades = "";
    if (perc >= 80) { grades = "A+"; } 
    else if (perc >= 70) { grades = "A"; } 
    else if (perc >= 60) { grades = "B"; } 
    else if (perc >= 40) { grades = "C"; } 
    else { grades = "F"; }

    let status = "Pass";
    // Tumi khub bhalo logic diyecho individual subject fail check korar jonno
    if (math < 33 || phys < 33 || chem < 33 || eng < 33 || perc < 33) {
        status = "Fail";
        grades = "F";
    }

    // Final Output (innerHTML bebohar korle style add kora jay)
    const resultElement = document.getElementById('showData');
    resultElement.innerHTML = `
        Out of 400 your total is <b>${totalGrades}</b> and percentage is <b>${perc}%</b>. <br> 
        Your grade is <span style="color: ${status === 'Pass' ? 'green' : 'red'}">${grades}</span>. 
        You are <b>${status}</b>.
    `;
}