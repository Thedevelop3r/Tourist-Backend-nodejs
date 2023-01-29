export default (sequelize, DataTypes) => {
  const UserRoles = sequelize.define("user_roles", {})
  return UserRoles
};
