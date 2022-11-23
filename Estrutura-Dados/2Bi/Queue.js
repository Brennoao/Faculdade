class Queue {
    constructor() {
        // Propriedade count para controlar o tamanho da fila
        this.count =0
        // Como removermos da frente da fila, a propriedade
        // LowestCount para manter o controle(índice) do primeiro elemento
        this.lowestCount = 0
        // Usaremos um objeto para armazenar elementos na fila
        this.items = {}
    }

    enqueue(element) {
        // Incluir um elemento na fila
        this.items[this.count] = element
        this.count++
    }

    size() {
        // Retorna o tamanho da fila
        return this.count - this.lowestCount
    }
    
    isEmpty() {
        // Retorna true se a fila estiver vazia
        return this.size() === 0
    }

    dequeue() {
        // Remove o elemento da frente da fila
        if (this.isEmpty()) {
            return undefined
        }
        // Armazenando o valor da frente da fila
        const result = this.items[this.lowestCount]
        // removendo o elemento da frente
        delete this.items[this.lowestCount]
        // Será necessário incrementar a propriedade lowestCount
        this.lowestCount++
        return result
    }

    peek() {
        // Mostrar o elemento da frente da fila
        if (this.isEmpty()) {
            return undefined
        }

        return this.items[this.lowestCount]
    }

    clear() {
        // Para limpar a fila

        this.items = {}
        this.count = 0
        this.lowestCount = 0

    }

    toString() {
        // Para imprimir a fila

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

const fila = new Queue()
console.log(fila.isEmpty()) // Exibe true
// Adicionando duas pessoas na fila

fila.enqueue('Jhon')
fila.enqueue('Jack')
console.log('A fila possui inicialmente as pessoas: ' + fila.toString()) // Jhon, Jack  
// vamos acrescentar outra pessoa na fila

fila.enqueue('Camila')
console.log('A fila agora possui as pessoas: ' + fila.toString()) // Jhon, jack, Camila  
console.log('O tamanho da fila e: ' + fila.size()) // Exibe 3
console.log('Removendo a pessoa da frente da fila: ' + fila.dequeue()) // Jhon
console.log('A fila agora possui os elementos: ' + fila.toString()) // jack, Camila
console.log('A pessoa da frente da fila agora e: ' + fila.peek()) // jack
console.log('Retirando o próximo da fila: ' + fila.dequeue()) // Jack
console.log('A fila agora possui apenas: ' + fila.toString()) // Camila
console.log('A pessoa da frente da frente agora e: ' + fila.peek()) // Camila

function hotPotato(elementList, num) {
    // Usaremos a classe Queue implementada anteriormente
    
    const queue = new Queue()
    const eliminatedList = []
    for(let i = 0; i < elementList.Length; i++) {
        // Vamos obter uma lista de nomes e enfileirar
        queue.enqueue(elementList[i])
    }

    while(queue.size() > 1) {
        for(let i = 0; i < num; i++) {
            // Removemos um item da fila e adicionamos no final para simular a batata quente
            queue.enqueue(queue.dequeue())
        }

        // Uma vez que o número foi alcançado, a pessoa que tiver a batata será removida da fila
        eliminatedList.push(queue.dequeue())
    }

    return { eliminated: eliminatedList,
        // Quando restar apenas uma pessoa, ele será a vencedora
        winner: queue.dequeue(),
    }
}

const names = ['John', 'jack', 'Camila', 'Ingrid', 'Carlos']
    const result = hotPotato(names, 5)
    result.eliminated.forEach(name => {
        console.log(`${name} foi eliminado do jogo da Batata quente.`)
})
console.log(`O ganhador(a) foi ${result.winner}`)