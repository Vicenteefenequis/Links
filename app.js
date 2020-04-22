const express = require('express')
const app = express();
const mongoose = require('mongoose')
const linkRoute = require('./routes/linkRoute')
const path = require('path')


mongoose.connect('mongodb://localhost/newlinks', {
    useNewUrlParser: true, useUnifiedTopology: true
})


let db = mongoose.connection;


db.on('error',()=>{console.log('houve um erro')})
db.once('open', () => {console.log('Banco carregado')})


app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'templates'))
app.use('/',linkRoute)





app.listen(3333,()=>{console.log("Example app listenning on port",3333)})