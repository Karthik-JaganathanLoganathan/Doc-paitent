const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');

class Medicalnotes extends Model {}

Medicalnotes.init(
    {
        Title: {
            type: DataTypes.STRING,
            allowNull: false, 
        },

        Location: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },


        Description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        Category: {
            type: DataTypes.STRING,
            allowNull: false,

        },
       
    
    },
    {
        sequelize,
        timestamps: false,
        modeName: 'medicalnote',
        freezeTableName: true
    }    
    
);

module.exports = Medicalnotes;
