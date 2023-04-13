const newFormHandler = async (event) => {
  event.preventDefault();

  const meal_type = document.querySelector('#meal-type').value.trim();
  const meal = document.querySelector('#meal-name').value.trim();
  const number_of_calories = document.querySelector('#calories').value.trim();

  // Debugging: Log the values of the input fields
  console.log('mealType:', meal_type);
  console.log('meal:', meal);
  console.log('numberOfCalories:', number_of_calories);

  // Create the calorie object
  // Debugging: Log the calorie object

  if (meal_type && meal && number_of_calories) {
    const response = await fetch('/api/calories', {
      method: 'POST',
      body: JSON.stringify({ meal_type, meal, number_of_calories }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload(); // Update page or redirect as needed
    } else {
      alert('Failed to save calorie information');
    }
  }
};

document.querySelector('#calorie-form').addEventListener('submit', newFormHandler);