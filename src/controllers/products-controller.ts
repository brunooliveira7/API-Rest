import { Request, Response } from "express";
import { AppError } from "../utils/app-error";
import { z } from "zod";

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
    //define os tipos de dados da requisição com o zod
    const bodySchema = z.object({
      name: z
        //garante que o nome seja uma string, não pode ter espaços em branco, deve ter pelo menos 6 caracteres
        .string({ required_error: "Name is required" })
        .trim()
        .min(6, { message: "Name must be 6 or more characters" }),
      price: z
      //garante que o preço seja um número, não pode ser negativo
        .number({ required_error: "Price is required" })
        .positive({ message: "Price must be positive" }),
    });

    //validar os dados da requisição, se não forem válidos, lança um erro
    const { name, price } = bodySchema.parse(request.body);

    /*
    //se o nome e o preço não forem informados, lança um erro
    if (!name) {
      throw new AppError("Nome do produto é obrigatório");
    }

    if (name.trim().length < 6) {
      throw new AppError("Nome do produto deve ter pelo menos 6 caracteres");
    }

    if (!price) {
      throw new AppError("Preço do produto é obrigatório");
    }

    if (price < 0) {
      throw new AppError("Preço do produto deve ser maior que zero");
    }
      */

    //throw new Error("Erro ao criar um produto");
    //throw new AppError("Erro ao criar um produto");

    response.status(201).json({ name, price, user_id: request.user_id });
  }
}

export { ProductsController };
