const fornecedoresValidator = {
    RazãoSocial: {
        required: {value: true, message: 'Campo obrigatório'},
    },
    Cnpj: {
        required: {value: true, message: 'Campo obrigatório'},
        minLength: {value: 11, message: 'no mínimo 11 dígitos'},
        maxLength: {value: 11, message: 'no máximo 11 dígitos'}
    },
}

export default fornecedoresValidator