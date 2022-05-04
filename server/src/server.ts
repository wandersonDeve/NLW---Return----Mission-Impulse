import express from "express";
import { routes } from "./routes";

const app = express();
app.use(express.json());

const port = 5000;

app.use(routes)

app.listen(port, () => {
  console.log(`Server is running in http://localhost:${port}`);
});
