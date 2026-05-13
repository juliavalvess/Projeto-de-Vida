const botoes = documento . querySelectorAll ( ".botao" );

para ( let i = 0 ; i < botoes.length ; i ++){
botoes [ i ]. onclick = function (){

para ( seja j = 0 ; j < botoes.length ; j ++){
botoes [ j ]. lista de classes . remover ( "ativo" );
}
botoes [ eu ]. lista de classes . add ( "ativo" );
}
}