'use server'

import nodemailer from 'nodemailer';
import {put} from '@vercel/blob'



export async function PUT(title: any){
try {  const blob = await put(title.name, title, { access: 'public' });
 
    return blob;
  }
catch(error) {
  console.log(error)
  }
}


export async function handler(formData: FormData) {
  console.log('entered')
  
  var newArray: any=[]
  const name = formData.get('name');
  const contactName = formData.get('contactName');
  const phoneNumber = formData.get('phoneNumber');
  const address = formData.get('address');
  const email = formData.get('email');
  const assetDescription = formData.get('assetDescription');
  const valuationPurpose = formData.get('valuationPurpose');

  //return value;
  var handlerReturn;


try{
  var filename: Array<string> = []
  var pathname: Array<string> = []
  const files = formData.getAll('title')
  for(const file of files) {
    const response: any = await PUT(file)
    pathname.push(response.url)
    filename.push(`${name}` + ' ' + response.pathname)
    console.log('response:', response, 'ArrayResponse:', filename, pathname)
  }
  newArray = filename.map((file:string, index:number) => ({
  filename: file,
  path: pathname[index]
}));
    console.log('line70:', newArray)
  
} catch(er) {
  }

    // Validate form data (optional)

    // Create a transporter using nodemailer
    const transporter = nodemailer.createTransport({
      // Configure your email provider settings here
        // Example: SMTP transport

      host: 'mail.mceastcourt.com',
      port: 465,
      secure: true,
      auth: {
        user: 'appraisal@mceastcourt.com',
        pass: '?%Y)AkZmOMN9'
      },
    });
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error)
        }else{console.log('connected')}
    })

        // Send mail with defined transport object
  try {

    const info = await transporter.sendMail({
      from: '"MbeluConsulting" <appraisal@mceastcourt.com>',
      to: ['mbeluconsultingg@gmail.com','mbeluconsulting@mceastcourt.com'],
      cc: ['oebeulah@gmail.com','benjichukwudile@gmail.com',],
      subject: 'New Appraisal Form Submission',
      text: `Full Name:\n${name}\n\nContactName:\n${contactName}\n\nPhone Number:\n${phoneNumber}\n\nEmail:\n${email}\n\n\nValuation Purpose:\n${valuationPurpose}\n\nAsset Description:\n${assetDescription}\n\nLocation:\n${address}`,
      attachments: newArray
    });

      handlerReturn = 'Appraisal sent'


        console.log('Email sent: %s', info.messageId, info, handlerReturn);
    }
  catch (error) { console.log(error);  handlerReturn='Appraisal not sent'}

  return handlerReturn;
}
