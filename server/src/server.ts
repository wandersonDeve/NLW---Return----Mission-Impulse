import express from "express";
import { prisma } from "./prisma";

const app = express();
app.use(express.json());

const port = 5000;

app.use("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });

  res.status(201).json(feedback)
});

app.listen(port, () => {
  console.log(`Server is running in http://localhost:${port}`);
});
