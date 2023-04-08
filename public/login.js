// Retrieve sign-up form elements
const signupForm = document.getElementById('signup-form');
const signupNameInput = document.getElementById('signup-name');
const signupEmailInput = document.getElementById('signup-email');
const signupPasswordInput = document.getElementById('signup-password');

// Retrieve sign-in form elements
const signinForm = document.getElementById('signin-form');
const signinEmailInput = document.getElementById('signin-email');
const signinPasswordInput = document.getElementById('signin-password');

// Handle sign-up form submission
signupForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting normally
  const name = signupNameInput.value;
  const email = signupEmailInput.value;
  const password = signupPasswordInput.value;
  console.log(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`);
  // Here, you can send the input values to the server
});

// Handle sign-in form submission
signinForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting normally
  const email = signinEmailInput.value;
  const password = signinPasswordInput.value;
  console.log(`Email: ${email}\nPassword: ${password}`);
    // Here, you can send the input values to the server
});

  