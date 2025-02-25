import express from "express";

import { routes } from "./routes";

///porta que o servidor vai rodar
const PORT = 3333;

//inicializa o express
const app = express();

//vai permitir que o express entenda o formato json
app.use(express.json());

app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
