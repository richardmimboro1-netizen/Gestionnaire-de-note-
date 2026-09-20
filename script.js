const formulaire = document.getElementById("formulaire");

const nom = document.getElementById("nom");
const note1 = document.getElementById("note1");
const note2 = document.getElementById("note2");
const note3 = document.getElementById("note3");

const resultat = document.getElementById("resultat");
const reset = document.getElementById("reset");


formulaire.addEventListener("submit", function(event) {

    event.preventDefault();

    if (
        nom.value === "" ||
        note1.value === "" ||
        note2.value === "" ||
        note3.value === ""
    ) {

        resultat.textContent =
            "⚠️ Veuillez remplir tous les champs.";

        resultat.style.backgroundColor = "#fee2e2";
        resultat.style.color = "#b91c1c";

        return;
    }


    const n1 = Number(note1.value);
    const n2 = Number(note2.value);
    const n3 = Number(note3.value);


    if (
        n1 < 0 || n1 > 20 ||
        n2 < 0 || n2 > 20 ||
        n3 < 0 || n3 > 20
    ) {

        resultat.textContent =
            "⚠️ Les notes doivent être entre 0 et 20.";

        resultat.style.backgroundColor = "#fee2e2";
        resultat.style.color = "#b91c1c";

        return;
    }


    const moyenne = (n1 + n2 + n3) / 3;


    let decision;


    if (moyenne >= 10) {

        decision = "✅ Admis";

        resultat.style.backgroundColor = "#dcfce7";
        resultat.style.color = "#166534";

    } else {

        decision = "❌ Échec";

        resultat.style.backgroundColor = "#fee2e2";
        resultat.style.color = "#b91c1c";
    }


    resultat.innerHTML =
        "Étudiant : " + nom.value + "<br>" +
        "Note 1 : " + n1 + "/20<br>" +
        "Note 2 : " + n2 + "/20<br>" +
        "Note 3 : " + n3 + "/20<br>" +
        "Moyenne : " + moyenne.toFixed(2) + "/20<br>" +
        "Résultat : " + decision;

});


reset.addEventListener("click", function() {

    formulaire.reset();

    resultat.textContent = "";

    resultat.style.backgroundColor = "";

    resultat.style.color = "";

});
