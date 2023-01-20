var nom = document.getElementById('nom');
var prenom = document.getElementById('prenom');
var email = document.getElementById('email');
var password = document.getElementById('password');
var inscription = document.getElementById('register');
inscription.addEventListener('click', register);
function register() {
  var validForm = true
  if (nom.value == "") {
    nom.classList.add('is-invalid')
    nom.classList.remove('is-valid')
    validForm = false
  } else {
    nom.classList.remove('is-invalid')
    nom.classList.add('is-valid')
  }
  if (prenom.value == "") {
    prenom.classList.add('is-invalid')
    prenom.classList.remove('is-valid')
    validForm = false
  } else {
    prenom.classList.remove('is-invalid')
    prenom.classList.add('is-valid')
  }
  if (email.value == "") {
    email.classList.add('is-invalid')
    email.classList.remove('is-valid')
    validForm = false
  } else {
    email.classList.remove('is-invalid')
    email.classList.add('is-valid')
  }
  if (email.value.indexOf("@") == -1 && email.value !== "") {
    email.classList.add('is-invalid')
    email.classList.remove('is-valid')
    validForm = false
  }
  if (password.value == "") {
    password.classList.add('is-invalid')
    password.classList.remove('is-valid')
    validForm = false
  } else {
    password.classList.remove('is-invalid')
    password.classList.add('is-valid')
  }
  if (validForm == true) {
    var admins = JSON.parse(localStorage.getItem('admins')) || []

    var data = {
      nom: nom.value,
      prenom: prenom.value,
      email: email.value,
      password: password.value,
    }
    admins.push(data)
    localStorage.setItem('admins', JSON.stringify(admins));
  }
}
