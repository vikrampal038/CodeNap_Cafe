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

export const sendReservationMail = async (req, res) => {
  try {
    const { customerName, person, date, time } = req.body;

    // ✅ Validate required fields
    if (!customerName || !person || !date || !time) {
      return res.status(400).json({ error: "All fields are required. Please check your reservation details." });
    }

    const receiverEmail = process.env.MY_RECEIVER_EMAIL || process.env.MY_EMAIL;
    if (!receiverEmail) {
      return res.status(500).json({ error: "Receiver email configuration is missing on the server." });
    }

    // ✅ Generate beautiful premium HTML email body
    const htmlBody = getBaseEmailTemplate({
      title: "Table Reservation",
      subtitle: "New Table Booking Request",
      accentColor: "#614343",
      htmlContent: `
        <p style="font-size: 16px; margin-top: 0;">Hello Vikram,</p>
        <p>A new customer table reservation request has been submitted. Here are the booking details:</p>
        
        <table class="table-info">
          <tr>
            <td class="label">Customer Name:</td>
            <td class="value">${customerName}</td>
          </tr>
          <tr>
            <td class="label">Number of Guests:</td>
            <td class="value value-highlight">${person} Guests</td>
          </tr>
          <tr>
            <td class="label">Date:</td>
            <td class="value">${date}</td>
          </tr>
          <tr>
            <td class="label">Requested Time:</td>
            <td class="value">${time}</td>
          </tr>
        </table>
      `
    });

    const mailOptions = {
      from: `"CodeNap Café Reservations" <${process.env.MY_EMAIL}>`,
      to: receiverEmail,
      subject: `🍽️ Table Reservation by ${customerName} for ${person} Guests`,
      html: htmlBody,
    };

    await getTransporter().sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "✅ Your table is booked. We look forward to serving you the perfect cup! ☕🍽️",
    });
  } catch (error) {
    console.error("❌ Error sending reservation email:", error);
    res.status(500).json({ error: "Failed to send reservation email. Please try again later." });
  }
};
