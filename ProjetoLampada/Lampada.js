const Ligar = document.getElementById('Ligar');
const Desligar = document.getElementById('Desligar');
const Resetar = document.getElementById('Resetar');
const lamp = document.getElementById('lampada');

function checarLampada (){
    return lamp.src.indexOf ('quebrada') > -1;
}
function ligarLampada () {
    if(!checarLampada()) lamp.src = './Imagens/ligada.jpg';
}
function desligarLampada () {
    if(!checarLampada()) lamp.src = './Imagens/desligada.jpg';
}
function QuebrarLampada (){
    lamp.src = './Imagens/quebrada.jpg';
}
function resetarLampada (){
    lamp.src = './Imagens/desligada.jpg';
}
Ligar.addEventListener('click', ligarLampada);
Desligar.addEventListener('click', desligarLampada);
Resetar.addEventListener('click', resetarLampada);
lamp.addEventListener('mouseover', ligarLampada);
lamp.addEventListener('mouseleave', desligarLampada);
lamp.addEventListener('dblclick', QuebrarLampada);