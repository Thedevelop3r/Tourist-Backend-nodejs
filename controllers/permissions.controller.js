import { Permissions } from "../model/index.js";
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";

const createPermission = catchAsyncErrors(async (req, res, next) => {
  const { title, modelType, method } = req.body;
  console.log("body --> ", title, modelType, method);
  if (!title || !modelType || !method)
    return res.status(400).json({
      status: false,
      message: "Please provide all the required params",
    });

  const alreadyExists = await Permissions.findOne({
    where: { title, model_type: modelType, method },
  });

  if (alreadyExists)
    return res.status(400).json({
      status: false,
      message: "Permission already exits",
    });
  console.log("creating permission.", title);
  const permission = await Permissions.create({ title, model_type: modelType, method });

  return res.status(201).json({ success: true, permission });
});

const getAllPermissions = catchAsyncErrors(async (req, res, next) => {
  const permissions = await Permissions.findAll();
  return res.status(200).json({ success: true, data: permissions });
});

export { createPermission, getAllPermissions };
