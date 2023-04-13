
document.getElementById('calorie-form').addEventListener('submit', async (event) => {
  event.preventDefault(); // prevent form submission

  // Get form input values
  const meal_type = document.getElementById('meal-type').value;
  const meal = document.getElementById('meal-name').value;
  const number_of_calories = document.getElementById('calories').value;

  try {
    // Send a POST request to your server with form data
    const response = await fetch('/api/calories', {
      method: 'POST',
      body: JSON.stringify({ meal_type: meal_type, meal: meal, number_of_calories: number_of_calories }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, reload the page to display updated data
      window.location.reload();
    } else {
      throw new Error('Failed to add calorie');
    }
  } catch (err) {
    console.error(err);
  }
});

// Fetch and display the logs and update the total calorie count from the server when the page loads
document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Send a GET request to your server to fetch logs
    const response = await fetch('/api/calories');
    if (response.ok) {
      const logs = await response.json();
      const tbody = document.getElementById('log-body');
      const totalCalorieCount = document.getElementById('calorie-count');

      // Initialize total calorie count to 0
      let total = 0;

      // Loop through the logs and create table rows dynamically
      logs.forEach(log => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${log.meal_type}</td>
            <td>${log.meal}</td>
            <td>${log.number_of_calories}</td>
          `;
        tbody.appendChild(row);

        // Add the calories of the current log to the total
        total += parseInt(log.number_of_calories);
      });

      // Update the total calorie count on the webpage
      totalCalorieCount.textContent = total;
    } else {
      throw new Error('Failed to fetch logs');
    }
  } catch (err) {
    console.error(err);
  }
});
