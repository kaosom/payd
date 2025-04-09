CREATE DATABASE IF NOT EXISTS user_crud;
USE user_crud;

-- Tabla de usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(100)
);

-- Tabla de auditoría
CREATE TABLE IF NOT EXISTS auditoria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    accion VARCHAR(50),
    usuario_id INT,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Procedimientos almacenados

DELIMITER $$

-- Crear usuario
CREATE PROCEDURE sp_insertar_usuario(IN p_nombre VARCHAR(100), IN p_email VARCHAR(100))
BEGIN
    INSERT INTO usuarios(nombre, email) VALUES (p_nombre, p_email);
END$$

-- Leer usuarios
CREATE PROCEDURE sp_listar_usuarios()
BEGIN
    SELECT * FROM usuarios;
END$$

-- Obtener usuario por ID
CREATE PROCEDURE sp_obtener_usuario(IN p_id INT)
BEGIN
    SELECT * FROM usuarios WHERE id = p_id;
END$$

-- Actualizar usuario
CREATE PROCEDURE sp_actualizar_usuario(IN p_id INT, IN p_nombre VARCHAR(100), IN p_email VARCHAR(100))
BEGIN
    UPDATE usuarios SET nombre = p_nombre, email = p_email WHERE id = p_id;
END$$

-- Eliminar usuario
CREATE PROCEDURE sp_eliminar_usuario(IN p_id INT)
BEGIN
    DELETE FROM usuarios WHERE id = p_id;
END$$

-- Disparador para auditoría al eliminar
CREATE TRIGGER trg_auditoria_delete
AFTER DELETE ON usuarios
FOR EACH ROW
BEGIN
    INSERT INTO auditoria (accion, usuario_id) VALUES ('DELETE', OLD.id);
END$$

DELIMITER ;