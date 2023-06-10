const funcionariosValidator = {
    nome: {
        required: { value: true, message: 'Campo obrigatório' },
    },
    cpf: {
        required: { value: true, message: 'Campo obrigatório' },
        minLength: { value: 11, message: 'no mínimo 11 dígitos' },
        maxLength: { value: 11, message: 'no máximo 11 dígitos' }
    },
    registroGeral: {
        required: { value: true, message: 'Campo obrigatório' },
        minLength: { value: 7, message: 'no mínimo 7 dígitos' },
        maxLength: { value: 7, message: 'no máximo 7 dígitos' }
    }
}

export default funcionariosValidator

// /^\d{3}\.\d{3}\.\d{3}-\d{2}$/