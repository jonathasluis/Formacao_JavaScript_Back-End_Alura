import chalk from 'chalk';
import fs from 'fs';

function trataErro(erro) {
    throw new Error(chalk.red(erro.code + ' Não tem arquivo aqui! '));
}
/*
function pegaArquivo(caminhoArquivo) {
    fs.readFile(caminhoArquivo, 'UTF-8', (erro, texto) => {
        if (erro) {
            trataErro(erro)
        } else {
            console.log(chalk.green(texto));
        }
    })
}
*/

/* function pegaArquivo(caminhoArquivo) {
    const encoding = 'UTF-8';
    fs.promises.readFile(caminhoArquivo, encoding)
        .then((texto) => console.log(chalk.green(texto)))
        .catch((erro) => trataErro(erro))
} */

async function pegaArquivo(caminhoArquivo) {
    try {
        const encoding = 'UTF-8';
        const texto =  await fs.promises.readFile(caminhoArquivo, encoding)
        console.log(chalk.green( texto));
    } catch (erro) {
        trataErro(erro)
    }
    
}

pegaArquivo('./arquivos/texto.md')