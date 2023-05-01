


let mes = 0
let tamanhoMes = 0

while(mes <= 12) {

    switch (mes) {
        case 1:
            console.log('Janeiro')
            tamanhoMes = 31

            break;
        
        case 2 :
            console.log('Fevereiro')
            tamanhoMes = 28

            break
        
        case 3:
            console.log('Março')
            tamanhoMes = 31

            break

        case 4:
            console.log('Abril')
            tamanhoMes = 30

            break

        case 5:
            console.log('Maio')
            tamanhoMes = 31

            break

        case 6:
            console.log('Junho')
            tamanhoMes = 30

            break

        case 7:
            console.log('Julho')
            tamanhoMes = 31

            break

        case 8:
            console.log('Agosto')
            tamanhoMes = 31

            break

        case 9:
            console.log('Setembro')
            tamanhoMes = 30

            break

        case 10:
            console.log('Outubro')
            tamanhoMes = 31

            break

        case 11:
            console.log('Novembro')
            tamanhoMes = 30

            break

        case 12:
            console.log('Dezembro')
            tamanhoMes = 31

            break

        default:

            break;
    }

    // percorrendo a matriz para incluir os dias

    let dia = 1

    // interação para percorrer as linhas das grades dos meses

    console.log('D ', "S ", "T ", "Q ", "Q ", "S ", "S ", )

    for (let linha = 0; linha < linha < 6; linha++) {
        
        // interação para percorrer os dias da semana

        for (let coluna = 0; coluna < 7; coluna++){
            console.log(dia + ' ')
            dia++
        }
        
    }

    mes++
}