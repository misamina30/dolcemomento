var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/', async (req, res, next) => {

  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var telefono = req.body.tel;
  var mensaje = req.body.mensaje;
  //console.log(req.body)

  var obj = {
    to: 'misamina30@gmail.com',
    subject: 'contacto desde la web',
    html: nombre + " " + apellido + " se contacto a traves y quiere mas info a este correo: " + email + ". <br> ademas, hizo el siguiente comentario: " + mensaje + " <br> su tel es " + telefono
  } //cierra var obj

  var transporter = nodemailer.createTransport({
    host:process.env.SMTP_HOST,
    port:process.env.SMPT_PORT,
    auth: {
    user:process.env.SMPT_USER,
    pass:process.env.SMPT_PASS
    }
  })//CIERRA TRANSPORTER


  var info = await transporter.sendMail(obj);

  res.render('index', {
    message: 'mensaje enviado correctamente',
  });
});  //cierra peticiones del post


module.exports = router;
