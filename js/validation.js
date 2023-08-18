// Function to validate a required field
function checkRequired(value) {
    return value.trim() !== '';
  }
  
  // Validate the entire form
  function validateForm(formSelector) {
    const form = document.querySelector(formSelector);
    const inputs = form.querySelectorAll('input');
    let isValid = true;
  
    inputs.forEach(input => {
      if (!validateField(input)) {
        isValid = false;
      }
    });
  
    return isValid;
  }
  
  // Validate a single input field
  function validateField(input) {
    const value = input.value.trim();
    const id = input.id;
    const errorMsg = input.parentElement.querySelector('.errorMsg');
  
    if (input.required && !checkRequired(value)) {
      errorMsg.textContent = 'This field is required.';
      return false;
    }
  
    if (id === 'how-found') {
      if (value === '') {
        errorMsg.textContent = 'Please select an option.';
        return false;
      }
    }
  
    if (id === 'checkbox-group') {
      const checkboxes = input.querySelectorAll('input[type="checkbox"]:checked');
      if (checkboxes.length === 0) {
        errorMsg.textContent = 'At least one option must be selected.';
        return false;
      }
    }
  
    errorMsg.textContent = ''; // Clear error message if valid
    return true;
  }