// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const router = require('express').Router();
const {GET} = require('../controllers/reserva.controllers')


// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas

// Formulario para crear una reserva

// Formulario para actualizar una reserva

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/', GET);
 
// Crear una reserva
router.post('/',);
 
// Actualizar una reserva
router.put('/:id',);
 
// Eliminar una reserva de forma lógica
router.delete('/:id',);

 
 module.exports = router;