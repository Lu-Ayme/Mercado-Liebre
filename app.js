const express=require('express')
const path=require('path')

const app=express()

app.use(express.static('public'))

app.listen(3030, ()=>{
    console.log('Puerto 3030 corriendo')
})

app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})