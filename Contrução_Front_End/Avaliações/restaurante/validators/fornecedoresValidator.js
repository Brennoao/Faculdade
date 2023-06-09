const fornecedoresValidator = {
    razaoSocial: {
        required: {value: true, message: 'Campo obrigatório'},
    },
    Cnpj: {
        required: {value: true, message: 'Campo obrigatório'},
        minLength: {value: 14, message: 'no mínimo 14 dígitos'},
        maxLength: {value: 14, message: 'no máximo 14 dígitos'}
    },
}

export default fornecedoresValidator