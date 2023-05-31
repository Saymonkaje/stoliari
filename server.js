import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Розбір даних форми з POST-запиту

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
  res.sendFile(__dirname+'/public/index.html');
});

// Обробка POST-запиту на URL '/submit-form'
app.post('/submit-form', function(req, res) {

  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  res.status(200).send("ти єблан?" + message);
});

// Запуск сервера
app.listen(3000, function() {
  console.log('Сервер запущено на порту 3000');
});
