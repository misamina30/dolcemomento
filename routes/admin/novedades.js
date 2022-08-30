var express = require('express');
var router = express.Router();
var novedades = require('./../../models/novedadesmodel');
 

router.get('/', async function (req, res, next) {
    res.render('admin/novedades', {
        layout: 'admin/layout',
        persona: req.session.nombre
    });
  });




  module.exports = router;