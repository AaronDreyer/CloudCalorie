// get elements
const mealTypeInput = document.getElementById('meal-type');
const mealNameInput = document.getElementById('meal-name');
const caloriesInput = document.getElementById('calories');
const submitBtn = document.getElementById('submit-btn');
const logBody = document.getElementById('log-body');
const calorieCount = document.getElementById('calorie-count');

// check if there is any saved data in local storage
let logData = JSON.parse(localStorage.getItem('logData')) || [];

// function to add a new row to the calorie log table
function addRow(mealType, mealName, calories) {
  const newRow = logBody.insertRow();
  const mealTypeCell = newRow.insertCell(0);
  const mealNameCell = newRow.insertCell(1);
  const caloriesCell = newRow.insertCell(2);
  mealTypeCell.innerHTML = mealType;
  mealNameCell.innerHTML = mealName;
  caloriesCell.innerHTML = calories;
}

// function to update the calorie counter
function updateCalorieCount() {
  const totalCalories = logData.reduce((total, log) => total + parseInt(log.calories), 0);
  calorieCount.innerHTML = totalCalories;
}

// function to calorie submissions
function handleSubmit(e) {
  e.preventDefault();
  // get values from inputs
  const mealType = mealTypeInput.value;
  const mealName = mealNameInput.value;
  const calories = caloriesInput.value;
  // add row to table
  addRow(mealType, mealName, calories);
  // update calorie count
  logData.push({ mealType, mealName, calories });
  localStorage.setItem('logData', JSON.stringify(logData));
  updateCalorieCount();
  // clear inputs
  mealNameInput.value = '';
  caloriesInput.value = '';
}

// add event listener to submit button
submitBtn.addEventListener('click', handleSubmit);

// add any existing data to the calorie log table
logData.forEach(log => addRow(log.mealType, log.mealName, log.calories));

// update calorie counter on page load
updateCalorieCount();
