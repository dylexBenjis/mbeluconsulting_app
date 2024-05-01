'use server'

import nodemailer from 'nodemailer';
import {put} from '@vercel/blob'



export async function PUT(title: any){
try {  const blob = await put(title.name, title, { access: 'public' });
 
    return blob;
  }
catch(error) {
  console.log(error)
  throw error
  }
}


export async function handler(formData: FormData){
  console.log('entered')
  
  var newArray: any=[]
  const name = formData.get('name');
  const contactName = formData.get('contactName');
  const phoneNumber = formData.get('phoneNumber');
  const address = formData.get('address');
  const email = formData.get('email');
  const assetDescription = formData.get('assetDescription');
const valuationPurpose = formData.get('valuationPurpose');
  const fileInput = formData.getAll('file')

  
  console.log('files: ', fileInput)
  console.log(name, contactName, phoneNumber, address)
  //return value;
  var handlerReturn;


try{
  if (fileInput.length === 0) { }
  else{
  for (const file of fileInput) {
    const response: any = await PUT(file)
    newArray.push({ filename: `${formData.get('name')} ${response.pathname}`, path: response.url });
      } }

    console.log('line70:', newArray)
  
} catch(er) {
  }

    // Validate form data (optional)

    // Create a transporter using nodemailer
    const transporter = nodemailer.createTransport({
    //   // Configure your email provider settings here
    //     // Example: SMTP transport

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
 
    // mail to company workers
    if (newArray.length === 0) {
         console.log('entered', newArray)
    await transporter.sendMail({
      from: '"Mbelu Consulting" <appraisal@mceastcourt.com>',
      to: ['mbeluconsultingg@gmail.com','mbeluconsulting@mceastcourt.com'],
      cc: ['oebeulah@gmail.com',],
      subject: 'New Appraisal Form Submission',
      text: `Full Name:\n${name}\n\nContactName:\n${contactName}\n\nPhone Number:\n${phoneNumber}\n\nEmail:\n${email}\n\n\nValuation Purpose:\n${valuationPurpose}\n\nAsset Description:\n${assetDescription}\n\nLocation:\n${address}`,
  
    });}else{ console.log('enteredE', newArray)
    await transporter.sendMail({
      from: '"Mbelu Consulting" <appraisal@mceastcourt.com>',
      to: ['mbeluconsultingg@gmail.com','mbeluconsulting@mceastcourt.com'],
      cc: ['oebeulah@gmail.com',],
      subject: 'New Appraisal Form Submission',
      text: `Full Name:\n${name}\n\nContactName:\n${contactName}\n\nPhone Number:\n${phoneNumber}\n\nEmail:\n${email}\n\n\nValuation Purpose:\n${valuationPurpose}\n\nAsset Description:\n${assetDescription}\n\nLocation:\n${address}`,
      attachments: newArray
    });
    }
    
    //mail to appraisal filler
    await transporter.sendMail({
      from: '"MbeluConsulting" <appraisal@mceastcourt.com>',
      to:`${email}`,
      subject: 'Appraisal Form Submitted',
      text: `Dear ${name},\n\n\nPlease know that your appraisal request has been successfully received.\n\nYou will be contacted as soon as possible.\nThank You.`,

    });

      handlerReturn = 'Appraisal sent'

    }
  catch (error) { console.log(error);  handlerReturn='Appraisal not sent'}

  return handlerReturn;
}
