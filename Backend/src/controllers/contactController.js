import nodemailer from "nodemailer";
import { getBaseEmailTemplate } from "../utils/emailTemplates.js";

// Lazy initialize transporter
let transporter = null;
const getTransporter = () => {
  if (!transporter) {
    if (!process.env.MY_EMAIL || !process.env.MY_PASSWORD) {
      console.warn("⚠️ Warning: SMTP credentials (MY_EMAIL / MY_PASSWORD) are not configured!");
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

export const sendContactMail = async (req, res) => {
  try {
    const { fname, lname, email, phone, product, message } = req.body;

    // ✅ Robust input validation
    if (!fname || !lname || !email || !phone || !product || !message) {
      return res.status(400).json({ error: "All fields are required. Please check your inputs." });
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
      title: "New Contact Inquiry",
      subtitle: "Contact Inquiry Received",
      accentColor: "#E5594C",
      htmlContent: `
        <p style="font-size: 16px; margin-top: 0;">Hello Vikram,</p>
        <p>A new visitor has submitted an inquiry form on your website. Here are the details:</p>
        
        <table class="table-info">
          <tr>
            <td class="label">Customer Name:</td>
            <td class="value">${fname} ${lname}</td>
          </tr>
          <tr>
            <td class="label">Email Address:</td>
            <td class="value"><a href="mailto:${email}" style="color: #E5594C; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td class="label">Phone Number:</td>
            <td class="value">${phone}</td>
          </tr>
          <tr>
            <td class="label">Product Interest:</td>
            <td class="value" style="text-transform: capitalize;">${product}</td>
          </tr>
        </table>

        <div class="message-box">
          <div class="message-title">Customer Message</div>
          <p class="message-text">"${message}"</p>
        </div>
      `
    });

    const mailOptions = {
      from: `"CodeNap Café Inquiry" <${process.env.MY_EMAIL}>`,
      to: receiverEmail,
      subject: `✉️ New Contact Form submission from ${fname} ${lname}`,
      html: htmlBody,
    };

    await getTransporter().sendMail(mailOptions);

    res.status(200).json({ 
      success: true,
      message: "✅ Thanks for reaching out! We'll get back to you shortly. Enjoy your coffee! ☕" 
    });
  } catch (error) {
    console.error("❌ Error sending contact mail:", error);
    res.status(500).json({ error: "Failed to send message. Please try again later." });
  }
};
