



function appendValue(value) {
    const resultField = document.getElementById('result');
    resultField.value += value;
  }
  
  function clearResult() {
    const resultField = document.getElementById('result');
    resultField.value = '';
  }
  
  function calculate() {
    const resultField = document.getElementById('result');
    try {
      resultField.value = eval(resultField.value); // Evaluate the expression
    } catch (error) {
      resultField.value = 'Error'; // Display error if calculation fails
    }
  }
  