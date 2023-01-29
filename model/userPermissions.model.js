export default (sequelize, DataTypes) => {
  const UserPermissions = sequelize.define("user_permissions", {});
  return UserPermissions;
};
