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

export const sendOrderMail = async (req, res) => {
  try {
    const { Menu_name, Menu_phone, Menu_product, qty, address, country, city, pinCode } = req.body;

    // ✅ Validate required fields
    if (!Menu_name || !Menu_phone || !Menu_product || !qty || !country || !city || !address || !pinCode) {
      return res.status(400).json({ error: "All fields are required. Please check your order details." });
    }

    const receiverEmail = process.env.MY_RECEIVER_EMAIL || process.env.MY_EMAIL;
    if (!receiverEmail) {
      return res.status(500).json({ error: "Receiver email configuration is missing on the server." });
    }

    // ✅ Generate beautiful premium HTML email body
    const htmlBody = getBaseEmailTemplate({
      title: "New Product Order",
      subtitle: "New Order Placed",
      accentColor: "#ECAD54",
      htmlContent: `
        <p style="font-size: 16px; margin-top: 0;">Hello Vikram,</p>
        <p>A customer has requested a new brew via the CodeNap Café store. Here are the order details:</p>
        
        <table class="table-info">
          <tr>
            <td class="label">Product Ordered:</td>
            <td class="value value-highlight" style="text-transform: capitalize;">${Menu_product}</td>
          </tr>
          <tr>
            <td class="label">Quantity:</td>
            <td class="value">${qty} items</td>
          </tr>
          <tr>
            <td class="label">Customer Name:</td>
            <td class="value">${Menu_name}</td>
          </tr>
          <tr>
            <td class="label">Phone Number:</td>
            <td class="value">${Menu_phone}</td>
          </tr>
          <tr>
            <td class="label">Delivery Address:</td>
            <td class="value">${address}</td>
          </tr>
          <tr>
            <td class="label">City / Region:</td>
            <td class="value" style="text-transform: capitalize;">${city}</td>
          </tr>
          <tr>
            <td class="label">Country:</td>
            <td class="value" style="text-transform: capitalize;">${country}</td>
          </tr>
          <tr>
            <td class="label">Pin / Postal Code:</td>
            <td class="value">${pinCode}</td>
          </tr>
        </table>
      `
    });

    const mailOptions = {
      from: `"CodeNap Café Orders" <${process.env.MY_EMAIL}>`,
      to: receiverEmail,
      subject: `🛍️ New Product Order from ${Menu_name} - [${Menu_product.toUpperCase()}]`,
      html: htmlBody,
    };

    await getTransporter().sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "✅ Your order has been received. We're brewing it fresh — get ready to sip happiness! ☕🛍️",
    });
  } catch (error) {
    console.error("❌ Error sending order mail:", error);
    res.status(500).json({ error: "Failed to process order email. Please try again later." });
  }
};
