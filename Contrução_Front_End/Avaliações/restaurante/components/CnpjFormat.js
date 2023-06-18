function CnpjFormat(numero) {

    if (typeof numero !== 'string') {
        numero = String(numero); // Convert para string
    }

    const bloco1 = numero.slice(0, 2);
    const bloco2 = numero.slice(2, 5);
    const bloco3 = numero.slice(5, 8);
    const bloco4 = numero.slice(8, 12);
    const bloco5 = numero.slice(12, 14);

    const numeroFormatado = bloco1 + '.' + bloco2 + '.' + bloco3 + '/' + bloco4 + '-' + bloco5;

    return numeroFormatado;
}

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

function RegistroGeral(numero) {

    if (typeof numero !== 'string') {
        numero = String(numero); // Convert para string
    }

    const bloco1 = numero.slice(0, 3);
    const bloco2 = numero.slice(3, 6);
    const bloco3 = numero.slice(6, 7);

    const numeroFormatado = bloco1 + '.' + bloco2 + '-' + bloco3

    return numeroFormatado;

}

export { CnpjFormat, Inscricaoestadual, CpfFormat, RegistroGeral }