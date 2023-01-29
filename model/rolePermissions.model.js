export default (sequelize, DataTypes) => {
  const RolePermissions = sequelize.define("role_permissions",{})
  return RolePermissions;
}