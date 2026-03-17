import express from "express"
import dotenv from "dotenv"
import addstudent from "./routes/Student.js"

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json())

app.use("/api/v1/student", addstudent)

app.listen(port, ()=>{
    console.log(`Serving running on port ${port}`)
})  