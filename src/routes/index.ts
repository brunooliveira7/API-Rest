//juntar todos os arquivos de rotas

import { Router } from "express";

import { productsRoutes } from "./products-routes";

const routes = Router();

//endereço e a rota
routes.use("/products", productsRoutes);

export { routes };