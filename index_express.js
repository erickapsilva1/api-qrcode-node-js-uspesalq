
const QRCode = require('easyqrcodejs-nodejs');

var express = require('express');
var app = express();

// Convertendo o corpo de requisições em json
app.use(express.json())

app.get('/', function(req, res) {
  res.send('Olá Mundo! :D');
});

app.post('/gera-qrcode', async function(req, res) {
  var { url_site } = req.body
  console.clear();
  console.log(url_site);
  
  var options={
        text: url_site
  };

  var qrcode=new QRCode(options);

  await qrcode.saveImage({
        path:'seu-qr-code.png'
  });

  res.sendFile('seu-qr-code.png', { root: __dirname });

});

app.listen(3001, function() {
  console.log('App de Exemplo escutando na porta 3001!');
});
