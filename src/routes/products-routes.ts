//Router - organizar as rotas da aplicação de forma modular e reutilizável
import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middlewares";
import { ProductsController } from "../controllers/ProductsController";

const productsRoutes = Router();

//instancia do controller
const productsController = new ProductsController();

//rota na raiz da aplicação - método get no browser
//chama o controller para executar o método index
productsRoutes.get("/", productsController.index);

//rota para recuperar o corpo da requisição - insomnia, json no body
//middleware de forma local em uma rota especifica
//chama o controller para executar o método create
productsRoutes.post("/", myMiddleware, productsController.create);

export { productsRoutes };
