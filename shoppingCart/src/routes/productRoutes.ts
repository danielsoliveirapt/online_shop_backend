import express, { Request, Response } from "express";
import { Product } from "../entities/Product";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
	await Product.find().then((data) => {
		res.json(data);
	})
})

router.post("/", async (req: Request, res: Response) => {
	try {
		await Product.insert(req.body);

		res.json({
			message: "Values have been inserted successfuly."
		});
	} catch (error) {
		throw error;
	}
})

router.delete("/:id", async (req: Request, res: Response) => {
  await Product.delete(req.params.id);

  res.json({
      message: "Record deleted successfully."
  })
})

export default router;