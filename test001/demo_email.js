var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bsh0930@gmail.com',
    pass: 'BshCrys-8520'
  }
});

var mailOptions = {
  from: 'bsh0930@gmail.com',
  to: 'bshbman@naver.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});