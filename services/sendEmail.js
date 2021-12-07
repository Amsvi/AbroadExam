const nodemailer = require('nodemailer')

const verificationTemplate = { subject: 'Verification Code' }

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_PASS,
  },
})

export const sendEmailNodeMailer = (recipient, token, cb) => {
  transporter.sendMail(
    {
      from: `"${process.env.APP_NAME} 🏴‍☠️" <${process.env.EMAIL_FROM}>`, // sender address
      to: recipient, // list of receivers
      subject: verificationTemplate.subject, // Subject line
      html: `This code will be expired within an hour<br /><b>${token}</b>`,
    },
    function (error, info) {
      if (error) {
        cb({ success: false })
      } else {
        cb({ success: true, message: info.response })
      }
    }
  )
}
