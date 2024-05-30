import { Router } from "express";
const router = Router();
import {
  getProductInventory,
//   sellProduct,
} from "../controllers/sale.controlle.js";

router.get("/sale/inventory", getProductInventory);

// router.post("/sale/:id", sellProduct);

export default router;
