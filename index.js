document.getElementById('calculate').addEventListener('click', calculateAge);

function calculateAge() {
  var day = parseInt(document.getElementById('day').value);
  var month = parseInt(document.getElementById('month').value);
  var year = parseInt(document.getElementById('year').value);

  if (isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > new Date().getFullYear()) {
    alert('Please enter a valid date.');
    return;
  }

  var dob = new Date(year, month - 1, day);
  var today = new Date();
  var years = today.getFullYear() - dob.getFullYear();
  var months = today.getMonth() - dob.getMonth();
  var days = today.getDate() - dob.getDate();
  if (days < 0) {
    months--;
    days += 30;
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  document.querySelector('.calculated i:nth-child(1) span').textContent = years;
  document.querySelector('.calculated i:nth-child(2) span').textContent = months;
  document.querySelector('.calculated i:nth-child(3) span').textContent = days;
}
