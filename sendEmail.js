const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
    // Parse the cart details from the request body
    const { cart, total } = JSON.parse(event.body);

    // Create a transport for sending emails (use your email provider settings)
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Change to your email provider (e.g., SendGrid, etc.)
        auth: {
            user: 'youremail@example.com', // Your email
            pass: 'yourpassword' // Your email password or app-specific password
        }
    });

    const mailOptions = {
        from: 'youremail@example.com',
        to: 'youremail@example.com', // Where the order should be sent
        subject: 'New Quote Request from Art Store',
        text: `You have a new quote request:\n\nCart Details:\n${cart}\n\nTotal: $${total}`
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
