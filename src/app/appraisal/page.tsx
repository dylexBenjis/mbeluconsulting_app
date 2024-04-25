'use client'
import React, { useState } from 'react';
import styles from '@/app/page.module.css'
import { handler } from '@/actions/actions';


const Appraisal = () => {

    const [formData, setFormData] = useState({
    name:'',
    contactName: '',
    phoneNumber: '',
    address: '',
    assetDescription: '',
    valuationPurpose: '',
    title: '',
    invoice: '',
    inventory: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (formData: FormData) => {
        try {
      const response = await handler(formData);
    } catch (error) {
      console.error('Form submission failed:', error);
    }
    console.log(formData);
    // Reset form data after submission if needed
      setFormData({
        name:'',
        contactName: '',
        phoneNumber: '',
        address: '',
        assetDescription: '',
        valuationPurpose: '',
        title: '',
        invoice: '',
        inventory: ''
    });
  };

    
    
    
    return (
        <div className='mt-[5rem] sm:mt-[7rem] pb-[10rem] pt-[3rem] w-screen sm:text-lg '>
            <div className={styles.container}>
                <div className='flex justify-center items-center p-3 text-2xl font-bold'>Appraisal Form</div><hr/>
                <div className='w-full flex justify-center items-center'>
                    <form action={formData => { handleSubmit(formData) }} className='flex flex-col pt-10 pb-10 gap-8 '>
                    
      <div className='flex flex-col  gap-1'>
        <label htmlFor="name" className='font-semibold'>Name : </label>
        <input
          type="text"
          id="name"
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
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
                            className='border-b-2 border-amber-700 p-1 bg-gray-200/30'
        />
      </div></div>
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
      {/* <div>
        <label htmlFor="invoice">Invoice : </label>
        <input
          type="text"
          id="invoice"
          name="invoice"
          value={formData.invoice}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="inventory">Inventory:</label>
        <input
          type="text"
          id="inventory"
          name="inventory"
          value={formData.inventory}
          onChange={handleChange}
        />
      </div> */}
                              <div className='flex justify-center items-center'>  <button
          type="submit"
          className="flex  bg-amber-950 hover:bg-gray-600 hover:scale-110 text-white font-semibold py-2 px-4 rounded-md"
        >
          Submit
        </button></div>
                       
                </form> </div>
                <hr/>
    </div>
    </div>
  )
}

export default Appraisal