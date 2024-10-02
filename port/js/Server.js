const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '..', '.env') });


const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (CSS, JS, etc.) from the root directory (Portfolio folder)
app.use(express.static(path.join(__dirname, '..')));

// Serve the index.html when someone visits "/"
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Route for handling form submissions
app.post('/send', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Set up Nodemailer transporter
    let transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: process.env.EMAIL, 
            pass: process.env.EMAIL_PASS 
        }
    });

    // Set up email options
    let mailOptions = {
        from: email,
        to: process.env.EMAIL, 
        subject: `Contact Form Submission: ${subject}`,
        text: `You have received a new message from ${name}. \n\n Email: ${email} \n Subject: ${subject} \n Message: \n ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email: ' + error);
        }
        res.send('Message sent successfully!');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
