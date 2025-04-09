const User = require("../models/userModel");

module.exports = {
  index: async (req, res) => {
    const usuarios = await User.getAll();
    res.json(usuarios);
  },

  show: async (req, res) => {
    const user = await User.getById(req.params.id);
    if (user) res.json(user);
    else res.status(404).json({ error: "Usuario no encontrado" });
  },

  create: async (req, res) => {
    const { nombre, email } = req.body;
    await User.create(nombre, email);
    res.status(201).json({ message: "Usuario creado" });
  },

  update: async (req, res) => {
    const { nombre, email } = req.body;
    await User.update(req.params.id, nombre, email);
    res.json({ message: "Usuario actualizado" });
  },

  delete: async (req, res) => {
    await User.delete(req.params.id);
    res.json({ message: "Usuario eliminado" });
  },
};
