const sequelize = require('../sequelize');
const { DataTypes } = require('sequelize');

const Grade = sequelize.define('grade', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    value: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

module.exports = Grade;