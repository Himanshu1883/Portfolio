import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables at the very top

const app = express();
app.use(cors());
app.use(express.json());

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

console.log("Email User:", EMAIL_USER);
console.log("Email Password:", EMAIL_PASS ? "Loaded" : "Missing"); // This should print 'Loaded'

app.post("/contact", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER, 
      pass: EMAIL_PASS, 
    },
  });

  let mailOptions = {
    from: EMAIL_USER, // Ensure it's set to your Gmail
    to: EMAIL_USER,
    subject: `New Contact from ${firstName} ${lastName}`,
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ success: false, message: "Failed to send message." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
