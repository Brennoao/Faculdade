function hotPotato(elementList, num) {
    // Usaremos a classe Queue implementada anteriormente
    
    const queue = new Queue()
    const eliminatedList = []
    for(let i = 0; i < elementsList.Length; i++) {
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
    const result = hotPotato(names, 7)
    result.eliminated.forEach(name => {
        console.log(`${name} foi eliminad@ do jogo da Batata quente.`)
})
console.log(`O ganhador(a) foi ${result.winner}`)