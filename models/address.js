const {DataTypes} = require('sequelize')
const db = require('../db/conn')



const Address = db.define('Address',{
    cep:{
        type:DataTypes.STRING,
        require:true
        
    },
    rua:{
        type:DataTypes.STRING,
        require:true
        
    },
    bairro:{
        type:DataTypes.STRING,
        require:true
        
    },

    cidade:{
        type:DataTypes.STRING,
        require:true
        
    },
    
})


module.exports = Address