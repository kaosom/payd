## Operaciones CRUD

curl -X POST http://localhost:3000/usuarios -H "Content-Type: application/json" -d '{"nombre":"Pedro","email":"pedro@example.com"}'

curl http://localhost:3000/usuarios

curl http://localhost:3000/usuarios/1

curl -X PUT http://localhost:3000/usuarios/1 -H "Content-Type: application/json" -d '{"nombre":"Pedro Actualizado","email":"pedro_new@example.com"}'

curl -X DELETE http://localhost:3000/usuarios/1