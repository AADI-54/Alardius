// ✅ Required Imports
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// // Manually define __dirname for ES Modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

// ✅ Middleware
app.use(express.json());
app.use(cors());

// Serve static files from the Vite frontend build
// app.use(express.static(path.join(__dirname, "../vite-project/dist")));

// // Handle any unmatched routes with index.html
// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../vite-project/dist/index.html"));
// });





// ✅ Nodemailer Transporter Configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "aggarwaladitya0889@gmail.com",  // Replace with your email
    pass: "ylua lfzt uffy slbt",           // Use App Password, not your real password
  },
});

// ✅ Route to handle form submission
app.post("/submit-query", (req, res) => {
  const { name, email, query } = req.body;

  const mailOptions = {
    from: "aggarwaladitya0889@gmail.com",
    to: "aggarwaladitya839@gmail.com",
    subject: "New Query Submission",
    text: `You have received a new query submission:\n\nName: ${name}\nEmail: ${email}\nQuery: ${query}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Email error:", error);
      return res.status(500).send("Error sending email");
    }
    res.status(200).send("Email sent: " + info.response);
  });
});

// ✅ Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
