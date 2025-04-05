const express = require("express")
const app = express()
const port = 8005
const path = require("path")
const {connectDB} = require("./connnectionDB")
const router = require('./routes/user')
const {chekauth} = require('./middleware/auth')
const cookieParser = require('cookie-parser')
const nodemailer = require('nodemailer');
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
//Send email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      port: 465,
      auth: {
        user: 'lifeshield00001@gmail.com',
        pass: 'dist ldxg ckzp iiur'
      }
    });

    const mailOptions = {
      from: 'lifeshield00001@gmail.com',
      to: email,
      subject: 'Registration Successful',
      html: getEmailMessage(age)  // Use HTML instead of plain text
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).send('Error sending email');
      }
      console.log('Email sent:', info.response);
      res.redirect('/');
    });

  

app.use('/',router)
app.listen(port,(req,res)=>{
    console.log(`Server is Runing ON Port ${port}`)
})
