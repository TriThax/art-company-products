const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
    // Parse the cart details from the request body
    const { cart, total } = JSON.parse(event.body);

    // Create a transporter to send email (use Gmail or any other service)
    const transporter = nodemailer.createTransport({
        service: 'gmail', // You can use Gmail or any email provider
        auth: {
            user: process.env.EMAIL_USER, // Your email address, stored as an environment variable
            pass: process.env.EMAIL_PASSWORD // Your email password or an App-Specific Password
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER, // Your email address
        to: 'nguyentrithoyves88@gmail.com', // Replace with your email
        subject: 'New Quote Request from Art Store',
        text: `You have a new quote request from the Art Store!\n\nCart Details:\n${cart}\n\nTotal: $${total}`
    };

    try {
        // Send email
        await transporter.sendMail(mailOptions);
        
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully!' })
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to send email.' })
        };
    }
};
