import express from "express";
const router = express.Router();

import { createRolePermissions, getAllRolePermissions } from "../controllers/rolesPermissions.controller.js"; 

router.route("/create").post(createRolePermissions);
router.route("/all").get(getAllRolePermissions);

export default router;
