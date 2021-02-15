const database = "https://priori-4a266-default-rtdb.firebaseio.com/"

var uiAdd = document.querySelector("#ui-add");
var uAdd = document.querySelector("#u-add");
var iAdd = document.querySelector("#i-add");
var pAdd = document.querySelector("#p-add");

var uiList = document.querySelector("#ui-list");
var uList = document.querySelector("#ui-list");
var iList = document.querySelector("#ui-list");
var pList = document.querySelector("#ui-list");

var add = document.querySelectorAll(".card-head i");

var blackOverlay = document.querySelector("#black-overlay");
var lightBox = document.querySelector("#lb");
var lbClose = document.querySelector("#lb-close");

// Obre el lightbox:

// add.addEventListener("click", (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     blackOverlay.style.display = "block";
// });

function postTask(category, value) {
    
}

// Tanca el lightbox amb botó:
lbClose.addEventListener("click", () => {
    blackOverlay.style.display = "none";
});

// Tanca el lightbox al fer click a fora:
window.addEventListener("click", (e) => {   // La paraula clau window es refereix a tota la zona de dins la finestra.
    if (black_overlay.style.display == 'block' && !lb.contains(event.target)){      // Si hi ha l'overlay i el click no és en qualsevol cosa dins el lb, llavors...
    black_overlay.style.display = "none";
}
});