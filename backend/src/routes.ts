import { Router, Request, Response } from "express";

const router = Router();

router.get("/teste", (req: Request, res: Response): any => {
  //return res.json({ nome: "Davi_dev" });

  throw new Error("Erro ao fazer ess requisição");
});

export { router };
