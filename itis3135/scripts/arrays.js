let person = [];
let salary = [];


function addSalary(){
    document.getElementById('name').focus();
    const salaryInput = document.getElementById('salaryInput').value;

    if (salaryInput === "") {
        alert('Please enter a salary.');
        return;
    }


    const salaryNumber = Number(salaryInput);
    
    if (Number.isNaN(salaryNumber)) {
        alert(salaryInput + " is not a valid number!");
        return;
    }

    const personInput = document.getElementById('name').value;

    if (personInput === "") {
        alert('Please enter a name.');
        return;
    }

    salary.push(salaryNumber);
    person.push(personInput);

    document.getElementById('name').value = "";
    document.getElementById('salaryInput').value = "";

    
}


function displayResults(){
    if (salary.length === 0) {
        alert('No salaries to display.');
        return;
    }

    let total = 0;

    for(let i = 0; i < salary.length; i++){
        total += salary[i];
    }
    let avg = total / salary.length;

    // https://stackoverflow.com/a/2856069
    let max = Math.max(...salary);

    document.getElementById('results').innerHTML = '<h2>Average Salary</h2><p id="average">' + avg + '</p><h2>Highest Salary</h2><p id="highest">' + max + '</p>'

    document.getElementById('name').focus();
}


function displaySalary(){
    
    let tableBody = document.getElementById("results_table").getElementsByTagName("tbody")[0];

    tableBody.innerHTML = "";

    for(let i = 0; i < Math.max(person.length, salary.length); i++) {
        // https://www.w3schools.com/jsref/met_table_insertrow.asp
        let newRow = tableBody.insertRow();

        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);

        cell1.innerHTML = person[i] !== undefined ? person[i] : '';
        cell2.innerHTML = salary[i] !== undefined ? salary[i] : '';
    }
    document.getElementById('name').focus();
}

const addSalaryButton = document.getElementById('addSalary');
const displayResultsButton = document.getElementById('displayResults');
const displaySalaryButton = document.getElementById('displaySalary');

addSalaryButton.addEventListener('click', addSalary);
displayResultsButton.addEventListener('click', displayResults);
displaySalaryButton.addEventListener('click', displaySalary);

