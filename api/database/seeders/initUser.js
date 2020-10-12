// const crypto = require('crypto');

module.exports = {
    up(queryInterface, Sequelize) {
        // let md5 = crypto.createHash('md5');
        // let password = md5.update('123456').digest('hex');
        let date = new Date();

        return queryInterface.bulkInsert('users', ['hgw'].map((username, index) => {
            return {
                id: index + 1,
                username,
                password: "123456",
                createdAt: date,
                updatedAt: date
            }
        }));
    },

    down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('users', null, {});
    }
};