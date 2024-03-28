const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const conn = require('./db/conn')


app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars')
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))


app.use(express.static("public"));



//Routes

app.get('/',(req,res)=>{
    res.render('home')
})


const addressRoutes = require('./routes/addressRoutes')
app.use('/cep', addressRoutes)





//models

const Address = require('./models/address')






//Conection
conn.sync({
    
}).then(
    app.listen(5432,()=>{
        console.log('banco conectado')
        console.log('rodando na porta 3000')
        
    })
    
   
).catch((err)=>{
    console.log(err)
})

