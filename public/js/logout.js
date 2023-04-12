const logout = async () => {
    const response = await fetch('/api/userRoutes/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#logout-btn').addEventListener('click', logout);
  