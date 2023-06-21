// TODO: Crear modelo de datos de Reserva

const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('reservas', 'luscard', '45635', {
    host: "localhost",
    dialect: "mysql"
})

const reservasModel = sequelize.define('users', {
    id_reserva: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      codigo_reserva: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nombre_reserva: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fecha_reserva: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos exitosa');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
})();

module.exports = {
  sequelize,
  reservasModel
};