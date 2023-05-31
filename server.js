import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
dotenv.config()

const {EMAIL,PASSWORD} = process.env
const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: EMAIL,
        pass: PASSWORD   
    }
})



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
  const message = req.body.message;
  const mailOptions = {
    from:'dmytro.kostinskyi.kn.2021@lpnu.ua',
    to:'dmytro.kostinskyi.kn.2021@lpnu.ua',
    subject: 'Зворотній зв\'язок з клієнтом: '+ name,
    text:message
}
 // transporter.sendMail(mailOptions);
  res.status(200).send("Усе добре!");
});

// Запуск сервера
app.listen(3000, function() {
  console.log('Сервер запущено на порту 3000');
});
