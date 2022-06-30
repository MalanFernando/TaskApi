const {database, DataTypes} = require('../utils/database.util')

const Task = database.define('task', {
    id:{
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    clientId:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    limitDate:{
        type: DataTypes.DATE,
        allowNull: false
    },
    startDate:{
        type: DataTypes.DATE,
        allowNull: true
    },
    finishDate:{
        type: DataTypes.DATE,
        allowNull: true
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active'
    }
})

module.exports = {Task};