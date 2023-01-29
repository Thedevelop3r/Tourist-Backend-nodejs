import express from "express";
const router = express.Router();

import { createRole, getAllRoles } from "../controllers/roles.controller.js"; 

router.route("/create").post(createRole);
router.route("/all").get(getAllRoles);

export default router;
