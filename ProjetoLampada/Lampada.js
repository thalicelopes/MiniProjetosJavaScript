const LigarDesligar = document.getElementById('LigarDesligar');
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
    Resetar.hidden = false;
    LigarDesligar.hidden = true;
}
function resetarLampada (){
    lamp.src = './Imagens/desligada.jpg';
    Resetar.hidden = true;
    LigarDesligar.hidden = false;
}
function OnOff (){
    if (LigarDesligar.textContent == 'Ligar'){
        ligarLampada();
        LigarDesligar.textContent = 'Desligar';
    }
    else{
        desligarLampada();
        LigarDesligar.textContent = 'Ligar';
    }
}
LigarDesligar.addEventListener('click', OnOff);
Resetar.addEventListener('click', resetarLampada);
lamp.addEventListener('mouseover', ligarLampada);
lamp.addEventListener('mouseleave', desligarLampada);
lamp.addEventListener('dblclick', QuebrarLampada);