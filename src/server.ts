import express from "express";

///porta que o servidor vai rodar
const PORT = 3333;

//inicializa o express
const app = express();

app.get("/products/:id/:user", (request, response) => {
  //recupera o parâmetro id da rota - /products/1
  const { id, user } = request.params;

  response.send(`Produto ${id} do usuário ${user}`);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
