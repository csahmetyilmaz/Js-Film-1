const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clearFilms = document.getElementById("clear-films");

//UI objesi baslatma
const ui = new UI();

//Storage object olustur
const storage = new Storage();


//Tum eventleri yukleme
eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function () { //Sayfa yuklendiginde calis event i
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });

    cardBody.addEventListener("click", deleteFilm);

    clearFilms.addEventListener("click", clearAllFilms);

}

function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "") {
        //err message
        console.log("if e girdi");
        ui.displayMessage("Tum alanlari doldurunuz", "danger");

    } else {
        const newFilm = new Film(title, director, url);

        ui.addFilmToUI(newFilm); // Arayuze film ekleme

        storage.addFilmToStorage(newFilm);//Storage a film ekleme

        ui.displayMessage("Film basariyla eklendi", "success");


    }

    ui.clearInputs(titleElement, urlElement, directorElement);
    e.preventDefault();
}

function deleteFilm(e) {
    if (e.target.id === "delete-film") { //Id si delete film olan objeyi buluyor.
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessage("Silme islemi basarili", "success");
    }

}

function clearAllFilms() {
    if (confirm("Emin misiniz ?")) {
        ui.clearAllFilmFromUI();
        storage.clearAllFilmsFromStorage();
    }

}