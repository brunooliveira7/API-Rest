import express from "express";

///porta que o servidor vai rodar
const PORT = 3333;

//inicializa o express
const app = express();

//rota na raiz da aplicação
app.get("/products", (request, response) => {
  //recuperar os parâmetros da requisição
  const { page, limit } = request.query;

  response.send(`Pagina ${page} de limite ${limit}`);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
