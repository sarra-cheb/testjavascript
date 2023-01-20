var nom = document.getElementById('nom');
var annee = document.getElementById('annee');
var save = document.getElementById('save');
var edit=document.getElementById('edit');
save.addEventListener('click', saveData);
var films = JSON.parse(localStorage.getItem('films')) || []
function saveData() {
  var data = {
    nom: nom.value,
    annee: annee.value,
  }
  films.push(data)
  localStorage.setItem('films', JSON.stringify(films));
  window.location.reload();
}
function list() {
  var tbody = document.getElementById('tbody');
  films.map((element, index) => {
    tbody.innerHTML += `
  <tr> 
    <td>${index}</td>
    <td>${element.nom}</td>
    <td>${element.annee}</td>
    <td id='select'></td>
    <td>
    <button type="button"  onclick='loadData(${index})' class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal"> Edit</button>
    <button onclick='deleteData(${index})' type="button" class="btn btn-danger">Delete</button></td>
    </tr>`
  })
}
list();
function deleteData(i) {
  films.splice(i, 1)
  localStorage.setItem('films', JSON.stringify(films));
  window.location.reload()
}
var index = null
function loadData(i){
  nom.value=films[i].nom;
  annee.value= films[i].annee;
  save.classList.add('d-none')
  edit.classList.remove('d-none')
  index = i
}
edit.addEventListener('click',update);
function update() {
  var data= {
    nom:nom.value,
    annee:annee.value,
  }
  films.splice(index, 1,data);
  localStorage.setItem('films', JSON.stringify(films));
  window.location.reload();
}
var realisateurs = JSON.parse(localStorage.getItem('realisateurs')) || []
function loadNameofdirector() {
  var selection = document.getElementById('select')
  var found = realisateurs.find(element => element.film == nom.value)
    selection.innerHTML = `
    <option>${found}</option>`
  }
loadNameofdirector();
