const professoresValidator = {
    Nome: {
        required: 'O nome é obrigatório',
        minLength: { value: 4, message: 'A quantidade minima é de 4 caracteres' },
        maxLength: { value: 100, message: 'A quantidade minima é de 100 caracteres' }
    },
    Cpf: {
        required: 'CPF é obrigatório',
        minLength: { value: 11, message: 'A quantidade minima é de 11 caracteres' },
        maxLength: { value: 11, message: 'A quantidade minima é de 11 caracteres' }
    },
    Matricula: {
        required: 'Matrícula é obrigatório',
        minLength: { value: 14, message: 'A quantidade minima é de 14 caracteres' },
    },
    salario: {
        required: 'Salário é obrigatório'
    },
    Email: {
        required: 'Email é obrigatório',
        pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Por favor bote um email válido'}
    },
    Telefone: {
        required: 'Telefone é obrigatório'
    },
    Cep: {
        required: 'Telefone é obrigatório',
    },
    Numero: {
        required: 'Número é obrigatório',
        pattern: { value: /^[0-9]*$/, message: 'Somente números'}
    }
}

export default professoresValidator
