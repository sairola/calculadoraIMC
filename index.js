window.onload = iniciar;

function iniciar() {
    btn = document.getElementById("btn");
    btn.addEventListener("click", clickBtnCalcular);
}

function clickBtnCalcular() {
    var txtPeso = document.getElementById("txtPeso");
    var peso = txtPeso.value;

    var textAltura = document.getElementById("textAltura");
    var altura = textAltura.value;

    var imc = peso / (altura * altura);
    alert("El IMC es: " + imc);
}