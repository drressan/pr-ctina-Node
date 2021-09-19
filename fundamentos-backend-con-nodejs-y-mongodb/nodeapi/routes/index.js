var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const segundo = (new Date()).getSeconds();

  // if (segundo % 2 === 0) {
  //   const error = new Error(`segundo actual es ${segundo}, por tanto doy error`);
  //   error.status = 400;
  //   next(error);
  //   return;
  // }

  res.locals.ejemplo = '<script>alert("inyectado!!!")</script>';
  res.locals.condicion = {
    segundo: segundo,
    esPar: segundo % 2 === 0
  }

  res.locals.usuarios = [
    { name: 'Jones', age: 24 },
    { name: 'Smith', age: 32 },
    { name: 'Superlopez', age: 39 },
  ]

  res.render('index', { });
});

router.get('/parametroenruta/:dato([0-9]+)', (req, res, next) =>{
  const dato = req.params.dato;
  console.log(req.params);
  res.send('He recibido el dato: ' + dato);
});

router.get('/querystring', (req, res, next) => {
  const laTalla = req.query.talla;
  console.log(req.query);
  res.send('ok');
});

router.post('/enelbody', (req, res, next) => {
  console.log(req.body);
  res.send('ok');
});

module.exports = router;
