import { Router } from "express";
import { createStudent, getStudent, updateStudent } from "../controllers/Student.js";

const router = Router();

router.get("/", getStudent)
router.post("/add", createStudent)
router.put("/update/:id", updateStudent)


export default router;