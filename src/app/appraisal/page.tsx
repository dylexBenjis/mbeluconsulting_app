'use client'
import React, { useEffect,  useState } from 'react';
import styles from '@/app/page.module.css'
import { handler } from '@/actions/actions';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './toast.css'

const Appraisal: React.FC = () => {


  const [formData, setFormData] = useState({
    name: '',
    contactName: '',
    phoneNumber: '',
    email: '',
    address: '',
    assetDescription: '',
    valuationPurpose: '',
    title: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const notify = () => toast.success(responseValue, {
    style: {
      
    },
    icon: false,
  })
  
  const [submitting, setSubmitting] = useState(false);
  const [responseValue, setResponse] = useState('');
  const [responseToast, setResponseToast] = useState(false);

  useEffect(() => { console.log(submitting) }, [submitting])
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement)
    try {
      setSubmitting(true)
      console.log(submitting, 'entered')
      const response = await handler(formData);
      console.log('waited for:', response)
      // Reset form data after submission if needed
      if (response) {
        setResponseToast(true);
        setResponse(response);
        notify();
        setFormData({
          name: '',
          contactName: '',
          phoneNumber: '',
          email: '',
          address: '',
          assetDescription: '',
          valuationPurpose: '',
          title: ''
        });
        setSubmitting(false)
      }
    } catch (error) {
      console.error('Form submission failed:', error);
    }


  };


    
    
    
  return (

    <div className='mt-[5rem] sm:mt-[7rem] pb-[10rem] pt-[3rem] w-screen sm:text-lg text-black'>
      <ToastContainer position='bottom-right' autoClose={2500}/>
            <div className={styles.container}>
                <div className='flex justify-center items-center p-3 text-2xl font-bold'>Appraisal Form</div><hr/>
                <div className='w-full flex justify-center items-center'>
            <form onSubmit={e => { setSubmitting(true); handleSubmit(e)}} className='flex flex-col pt-10 pb-10 gap-8 '>                  
      <div className='flex flex-col  gap-1'>
        <label htmlFor="name" className='font-semibold'>Name : </label>
        <input
          type="text"
          id="name"
          required
          name="name"
          value={formData.name}
                            onChange={handleChange}
                            className='border-b-2 border-amber-700 p-1 bg-gray-200/30'
        />
                        </div>
                        <div className='flex gap-y-8 gap-x-5 flex-col sm:flex-row'>
      <div className='flex flex-col  gap-1'>
        <label htmlFor="contactName" className='font-semibold'>Contact name : </label>
        <input
          type="text"
          id="contactName"
          required
          name="contactName"
          value={formData.contactName}
                            onChange={handleChange}
                            className='border-b-2 border-amber-700 p-1 bg-gray-200/30'
        />
                    </div>

      <div className='flex flex-col gap-1 '>
        <label htmlFor="phoneNumber" className='font-semibold'>Contact&#39;s phone number : </label>
        <input
          type="tel"
          id="phoneNumber"
          required
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
                            className='border-b-2 border-amber-700 p-1 bg-gray-200/30'
        />
                </div></div>
                    <div className='flex flex-col  gap-1'>
        <label htmlFor="contactName" className='font-semibold'>Email : </label>
        <input
          type="email"
          id="email"
          required
          name="email"
          value={formData.email}
                            onChange={handleChange}
                            className='border-b-2 border-amber-700 p-1 bg-gray-200/30'
        />
                    </div>
      <div className='flex flex-col  '>
        <label htmlFor="address" className='font-semibold'>Address of Asset : </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
                            className='border-b-2 border-amber-700 p-1 bg-gray-200/30'
        />
      </div>
      <div className='flex flex-col  '>
        <label htmlFor="assetDescription" className='font-semibold'>Description of Asset : </label>
        <textarea
          id="assetDescription"
          required
          name="assetDescription"
          value={formData.assetDescription}
          onChange={handleChange}
                            className='border-b-2 border-amber-700 p-2 bg-gray-200/30 h-[150px] sm:h-[300px]'
        />
      </div>
      <div className='flex flex-col  '>
        <label htmlFor="valuationPurpose" className='font-semibold'>Purpose of Valuation : </label>
        <input
          type="text"
          id="valuationPurpose"
          required
          name="valuationPurpose"
          value={formData.valuationPurpose}
          onChange={handleChange}
                            className='border-b-2 border-amber-700 p-1 bg-gray-200/30'
        />
      </div> 
      <div className='flex flex-col '>
        <label htmlFor="title" className='font-semibold'>Title/ Invoice/ Inventory : </label>
        <input
          type="file"
          multiple
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
                            className='border-b-2 border-amber-700 p-1  bg-gray-200/30'
        />
      </div>
                              <div className='flex justify-center items-center'>  <button
                type="submit"
                disabled={submitting}
                className="flex  bg-amber-950 hover:scale-110 text-white font-semibold py-2 px-4 rounded-md"
                >
                {submitting ? 'Submitting...' : 'Submit'}
        </button></div>

                </form> </div>
                <hr/>    
    </div>
    </div>
  )
}

export default Appraisal