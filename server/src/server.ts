import express from "express";
import cors from "cors";
import { routes } from "./routes";

const app = express();

const port = 5000 || process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running in http://localhost:${port}`);
});
