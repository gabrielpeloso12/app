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

## while
const start = () => {
    let count = 0;
    while(count < 10){
        console.log(count);
        count++;
    }
}  
start();

## Switch case
const start = () => {

    while(true){
        let opcao = "sair"
        switch(opcao){
            case "cadastrar":
                console.log("Cadastrar")
                break;
            case "listar":
                console.log("Listar")
                break;
            case "sair":
                return;
        }   
    }
}  


## 