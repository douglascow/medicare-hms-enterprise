import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import patientRoutes from "./routes/patientRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "MediCare HMS API is running 🚀",
  });
});

// Authentication Routes
app.use("/api/auth", authRoutes);
app.use("/api/patients", patientRoutes);

export default app;