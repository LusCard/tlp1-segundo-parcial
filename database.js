const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',    
    user: 'luscard',    
    password: '',   
    database: 'reservas' 
  });
  connection.connect((error) => {
    if (error) {
      console.error('Error al conectar a la base de datos:', error);
    } else {
      console.log('Conexión exitosa a la base de datos MySQL');
    }
  });
  