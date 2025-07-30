const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.post("/send", async (req, res) => {
    const { fullname, email, message } = req.body;

    console.log("✅ Contact form data received:", { fullname, email, message });

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "videoreact68@gmail.com",
            pass: "zncsvujuvojlfvvu",
        },
    });

    const mailOptions = {
        from: `${fullname} <videoreact68@gmail.com>`,
        to: "videoreact68@gmail.com",
        subject: `Contact Form Submission from ${fullname}`,
        text: `You have received a new message:\n\n\nName:\n ${fullname}\n\nEmail:\n ${email}\n\nMessage:\n${message}`,
        replyTo: email,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("✅ Email sent:", info.response);
        res.status(200).send("Email sent successfully");
    } catch (err) {
        console.error("❌ Error sending email:", err);
        res.status(500).send("Failed to send email");
    }
});


// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
