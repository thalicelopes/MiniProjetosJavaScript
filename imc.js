
const calcular = document.getElementById('calcular');

function IMC (){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    if(nome !== '' && altura !== '' && peso !== ''){
        const valorIMC = (peso / (altura * altura)).toFixed(2);
        let classificacao = "";
        if (valorIMC < 18.5) classificacao = "você se encontra abaixo do peso.";
        else if (valorIMC < 25) classificacao = "você se encontra no peso ideal.";
        else if (valorIMC < 30) classificacao = "você se encontra um pouco acima do peso.";
        else if (valorIMC < 35) classificacao = "você possui obesidade de nível I.";
        else if (valorIMC < 40) classificacao = "você possui obesidade de nível II.";
        else classificacao = "você possui obesidade de nível III, procure se cuidar e se exercitar diariamente.";
        resultado.textContent = `${nome}, seu IMC é ${valorIMC}. No momento, ${classificacao}`;
    } 
    else resultado.textContent = "Por favor, preencha os campos corretamente.";
}
calcular.addEventListener('click', IMC); //EVENTO DO TIPO CLICK

