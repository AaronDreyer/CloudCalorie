
// get elements
const mealTypeInput = document.getElementById('meal-type');
const mealNameInput = document.getElementById('meal-name');
const caloriesInput = document.getElementById('calories');
const submitBtn = document.getElementById('submit-btn');
const logBody = document.getElementById('log-body');
const calorieCount = document.getElementById('calorie-count');

// function to add a new row to the calorie log table
function addRow(meal_type, meal, number_of_calories) {
  const newRow = logBody.insertRow();
  const mealTypeCell = newRow.insertCell(0);
  const mealNameCell = newRow.insertCell(1);
  const caloriesCell = newRow.insertCell(2);
  mealTypeCell.innerHTML = meal_type;
  mealNameCell.innerHTML = meal;
  caloriesCell.innerHTML = number_of_calories;
}

// function to update the calorie counter
function updateCalorieCount() {
  fetch('/api/calories')
    .then(response => response.json())
    .then(data => {
      const totalCalories = data.reduce((total, log) => total + parseInt(log.number_of_calories), 0);
      calorieCount.innerHTML = totalCalories;
    })
    .catch(error => console.error(error));
}

// function to handle form submissions
function handleSubmit(e) {
  e.preventDefault();
  // get values from inputs
  const meal_type = mealTypeInput.value;
  const meal = mealNameInput.value;
  const number_of_calories = caloriesInput.value;
  // add row to table
  addRow(meal_type, meal, number_of_calories);
  // update calorie count
  const formData = { meal_type, meal, number_of_calories };
  fetch('/api/calories', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Data saved successfully:', data);
    })
    .catch(error => console.error(error));
  // clear inputs
  mealNameInput.value = '';
  caloriesInput.value = '';
}

// add event listener to submit button
submitBtn.addEventListener('click', handleSubmit);

// update calorie counter on page load
updateCalorieCount();
