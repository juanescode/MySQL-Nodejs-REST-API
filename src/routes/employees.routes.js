import { Router } from "express";
const router = Router();
import { getEmployees, postEmployess, updateEmployees, deleteEmployees, getEmployee } from "../controllers/employees.controller.js";

router.get("/employees", getEmployees);

router.get("/employees/:id", getEmployee);

router.post("/employees", postEmployess);

router.patch("/employees/:id", updateEmployees);

router.delete("/employees/:id", deleteEmployees);

export default router
