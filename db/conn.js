const Sequelize = require('sequelize')
const mysql = require('mysql2')

const sequelize = new Sequelize('cepDB','root','brenda2802',{
 host: '127.0.0.1',
 dialect: 'mysql'
})


try{
    sequelize.authenticate()
    console.log('conectado')
}catch(err){

    console.log(err)
}

module.exports = sequelize