const Produtos = [
    {Codigo: 100, Produto: "Cachorro Quente", Preço_Unitário_R$: 1.70},
    {Codigo: 101, Produto: "Bauru Simples", Preço_Unitário_R$: 2.30},
    {Codigo: 102, Produto: "Bauru com Ovo", Preço_Unitário_R$: 2.60},
    {Codigo: 103, Produto: "Hamburguer", Preço_Unitário_R$: 2.40},
    {Codigo: 104, Produto: "Cheeseburguer", Preço_Unitário_R$: 1.50},
    {Codigo: 105, Produto: "Refrigerante", Preço_Unitário_R$: 1.00}
]

console.log(Produtos[0])

let Codigo1
let Carrinho = []

while (true) {
    
    var codigo1 = prompt("Digite o Codigo")
    
    if (codigo1 == 100) {
        var quantidade = prompt("Digite a quantidade")
        const ValorCQ = 1.70 * quantidade
        Carrinho.push(ValorCQ)
        console.log(Produtos[0])
        console.log(`O item Cachorro Quente foi Adicionado ao carrinho no valor de ${ValorCQ} com a quantidade de ${quantidade}`)
    }else if (codigo1 == 101) {
        var quantidade = prompt("Digite a quantidade")
        const ValorCQ = 2.30 * quantidade
        Carrinho.push(ValorCQ)
        console.log(Produtos[1])
        console.log(`O item Bauru Simples foi Adicionado ao carrinho no valor de ${ValorCQ} com a quantidade de ${quantidade}`)
    }else if (codigo1 == 102) {
        var quantidade = prompt("Digite a quantidade")
        const ValorCQ = 2.60 * quantidade
        Carrinho.push(ValorCQ)
        console.log(Produtos[2])
        console.log(`O item Bauru com Ovo foi Adicionado ao carrinho no valor de ${ValorCQ} com a quantidade de ${quantidade}`)
    }else if (codigo1 == 103) {
        var quantidade = prompt("Digite a quantidade")
        const ValorCQ = 2.40 * quantidade
        Carrinho.push(ValorCQ)
        console.log(Produtos[3])
        console.log(`O item Hamburguer foi Adicionado ao carrinho no valor de ${ValorCQ} com a quantidade de ${quantidade}`)
    }else if (codigo1 == 104) {
        var quantidade = prompt("Digite a quantidade")
        const ValorCQ = 1.50 * quantidade
        Carrinho.push(ValorCQ)
        console.log(Produtos[4])
        console.log(`O item Cheeseburguer foi Adicionado ao carrinho no valor de ${ValorCQ} com a quantidade de ${quantidade}`)
    }else if (codigo1 == 105) {
        var quantidade = prompt("Digite a quantidade")
        const ValorCQ = 1.00 * quantidade
        Carrinho.push(ValorCQ)
        console.log(Produtos[5])
        console.log(`O item Refrigerante foi Adicionado ao carrinho no valor de ${ValorCQ} com a quantidade de ${quantidade}`)
        break
    } 

}

var soma = Carrinho.reduce(function(soma, i) {
    return soma + i;
});

document.write(`O valor total da sua compra será de ${soma}`)

// let o codigo do item e quantidade para mostrar o tetal consumido