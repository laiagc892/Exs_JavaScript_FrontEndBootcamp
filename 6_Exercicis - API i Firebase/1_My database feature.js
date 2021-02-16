const database = "https://priori-4a266-default-rtdb.firebaseio.com/";

var adders = document.querySelectorAll(".card-head i");

var lists = document.querySelectorAll(".card-notes ul");

var blackOverlay = document.querySelector("#black-overlay");
var lb = document.querySelector("#lb");
var lbClose = document.querySelector("#lb-close");
var textTask = document.querySelector("#new-task");

var lbSave = document.querySelectorAll(".i-save");

// GET inicial ------------------------------------------------------------ ------------------------------------------------------------
getT()                                                                      // Carrega els missatges a l'iniciar la pàgina

// POST ------------------------------------------------------------ ------------------------------------------------------------
function postT(text, list) {                                                  // POST Funció. Posteja el missatge
    if(!text) return console.log("No has escrit la tasca!");        // Si algun camp està buit, no s'envia res i surt de la funció
    fetch(database + `tasks/${list}.json`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({  task: text,
            date: Date.now()
        })
    })
    .then(res => res.json())
    .then(res => {
        console.log(res);
        getT();                                                             // torna a recuperar el contingut de la base de dades
    });
    textTask.value = "";                                                        // Buidar el formulari
}

// GET ------------------------------------------------------------ ------------------------------------------------------------
function getT() {                                                           // GET Funció. Carrega tots els missatges actuals
    fetch(database + "tasks.json")
    .then(res => res.json())
    .then(res => {
        var tasksLists = res;
        
        lists.forEach(l => l.innerHTML = "");                                              // Buida el contingut abans de reescriure'l, perquè no escrigui més d'una vegada el mateix
        for (idList in tasksLists) {
            for(idTask in tasksLists[idList]){
                var listN = document.querySelector(`#${idList}-list`);
                listN.innerHTML += `<li data-id="${idTask}">${tasksLists[idList][idTask].task}<div><i class="i-edit fas fa-pen"></i><i class="i-delete fas fa-trash"></i></div></li>`
            }
        }
        addListeners();                                                     // Afegeix els Listeners després de crear els li
    });
}

function addListeners() {
    var trash = document.querySelectorAll(".i-delete");                     // S'ha de fer aquí ja que si està a fora no agafarà res perquè els li potser encara no estan creats
    trash.forEach(element => {
        element.addEventListener("click", () => {
            var idTask = element.closest("li").getAttribute("data-id");
            var idList = element.closest("ul").id.replace("-list", "");
            deleteT(idList, idTask);
            element.closest("li").remove();                                 // Elimina l'element de l'html (així no hem de recarregar la pàg per deixar-lo de veure)
        })
    })
}

// DELETE ------------------------------------------------------------ ------------------------------------------------------------
function deleteT(idL, idT) {                                                           // DELETE Funció. Elimina el missatge actual de la base de dades
    fetch(database + `tasks/${idL}/${idT}.json`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(res => console.log(res));
}

// crear listeners, segona seccio funcio addlisteners
// funcio edit (idlist, idtsk, obj?)
// ...

// Obre el lightbox:
adders.forEach(element => {
    element.addEventListener("click", (event) => {
        event.stopPropagation();
        blackOverlay.style.display = "block";
        lbSave.forEach(e => {
            if(element.id.slice(0, 2) == e.id.slice(0, 2)) e.style.display = "block";
            else e.style.display = "none";
        })
    });
})

// Tanca el lightbox guardant la tasca amb el tic:
lbSave.forEach(e => e.addEventListener("click", () => {
    if(e.id == "ui-lb-save") postT(textTask.value, "ui");
    else if(e.id == "u-lb-save") postT(textTask.value, "u");
    else if(e.id == "i-lb-save") postT(textTask.value, "i");
    else if(e.id == "p-lb-save") postT(textTask.value, "p");
}))

// Tanca el lightbox amb la creu:
lbClose.addEventListener("click", () => {
    blackOverlay.style.display = "none";
});

// Tanca el lightbox al fer click a fora:
window.addEventListener("click", (e) => {                                       // La paraula clau window es refereix a tota la zona de dins la finestra.
    if (blackOverlay.style.display == 'block' && !lb.contains(e.target)){   // Si hi ha l'overlay i el click no és en qualsevol cosa dins el lb, llavors...
    blackOverlay.style.display = "none";
}
});