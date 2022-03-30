'use strict';

const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos');
    const qtdSegundos = tempo % 60;
    segundos.textContent = formatarDigito(tempo);
}
const contagemRegressiva = (tempo) => {
    const pararContagem = () => {
        clearInterval(id);
    }
    const contar = () => {
        if (tempo == 0) {
            pararContagem();
        }
        atualizar(tempo);
        tempo--;

    }
    const id = setInterval(contar, 1000);
}
contagemRegressiva(90);