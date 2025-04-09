const db = require('./db');

module.exports = {
  getAll: async () => {
    const [rows] = await db.query('CALL sp_listar_usuarios()');
    return rows[0];
  },

  getById: async (id) => {
    const [rows] = await db.query('CALL sp_obtener_usuario(?)', [id]);
    return rows[0][0];
  },

  create: async (nombre, email) => {
    await db.query('CALL sp_insertar_usuario(?, ?)', [nombre, email]);
  },

  update: async (id, nombre, email) => {
    await db.query('CALL sp_actualizar_usuario(?, ?, ?)', [id, nombre, email]);
  },

  delete: async (id) => {
    await db.query('CALL sp_eliminar_usuario(?)', [id]);
  }
};