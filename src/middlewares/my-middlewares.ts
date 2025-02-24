//impota as funções do express
import { Request, Response, NextFunction } from "express";

export function myMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
 console.log("Passou pelo Middleware!");
 //chama a função next para continuar a execução do código
 return next();
}
