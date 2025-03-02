import express from "express";
import studentRoutes from "./routes/Student-routes";
import teacherRoutes from "./routes/Teacher-routes";
import programRoutes from "./routes/Program-routes";
import moduleRoutes from "./routes/Module-routes";

const app = express();
var cors = require("cors")

app.use(express.json());
app.use(cors());

const corsOption={
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
}
app.use(cors(corsOption));



app.use("/Student",studentRoutes);
app.use("/Teacher",teacherRoutes);
app.use("/Program",programRoutes);
app.use("/Module",moduleRoutes);

app.listen(3000,(err=>{
    
}))