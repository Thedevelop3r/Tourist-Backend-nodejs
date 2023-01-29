import {
  Users,
  Roles,
  Permissions,
  UserRoles,
  UserPermissions,
} from "../model/index.js";
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";

const createUser = catchAsyncErrors(async (req, res, next) => {
  const { username, password } = req.body;
  console.log(username,password);
  if (!username || !password)
    return res.status(400).json({
      status: false,
      message: "Please provide all fields in request body",
    });

  const alreadyExists = await Users.findOne({ where: { username } });

  if (alreadyExists)
    return res.status(400).json({
      status: false,
      message: "User already exists with the given username",
    });
  console.log('creating user.');
  const user = await Users.create({ username, password });

  return res.status(201).json({ success: true, user });
});

const getAllUsers = catchAsyncErrors(async (req, res, next) => {
  const users = await Users.findAll({
    attributes: ["id", "username"],
    include: [UserRoles, UserPermissions],
  });
  return res.status(200).json({ success: true, data: users });
});

export { createUser, getAllUsers }
