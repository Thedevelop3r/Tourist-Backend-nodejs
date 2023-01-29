import express from 'express'
const router = express.Router()

import { createUser, getAllUsers } from "../controllers/users.controller.js"

router.route("/create").post(createUser);
router.route("/all").get(getAllUsers);

export default router