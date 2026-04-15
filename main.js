const botoes = document.querySelectorAll(".botao");
 console.log(botoes);

 for (let i=0; i<=botoes.length;i++){
    console.log(botoes[i]);
    botoes[i].onclick=function(){
        botoes[i].classList.add("ativo");
    }
    console.log(botoes[i]);
 }