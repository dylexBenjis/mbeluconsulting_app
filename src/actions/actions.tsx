'use server'

import nodemailer from 'nodemailer';
import {put} from '@vercel/blob'
import { NextResponse } from 'next/server';

async function uploadDocs(a:any) {
  const title = a;
  if (title) {
    

  // Send POST request to WordPress media endpoint
  const response = await fetch('http://mceastcourt.com/wp-json/wp/v2/media', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer your-access-token' // Add authorization header if required
    },
    body: JSON.stringify({
      file: title // File data
    })
  });

  // Handle response from WordPress
  const data = await response.json();
  console.log(data)

    console.log(title)
  }
}

export async function PUT(request: FormData): Promise<NextResponse> {
  const file = request.get('title') as File;
  const blob = await put(file.name, file, { access: 'public' });
 
  return NextResponse.json(blob);
}

export async function handler(formData: FormData) {

  const titleUrl = await PUT(formData);
  console.log(titleUrl)
 
  //   console.log(formData)
  //   const name = formData.get('name');
  //   const contactName = formData.get('contactName');
  //   const phoneNumber = formData.get('phoneNumber');
  //   const address = formData.get('address');

    
  //   // Validate form data (optional)

  //   // Create a transporter using nodemailer
  //   const transporter = nodemailer.createTransport({
  //     // Configure your email provider settings here
  //       // Example: SMTP transport

  //     host: 'mail.mceastcourt.com',
  //     port: 465,
  //     secure: true,
  //     auth: {
  //       user: 'test@mceastcourt.com',
  //       pass: '?%Y)AkZmOMN9'
  //     },
  //   });
  //   transporter.verify(function (error, success) {
  //       if (error) {
  //           console.log(error)
  //       }else{console.log('connected')}
  //   })

  //       // Send mail with defined transport object
  // try {
  //   const info = await transporter.sendMail({
  //     from: '"MbeluConsulting" <test@mceastcourt.com>',
  //     to: 'benjichukwudile@gmail.com',
  //     subject: 'New Form Submission',
  //     text: `Name: ${name}\nEmail: ${name}\nMessage: ${contactName}`,
  //   });

  //       console.log('Message sent: %s', info.messageId);
  //   }
  //   catch(error){console.log(error)}

}
