const sequelize = require('../sequelize');
const { DataTypes } = require('sequelize');

const Partial = sequelize.define('partial', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    driveLink: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = Partial;