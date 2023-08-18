/**
 * Project 5 - Refactored Javascript for access of visitor form
 */

// click action for About Me Section

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// visitor form

document.addEventListener('DOMContentLoaded', function () {
  const logVisitButton = document.getElementById('logVisitButton');
  const logVisitForm = document.getElementById('logVisitForm');
  const sendButton = document.getElementById('submitBtn');
  const visitForm = document.getElementById('visitForm'); // Added ID for form tag

  logVisitButton.addEventListener('click', function () {
    logVisitForm.style.display = 'flex';
  });

  sendButton.addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();

    // Validate the form before submission
    if (validateForm('#visitForm')) {
      logVisitForm.style.display = 'none';
      alert('Thank you for the submission!');
    }
  });

  // Add onBlur event listeners for input validation
  const inputs = visitForm.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('blur', function () {
      validateField(input);
    });
  });
});