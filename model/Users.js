// "use strict";
// const { sequelize, DataTypes, QueryTypes } = require("../config/db.connect");

// const Users = sequelize.define(
//   "Users",
//   {
//     id: {
//       type: DataTypes.BIGINT,
//       autoIncrement: true,
//       allowNull: false,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     tableName: "users",
//   }
// );

// try {
//   Users.sync()
//     .then((res) => console.info("Database Created", res))
//     .catch((err) => {
//       throw err;
//     });
// } catch (error) {
//   console.error(error);
// }

// module.exports = { Users, QueryTypes };
