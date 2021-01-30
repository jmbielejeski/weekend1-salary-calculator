console.log('JS is running');

$(document).ready(onReady);

let employeeData = [];

function onReady() {
  console.log('I am ready');

  $(document).on('click', '#submitBtn', onSubmit);
  // add submit button functionality
  // take date and append to employeeData
  // render to the DOM
  // reset input fields

  //calculate salary total
  $(document).on('click', '#submitBtn', totalSalary);

  // add delete me functionality
  $(document).on('click', '.deleteBtn', deleteMe);
}

// write onSubmit function
function onSubmit(event) {
  event.preventDefault();
  console.log('in onSubmit');

  let firstName = $('#firstName').val();
  console.log(firstName);

  let lastName = $('#lastName').val();
  console.log(lastName);

  let employeeID = $('#employeeID').val();
  console.log(employeeID);

  let jobTitle = $('#jobTitle').val();
  console.log(jobTitle);

  let annualSalary = $('#annualSalary').val();
  console.log(annualSalary);

  //append employeeData array with data from variables
  //create a new item object which stores the data

  let employee = {
    firstName: firstName,
    lastName: lastName,
    employeeID: Number(employeeID),
    jobTitle: jobTitle,
    annualSalary: Number(annualSalary),
  };
  //console.log(employee);

  employeeData.push(employee);

  //console.log(employeeData);

  renderEmployeeData(employeeData);
}

function renderEmployeeData(data) {
  console.log('rendering employee data');

  $('#employeeDataTable').empty();
  for (let employee of data) {
    $('#employeeDataTable').append(`
        <tr>
          <td>${employee.firstName}</td>
          <td>${employee.lastName}</td>
          <td>${employee.employeeID}</td>
          <td>${employee.jobTitle}</td>
          <td class ="amount">$${employee.annualSalary}</td>
          <th>          
            <button class="deleteBtn">Delete employee</button>
          </th>

        </tr>
      `);
  }
  //reset input fields on submit
  $('#employeeInputs').trigger('reset');
}

let salary = 0;
let monthlySalary = 0;

function totalSalary() {
  // loop over employee data
  for (let i = 0; i < employeeData.length; i++) {
    salary = employeeData[i].annualSalary / 12;
    console.log('salary is ', salary);
  }

  monthlySalary += salary;
  console.log('monthly salary is', monthlySalary);

  $('#salarySum').empty();
  $('#salarySum').append(`$${monthlySalary}`);

  if (monthlySalary > 20000) {
    document.getElementById('salarySum').style.backgroundColor =
      'rgba(255, 0, 0, .33';
  }
}

function deleteMe() {
  $(this).parent().parent().remove();

  //console.log('delete me!', $('.harmonica-item'));
  //$('.harmonica-item').remove()
}
