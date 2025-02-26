import { Request, Response } from "express";

class ProductsController {
  /**
   controller tem 5 métodos:
   * index - GET para listar vários registros.
   * show - GET para exibir um registro específico.
   * create - POST para criar um registro.
   * update - PUT para atualizar um registro.
   * remove - DELETE para remover um registro.
   */

  //método de listagem
  index(request: Request, response: Response) {
    //recuperar os parâmetros da requisição
    const { page, limit } = request.query;

    response.send(`Página ${page} de limite ${limit}`);
  }

  //método de criação
  create(request: Request, response: Response) {
    const { name, price } = request.body;

    response.status(201).json({ name, price, user_id: request.user_id });
  }
}

export { ProductsController };
