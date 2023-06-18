function Celular(numero) {

    if (typeof numero !== 'string') {
        numero = String(numero); // Convert para string
    }

    const bloco1 = numero.slice(0, 2);
    const bloco2 = numero.slice(2, 7);
    const bloco3 = numero.slice(7, 11);

    const numeroFormatado = '(' + bloco1 + ')' + ' ' + bloco2 + '-' + bloco3

    return numeroFormatado;
}

export { Celular }