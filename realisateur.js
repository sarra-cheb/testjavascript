var nom = document.getElementById('nom');
var prenom = document.getElementById('prenom');
var origine = document.getElementById('origine')
var film = document.getElementById('film')
var save = document.getElementById('save');
var edit = document.getElementById('edit');
save.addEventListener('click', saveData);
var realisateurs = JSON.parse(localStorage.getItem('realisateurs')) || []
function saveData() {
  var data = {
    nom: nom.value,
    prenom: prenom.value,
    origine: origine.value,
    film: film.value,
  }
  realisateurs.push(data)
  localStorage.setItem('realisateurs', JSON.stringify(realisateurs));
  window.location.reload();
}

// function loadlistoffilm() {
//     if (film.value !=''){
//       if (realisateurs[i].includes)
//       let result=(+price.value+ +taxes.value+ +ads.value)- +discount.value;
//       total.innerHTML=result;
//     } else{
//       total.innerHTML='';
//     }
//   }
// loadlistoffilm();
function list() {
  var tbody = document.getElementById('tbody');
  realisateurs.map((element, index) => {
    tbody.innerHTML += `
  <tr> 
    <td>${index}</td>
    <td>${element.nom}</td>
    <td>${element.prenom}</td>
    <td>${element.origine}</td>
    <td>${element.film}</td>
    <td>
    <button onclick='loadData(${index})' type="button" class="btn btn-success">Edit</button>
    <button onclick='deleteData(${index})' type="button" class="btn btn-danger">Delete</button></td>
    </tr>`
  })
}
list();
function deleteData(i) {
  realisateurs.splice(i, 1)
  localStorage.setItem('realisateurs', JSON.stringify(realisateurs));
  window.location.reload()
}
var index = null
function loadData(i) {
  nom.value = realisateurs[i].nom;
  prenom.value = realisateurs[i].prenom;
  origine.value = realisateurs[i].origine;
  film.value = realisateurs[i].film;
  save.classList.add('d-none')
  edit.classList.remove('d-none')
  index = i
}
edit.addEventListener('click', update);
function update() {
  var data = {
    nom: nom.value,
    prenom: prenom.value,
    origine: origine.value,
    film: film.value,
  }
  realisateurs.splice(index, 1, data);
  localStorage.setItem('realisateurs', JSON.stringify(realisateurs));
  window.location.reload();
}
