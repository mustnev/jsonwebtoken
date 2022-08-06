const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const checkJwt = require('./middleware/auth')
const router = express.Router()
const port = 5000
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

router.get('/',checkJwt,function(req,res){
    res.send('hello word')
})

router.post('/login',function(req,res){
    const {email} = req.body

    const data = {
        email:email,
        ad:'>_Must Nev'
    }

    const token = jwt.sign(data,'secret_key',{expiresIn:'2h'}) // token oluşturma işlemi
    res.send(token)
})

router.post('/posts',checkJwt,function(req,res){
    res.send('hello word')
})

app.use('/', router)
app.listen(port,()=>{
    console.log('sunucu çalışıyor http://localhost:'+port)
})