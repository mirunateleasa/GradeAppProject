const sequelize = require('../sequelize');
const { DataTypes } = require('sequelize');

const Account = sequelize.define('account', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Account;