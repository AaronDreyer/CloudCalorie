
// This code was supposed to be the applicatiosn ability to save to the database and dsiplay the indiviudal entries and calorie counter on the HTML. It did operate correctly then I merged with main. AFter that the /api/calories endpoint would not function

// document.getElementById('calorie-form').addEventListener('submit', async (event) => {
//   event.preventDefault(); // prevent form submission

//   // Get form input values
//   const meal_type = document.getElementById('meal-type').value;
//   const meal = document.getElementById('meal-name').value;
//   const number_of_calories = document.getElementById('calories').value;

//   try {
//     // Send a POST request to your server with form data
//     const response = await fetch('/api/calories', {
//       method: 'POST',
//       body: JSON.stringify({ meal_type: meal_type, meal: meal, number_of_calories: number_of_calories }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       // If successful, reload the page to display updated data
//       window.location.reload();
//     }
//   } catch (err) {
//     console.error(err);
//   }
// });

// // Fetch and display the logs and update the total calorie count from the server when the page loads
// document.addEventListener('DOMContentLoaded', async () => {
//   try {
//     // Send a GET request to your server to fetch logs
//     const response = await fetch('/api/calories/');
//     if (response.ok) {
//       const logs = await response.json();
//       const tbody = document.getElementById('log-body');
//       const totalCalorieCount = document.getElementById('calorie-count');

//       // Initialize total calorie count to 0
//       let total = 0;

//       // Loop through the logs and create table rows dynamically
//       logs.forEach(log => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${log.meal_type}</td>
//             <td>${log.meal}</td>
//             <td>${log.number_of_calories}</td>
//           `;
//         tbody.appendChild(row);

//         // Add the calories of the current log to the total
//         total += parseInt(log.number_of_calories);
//       });

//       // Update the total calorie count on the webpage
//       totalCalorieCount.textContent = total;
//     }
//   } catch (err) {
//     console.error(err);
//   }
// });

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