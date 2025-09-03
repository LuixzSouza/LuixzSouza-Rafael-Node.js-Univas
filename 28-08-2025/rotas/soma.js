module.exports = (req, res) => {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });
  
  req.on('end', () => {
    const params = new URLSearchParams(body);
    const a = parseInt(params.get('a'), 10);
    const b = parseInt(params.get('b'), 10);
    
    if (isNaN(a) || isNaN(b)) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Parâmetros "a" ou "b" inválidos.');
      return;
    }
    
    const soma = a + b;
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`A soma de ${a} + ${b} é ${soma}.`);
  });
};