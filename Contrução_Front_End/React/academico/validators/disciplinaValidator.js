const disciplinaValidator = {
    required: 'O nome é obrigatório',
    minLength: { value: 3, message: 'A quantidade minima é de 3 caracteres' },
    maxLength: { value: 10, message: 'A quantidade máxima é de 10 caracteres' }
}

export default disciplinaValidator