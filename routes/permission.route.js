import express from "express";
const router = express.Router();

// import { createRole, getAllRoles } from "../controllers/roles.controller.js";
import { createPermission, getAllPermissions } from "../controllers/permissions.controller.js";

router.route("/create").post(createPermission);
router.route("/all").get(getAllPermissions);

export default router;
