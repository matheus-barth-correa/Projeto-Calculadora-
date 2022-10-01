//função responsavél por adicionar numeros para efetuar a operação//
function insert(num) {
    var numero=document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML=numero+num;
}
//função responsávél por adicionar numeros para efetuar a operação//
//função responsável por dar um reset na operação//
function apagar() {
    document.getElementById('resultado').innerHTML=''
}
//função responsável por dar um reset na operação//
//Apagar um numero por vez, contando operações, onde terá mais acessibilidade e maior controle//
function back() {
var resultado=document.getElementById('resultado').innerHTML;
document.getElementById('resultado').innerHTML=resultado.substring(0, resultado.length -1)
}
//Apagar um numero por vez, contando operações, onde terá mais acessibilidade e maior controle//
//Função responsável por efetuar as operações matematicas//
function calcular() {
    var resultado=document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML=eval(resultado);
    }
}
//Função responsável por efetuar as operações matematicas//