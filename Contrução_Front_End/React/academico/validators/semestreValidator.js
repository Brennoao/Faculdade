const semestreValidator = {
    required: 'O nome é obrigatório',
    minLength: { value: 4, message: 'A quantidade minima é de 4 caracteres' },
    maxLength: { value: 100, message: 'A quantidade minima é de 100 caracteres' }
}

export default semestreValidator