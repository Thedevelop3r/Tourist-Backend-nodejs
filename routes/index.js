import express from 'express'
import usersRoutes from './users.route.js'
import rolesRoutes from './roles.route.js'
import permissionRoutes from './permission.route.js'
import userRolesRoutes from './userRoles.route.js'
import rolePermissionRoutes from './rolesPermission.route.js'

const router = express.Router()
router.use('/users', usersRoutes)
router.use('/roles', rolesRoutes)
router.use('/permissions', permissionRoutes);
router.use("/user-roles", userRolesRoutes);
router.use("/roles-permission", rolePermissionRoutes);

export default router