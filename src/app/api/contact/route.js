import { NextResponse } from "next/server";
import { transporter } from "@/utils/nodemailer";

export const POST = async (req) => {
  const body = await req.json();
  if (!body.name || !body.email || !body.message) {
    return new NextResponse(
      JSON.stringify(
        { message: "Please fill all details!" },
        {
          status: 400,
        }
      )
    );
  }
  try {
    await transporter.sendMail({
      from: process.env.CONTACT_EMAIL,
      to: body.email,
      subject: `New message from ${body.name}`,

      text: `Dear ${body.name},\nThank you for reaching out to us through our website's contact form. We appreciate the time you've taken to connect with CyberShakha.\nYour inquiry is important to us, and we are committed to providing you with a prompt response.\nPlease be assured that our team is currently reviewing your message, and we will address your inquiry with the utmost care and attention it deserves. Our typical response time ranges from 1 to 5 days, depending on the complexity of the matter. Rest assured, we will strive to get back to you as soon as possible.\nIn the meantime, if you have any further questions or additional information to provide, please feel free to reach out to us. Your cooperation is greatly appreciated.\nOnce again, thank you for considering CyberShakha. We look forward to the opportunity to assist you further.\nBest regards,\nCyberShakha\n\nMessage Details:\nName: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`,

      html: ` <h1>Dear ${body.name},</h1>
      <p>Thank you for reaching out to us through our website's contact form. We appreciate the time you've taken to connect with CyberShakha.</p>
  
      <p>Your inquiry is important to us, and we are committed to providing you with a prompt response.</p>
  
      <p>Please be assured that our team is currently reviewing your message, and we will address your inquiry with the utmost care and attention it deserves. Our typical response time ranges from 1 to 5 days, depending on the complexity of the matter. Rest assured, we will strive to get back to you as soon as possible.</p>  
      <p>In the meantime, if you have any further questions or additional information to provide, please feel free to reach out to us. Your cooperation is greatly appreciated.</p>
  
      <p>Once again, thank you for considering CyberShakha. We look forward to the opportunity to assist you further.</p>
  
      <p>Best regards,</p>
      <p>CyberShakha</p>
      <br>
      <hr>
      <br>
        <h3>Message Details:</h3>
        <p>Name: ${body.name}</p>
        <p>Email: ${body.email}</p>
        <p>Message: ${body.message}</p>
      `,
    });
    await transporter.sendMail({
      from: body.email,
      to: process.env.CONTACT_EMAIL,
      subject: `New message from ${body.name}`,
      text: `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`,
      html: `<h1>Name: ${body.name}</h1>
      <p>Email: ${body.email}</p>
        <p>Message: ${body.message}</p>
      `,
    });

    return new NextResponse(
      JSON.stringify(
        { message: "Email sent successfully!" },
        {
          status: 200,
        }
      )
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify(
        { message: "There was an error sending the email." },
        {
          status: 500,
        }
      )
    );
  }
};
