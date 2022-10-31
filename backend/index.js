const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "safamsg@gmail.com",
    pass: "iglhyqpekuescteh",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message; 
  const mail = {
    from: name,
    to: "sabana.platosys@gmail.com",
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
      return res.json();
    }
  });
});


// const router = require('express').Router();
// const express = require("express");
// const app = express();
// const  sendMail  = require ('./middleware/mail');
// app.use(express.json());

// const database =require("./database/db")

// PORT= 5000;



// app.listen(PORT, () => {
//   console.log(`Server created ${PORT}`);
// });

// //CONTACT FORM
// router.post('/contactform',async (req,res) => {
//   try{
//     const mailData = {
//       from : 'sabana.platosys@gmail.com',
//       to : 'safamsg@gmail.com',
//       subject : "subject"
//     }
    
//     let sendingMail = sendMail.sendMail(mailData)
//     console.log("mail details",sendingMail)

//   }catch(error){
//     console.log("error",error);
//   }
// })