const funcionariosValidator = {
    nome: {
        required: { value: true, message: 'Campo obrigatório' },
    },
    cpf: {
        required: { value: true, message: 'Campo obrigatório' },
        minLength: { value: 14, message: 'no mínimo 14 dígitos' },
        maxLength: { value: 14, message: 'no máximo 14 dígitos' }
    },
    registroGeral: {
        required: { value: true, message: 'Campo obrigatório' },
        minLength: { value: 9, message: 'no mínimo 9 dígitos' },
        maxLength: { value: 9, message: 'no máximo 9 dígitos' }
    },
    email: {
        required: { value: true, message: 'Campo obrigatório' },
        pattern: { value: /[^\s@]+@[^\s@]+\.[^\s@]+/gi, message: 'email invalido'}
    },
    cargo: {
        required: { value: true, message: 'Campo obrigatório' },
    },
    senha: {
        required: { value: true, message: 'Campo obrigatório' },
    }
}

export default funcionariosValidator