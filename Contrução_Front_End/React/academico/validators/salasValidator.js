const salasValidator = {
    Nome: {
        required: 'O nome é obrigatório',
        minLength: { value: 4, message: 'A quantidade minima é de 4 caracteres' },
        maxLength: { value: 100, message: 'A quantidade minima é de 100 caracteres' }
    },
    Capacidade: {
        required: 'Capacidade é obrigatória',
        maxLength: {value: 2, message: 'O valor máximo e de 2'}
    },
    Tipo: {
        required: 'Tipo é obrigatório'
    }
}

export default salasValidator