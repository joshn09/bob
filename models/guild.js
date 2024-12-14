const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const Guild = sequelize.define('guild', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    welcomeChannelId: {
        type: Sequelize.STRING,
        allowNull: true
    },
    welcomeRoleId: {
        type: Sequelize.STRING,
        allowNull: true
    }
}) 
// WOOOOOO GO DATABASE
// TRULY THE 22ND CENTURY

module.exports = Guild;
