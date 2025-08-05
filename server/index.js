const express = require('express')
const app = express()
const db = require('./models')
const cors = require('cors')

app.use(express.json());
app.use(cors());
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);
const commentsROuter = require("./routes/Comments");
app.use("/comments", commentsROuter);

db.sequelize.authenticate()
  .then(() => {
    console.log("✅ Conexión exitosa a la base de datos.");
    return db.sequelize.sync({ alter: true }); // También puedes usar { force: true } en desarrollo
  })
  .then(() => {
    console.log("✅ Base de datos sincronizada correctamente.");
    app.listen(3001, () => {
      console.log("🚀 Servidor corriendo en el puerto 3001");
    });
  })
  .catch((err) => {
    console.error("❌ Error al conectar o sincronizar la base de datos:", err);
  });