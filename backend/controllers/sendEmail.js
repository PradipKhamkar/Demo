const nodemailer = require("nodemailer");

const sendEmailController = async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.logix.in",
      port: 587,
      auth: {
        user: "*********",
        pass: "***********",
      },
    });
    await transporter.sendMail({
      from: "***********",
      to: "************",
      subject: "Attachements",
      html: `<h1>Welcome Pradip</h1>`,
      attachments: {
        filename: "attachment.pdf",
        content: req.body.pdf,
        contentType: "application/pdf",
        encoding: "base64",
      },
    });
    res.status(200).send("mail sent successFully..!!");
  } catch (error) {
    console.log(error);
    res.status(200).send("mail not sent successFully..!!");
  }
};

module.exports = sendEmailController;
