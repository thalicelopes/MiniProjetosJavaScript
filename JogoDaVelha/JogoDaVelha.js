    var formulario = document.getElementById("formJogo");
    var Jogo = document.getElementById("Jogo");
    var Jogador1 = document.getElementById("Jogador1");
    var Jogador2 = document.getElementById("Jogador2");

    const recomecar = (Jogador1, Jogador2) =>{
        let Game = document.getElementById("Game"); 
        let botao1 = document.getElementById(1);
        botao1.textContent = "Casa 1";
        botao1.disabled = false;
        let botao2 = document.getElementById(2);
        botao2.textContent = "Casa 2";
        botao2.disabled = false;
        let botao3 = document.getElementById(3);
        botao3.textContent = "Casa 3";
        botao3.disabled = false;
        let botao4 = document.getElementById(4);
        botao4.textContent = "Casa 4";
        botao4.disabled = false;
        let botao5 = document.getElementById(5);
        botao5.textContent = "Casa 5";
        botao5.disabled = false;
        let botao6 = document.getElementById(6);
        botao6.textContent = "Casa 6";
        botao6.disabled = false;
        let botao7 = document.getElementById(7);
        botao7.textContent = "Casa 7";
        botao7.disabled = false;
        let botao8 = document.getElementById(8);
        botao8.textContent = "Casa 8";
        botao8.disabled = false;
        let botao9 = document.getElementById(9);
        botao9.textContent = "Casa 9";
        botao9.disabled = false;
        var paragrafoJogador = document.getElementById("paragrafoJogador");
        paragrafoJogador.remove();
        // let botaoRecomecar = document.getElementById("restart");
        // botaoRecomecar.remove();
        if (Game.textContent == Jogador1){
            var aux1 = Jogador2;
            var aux3 = Jogador1;
            Teste(aux3, aux1);
        }
        else{
            var aux = Jogador1;
            var aux2 = Jogador2;
            Teste(aux2, aux);
        }
    }
    const Teste = (aux, aux2) =>{
        console.log(aux.value + aux2.value);
    }

    function handleForm(event) { event.preventDefault(); }
    formulario.addEventListener('submit', handleForm);

    window.onload = function carrega() {
        formulario.hidden = true;
        Jogo.hidden = false;
    }

    const load = () => {
        formulario.hidden = false;
        Jogo.hidden = true;
    }

    const Verificar = () => {
        var Form = document.getElementById("formJogo");
        if (Jogador1.value == Jogador2.value || Jogador1.value == "" || Jogador2.value == "") {
            var p = document.createElement("p");
            var node = document.createTextNode("INSIRA CORRETAMENTE OS NOMES.");
            p.appendChild(node);
            Form.appendChild(p);
        }
        else {
            Form.hidden = true;
            jogo(Jogador1, Jogador2);
        }
    }

    const jogo = (Jogador1, Jogador2) => {
        let main = document.getElementById("main");
        let paragrafo = document.getElementById("paragrafo");
        let game = document.getElementById("Game");
        main.hidden = false;
        let p = document.createTextNode("Jogador 1 (X): " + Jogador1.value + " | Jogador 2: (O) " + Jogador2.value);
        let s = document.createTextNode(Jogador1.value);
        paragrafo.appendChild(p);
        game.appendChild(s);
        paragrafo.setAttribute("id", "paragrafoJogador");
    }
    
    const game = (Valor) => {
        let game = document.getElementById("Game");
        let Jog1 = document.getElementById("Jogador1");
        let Jog2 = document.getElementById("Jogador2");
        let val = document.getElementById(Valor);
        if(game.textContent == Jog1.value){
            val.textContent = "X";
            val.disabled = true;
            let Casa1 = document.getElementById(1)
            let Casa2 = document.getElementById(2)
            let Casa3  = document.getElementById(3)
            let Casa4 = document.getElementById(4)
            let Casa5 = document.getElementById(5)
            let Casa6 = document.getElementById(6)
            let Casa7 = document.getElementById(7)
            let Casa8 = document.getElementById(8)
            let Casa9 = document.getElementById(9)
            if ((Casa1.textContent == Casa2.textContent && Casa1.textContent == Casa3.textContent && Casa2.textContent == Casa3.textContent)||
            (Casa4.textContent == Casa5.textContent && Casa4.textContent == Casa6.textContent && Casa5.textContent == Casa6.textContent) ||
            (Casa7.textContent == Casa8.textContent && Casa7.textContent == Casa9.textContent && Casa8.textContent == Casa9.textContent) ||
            (Casa1.textContent == Casa4.textContent && Casa7.textContent == Casa1.textContent && Casa4.textContent == Casa7.textContent) || 
            (Casa2.textContent == Casa5.textContent && Casa2.textContent == Casa8.textContent && Casa5.textContent == Casa8.textContent) || 
            (Casa3.textContent == Casa6.textContent && Casa3.textContent == Casa9.textContent && Casa6.textContent == Casa9.textContent) || 
            (Casa3.textContent == Casa5.textContent && Casa3.textContent == Casa7.textContent && Casa5.textContent == Casa7.textContent) || 
            (Casa1.textContent == Casa5.textContent && Casa1.textContent == Casa9.textContent && Casa5.textContent == Casa9.textContent)){
                let p = document.createElement("p");
                let botao = document.createElement("button");
                botao.setAttribute("id", "restart");
                botao.textContent = "Jogar Novamente";
                let texto = document.createTextNode("O vencedor é: " + Jog1.value + ". Fim de jogo.");
                p.appendChild(texto);
                let maintext = document.getElementById("main");
                maintext.appendChild(p);
                maintext.appendChild(botao);
                let botaoRestart = document.getElementById("restart");
                botaoRestart.addEventListener("click", recomecar(Jog2, Jog1));
            }
            else{
                game.textContent = Jog2.value;
            }
        }
        else{
            val.textContent = "O";
            val.disabled = true;

            let Casa1 = document.getElementById(1);
            let Casa2 = document.getElementById(2);
            let Casa3  = document.getElementById(3);
            let Casa4 = document.getElementById(4);
            let Casa5 = document.getElementById(5);
            let Casa6 = document.getElementById(6);
            let Casa7 = document.getElementById(7);
            let Casa8 = document.getElementById(8);
            let Casa9 = document.getElementById(9);
            if ((Casa1.textContent == Casa2.textContent && Casa1.textContent == Casa3.textContent && Casa2.textContent == Casa3.textContent)||
            (Casa4.textContent == Casa5.textContent && Casa4.textContent == Casa6.textContent && Casa5.textContent == Casa6.textContent) ||
            (Casa7.textContent == Casa8.textContent && Casa7.textContent == Casa9.textContent && Casa8.textContent == Casa9.textContent) ||
            (Casa1.textContent == Casa4.textContent && Casa7.textContent == Casa1.textContent && Casa4.textContent == Casa7.textContent) || 
            (Casa2.textContent == Casa5.textContent && Casa2.textContent == Casa8.textContent && Casa5.textContent == Casa8.textContent) || 
            (Casa3.textContent == Casa6.textContent && Casa3.textContent == Casa9.textContent && Casa6.textContent == Casa9.textContent) || 
            (Casa3.textContent == Casa5.textContent && Casa3.textContent == Casa7.textContent && Casa5.textContent == Casa7.textContent) || 
            (Casa1.textContent == Casa5.textContent && Casa1.textContent == Casa9.textContent && Casa5.textContent == Casa9.textContent)){
                let p = document.createElement("p");
                let botao = document.createElement("button");
                botao.setAttribute("id", "restart");
                botao.textContent = "Jogar Novamente";
                let texto = document.createTextNode("O vencedor é: " + Jog2.value + ". Fim de Jogo.");
                p.appendChild(texto);
                let maintext = document.getElementById("main");
                maintext.appendChild(p);
                maintext.appendChild(botao);
                let botaoRestart = document.getElementById("restart");
                botaoRestart.addEventListener("click", recomecar(Jog1, Jog2));
            }
            else{
                game.textContent = Jog1.value;
            }
        }
    }