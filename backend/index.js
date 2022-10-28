const router = require('express').Router();
const express = require("express");
const app = express();
const  sendMail  = require ('./middleware/mail');
app.use(express.json());

const database =require("./database/db")

PORT= 5000;



app.listen(PORT, () => {
  console.log(`Server created ${PORT}`);
});

//CONTACT FORM
router.post('/contactform',async (req,res) => {
  try{
    const mailData = {
      from : 'sabana.platosys@gmail.com',
      to : 'safamsg@gmail.com',
      subject : "subject"
    }
    
    let sendingMail = sendMail.sendMail(mailData)
    console.log("mail details",sendingMail)

  }catch(error){
    console.log("error",error);
  }
})