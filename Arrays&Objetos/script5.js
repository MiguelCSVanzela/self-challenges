// soma de propriedades


function somaPropriedades(obj){
    let total = 0; 

    for(let chave in obj){
        if(obj.hasOwnProperty(chave) && typeof obj[chave] === 'number'){
            total += obj[chave]
        }
    }

    return total; 
}


let obj = {
    a: 1, 
    b: 2, 
    x: "a", 
    d: 3
}

console.log(somaPropriedades(obj));
