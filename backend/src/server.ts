import express from "express";
import cors from "cors";
const app = express();
const puerto = 3000;
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
res.send("Este es el back end de ElectroGame Service");
});
app.get("/api/informacion", (req, res) => {
res.json({
componente: "API REST",
tecnologia: "Node.js, Express y TypeScript",
estudiante1: "Brenda Naomy Santos Chay",
matricula1: "25309088",
estudiante2: "Itzel Nicte-Ha Miranda Manuel",
matricula2: "25308154"
});
});
app.listen(puerto, () => {
console.log(`Servidor activo en http://localhost:${puerto}`);
});