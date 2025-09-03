const url = require('url');

module.exports = (req, res) => {
  const query = url.parse(req.url, true).query;
  const numero = parseInt(query.numero, 10);

  if (isNaN(numero)) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Parâmetro "numero" inválido.');
    return;
  }
  
  const dobro = numero * 2;
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(`O dobro de ${numero} é ${dobro}.`);
};