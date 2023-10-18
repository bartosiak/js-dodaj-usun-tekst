let text = document.getElementById("tekst");
let buttonAdd = document.getElementById("dodaj");
let buttonRemove = document.getElementById("usun");

buttonAdd.onclick = function () {
    text.textContent = "Przykładowy tekst";
};
buttonRemove.onclick = function () {
    text.textContent = "";
};
