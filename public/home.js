// Get input elements and create button
const dateInput = document.getElementById('date-input');
const descInput = document.getElementById('desc-input');
const createBtn = document.getElementById('create-btn');

// Get output section
const outputSection = document.querySelector('.output-section');

createBtn.addEventListener('click', () => {
	// Get date and description values
	const dateValue = dateInput.value;
	const descValue = descInput.value;

	// Create banner element
	const banner = document.createElement('div');
	banner.classList.add('banner');

	// Create banner content
	const bannerContent = document.createElement('p');
	bannerContent.innerHTML = `${dateValue}<br>${descValue}`;

	// Append content to banner element
	banner.appendChild(bannerContent);

	// Append banner element to output section
	outputSection.appendChild(banner);

	// Clear input fields
	dateInput.value = '';
	descInput.value = '';
});

