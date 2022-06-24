const dotenv = require('dotenv');
dotenv.config();
const nodemailer = require('nodemailer');
// require('dotenv').config();


var smtpTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }
   
});
const mailOptions = {
        from: process.env.USER, // Sender address
        to: 'khant0581@gmail.com', // List of recipients
        subject: 'Anonymous', // Subject line
        text: 'Testing Message!', // Plain text body
    };
  
    smtpTransport.sendMail(mailOptions, function(err, info) {
       if (err) {
         console.log(err)
       } else {
         console.log(info);
       }
    });