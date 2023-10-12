// Filtrando por propriedades
let campoResultado = document.querySelector("#campoResultadoFiltrado")

const obj = {
    nome: "Miguel", 
    idade: 11, 
    casado: true, 
    vivo: "sim"
}

function filtrarPropriedades(obj, propriedadesPermitidas){
    const novoObjeto = {}; 
    for(const prop of propriedadesPermitidas) {
        if(obj.hasOwnProperty(prop)){
            novoObjeto[prop] = obj[prop]
        }
    }

    return novoObjeto; 
}

let propriedadesPermitidas = ["nome", "idade"]; 

let resultado = filtrarPropriedades(obj, propriedadesPermitidas);

campoResultado.innerHTML = Object.values(resultado);
