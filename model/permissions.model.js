export default (sequelize, DataTypes) => {
  const Permissions = sequelize.define("permissions", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    method: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Permissions;
};
