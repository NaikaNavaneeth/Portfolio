import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/sendEmail", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!email || !name || !message) {
      return res.status(400).json({ success: false, error: "Missing required fields" });
    }

    const mailOptions = {
      from: `"${name} <${email}>" <${process.env.EMAIL_USER}>`, // Gmail requires this user to match the authenticated account
      replyTo: email, // user’s own email — this makes replies go to them
      to: process.env.TO_EMAIL,
      subject: `Portfolio Contact: ${name}`,
      text: `
        You have received a new message from your portfolio contact form:

        Name: ${name}
        Email: ${email}

        Message:
        ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully");
    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ success: false, error: "Failed to send message" });
  }
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
