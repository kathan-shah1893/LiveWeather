const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

const path2 = path.join(__dirname,'../public')
app.use(express.static(path2))


const static_path = path.join(__dirname,'../templates/views')
app.set('views',static_path)

app.set('view engine','hbs')

const parti = path.join(__dirname,"../templates/partials")
hbs.registerPartials(parti)


app.get("/",(req,res)=>{
    res.render('index.hbs')
})
app.get("/about",(req,res)=>{
    res.render('about')
})
app.get("/weather",(req,res)=>{
    res.render('weather')
})
app.get("*",(req,res)=>{
    res.render('404page')
})
app.listen(1000)