
const express = require('express')
const routes = express.Router()
const user = require('../model/user') 
const nodemailer = require('nodemailer');
const getEmailMessage = require('../utils/emailTemplate') // import the function
const axios = require('axios')
const getSMSMessage = require('../utils/smsTemplate') // import the function


routes.get('/signup', (req, res) => {
    res.render('signup')
})


routes.get('/signin', (req, res) => {
    res.render('signin')
})


routes.get('/profile', (req, res) => {
    res.render('profile', { user: req.user })
})


routes.post("/signup", async (req, res) => {
   try {
     const { UserName, Number, email, password, age } = req.body
 
     const result = await user.create({
       UserName,
       Number,
       email,
       password,
       age,
     })
 
     console.log(result)
 
     // === Send Email ===
     const transporter = nodemailer.createTransport({
       service: 'gmail',
       port: 465,
       secure: true,
       auth: {
         user: 'lifeshield00001@gmail.com',
         pass: 'dist ldxg ckzp iiur'
       }
     })
 
     const mailOptions = {
       from: 'lifeshield00001@gmail.com',
       to: email,
       subject: 'Registration Successful',
       html: getEmailMessage(age)
     }
 
     await transporter.sendMail(mailOptions)
     console.log('Email sent successfully.')
 
     // === Send SMS ===
     const apiKey = "SqTcMgA3BGuF4dJZ97ra6E1CUL8YwXRtkzQKN2lo0ivhxDWnVHvbc7wRVgnU6AtEXH9s2lNQkp4ZLmWI";
     const smsData = {
       sender_id: "FSTSMS",
       language: "english",
       route: "q",
       numbers: Number,
       message: getSMSMessage(age, email)
     }
 
     await axios.post("https://www.fast2sms.com/dev/bulkV2", smsData, {
       headers: {
         Authorization: apiKey
       }
     })
 
     console.log('SMS sent successfully.')
 
     return res.redirect('/')
 
   } catch (error) {
     console.error('Signup error:', error)
     return res.render('signup', { error: "Email is not unique or something went wrong." })
   }
 })
// Signin POST route
routes.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body
        const token = await user.matchthetoken(email, password)

        return res.cookie("token", token).redirect('/')
    } catch (error) {
        return res.render('signin', { error: "Incorrect Password!" })
    }
})

// Logout
routes.get('/logout', (req, res) => {
    res.clearCookie("token").redirect('/')
})

module.exports = routes
