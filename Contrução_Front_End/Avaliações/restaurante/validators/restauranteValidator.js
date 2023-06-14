const restauranteValidator = {
    Cnpj: {
        required: {value: true, message: 'Cnpj é obrigatório'},
        minLength: {value: 18, message: 'no mínimo 18 dígitos'},
        maxLength: {value: 18, message: 'no máximo 18 dígitos'}
    },
    InscricaoEstadual: {
        required: {value: true, message: 'Inscrição Estadual é obrigatório'},
        minLength: {value: 13, message: 'no mínimo 13 dígitos'},
        maxLength: {value: 13, message: 'no máximo 13 dígitos'}
    },
    RazaoSocial: {
        required: {value: true, message: 'Inscrição Estadual é obrigatório'},
    }
}

export default restauranteValidator

//  pattern: /^[A-Za-z]+$/i