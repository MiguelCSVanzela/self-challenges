// Retry de Promises

function tentarNovamente(funcao, maxTentativas, intervalo){
    return new Promise(async(resolve, reject) => {
        for(let tentativa = 1; tentativa <= maxTentativas; tentativa++){

            try{

                const resultado = await funcao()
                return resolve(resultado)

            }catch(error){
                if(tentativa === maxTentativas) return reject(error)

                await new Promise((requisicao) => setTimeout(requisicao, intervalo))
            }
        }
    })
}


const fetchComRetry = () => fetch("http://lalall.com.br"); 

tentarNovamente(fetchComRetry, 3, 1000).then((response) => response.json()).then((dados) => console.log(dados)).catch((err) => console.error("Falha após 3 tentivas", err))