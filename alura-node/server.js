const http = require("http");
const port = 3000;

const rotas = {
  "/": "Curso de Node.",
  "/livros": "Acessando pagina de livros.",
  "/autores": "Listagem de autores.",
  "/editora": "Página da editora.",
  "/sobre": "Informacoes sobre a pagina.",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/plain" });
  res.end(rotas[req.url]);
});

server.listen(port, () => {
  console.log(`Escutando em http://localhost:${port}`);
});
