var express = require('express');
var router = express.Router();
var novedadesmodel = require('../../models/novedadesmodel');
 

router.get('/', async function (req, res, next) {

    var novedades = await novedadesmodel.getnovedades();

    res.render('admin/novedades', {
        layout: 'admin/layout',
        persona: req.session.nombre,
        novedades
    });
  });




  module.exports = router;