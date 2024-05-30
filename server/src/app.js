import express from "express";
const app = express();
import employeesRouter from "./routes/employees.routes.js";
import productRoutes from "./routes/product.routes.js";
import saleRoutes from './routes/sale.routes.js'

app.use(express.json());

app.use("/api", employeesRouter);
app.use("/api",productRoutes);
app.use("/api", saleRoutes)

app.use((req, res, next) => {
  res.status(404).json({
    message: "Endpoint not found",
  });
});

export default app;
