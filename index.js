const dobutton = document.getElementById('submit');
const ageResult = document.getElementById('ageResult');
const resultDiv = document.getElementById('result');

dobutton.addEventListener('click', function (e) {
  e.preventDefault();

  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value);
  const year = parseInt(document.getElementById('year').value);

  const currentDate = new Date();
  const selectedDate = new Date(year, month - 1, day);
  console.log();
  alert(isNaN(selectedDate));
 

  if (isNaN(selectedDate) || selectedDate > currentDate   ) {
    ageResult.textContent = 'Invalid date';
  }
  else if(day<1 || day>31  || (month<1 || month>12) || (year<1 || year>2023) )
  {

    ageResult.textContent = 'All input should be in range';
  }
  
  else {
    const age = calculateAge(currentDate, selectedDate);
    ageResult.textContent = `Age: ${age.years} years, ${age.months} months, ${age.days} days`;
  }

  resultDiv.classList.remove('hidden');
});

function calculateAge(currentDate, selectedDate) {
  let years = currentDate.getFullYear() - selectedDate.getFullYear();
  let months = currentDate.getMonth() - selectedDate.getMonth();
  let days = currentDate.getDate() - selectedDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}
