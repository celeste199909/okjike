const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('okjike_dev', 'root', 'mysql1099', {
    host: 'localhost',
    dialect: 'mysql' /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */
  });

//   (async function(){
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
//   })()

module.exports = sequelize