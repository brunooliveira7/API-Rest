import express from "express";
import { myMiddleware } from "./middlewares/my-middlewares";

///porta que o servidor vai rodar
const PORT = 3333;

//inicializa o express
const app = express();

//vai permitir que o express entenda o formato json
app.use(express.json());

//chama o middleware de  forma global(serve para todas as rotas)
//app.use(myMiddleware);

//rota na raiz da aplicação - método get no browser
app.get("/products", (request, response) => {
  //recuperar os parâmetros da requisição
  const { page, limit } = request.query;
  response.send(`Pagina ${page} de limite ${limit}`);
});

//rota para recuperar o corpo da requisição - insomnia, json no body
//middleware de forma local em uma rota especifica
app.post("/products", myMiddleware, (request, response) => {
  const { name, price } = request.body;
  //response.send(`Produto ${name} custa $${price}`);

  response.status(201).json({ name, price, user_id: request.user_id });
});


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
