const http = require('http');
const fs = require('fs');

// Módulos de rota
const saudacao = require('./rotas/saudacao');
const dobro = require('./rotas/dobro');
const formulario = require('./rotas/formulario');
const soma = require('./rotas/soma');

const server = http.createServer((req, res) => {
  const url = req.url.split('?')[0];
  const method = req.method;

  if (url === '/') {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Erro interno do servidor');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
    return;
  }

  // Rotas GET
  if (method === 'GET') {
    if (url === '/saudacao') {
      saudacao(req, res);
    } else if (url === '/dobro') {
      dobro(req, res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Rota não encontrada.');
    }
  }

  // Rotas POST
  else if (method === 'POST') {
    if (url === '/formulario') {
      formulario(req, res);
    } else if (url === '/soma') {
      soma(req, res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Rota não encontrada.');
    }
  }

  else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Método não permitido.');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});