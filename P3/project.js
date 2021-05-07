const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clearFilms = document.getElementById("clear-films");




//Tum eventleri yukleme
eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function () { //Sayfa yuklendiginde calis event i
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
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
        UI.displayMessage("Tum alanlari doldurunuz", "danger");

    } else {
        const newFilm = new Film(title, director, url);

        UI.addFilmToUI(newFilm); // Arayuze film ekleme

        Storage.addFilmToStorage(newFilm);//Storage a film ekleme

        UI.displayMessage("Film basariyla eklendi", "success");


    }

    UI.clearInputs(titleElement, urlElement, directorElement);
    e.preventDefault();
}

function deleteFilm(e) {
    if (e.target.id === "delete-film") { //Id si delete film olan objeyi buluyor.
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessage("Silme islemi basarili", "success");
    }

}

function clearAllFilms() {
    if (confirm("Emin misiniz ?")) {
        UI.clearAllFilmFromUI();
        Storage.clearAllFilmsFromStorage();
    }
    
}