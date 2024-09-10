//arrays
let metas = ["gabriel", "alo"]
console.log(metas[1], metas[0])  

//objects
let meta = {
    value: 'ler um livro por mês',
    checked: false, 
    log: (info) => {
        console.log(info)
    }
}
meta.log(meta.value)

