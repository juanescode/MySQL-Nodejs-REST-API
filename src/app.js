import express from "express";
const app = express();
import employeesRouter from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";

app.use(express.json());

app.use("/api", employeesRouter);
app.use(indexRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: "Endpoint not found",
  });
});

export default app;
