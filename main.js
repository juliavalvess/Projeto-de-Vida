const botoes = document . querySelectorAll ( ".botao" );

for ( let i = 0 ; i < botoes.length ; i ++){
botoes [ i ]. onclick = function (){

for ( seja j = 0 ; j < botoes.length ; j ++){
botoes [ j ].classList . remover ( "ativo" );
}
botoes [ i ].classList. add ( "ativo" );
}
}