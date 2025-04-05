const express = require("express")
const app = express()
const port = 8005
const path = require("path")
const {connectDB} = require("./connnectionDB")
const router = require('./routes/user')
const {chekauth} = require('./middleware/auth')
const cookieParser = require('cookie-parser')
app.set("view engine","ejs")

app.set("views",path.resolve("./views"))
app.use(express.static(path.resolve("./public")));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
app.use(chekauth('token'))



connectDB("mongodb://localhost:27017/Khanaval").then(()=>{
    console.log("DB Connected!")
}).catch((err)=>{
    console.log("DB Connection Failed!")
    console.log(err)
})

app.get("/",(req,res)=>{
    res.render("index",{user:req.user})
})

app.use('/',router)
app.listen(port,(req,res)=>{
    console.log(`Server is Runing ON Port ${port}`)
})
