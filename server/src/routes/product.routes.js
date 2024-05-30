import { Router } from "express";
const router = Router();
import { postProduct, getProducts, getProduct, patchProduct, deleteProduct} from "../controllers/product.controller.js";

router.get("/product", getProducts)

router.get("/product/:id", getProduct)

router.post("/product", postProduct);

router.patch("/product/:id", patchProduct)

router.delete("/product/:id", deleteProduct)

export default router;