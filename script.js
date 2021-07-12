function login() {
  userid = document.getElementById("user").value;
  localStorage.setItem("username", userid);
  window.location = "main.html";
}

function logout() {
  localStorage.removeItem("username");
  window.location = "index.html";
}
