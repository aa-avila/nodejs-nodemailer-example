const {Router} = require('express');
const router = Router();
const nodemailer = require('nodemailer');

router.post('/send-email', async (req, res) => {
    const { name, lastname, email, phone, message } = req.body;

    const contentHtml = `
    <h2>Información de contacto</h2>
        <ul>
            <li>Nombre: ${name}</li>
            <li>Apellido: ${lastname}</li>
            <li>E-mail: ${email}</li>
            <li>Teléfono: ${phone}</li>
        </ul>
    <h2>Mensaje:</h2>
    <p>${message}</p>
    `
 
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'chaim.lang89@ethereal.email',
            pass: 'gR1XGrVk1ff3JReBwz'
        }
    });

    const info = await transporter.sendMail({
        from: 'Avila Devs <chaim.lang89@ethereal.email>',
        to: 'agualvila@gmail.com',
        subject: 'Alguien quiere contactarse contigo',
        html: contentHtml
    });

    console.log("mensaje enviado: ", info.messageId);

    res.redirect('/success.html');
});

module.exports = router;