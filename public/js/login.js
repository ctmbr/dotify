const loginFormHandler = async (event) => {
  // TODO: Add a comment describing the functionality of this statement
  event.preventDefault();

  // TODO: Add a comment describing the functionality of these expressions
  const email = document.querySelector('#typeEmailX-login').value.trim(); // Adds Email entered in login.handlebars
  const password = document.querySelector('#typePasswordX-login').value.trim(); // Adds Email entered in login.handlebars

  if (email && password) {
    console.log('post /api/users/login');
    // Sends an api route to userRoutes to save the users session
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      let tempRes = JSON.parse(response.body);
      console.log(tempRes);
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#typeUsernameX-singup').value.trim();
  const email = document.querySelector('#typeEmailX-singup').value.trim();
  const password = document.querySelector('#typePasswordX-singup').value.trim();

  if (username && email && password) {
    console.log(username, email, password);
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document // Event Listeners when clicking submit buttons on login.handblebars
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
