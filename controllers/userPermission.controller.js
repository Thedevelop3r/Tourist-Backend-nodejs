import { UserPermissions } from "../model/index.js";
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";

const createUserPermissions = catchAsyncErrors(async (req, res, next) => {
  const { userId, permissionId } = req.body;
  if (!userId || !permissionId)
    return res.status(400).json({
      status: false,
      message: "Please provide userId and permissionId",
    });

  const alreadyExists = await UserPermissions.findOne({ where: { userId, permissionId } });

  if (alreadyExists)
    return res.status(400).json({
      status: false,
      message: "This user have already assigned to this permission",
    });

  const userPermssion = await UserPermissions.create({ userId, permissionId });

  return res.status(201).json({ success: true, userPermssion });
});

const getAllUserPermissions = catchAsyncErrors(async (req, res, next) => {
  const userPermission = await UserPermissions.findAll();
  return res.status(200).json({ success: true, data: userPermission });
});

export { createUserPermissions, getAllUserPermissions };
