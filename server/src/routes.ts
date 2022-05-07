import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repositories";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";
import express from "express";
export const routes = express.Router();

routes.use("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  try {
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      prismaFeedbacksRepository,
      nodemailerMailAdapter
    );

    await submitFeedbackUseCase.execute({
      type,
      comment,
      screenshot,
    });

    return res.status(201).send();
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});
