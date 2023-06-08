const restauranteValidator = {
    Cnpj: {
        required: {value: true, message: 'Cnpj é obrigatório'},
        minLength: {value: 11, message: 'no mínimo 11 dígitos'},
        maxLength: {value: 11, message: 'no máximo 11 dígitos'}
    },
    InscricaoEstadual: {
        required: {value: true, message: 'Inscrição Estadual é obrigatório'},
    },
    RazaoSocial: {
        required: {value: true, message: 'Inscrição Estadual é obrigatório'},
    }
}

export default restauranteValidator

//  pattern: /^[A-Za-z]+$/i