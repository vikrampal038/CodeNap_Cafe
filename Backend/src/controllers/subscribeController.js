import nodemailer from "nodemailer";
import { getBaseEmailTemplate } from "../utils/emailTemplates.js";

// Lazy initialize transporter
let transporter = null;
const getTransporter = () => {
  if (!transporter) {
    if (!process.env.MY_EMAIL || !process.env.MY_PASSWORD) {
      console.warn("⚠️ Warning: SMTP credentials (MY_EMAIL / MY_PASSWORD) are missing!");
    }
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });
  }
  return transporter;
};

export const sendSubscribeMail = async (req, res) => {
  try {
    const { email } = req.body;

    // ✅ Validate required field
    if (!email) {
      return res.status(400).json({ error: "Email address is required." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Please enter a valid email address." });
    }

    const receiverEmail = process.env.MY_RECEIVER_EMAIL || process.env.MY_EMAIL;
    if (!receiverEmail) {
      return res.status(500).json({ error: "Receiver email configuration is missing on the server." });
    }

    // ✅ Generate beautiful premium HTML email body
    const htmlBody = getBaseEmailTemplate({
      title: "New Newsletter Subscription",
      subtitle: "New Community Member Joined",
      accentColor: "#a8a295",
      htmlContent: `
        <p style="font-size: 16px; margin-top: 0;">Hello Vikram,</p>
        <p>A new customer has subscribed to the CodeNap Café newsletter community list! Here are their contact details:</p>
        
        <table class="table-info">
          <tr>
            <td class="label">Subscriber Email:</td>
            <td class="value value-highlight"><a href="mailto:${email}" style="color: #E5594C; text-decoration: none;">${email}</a></td>
          </tr>
        </table>
      `
    });

    const mailOptions = {
      from: `"CodeNap Café Community" <${process.env.MY_EMAIL}>`,
      to: receiverEmail,
      subject: `📬 New Newsletter Subscription from ${email}`,
      html: htmlBody,
    };

    await getTransporter().sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "✅ Thanks for subscribing to our updates. Fresh brews and news are coming your way! ☕",
    });
  } catch (error) {
    console.error("❌ Error sending subscription email:", error);
    res.status(500).json({ error: "Server error while subscribing. Please try again later." });
  }
};