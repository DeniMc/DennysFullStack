import express from "express";
import { getAllRecords} from "../controllers/records.controller.js";

const router = express.Router();


router.get("/all", getAllRecords);



export default router;
