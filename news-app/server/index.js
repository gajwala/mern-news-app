import express from "express";
import newsRoutes from "./routes/newsRoutes.js";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/news", newsRoutes);

app.get("/", (req, res) => {
  res.send("welcome to news  API");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server Running on Port: http://localhost:${PORT}`)
);
