// const express = require('express');

// const mongoose = require('mongoose');

// const path = require('path');

// const bodyParser = require('body-parser');

// const nodemailer = require('nodemailer');


// const axios = require('axios');

// const app = express();

// const port = process.env.PORT || 3002;
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//    res.sendFile(__dirname + '/loginsyt.html');
// });

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/Aseap', { 
//   useNewUrlParser: true, 
//   useUnifiedTopology: true 
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch((err) => { 
//   console.error('Error connecting to MongoDB', err);
// });

// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
//   MobileNumber: Number,
//   Age: Number,
//   email: String,
// });

// const User = mongoose.model('User', userSchema);
// function getEmailMessage(age) {
//   let message = `<p>Your registration was successful.</p>`;

//   // Custom messages based on age groups
//   if (age >= 1 && age <= 5) {
//     message += ` Since your child is ${age} years old, they are in the early childhood stage.Follow the vaccination schedule to protect against serious illnesses.Important vaccines include MMR, DTP, polio, and chickenpox.THANK YOU FOR CONNECTING WITH US `;
//   }  else if (age >= 6 && age <= 10) {
//     message += ` Since your child is ${age} years old. Staying up to date on vaccines keeps you healthy and safe.Get the MMR booster, DTP booster, flu shot, and Hepatitis A & B.THANK YOU FOR CONNECTING WITH US .`;
//   }else if (age >= 11 && age <= 16) {
//     message += ` Since your child is ${age} years old, they are a teenager.Vaccines are essential for school, sports, and overall health.Get the HPV vaccine, meningococcal vaccine, flu shot, and Tdap booster.THANK YOU FOR CONNECTING WITH US`;
//   } else {
//     message += ` Since your child is ${age} years old, consult your doctor for vaccine recommendations.Adults need routine boosters and protection against preventable diseases.Consider getting Tdap, flu, COVID-19, shingles, and pneumonia vaccines.THANK YOU FOR CONNECTING WITH US`;
//   }
//   return `
//    <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Registration Successful</title>
//     </head>
//     <body style="background-color: #f4f4f4; padding: 20px; font-family: Arial, sans-serif;">
//         <table width="100%" cellspacing="0" cellpadding="0">
//             <tr>
//                 <td align="center">
//                     <table width="600" cellspacing="0" cellpadding="0" style="background-color:#ffffff; padding: 20px; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); max-width: 100%;">
//                         <tr>
//                             <td align="center">
//                                 <h2 style="color:blue;">Registration Successful</h2>
//                                 ${message}
//                                 <p style="color:#777; font-size: 12px;">For more information, visit our website or contact support.</p>
//                             </td>
//                         </tr>
//                     </table>
//                 </td>
//             </tr>
//         </table>
//     </body>
//     </html>
//   `;
// }


// function getSMSMessage(age,email) {
//   let message = `Registration successful.`;

//   // Custom messages based on age groups
//   if (age >= 1 && age <= 5) {
//     message += ` You're ${age} years old. Check your email ${email}  for age-based vaccination recommendations.`;
//   } else if (age >= 6 && age <= 10) {
//     message += ` You're ${age} years old. Check your email${email} for age-based vaccination recommendations.`;
//   } else if (age >= 11 && age <= 16) {
//     message += ` You're ${age} years old. Check your email ${email} for age-based vaccination recommendations.`;
//   } else {
//     message += ` You're ${age} years old. Check your email ${email} for age-based vaccination recommendations.`;
//   }  

//   return message;
// }

// app.post('/submit', (req, res) => {
//   const user = new User({ 
//     username: req.body.username, 
//     password: req.body.password,
//     MobileNumber: req.body.MobileNumber,
//     Age: req.body.Age,
//     email: req.body.email,
//   });
  
//   user.save().then(() => {
//     console.log('User saved to database');
//     console.log(user);
//     const num = user.MobileNumber;
//     const age = user.Age;
//     const email = user.email;
//     console.log(email);
//     console.log(num);
//     console.log(age);
//     // Send SMS
//     const apiKey = "SqTcMgA3BGuF4dJZ97ra6E1CUL8YwXRtkzQKN2lo0ivhxDWnVHvbc7wRVgnU6AtEXH9s2lNQkp4ZLmWI";
//     const smsData = {
//       sender_id: "FSTSMS",
//       language: "english",
//       route: "q",
//       numbers: num,
//       message: getSMSMessage(age,email)
//     };
//     axios.post("https://www.fast2sms.com/dev/bulkV2", smsData, {
//       headers: {
//         Authorization: apiKey,
//       },
//     })
//     .then(response => {
//       console.log("SMS sent successfully:", response.data);
//     })
//     .catch((error) => {
//       console.error("Error sending SMS:", error);
//     });

//     // Send email
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       secure: true,
//       port: 465,
//       auth: {
//         user: 'lifeshield00001@gmail.com',
//         pass: 'dist ldxg ckzp iiur'
//       }
//     });

//     const mailOptions = {
//       from: 'lifeshield00001@gmail.com',
//       to: email,
//       subject: 'Registration Successful',
//       html: getEmailMessage(age)  // Use HTML instead of plain text
//     };
    
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error('Error sending email:', error);
//         return res.status(500).send('Error sending email');
//       }
//       console.log('Email sent:', info.response);
//       res.redirect('/');
//     });

//   }).catch((err) => {
//     console.error(err);
//     res.status(500).send('Error saving user to database');
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
