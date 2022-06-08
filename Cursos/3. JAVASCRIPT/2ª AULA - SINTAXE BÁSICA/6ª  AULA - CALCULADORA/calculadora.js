function calculadora(){
    const operacao = prompt('Escolha uma opção: \n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real(/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)'); 

    let n1 = Number(prompt('insira primeiro numero: '));
    let n2 = Number(prompt('insira segundo numero: '));
    let resultado;

    function soma(){
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
    }

if (operacao == 1){
    soma();
}else if(operacao == 2){
    subtracao();
}else if (operacao == 3){
    multiplicacao ();
}else if (operacao == 4){
    divisaoReal();
}else if (operacao == 5){
    divisaoInteira();
}else if (operacao == 6){
    potenciacao();
}
}