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
}
