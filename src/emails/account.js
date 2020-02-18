
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'khuukody82122@gmail.com',
        subject: 'Thanks for joining.',
        text: `Welcome to the app, ${name}`
    })
}

const sendFarewellEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'khuukody82122@gmail.com',
        subject: 'See you soon.',
        text: `Goodbye , ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendFarewellEmail
}