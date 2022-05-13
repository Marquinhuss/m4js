const pessoa = {
    altura: 180,
    peso:78,
    olhos:"verdes",
    aposentado: false,
    calculoIMC(){
        return this.peso/ (this.altura * this.altura)
    }
}

console.log(pessoa.altura)
console.log(pessoa.peso)
console.log(pessoa.olhos)
console.log(pessoa.calculoIMC())