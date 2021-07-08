import express from "express";
const router = express.Router();
import { getNews } from "../controllers/news.js";

router.get("/getNews", getNews);

export default router;
