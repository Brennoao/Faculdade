const restauranteValidator = {
    Cnpj: {
        required: {value: true, message: 'Cnpj é obrigatório'},
        minLength: {value: 14, message: 'no mínimo 14 dígitos'},
        maxLength: {value: 14, message: 'no máximo 14 dígitos'}
    },
    InscricaoEstadual: {
        required: {value: true, message: 'Inscrição Estadual é obrigatório'},
        minLength: {value: 12, message: 'no mínimo 12 dígitos'},
        maxLength: {value: 12, message: 'no máximo 12 dígitos'}
    },
    RazaoSocial: {
        required: {value: true, message: 'Inscrição Estadual é obrigatório'},
    }
}

export default restauranteValidator

//  pattern: /^[A-Za-z]+$/i