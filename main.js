const botoes = document . querySelectorAll ( ".botao" );

para ( let i = 0 ; i < botoes.length ; i ++){
botoes [ i ]. onclick = function (){

para ( seja j = 0 ; j < botoes.length ; j ++){
botoes [ j ].classList . remover ( "ativo" );
}
botoes [ eu ].classList. add ( "ativo" );
}
}