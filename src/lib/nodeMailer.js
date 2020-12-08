import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';

require('dotenv').config();

const mailTransporter = nodemailer.createTransport(
  smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  })
);

export default mailTransporter;
