function testeNum(num){
    if ( num > 0){
        if (num % 2 == 0){
            console.log(`${num} é par`);
        }else{
            console.log(`${num} é ímpar`);
        }
    }
}

testeNum(7);