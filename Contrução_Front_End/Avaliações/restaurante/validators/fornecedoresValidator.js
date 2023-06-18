const fornecedoresValidator = {
    razaoSocial: {
        required: {value: true, message: 'Campo obrigatório'},
    },
    Cnpj: {
        required: {value: true, message: 'Campo obrigatório'},
        minLength: {value: 18, message: 'no mínimo 18 dígitos'},
        maxLength: {value: 18, message: 'no máximo 18 dígitos'}
    },
}

export default fornecedoresValidator