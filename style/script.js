
function add ( valor ){
    var visor = document.calculadora.visor.value;
    document.calculadora.visor.value = visor + valor;
}
function resultado(){
    var visor = document.calculadora.visor.value
    document.calculadora.visor.value = eval(document.calculadora.visor.value);
}