const cursoValidator = {
    Nome: {
        required: 'O nome é obrigatório',
        minLength: { value: 3, message: 'A quantidade minima é de 3 caracteres' },
        maxLength: { value: 10, message: 'A quantidade minima é de 10 caracteres' }
    },

    Duracao: {
        required: 'O duração é obrigatório',
        minLength: { value: 5, message: 'A quantidade minima é de 3 caracteres' },
        maxLength: { value: 10, message: 'A quantidade máxima é de 10 caracteres' },
        min: { value: 5, message: 'O valor mínimo é de 5' },
        max: { value: 12, message: 'O valor máximo é de 12' }
    },

    Modalidade: {
        required: 'O modalidade é obrigatório',
        minLength: { value: 5, message: 'A quantidade minima é de 3 caracteres' },
        maxLength: { value: 10, message: 'A quantidade máxima é de 10 caracteres' }
    }
}

export default cursoValidator