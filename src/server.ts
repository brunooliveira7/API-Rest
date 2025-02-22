import express from "express";

///porta que o servidor vai rodar
const PORT = 3333;

//inicializa o express
const app = express();

app.get("/", (request, response) => {
  response.send("Hello World Express!");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
