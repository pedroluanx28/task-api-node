import express from "express";
import { taskRoutes } from "./Routes/taskRoutes";

const app = express();

app.use(express.json());
app.use("/api/tasks", taskRoutes);

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
