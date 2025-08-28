function openLogin() {
  document.getElementById('loginModal').style.display = 'block';
}

function closeLogin() {
  document.getElementById('loginModal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('loginModal');
  if (event.target === modal) {
    closeLogin();
  }
}

function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  if (email && password) {
    alert("Login Successful!");
    closeLogin();
    document.getElementById('loginForm').reset();
  } else {
    alert("Please fill in all fields.");
  }
}
