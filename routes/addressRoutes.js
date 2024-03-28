const express = require('express')
const Address = require('../models/address')
const routes = express.Router()
const controller = require('../controllers/controller')




routes.get('/register',(req,res)=>{
    res.render('addressRegis')
})
routes.get('/allCep',controller.allCep)
routes.post('/register',controller.getAddress)

module.exports = routes