const Sequelize = require('sequelize').Sequelize;

const sequelize = new Sequelize(
    'node-complete', 
    'root', 
    '!Jaxyboy19', {
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;