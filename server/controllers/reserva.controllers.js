const ctrlReservas = require('models/Reserva');
const { reservasModel } = require('../models/Reserva');

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas-------------------------------------------------

async function GET() {
  try {
    const reservas = await reservasModel.findAll();
    return reservas;
  } catch (error) {
    console.error('Error al obtener las reservas:', error);
    throw error;
  }
}
GET()
  .then((reservas) => {
    console.log('Reservas obtenidas:', reservas);
  })
  .catch((error) => {
    console.error('Error al obtener las reservas:', error);
  });

// Obtener una reserva -------------------------------------------------------

async function obtenerReservaPorId(id) {
    try {
      const reserva = await Reserva.findByPk(id);
      return reserva;
    } catch (error) {
      console.error('Error al obtener la reserva:', error);
      throw error;
    }
  }
obtenerReservaPorId(1)
  .then((reserva) => {
    if (reserva) {
      console.log('Reserva encontrada:', reserva);
    } else {
      console.log('No se encontró ninguna reserva con ese ID');
    }
  })
  .catch((error) => {
    console.error('Error al obtener la reserva:', error);
  });
// Crear una reserva ------------------------------------------------------

// Actualizar una reserva

// Eliminar una reserva de forma lógica

module.exports = ctrlReservas, {obtenerTodasLasReservas, obtenerReservaPorId};