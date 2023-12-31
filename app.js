const express=require('express')
const path=require('path')

const app=express()

app.use(express.static('public'))

/*app.listen(3030, ()=>{
    console.log('Puerto 3030 corriendo')
})*/
const port =process.env.PORT || 3000;
app.listen (port, ()=>console.log(`servidor Coriendo en el puerto ${port}`))

app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})

app.get('/register', function(req, res){
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.get('/login', function(req, res){
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})