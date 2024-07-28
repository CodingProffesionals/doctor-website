export default function handler(req, res) {
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: 'yudit1994@gmail.com',
        pass: 'wdtozclshfmzjzhx',
      },
      secure: true,
    }) 
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        res.send(200).json({ message: "Error" });

      } else {
        console.log("Server is ready to take our messages");
        res.status(200).json({ message: "Server is ready to take our messages" });

      }
    });
    const mailData = {
      from: req.body.email,
      to: 'yudit1994@gmail.com',
      subject: `Message From ${req.body.first + ' '+req.body.last}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div></br><b>Contact Details</b></br><p>Name: ${req.body.first + ' '+req.body.last}</p><p>Phone no: ${req.body.phone}</p><p>Sent from:
      ${req.body.email}</p>`
    }
    // transporter.sendMail(mailData, function (err, info) {
    //   if(err)
    //     console.log(err)
    //   else
    //     console.log(info)
    // })
      console.log(req.body);
    }
    