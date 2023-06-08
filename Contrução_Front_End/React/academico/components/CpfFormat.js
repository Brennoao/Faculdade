function CpfFormat(numero) {

    if (typeof numero !== 'string') {
        numero = String(numero); // Convert para string
    }

    const bloco1 = numero.slice(0, 3);
    const bloco2 = numero.slice(3, 6);
    const bloco3 = numero.slice(6, 9);
    const bloco4 = numero.slice(9, 11);

    const numeroFormatado = bloco1 + '.' + bloco2 + '.' + bloco3 + '-' + bloco4;

    return numeroFormatado;
}

function Inscricaoestadual(numero) {

    if (typeof numero !== 'string') {
        numero = String(numero); // Convert para string
    }

    const bloco1 = numero.slice(0, 3);
    const bloco2 = numero.slice(3, 6);
    const bloco3 = numero.slice(6, 9);
    const bloco4 = numero.slice(9, 12);

    const numeroFormatado = bloco1 + '.' + bloco2 + '.' + bloco3 + '.' + bloco4

    return numeroFormatado;

}

export { CpfFormat, Inscricaoestadual }