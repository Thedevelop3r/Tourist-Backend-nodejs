import { UserRoles } from "../model/index.js";
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";

const createUserRole = catchAsyncErrors(async (req, res, next) => {
  const { userId, roleId } = req.body;
  if (!userId || !roleId)
    return res.status(400).json({
      status: false,
      message: "Please provide userId and roleId",
    });

    const alreadyExists = await UserRoles.findOne({ where: { userId, roleId } });

    if (alreadyExists)
      return res.status(400).json({
        status: false,
        message: "This user have already assigned to this role",
      });


  const userRole = await UserRoles.create({ userId, roleId });

  return res.status(201).json({ success: true, userRole });
});

const getAllUserRoles = catchAsyncErrors(async (req, res, next) => {
  const userRole = await UserRoles.findAll();
  return res.status(200).json({ success: true, data: userRole });
});

export { createUserRole, getAllUserRoles };
