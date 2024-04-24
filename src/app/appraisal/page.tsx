'use client'
import React, { useState } from 'react';
import styles from '@/app/page.module.css'


const Appraisal = () => {

  const [formData, setFormData] = useState({
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

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission here, you can send formData to your backend or process it as needed
    console.log(formData);
    // Reset form data after submission if needed
    setFormData({
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
                <form onSubmit={handleSubmit} className='flex flex-col pt-10 pb-10 gap-8 '>
                    
      <div className='flex flex-col  gap-1'>
        <label htmlFor="Name" className='font-semibold'>Name : </label>
        <input
          type="text"
          id="Name"
          name="Name"
          value={formData.contactName}
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
                            className='border-b-2 border-amber-700 p-1 bg-gray-200/30 h-[150px] sm:h-[300px]'
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
          type="text"
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
                        <button type="submit">Submit</button>
                       
                </form> </div>
                <hr/>
    </div>
    </div>
  )
}

export default Appraisal