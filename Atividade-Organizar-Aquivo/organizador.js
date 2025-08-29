// Importação dos módulos necessários
const fs = require('fs');
const path = require('path');
const os = require('os');
const { URL } = require('url');
const EventEmitter = require('events');

// Criando um emissor de eventos
const emissor = new EventEmitter();

// Função principal
function organizarArquivos(pasta) {
  // Lê os arquivos da pasta
  fs.readdir(pasta, (err, arquivos) => {
    if (err) {
      console.error('Erro ao ler a pasta:', err.message);
      return;
    }

    arquivos.forEach((arquivo) => {
      const caminhoCompleto = path.join(pasta, arquivo);

      // Verifica se é um arquivo (e não uma pasta)
      fs.stat(caminhoCompleto, (err, stats) => {
        if (err || !stats.isFile()) return;

        const extensao = path.extname(arquivo).slice(1); // Remove o ponto
        if (!extensao) return; // Se não tiver extensão, pula

        const pastaDestino = path.join(pasta, extensao);

        // Cria a pasta da extensão, se não existir
        if (!fs.existsSync(pastaDestino)) {
          fs.mkdirSync(pastaDestino);
        }

        const novoCaminho = path.join(pastaDestino, arquivo);

        // Move o arquivo
        fs.rename(caminhoCompleto, novoCaminho, (err) => {
          if (err) {
            console.error('Erro ao mover o arquivo:', err.message);
            return;
          }

          // Emite o evento "arquivoMovido"
          emissor.emit('arquivoMovido', {
            nome: path.basename(arquivo),
            local: path.resolve(novoCaminho),
            usuario: os.userInfo().username,
            url: new URL('file://' + path.resolve(novoCaminho))
          });
        });
      });
    });
  });
}

// Ouvinte do evento "arquivoMovido"
emissor.on('arquivoMovido', (info) => {
  console.log(`Arquivo "${info.nome}" movido para ${info.local}`);
  console.log(`Usuário: ${info.usuario}`);
  console.log(`URL do arquivo: ${info.url.href}\n`);
});

// Código principal - pede a pasta e chama a função
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Digite a pasta a ser organizada: ', (pasta) => {
  organizarArquivos(pasta);
  readline.close();
});
