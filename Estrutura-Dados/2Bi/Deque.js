class deque {
    // Implementando o metodo construtor
    constructor() {
        // Count para controlar o tamanho do deque
        this.count = 0
        // LowestCount para controlar o (indice) do primeiro do primeiro elemento (Frente do deque)
        this.lowestCount = 0
        // Objeto items para armazenar elementos no deque
        this.items = {}
    }

    addFront(element) { // Adicionar um novo elemeto na frente do deque
        // Primeiro cenario verifica se o deque está vazio
        if (thisEmpty) {
            // Neste caso chamamos o método addBack no final da deque
            this.addBack(element)
        }else if (this.lowestCount > 0) {
            // O elemento é removido da frente do deque
            this.lowestCount--
            this.items[this.lowestCount] = element
        }else {
            // Se lowestCound é igual a zero e para adicionar um novo elemento na primeira posição, devemos mover para próxima posição e deixar o primeiro index livre
            for (var i = this.count; i > 0; i-- ) {
                this.items[i] = this.items[i - i]
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

    removeFront(element) { // Remove o primeiro elemento do deque
        if (this.isEmpty()) {
            return undefined
        }

        // Armazenamendo o valor da frente da fila
        const result = this.items[this.lowestCount]

        // Removendo o elemento da frente
        delete this.items[this.lowestCount]

        // será necessário  incrementar a propriedade lowestCount
        this.lowestCount++
        return result
    }

    removeback(element) { // Removo o ultimo elemento do deuqe

    }

    peekfront(element) { // Devolve o peimeiro elemento do deque

    }

    peekback(element) { // Devolve o ultimmo elemento do deque

    }

    size(element) { // Para retornar o tamanho do deque

    }

    isEmpty(element) { // Verificar se esta vazio

    }

    toString(element) { // Apresenta o conteudo do deque

    }
}