import express, { Request, Response, NextFunction } from "express";

import { routes } from "./routes";

import { AppError } from "./utils/AppError";

///porta que o servidor vai rodar
const PORT = 3333;

//inicializa o express
const app = express();

//vai permitir que o express entenda o formato json
app.use(express.json());

//carrega as rotas
app.use(routes);

/**
 * 400 (Bad Request): Erro do cliente.
 * 500 (Internal Server Error): Erro do servidor.
 */

//rota para tratar erros
app.use((error: any, request: Request, response: Response, _: NextFunction) => {
  if (error instanceof AppError) {
    response.status(error.statusCode).json({
      message: error.message,
    });
  }

  response.status(500).json({
    message: error.message,
  });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
