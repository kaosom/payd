const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userController = require("./app/controllers/userController");

const app = express();

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    optionsSuccessStatus: 200,
  })
);

app.use(bodyParser.json());

app.get("/usuarios", userController.index);
app.get("/usuarios/:id", userController.show);
app.post("/usuarios", userController.create);
app.put("/usuarios/:id", userController.update);
app.delete("/usuarios/:id", userController.delete);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
