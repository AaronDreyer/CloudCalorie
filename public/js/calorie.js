// // get elements
// const mealTypeInput = document.getElementById('meal-type');
// const mealNameInput = document.getElementById('meal-name');
// const caloriesInput = document.getElementById('calories');
// const submitBtn = document.getElementById('submit-btn');
// const logBody = document.getElementById('log-body');
// const calorieCount = document.getElementById('calorie-count');

// // check if there is any saved data in local storage
// let logData = JSON.parse(localStorage.getItem('logData')) || [];

// // function to add a new row to the calorie log table
// function addRow(mealType, mealName, calories) {
//   const newRow = logBody.insertRow();
//   const mealTypeCell = newRow.insertCell(0);
//   const mealNameCell = newRow.insertCell(1);
//   const caloriesCell = newRow.insertCell(2);
//   mealTypeCell.innerHTML = mealType;
//   mealNameCell.innerHTML = mealName;
//   caloriesCell.innerHTML = calories;
// }

// // function to update the calorie counter
// function updateCalorieCount() {
//   const totalCalories = logData.reduce((total, log) => total + parseInt(log.calories), 0);
//   calorieCount.innerHTML = totalCalories;
// }

// // function to calorie submissions
// function handleSubmit(e) {
//   e.preventDefault();
//   // get values from inputs
//   const mealType = mealTypeInput.value;
//   const mealName = mealNameInput.value;
//   const calories = caloriesInput.value;
//   // add row to table
//   addRow(mealType, mealName, calories);
//   // update calorie count
//   logData.push({ mealType, mealName, calories });
//   localStorage.setItem('logData', JSON.stringify(logData));
//   updateCalorieCount();
//   // clear inputs
//   mealNameInput.value = '';
//   caloriesInput.value = '';
// }

// // add event listener to submit button
// submitBtn.addEventListener('click', handleSubmit);

// // add any existing data to the calorie log table
// logData.forEach(log => addRow(log.mealType, log.mealName, log.calories));

// // update calorie counter on page load
// updateCalorieCount();

// get elements
const mealTypeInput = document.getElementById('meal-type');
const mealNameInput = document.getElementById('meal-name');
const caloriesInput = document.getElementById('calories');
const submitBtn = document.getElementById('submit-btn');
const logBody = document.getElementById('log-body');
const calorieCount = document.getElementById('calorie-count');

const newFormHandler = async (event) => {
  event.preventDefault();

  const mealType = mealTypeInput.value.trim();
  const mealName = mealNameInput.value.trim();
  const calories = caloriesInput.value.trim();

  if (mealType && mealName && calories) {
    try {
      const response = await fetch('/api/calorie', {
        method: 'POST',
        body: JSON.stringify({ mealType, mealName, calories }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.reload();
      } else {
        throw new Error('Failed to add meal');
      }
    } catch (error) {
      // Handle the error here, e.g. show an error message on the UI
      console.error('Error:', error);
      // You can also customize the error handling logic as needed
      // For example, show an error message using alert or display it on the UI
      alert(error.message);
    }
  }
};

submitBtn.addEventListener('click', newFormHandler);

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    try {
      const response = await fetch(`/api/calorie/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        document.location.reload();
      } else {
        throw new Error('Failed to delete meal');
      }
    } catch (error) {
      // Handle the error here, e.g. show an error message on the UI
      console.error('Error:', error);
      // You can also customize the error handling logic as needed
      // For example, show an error message using alert or display it on the UI
      alert(error.message);
    }
  }
};

logBody.addEventListener('click', delButtonHandler);
