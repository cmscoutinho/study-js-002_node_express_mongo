import app from "./src/app.js";

const port = process.env.PORT || 3000;

// Método que inicia o server
app.listen(port, () => {
  console.log(`Escutando em http://localhost:${port}`);
});
