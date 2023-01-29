
export default (sequelize, DataTypes) => {
  const Roles = sequelize.define("roles", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
  return Roles;
};
