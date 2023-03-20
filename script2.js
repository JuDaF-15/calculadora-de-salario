function calcular() {
    let tipoCategoria = document.getElementById("categoria").value;
    let salario = 0;
    let tarifa = 0;
    let horas = document.getElementById("horas").value;
    let resultado = document.getElementById("resultado");

    if (horas > 40) {
        let horasExtras = horas - 40;
        tarifa = (tipoCategoria == "1") ? 12000 : (tipoCategoria == "2") ? 17000 : 22000;
        salario = 40 * tarifa + horasExtras * tarifa * 1.25;
    } else {
        tarifa = (tipoCategoria == "1") ? 12000 : (tipoCategoria == "2") ? 17000 : 22000;
        salario = horas * tarifa;
    }

    resultado.innerHTML = `La tarifa de su categoría tiene un valor de $${tarifa}, por lo tanto su salario es de $${salario}`;
}

function validar() {
    let tipoCategoria = document.getElementById("categoria").value;
    let horas = document.getElementById("horas").value;

    if (tipoCategoria == "4" && horas == "") {
        document.getElementById("resultado").innerText = "DEBE SELECCIONAR UNA CATEGORÍA Y DIGITAR LAS HORAS"
    } else if (horas == "")
        document.getElementById("resultado").innerText = "DIGITE LAS HORAS";
    else if (tipoCategoria == "4") {
        document.getElementById("resultado").innerText = "SELECCIONE CATEGORÍA";
    } else if (horas <= 0)
        document.getElementById("resultado").innerText = "EL VALOR DE LAS HORAS DEBE SER POSITIVO";
}

function reset() {
    document.getElementById("resultado").innerText = "";
    document.getElementById("horas").value = "";
    document.getElementById("categoria").value = "4";
}

