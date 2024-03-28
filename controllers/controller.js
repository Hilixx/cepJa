const { where } = require('sequelize');
const { raw } = require('mysql2');
const Address = require('../models/address')




module.exports =  class controller{

    static async getAddress(req,res){
       
        let cep = req.body.cep
        
        const cepValido = /^[0-9]{8}$/;
        if(!cepValido.test(cep)){
            console.log('cep invalido')
            res.redirect('/cep/register')
        }
        else{
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const responseCep =await response.json()
        const rua = responseCep.logradouro
        const bairro = responseCep.bairro
        const cidade = responseCep.localidade
        cep = responseCep.cep
        Address.create({cep,rua,bairro,cidade})
        res.render('ceps',{cep,cidade,bairro,rua})
        }
        
        
    }
    static async allCep(req,res){
        const address = await Address.findAll({raw:true})
        res.render('allCep',{address})
    }
        
    
}

