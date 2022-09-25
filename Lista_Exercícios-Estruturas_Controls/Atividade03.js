var codigo1 = ("100")
var codigo = JSON.parse(codigo1)

const Produtos = [
    {Codigo: 100, Produto: "Cachorro Quente", PreçoUnitárioR$: 1.70},
    {Codigo: 101, Produto: "Bauru Simples", PreçoUnitárioR$: 2.30},
    {Codigo: 102, Produto: "Bauru com Ovo", PreçoUnitárioR$: 2.60},
    {Codigo: 103, Produto: "Hamburguer", PreçoUnitárioR$: 2.40},
    {Codigo: 104, Produto: "Cheeseburguer", PreçoUnitárioR$: 1.50},
    {Codigo: 105, Produto: "Refrigerante", PreçoUnitárioR$: 1.00}
]

if (codigo == Produtos) {
   document.write (Produtos["Codigo"])
} else {
    console.log("Azedo o role")
}

// Pegar o valor do index 1 e multiplicar pelo valor da quantide