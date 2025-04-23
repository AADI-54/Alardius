const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const port = 5000;  // You can change the port as needed

// Middleware
app.use(express.json());
app.use(cors());  // Enable CORS for requests from the frontend

// Nodemailer Transporter Configuration
const transporter = nodemailer.createTransport({
  service: "gmail",  // You can use any SMTP provider
  auth: {
    user: "aggarwaladitya0889@gmail.com",  // Replace with your email
    pass: "ylua lfzt uffy slbt",  // Replace with your email password (or use App Password)
  },
});

// Route to handle form submission
app.post("/submit-query", (req, res) => {
  const { name, email, query } = req.body;

  const mailOptions = {
    from: "aggarwaladitya0889@gmail.com",  // Your email address
    to: "aggarwaladitya839@gmail.com",  // The email you want to send the query to
    subject: "New Query Submission",
    text: `You have received a new query submission:

    Name: ${name}
    Email: ${email}
    Query: ${query}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send("Error sending email");
    }
    res.status(200).send("Email sent: " + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
