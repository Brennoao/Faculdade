const produtosValidator = {
    nome: {
        required: { value: true, message: 'Campo é obrigatório' },
    },
    quantidade: {
        required: { value: true, message: 'Campo é obrigatório' },
    },
    caloria: {
        required: { value: true, message: 'Campo é obrigatório' },
    },
    valor: {
        required: { value: true, message: 'Campo é obrigatório' },
    },
}

export default produtosValidator