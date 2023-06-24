// Import the required modules and initialize the router
import express from 'express';
import nodemailer from 'nodemailer';
import UserModel from "../models/UserModel.js";
import jwt from 'jsonwebtoken';

const router = express.Router();

// Route POST /reset-password
router.post('/reset-password', async (req, res) => {
  const { email } = req.body;

  try {
    // Find the user based on the email
    const user = await UserModel.findOne({
      where: {
        email: email
      }
    });

    if (!user) {
      return res.status(404).json({ error: 'Pengguna tidak ditemukan.' });
    }

    // Generate and save the reset token for the user
    const resetToken = generateResetToken();
    user.resetToken = resetToken;
    await user.save();

    // Send the password reset email
    const emailSent = await sendPasswordResetEmail(email, resetToken);

    if (emailSent) {
      res.status(200).json({ message: 'Email reset password telah dikirim.' });
    } else {
      res.status(500).json({ error: 'Gagal mengirim email reset password.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Terjadi kesalahan server internal.' });
  }
});

// Function to send the password reset email
async function sendPasswordResetEmail(email, resetToken) {
  try {
    // Configure the Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'sido87568@gmail.com',
        pass: 'aauxjofscxwojgdv'
      }
    });

    // Configure the email
    const mailOptions = {
      from: 'sido87568@gmail.com',
      to: email,
      subject: 'Reset Password',
      text: `Silakan klik tautan berikut untuk mereset password Anda: http://127.0.0.1:5500/reset-password?token=${resetToken}`,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
}

function generateResetToken() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const tokenLength = 32;
  let resetToken = '';

  for (let i = 0; i < tokenLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    resetToken += characters[randomIndex];
  }

  // Generate a JWT token
  const payload = {
    resetToken: resetToken
  };

  // Sign the token using the secret key
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

  return token;
}



export default router;
