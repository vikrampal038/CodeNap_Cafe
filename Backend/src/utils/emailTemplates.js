/**
 * Generates a premium, highly professional HTML email template for CodeNap Café notifications
 * @param {Object} params
 * @param {string} params.title - Title displayed inside the header
 * @param {string} params.subtitle - Subtitle displayed below the title
 * @param {string} params.accentColor - Color hex used for primary theme borders/accents (e.g. #D4A373)
 * @param {string} params.htmlContent - The main body content in HTML format
 */
export const getBaseEmailTemplate = ({ title, subtitle, accentColor = "#D4A373", htmlContent }) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <style>
        body {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          background-color: #FDFBF7;
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
        }
        .container {
          max-width: 600px;
          margin: 40px auto;
          background-color: #FFFFFF;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(42, 27, 21, 0.06);
          border: 1px solid #EADCC9;
        }
        .header {
          background-color: #2A1B15;
          padding: 45px 20px;
          text-align: center;
          border-bottom: 4px solid ${accentColor};
        }
        .logo {
          font-size: 26px;
          font-weight: 800;
          color: #FAEDCD;
          letter-spacing: 3px;
          margin: 0;
          text-transform: uppercase;
        }
        .logo span {
          color: ${accentColor};
        }
        .subtitle {
          font-size: 13px;
          color: #CBB29C;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin: 8px 0 0 0;
          font-weight: 600;
        }
        .content {
          padding: 40px 35px;
          color: #3F2723;
          line-height: 1.7;
        }
        .table-info {
          width: 100%;
          border-collapse: collapse;
          margin: 25px 0;
        }
        .table-info td {
          padding: 12px 15px;
          border-bottom: 1px solid #F3EDE4;
        }
        .table-info tr:last-child td {
          border-bottom: none;
        }
        .label {
          font-weight: bold;
          color: #2A1B15;
          width: 150px;
          font-size: 14px;
        }
        .value {
          color: #5C4033;
          font-size: 15px;
        }
        .value-highlight {
          color: #E5594C;
          font-weight: bold;
          font-size: 16px;
        }
        .message-box {
          background-color: #FAF5EE;
          border-left: 4px solid ${accentColor};
          padding: 20px;
          border-radius: 4px 10px 10px 4px;
          margin: 25px 0;
        }
        .message-title {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: ${accentColor};
          font-weight: bold;
          margin-bottom: 8px;
        }
        .message-text {
          font-size: 15px;
          color: #3F2723;
          margin: 0;
          white-space: pre-line;
          font-style: italic;
        }
        .footer {
          background-color: #FAF5EE;
          padding: 30px 20px;
          text-align: center;
          border-top: 1px solid #EADCC9;
          color: #8C7565;
          font-size: 12px;
        }
        .footer p {
          margin: 6px 0;
        }
        .footer a {
          color: #2A1B15;
          text-decoration: none;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 class="logo">CodeNap<span>Café</span></h1>
          <div class="subtitle">${subtitle}</div>
        </div>
        <div class="content">
          ${htmlContent}
        </div>
        <div class="footer">
          <p><strong>CodeNap Café</strong></p>
          <p>Fresh Brews, Premium Snacks & Cozy Vibes</p>
          <p>Website: <a href="https://codenapcafe.netlify.app" target="_blank">codenapcafe.netlify.app</a></p>
        </div>
      </div>
    </body>
    </html>
  `;
};
