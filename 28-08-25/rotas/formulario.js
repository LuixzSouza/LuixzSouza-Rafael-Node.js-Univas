module.exports = (req, res) => {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });
  
  req.on('end', () => {
    const params = new URLSearchParams(body);
    const valor = parseFloat(params.get('valor'));
    const moeda = params.get('moeda');
    
    if (isNaN(valor)) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Parâmetro "valor" inválido.');
      return;
    }
    
    let valorConvertido;
    let taxa;
    let simboloMoeda;
    
    if (moeda === 'USD') {
      taxa = 5.0;
      valorConvertido = valor * taxa;
      simboloMoeda = 'USD';
    } else if (moeda === 'EUR') {
      taxa = 5.5;
      valorConvertido = valor * taxa;
      simboloMoeda = 'EUR';
    } else {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Moeda inválida.');
      return;
    }
    
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`${valor} ${simboloMoeda} equivalem a R$ ${valorConvertido.toFixed(2)}.`);
  });
};