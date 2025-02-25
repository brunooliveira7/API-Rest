//Router - organizar as rotas da aplicação de forma modular e reutilizável
import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middlewares";

const productsRoutes = Router();

//rota na raiz da aplicação - método get no browser
productsRoutes.get("/:id", (request, response) => {
  //recuperar os parâmetros da requisição
  const { page, limit } = request.query;

  response.send(`Pagina ${page} de limite ${limit}`);
});

//rota para recuperar o corpo da requisição - insomnia, json no body
//middleware de forma local em uma rota especifica
productsRoutes.post("/", myMiddleware, (request, response) => {
  const { name, price } = request.body;
  //response.send(`Produto ${name} custa $${price}`);

  response.status(201).json({ name, price, user_id: request.user_id });
});

export { productsRoutes };