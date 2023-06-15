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
        minLength: { value: 7, message: 'no mínimo 7 dígitos' },
        maxLength: { value: 7, message: 'no máximo 7 dígitos' }
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