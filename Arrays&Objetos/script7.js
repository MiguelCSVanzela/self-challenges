// Unir Objetos

function unirObjetos(obj1, obj2){
    // return Object.assign(obj1, obj2); 
    return {...obj1, ...obj2};
}

let primeiroObjeto = {
    nome: "Miguel", 
    idade: 22
}

let segundoObjeto = {
    sobrenome: "Claudio",
    casado: false
}

let resultado = unirObjetos(primeiroObjeto, segundoObjeto); 

console.log(resultado)