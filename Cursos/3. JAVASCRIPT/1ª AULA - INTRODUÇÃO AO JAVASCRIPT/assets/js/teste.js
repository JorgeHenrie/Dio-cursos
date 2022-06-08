/* crtl + / cria comentário de linha */

/* DECLARAÇÃO DE FUNÇÃO */

/*

function soma(a, b){
    console.log(a + b);
    return a + b;
}

soma(1, 2);

*/

//console.log('Hello world!')

function returnEvenValues(array) {
    let evenNums = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 == 0){
            evenNums.push(array[i])
        } 
    }
    console.log('Números pares: ',evenNums);
}

let array = [1,2,4,5,7,8];

returnEvenValues(array);