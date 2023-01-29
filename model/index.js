import { sequelize, Sequelize } from "../config/sequalize.js"
import usersModel from "./users.model.js"
import rolesModel from "./roles.model.js"
import permissionsModel from "./permissions.model.js"
import userRolesModel from "./userRoles.model.js"
import rolePermissionsModel from "./rolePermissions.model.js"
import userPermissionsModel from "./userPermissions.model.js"

//import models
const Users = usersModel(sequelize, Sequelize)
const Roles = rolesModel(sequelize, Sequelize)
const Permissions = permissionsModel(sequelize, Sequelize)
const UserRoles = userRolesModel(sequelize, Sequelize)
const RolePermissions = rolePermissionsModel(sequelize, Sequelize)
const UserPermissions = userPermissionsModel(sequelize, Sequelize)

// define relationship between tables
Users.hasMany(UserRoles)
Roles.hasMany(UserRoles)

Roles.hasMany(RolePermissions);
Permissions.hasMany(RolePermissions);

Users.hasMany(UserPermissions);
Permissions.hasMany(UserPermissions);

export {
  Users,
  Roles,
  Permissions,
  UserRoles,
  RolePermissions,
  UserPermissions,
  Sequelize,
  sequelize,
};

// db.Matches = require('./matches.model')(sequelize, Sequelize)
// db.Bookmakers = require('./bookmakers.model')(sequelize, Sequelize)
// db.Markets = require('./markets.model')(sequelize, Sequelize)
// db.Outcomes = require('./outcomes.model')(sequelize, Sequelize)
// db.Plans = require('./plans.model')(sequelize, Sequelize)
// db.Subscriptions = require('./subscriptions.model')(sequelize, Sequelize)

// db.Matches.hasMany(db.Markets)
// db.Markets.belongsTo(db.Bookmakers)
// db.Markets.hasMany(db.Outcomes)
// db.Subscriptions.belongsTo(db.Users)
// db.Subscriptions.belongsTo(db.Plans)
// db.Bookmakers.hasMany(db.Markets)
// db.Markets.belongsTo(db.Matches)
