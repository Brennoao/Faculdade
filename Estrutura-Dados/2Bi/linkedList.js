// iremos criar nossa classe para a lista encadeada (ligada)
function LinkedList() {
    let length = 0;  // length terá o tamanho da lista ligada
    let head = null; // head(cabeça) terá o primeiro elemento da lista ligada

    // criaremos uma classe auxiliar para representar
    // o elemento cabeça (head) da lista ligada
    let Node = function (element) {
        this.element = element;
        this.next = null;
    };


    // agora vamos implementar um método para adicionar elementos na lista
    this.append = function(element){
        // cria um novo Node (nó da lista) passando element como argumento
        const node = new Node(element);
        // variável para guardar o endereço do elemento atual
        let current = null;
        //primeiro cenário, quando a lista ligada está vazia
        if (head === null){
            head = node;
        }else {
            // segundo cenário, quando a lista ligada não estiver vazia
            current = head;
            // percorrendo a lista até chegar no valor atual (head)
            while (current.next){
                // obtém o último item
                current = current.next;
            }
            // e atribui um novo elemento a next para criar a ligação
            current.next = node;
        }
        // e por fim, não esquecer de incrementar a variável length
        length++;  // no final nos dará o tamanho da lista
    };
    // método size retorna a quantidade (this.length)
    // de elementos da lista encadeada
    this.size = function(){
        return length;
    };

    // método que recupera o elemento (node) de uma determinada posição
    this.getElementAt = function(position){
        if(position >= 0 && position <= this.size()){
            let node = head;
            // percorrendo a lista até encontrar o elemento da position
            for (let i = 0; (i < position) && (node != null); i++){
                node = node.next;
            }
            // devolvo o elemento da posição encontrada
            return node;
        }
        return null;
    };

    // vamos criar o método que insere elementos em uma determinada posição
    // da lista ligada, passando a posição (position) e o valor(element)
    this.insert = function(position, element){        
        if(position >= 0 && position <= length){
            let node = new Node(element),
                current = head,
                previous,
                index = 0;
           // primeiro cenário, adiciona um elemento no início da lista (index=0)
           if (position === 0){
                node.next = current;
                head = node;
           } else {
               // segundo cenário, adiciona elemento no meio ou no final da lista
               previous = this.getElementAt(position - 1);
               current = previous.next;
               node.next = current;
               previous.next = node;
           }
           // atualiza o tamanho da lista
           length++;
           return true;
        } else {
            return false;
        }
    };
    // removendo um elemento(nó) da lista, passando sua posição (endereço)
    this.removeAt = function(position) {
        // verifica primeiro se a posição está no intervalo da lista
        if (position > -1 && position <= length){
            let current = head,
                previous;
            // primeiro cenário: removendo o primeiro item
            if (position === 0){
                head = current.next;
            } else {
                // segundo cenário: removendo de uma posição específica
                // guardando o elemento anterior
                previous = this.getElementAt(position - 1);      
                // o elemento que queremos remover é o próximo da lista
                current = previous.next;
                // refaz a ligação de previous com o próximo (next)
                // de current (pula esse elemento para removê-lo)
                previous.next = current.next;
            }
            // já que eliminamos um nó, devemos atualizar o tamanho
            length--;
            return current.element;
        } else{
            return null;
        }
    };

    // para remover um elemento, de forma simples
    // basta encontrar sua posição e passar para o método anterior
    // removeAt que remove baseado na posição do elemento
    this.remove = function(element) {
        // primeiro encontro o endereço do elemento
        let position = this.indexOf(element);
        // depois passo esse endereço como argumento para remover
        // o elemento da lista encadeada
        this.removeAt(position);
    };

    // método para retornar a posição de um elemento na lista
    this.indexOf = function(element){
        let current = head;
        let index = 0;
        // percorrendo a lista, incrementando a variável index
        while (current) {
            if (element === current.element) {
                // encontrando o elemento, retorna sua posição
                return index;
            }
            index++;
            // setando o elemento atual, com o próximo
            // para percorrer cada nó seguinte
            current = current.next;
        }
        return -1;
    };

    // verificar se a lista está vazia e retorna true
    // caso contrário returna false
    this.isEmpty = function(){
        return length === 0;
    };

    // retorna o elemento do final da lista encadeada
    // lembrando que seu próximo (next) está com null/undefined
    this.getHead = function(){
        return head;
    };

    // método para transformar a lista em um texto (String)
    // para mostrar o conteúdo na console
    this.toString = function() {
        let current = head;
        let string = '';
        // percorrendo os elementos da lista e concatenando e uma string
        while(current){
            string += current.element + (current.next ? ' -> ':' ');
            current = current.next;
        }
        //devolvendo a string com todos os elementos da lista
        // concatenados com uma setinha
        return string;
    };  
};

// Testando a classe LinkedList

// criando uma nova lista a partir da classe
let listaEncadeada = new LinkedList();

// imprimindo o conteúdo dessa lista vazia
console.log('A lista encadeada possui o conteúdo: ' + listaEncadeada.toString());
// incluindo 6 pessoas na lista encadeada
listaEncadeada.append('Brenno');
listaEncadeada.append('Camila');
listaEncadeada.append('João');
listaEncadeada.append('Renato');
listaEncadeada.append('Lenin');
listaEncadeada.append('Déborah');
console.log('A lista encadeada possui o conteúdo: ' + listaEncadeada.toString());

//inserindo um elemento em uma determinada posição
listaEncadeada.insert(4, 'Pedro');
console.log('A lista encadeada possui o conteúdo: ' + listaEncadeada.toString());
//inserindo um elemento na primeira posição
listaEncadeada.insert(0,'Samara');
console.log('A lista encadeada possui o conteúdo: ' + listaEncadeada.toString());
// removendo o elemento da posição 2 - Camila
listaEncadeada.removeAt(2);
console.log('A lista encadeada possui o conteúdo: ' + listaEncadeada.toString());
// removendo um elemento pelo valor, no caso vamos retirar o Brenno da lista
listaEncadeada.remove('Brenno');
console.log('A lista encadeada possui o conteúdo: ' + listaEncadeada.toString());
// verificando o tamanho (qtde elementos) da lista
console.log('A lista possui: '+ listaEncadeada.size() + ' elementos');
// verificando quem é o primeiro elemento da lista
console.log('O primeiro elemento da lista é: ' + listaEncadeada.getHead().element
  + ' que está na posição: ' + listaEncadeada.indexOf(listaEncadeada.getHead().element));

// esvaziando a lista encadeada
listaEncadeada.remove('Samara');  
listaEncadeada.remove('João');
listaEncadeada.remove('Renato');
listaEncadeada.remove('Pedro');
listaEncadeada.remove('Lenin');
listaEncadeada.remove('Déborah');
// agora vamos perguntar se a lista está vazia
console.log('A lista está vazia? ' + listaEncadeada.isEmpty());