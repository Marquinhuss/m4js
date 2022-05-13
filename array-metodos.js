const frutas = [
    {nome:"banana",preco:5},
    {nome:"uva",preco:2},
    {nome:"abacaxi",preco:7},
    {nome:"Laranja", preco:3},
]

// aumento de 20%


const frutasAumento = frutas.map((fruta)=>{
    return {nome:fruta, 
        novoPreco: fruta.preco * 1.2}
})

console.log(frutas)

console.log(frutasAumento)
