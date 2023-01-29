import { Roles } from "../model/index.js"; 
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";

const createRole = catchAsyncErrors(async (req, res, next) => {
  const { title } = req.body;
  console.log(title);
  if (!title)
    return res.status(400).json({
      status: false,
      message: "Please provide role title",
    });

  const alreadyExists = await Roles.findOne({ where: { title } });

  if (alreadyExists)
    return res.status(400).json({
      status: false,
      message: "Role already exits",
    });
  console.log("creating role.", title);
  const role = await Roles.create({ title });

  return res.status(201).json({ success: true, role });
});

const getAllRoles = catchAsyncErrors(async (req, res, next) => {
  const roles = await Roles.findAll();
  return res.status(200).json({ success: true, data: roles });
});

export { createRole, getAllRoles };
