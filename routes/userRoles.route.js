import express from "express";
const router = express.Router();

import { createUserRole, getAllUserRoles } from "../controllers/userRoles.controller.js";

router.route("/create").post(createUserRole);
router.route("/all").get(getAllUserRoles);

export default router;
