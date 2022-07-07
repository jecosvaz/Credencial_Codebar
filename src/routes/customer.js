//dentro de este archivo se manejaran todas las rutas que el servidor va a usar
const express = require ('express');
//este metodo de express, lo que hace es que me da la oportunidad de poder usar un esquema de JS para router
const router = express.Router();
const customerControlller=require('../controllers/customerController');

router.get('/',customerControlller.list);
router.post('/add',customerControlller.save);
router.get('/delete/:id',customerControlller.delete);
router.get('/update/:id',customerControlller.edit)
router.post('/update/:id',customerControlller.update);






//ahora exportamos el mudulo
module.exports = router;