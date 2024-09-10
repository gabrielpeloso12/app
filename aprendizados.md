// hello world
let mensagem = "Gabriel Peloso";
console.log(mensagem);

## Quando adicionado linhas de códigos dentro de colchetes, significa que será local, sem colchetes e global
{
    const mensagem = "Olá mundo"
    console.log(mensagem);
}


## arrays
let metas = ["gabriel", "alo"]
console.log(metas[1], metas[0])  

## objects
let meta = {
    value: 'ler um livro por mês',
    checked: false, 
    isChecked: (info) => {
        console.log(info)
    }
}
console.log(meta.value)

## arrow function
const criarMeta = () => {}

## funtion
function criarMeta2() {}