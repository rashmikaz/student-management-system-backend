import express from "express";
import multer from "multer";
import path from "path";
import studentRoutes from "./routes/Student-routes";
import teacherRoutes from "./routes/Teacher-routes";
import authRoutes, {authenticateToken} from "./routes/auth-routes";
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();
const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
console.log("Loaded SECRET_KEY:", process.env.SECRET_KEY);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/auth",authRoutes)
app.use(authenticateToken);
app.use("/Student",studentRoutes);
app.use("/Teacher",teacherRoutes);


app.listen(3000,(err=>{
    console.log("server port 3000") ;
}))