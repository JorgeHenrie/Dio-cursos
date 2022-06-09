function verificaPalindromo2(string){
    if(!string) return "String inexistente!";

    for(let i = 0; i < string.lenght / 2; i++){
        if ( string[i] !== string.lenght - 1 - i){
            return false;            
        }

    }

    return true;
}

console.log(verificaPalindromo2("jorge"));