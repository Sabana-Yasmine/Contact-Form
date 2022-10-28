const nodemailer = require("nodemailer");


async function sendMail(mailData) {
    let transporter = nodemailer.createTransport({
        service : "gamil",
        host    : 'smtp.gmail.com',
        port    : 587,
        secure  : false,
        auth  :{
            user  : 'sabana.platosys@gmail.com',
            pass  : 'odnmeubhjmpsoxzq'
        },
    });

    //console.log("authentiation",auth)

    let mailDetails = await transporter.sendMail({
        from   : mailData.from,
        to : mailData.to,
        subject : mailData.subject,
         
    });

    console.log("mailDetails",mailDetails)
    console.log("Message sent:", mailDetails.messageId);
}

module.exports = { sendMail }