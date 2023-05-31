import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config()

const {} = process.env
const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: process.env.EMAL,
        pass: process.env.PASSWORD   
    }
})

const mailOptions = {
    from:'dmytro.kostinskyi.kn.2021@lpnu.ua',
    to:'dmytro.kostinskyi.kn.2021@lpnu.ua',
    subject: 'Зворотній зв\'язок з клієнтами'

}