'use client'
import React, { useState } from 'react';

const FeedbackForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, for example, send the feedback to your server
    console.log('Feedback submitted:', { firstName, lastName, email, feedback });
    // Reset the form
    setFirstName('');
    setLastName('');
    setEmail('');
    setFeedback('');
  };

  return (
    <div className="container mx-auto  px-4 py-8 lg:w-[40rem]">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            id="firstName"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            id="lastName"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">Feedback</label>
          <textarea
            id="feedback"
            className="w-full lg:h-[5rem] p-2 border border-gray-300 rounded-md"
            placeholder="Enter your feedback here..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </div>
        <div className="flex place-content-center mb-4">
        <button
          type="submit"
          className="flex justify-self-center bg-amber-950 hover:bg-gray-600 hover:scale-110 text-white font-semibold py-2 px-4 rounded-md"
        >
          Submit
        </button></div>
      </form>
    </div>
  );
};

export default FeedbackForm;
