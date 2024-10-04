const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// Configure your email and app password here (use environment variables in production)
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

// Cloud Function to send an email
exports.sendContactEmail = functions.https.onCall((data, context) => {
  const { name, email, message } = data;

  const mailOptions = {
    from: gmailEmail,
    to: gmailEmail, // You can send it to yourself
    subject: `Contact Form Submission from ${name}`,
    html: `
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b></p>
      <p>${message}</p>
    `,
  };

  return transporter
    .sendMail(mailOptions)
    .then(() => {
      return { success: true };
    })
    .catch((error) => {
      console.error("There was an error while sending the email:", error);
      return { success: false, error: error.toString() };
    });
});
