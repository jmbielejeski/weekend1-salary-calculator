console.log('JS is running');

$(document).ready(onReady);

let employeeData = [];

function onReady() {
  console.log('I am ready');

  $(document).on('click', '#submitBtn', onSubmit);
  // add submit button functionality
  // take date and append to employeeData
  // render to the DOM
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
  console.log(employee);
}
