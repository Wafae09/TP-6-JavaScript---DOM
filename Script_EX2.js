let formulaire = document.getElementById("formulaire");
let tacheInput = document.getElementById("tacheInput");
let listeTaches = document.getElementById("listeTaches");
formulaire.addEventListener("submit",function(event) {
    event.preventDefault();
    let texteTache = tacheInput.value;
    if (texteTache === "") {
        alert("Veuillez entrer une tâche.");
        return;
    }
    let li = document.createElement("li");
    let texte = document.createElement("span");
    texte.textContent = texteTache;
    let actions = document.createElement("div");
    let bouttonAccomplie = document.createElement("button");
    bouttonAccomplie.textContent = "Accomplie";
    bouttonAccomplie.style.backgroundColor = "green";
    bouttonAccomplie.style.color = "white";
    let bouttonSupprimer = document.createElement("button");
    bouttonSupprimer.textContent = "Supprimer";
    bouttonSupprimer.style.color = "white";
    bouttonSupprimer.style.backgroundColor = "red";
    bouttonAccomplie.addEventListener("click", function() {
        li.classList.toggle("accomplie");
    })
    bouttonSupprimer.addEventListener("click", function() {
        li.remove();
    })
    actions.appendChild(bouttonAccomplie);
    actions.appendChild(bouttonSupprimer);
    li.appendChild(texte);
    li.appendChild(actions);
    listeTaches.appendChild(li);
    tacheInput.value = "";
})