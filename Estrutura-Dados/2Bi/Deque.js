class Deque {
    // Implementando o método construtor
    constructor() {
        // Count para controlar o tamanho do deque
        this.count = 0
        // LowestCount para controlar o (índice) do primeiro do primeiro elemento (Frente do deque)
        this.lowestCount = 0
        // Objeto items para armazenar elementos no deque
        this.items = {}
    }

    addFront(element) { // Adicionar um novo elemento na frente do deque
        // Primeiro cenário verifica se o deque está vazio
        if (this.isEmpty()) {
            // Neste caso chamamos o método addBack no final da deque
            this.addBack(element)
        }else if (this.lowestCount > 0) {
            // O elemento é removido da frente do deque
            this.lowestCount--
            this.items[this.lowestCount] = element
        }else {
            // Se lowestCound é igual a zero e para adicionar um novo elemento na primeira posição, devemos mover para próxima posição e deixar o primeiro index livre
            for (var i = this.count; i > 0; i-- ) {
                this.items[i] = this.items[i - 1]
            }
            this.count++
            this.lowestCount = 0
            this.items[0] = element
        }
    }

    addBack(element) { // Adicionar um novo elemento no fim do deque
        this.items[this.count] = element
        this.count++
    }

    removeFront() { // Remove o primeiro elemento do deque
        if (this.isEmpty()) {
            return undefined
        }

        // Armazenamento o valor da frente da fila
        const result = this.items[this.lowestCount]

        // Removendo o elemento da frente
        delete this.items[this.lowestCount]

        // será necessário  incrementar a propriedade lowestCount
        this.lowestCount++
        return result
    }

    removeback() { // Removo o ultimo elemento do deque
        if (this.isEmpty()) {
            return undefined
        }

        this.count--
        const result = this.items[this.count]
        delete this.items[this.count]
        return result
    }

    peekfront() { // Devolve o primeiro elemento do deque
        if (this.isEmpty()) {
            return undefined
        }

        return this.items[this.lowestCount]
    }

    peekback() { // Devolve o último elemento do deque
        return this.items[this.items.length - 1]
    }

    // para retornar o tamanho do deque basta retornar a diferença de count por lowestCount

    size() { // Para retornar o tamanho do deque
        return this.count - this.lowestCount
    }

    isEmpty() { // Verificar se esta vazio
        return this.size() === 0
    }

    toString() { // Apresenta o conteúdo do deque
        if (this.isEmpty()) {
            return ''
        }
        let objString = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`
        }
        return objString
    }
}

// usando a classe Deque

const deque = new Deque()
console.log(deque.isEmpty()) // exibe true
deque.addBack('João')
deque.addBack('Pedro')
console.log(deque.toString()) // João, Pedro
deque.addBack('Camila') // João, Pedro, Camila
console.log(deque.size()) // Exibe 3
console.log(deque.isEmpty()) // Exibe false
deque.removeFront() // Remove João
console.log(deque.toString()) // Pedro, Camila
deque.removeback() // Camila decide sair
console.log(deque.toString())  // Pedro
deque.addFront('João') // João retorna para pedir informação
console.log(deque.toString()) // João, Pedro