var email1 = document.getElementById('email');
var password1 = document.getElementById('password');
var connexion = document.getElementById('login');
connexion.addEventListener('click', connecter);
function connecter() {
  var validForm = true
  if (email1.value == "") {
    email1.classList.add('is-invalid')
    email1.classList.remove('is-valid')
    validForm = false
  } else {
    email1.classList.remove('is-invalid')
    email1.classList.add('is-valid')
  }
  if (email1.value.indexOf("@") == -1 && email.value !== "") {
    email1.classList.add('is-invalid')
    email1.classList.remove('is-valid')
    validForm = false
  }
  if (password1.value == "") {
    password1.classList.add('is-invalid')
    password1.classList.remove('is-valid')
    validForm = false
  } else {
    password1.classList.remove('is-invalid')
    password1.classList.add('is-valid')
  }
  if (validForm == true) {
    var admins = JSON.parse(localStorage.getItem('admins')) || []
    var found = admins.find(element => element.email == email1.value && element.password == password1.value)
    console.log(found);
    if (found != undefined) {
      window.location.href = "films.html";

    } else {
      alert("Please verify your email or password")
    }
  }
}