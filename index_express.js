
const QRCode = require('easyqrcodejs-nodejs');

var express = require('express');
var app = express();

// Convertendo o corpo de requisições em json
app.use(express.json())

app.get('/', function(req, res) {
  res.send('Olá Mundo! :D');
});

app.post('/gera-qrcode', function(req, res) {
  var { mensagem } = req.body
  console.clear();
  console.log(mensagem);
  
  var options={
        text: mensagem
  };

  var qrcode=new QRCode(options);

  //qrcode.saveImage({
  //      path:'seu-qr-code.png'
  //});



  res.sendFile('seu-qr-code.png', { root: __dirname });

  //res.send('QRCode gerado com sucesso!');
});

app.listen(3001, function() {
  console.log('App de Exemplo escutando na porta 3001!');
});
