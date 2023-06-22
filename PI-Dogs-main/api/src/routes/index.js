const { Router } = require('express');
const { getDogs } = require('../controllers/GetDoogs');
const { getById } = require('../controllers/getById');
const { getByName } = require('../controllers/getByName');
const { getTemperaments } = require('../controllers/getTemperaments');
const { postDog } = require('../controllers/postDogs');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

router.post('/dogs', postDog);

router.get('/dogs/:idRaza', getById);

router.get('/search', getByName);

router.get('/dogs', getDogs)

router.get('/temperaments', getTemperaments);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
