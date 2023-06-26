const produtosValidator = {
    nome: {
        required: { value: true, message: 'Campo é obrigatório' },
    },
    quantidade: {
        required: { value: true, message: 'Campo é obrigatório' },
    },
    caloria: {
        required: { value: true, message: 'Campo é obrigatório' },
        pattern: { value: /^[0-9.,]+$/, message: 'Somente números'},
    },
    valor: {
        required: { value: true, message: 'Campo é obrigatório' },
        pattern: { value: /^[0-9.,]+$/, message: 'Somente números'},
    },
}

export default produtosValidator