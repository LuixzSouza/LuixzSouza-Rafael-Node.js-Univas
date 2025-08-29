const url = require('url');

module.exports = (req, res) => {
  const query = url.parse(req.url, true).query;
  const nome = query.nome || 'visitante';
  
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(`Olá, ${nome}! Seja bem-vindo.`);
};