const alunosValidator = {
    Nome: {
        required: 'O nome é obrigatório',
        minLength: { value: 3, message: 'A quantidade minima é de 3 caracteres' },
        maxLength: { value: 10, message: 'A quantidade minima é de 100 caracteres' }
    },
    Cpf: {
        required: 'CPF é obrigatório',
        pattern: { value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/, message: 'CPF inválido' },
        minLength: { value: 14, message: 'A quantidade minima é de 14 caracteres' },
        maxLength: { value: 14, message: 'A quantidade minima é de 14 caracteres' }
    },
    Matricula: {
        required: 'Matrícula é obrigatório',
        minLength: { value: 14, message: 'A quantidade minima é de 14 caracteres' },
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

export default alunosValidator
