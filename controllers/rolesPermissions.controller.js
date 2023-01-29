import { RolePermissions } from "../model/index.js";
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";

const createRolePermissions = catchAsyncErrors(async (req, res, next) => {
  const { roleId, permissionId } = req.body;
  console.log("body =>>",roleId, permissionId)
  if (!roleId || !permissionId)
    return res.status(400).json({
      status: false,
      message: "Please provide roleId and permissionId",
    });

  const alreadyExists = await RolePermissions.findOne({
    where: { roleId, permissionId },
  });

  if (alreadyExists)
    return res.status(400).json({
      status: false,
      message: "This roleId is already assinged to this permissionsId",
    });

  const rolePermission = await RolePermissions.create({ roleId, permissionId })

  return res.status(201).json({ success: true, rolePermission });
});

const getAllRolePermissions = catchAsyncErrors(async (req, res, next) => {
  const rolePermission = await RolePermissions.findAll();
  return res.status(200).json({ success: true, data: rolePermission });
});

export { createRolePermissions, getAllRolePermissions };
