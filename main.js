const matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];


function encriptarTexto(texto) {
    let textoEncriptado = texto;

    matrizCodigo.forEach(([original, reemplazo]) => {
        textoEncriptado = textoEncriptado.split(original).join(reemplazo);
    });

    const parrafo = document.getElementById("informacion-1");
    parrafo.classList.add("oculto");

    const imagenEncriptado = document.getElementById("img-encriptado");
    imagenEncriptado.classList.add("oculto");

    return textoEncriptado;
}


function desencriptarTexto(texto) {
    let textoDesencriptado = texto;

    matrizCodigo.forEach(([reemplazo, original]) => {
        textoDesencriptado = textoDesencriptado.split(original).join(reemplazo);
    });

    return textoDesencriptado;
}


function copiarTexto() {
    const textEncriptado = document.getElementById("text-encriptado");
    textEncriptado.select();
    document.execCommand("copy");
}


document.getElementById("btn-encriptar").addEventListener("click", function() {
    const inputTexto = document.getElementById("text-area").value;
    const textoEncriptado = encriptarTexto(inputTexto);
    document.getElementById("text-encriptado").value = textoEncriptado;
});

document.getElementById("btn-desencriptar").addEventListener("click", function() {
    const inputTexto = document.getElementById("text-area").value;
    const textoDesencriptado = desencriptarTexto(inputTexto);
    document.getElementById("text-encriptado").value = textoDesencriptado;
});

document.getElementById("btn-copiar").addEventListener("click", copiarTexto);
