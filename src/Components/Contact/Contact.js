import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ContactDetails from './ContactDetails';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await axios.post('https://formspree.io/f/mwpvlpva');
      if (response === 200) {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setStatus('Message sent successfully!');
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('Error sending message. Please check your connection.');
    }
  };

  return (
    <section className="min-h-screen w-full px-8 sm:px-24 xl:px-80 pt-32 mb-32">
      <h1 className="text-center text-5xl font-bold">Contact</h1>
      <p className="text-center text-[#6B7280] text-lg mt-6 mb-12">
        Feel free to reach out for more information or collaborations!
      </p>

      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-10">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-3/6 max-w-md p-8 rounded-xl shadow-lg dark:bg-[#102D44] bg-white text-gray-700 dark:text-white order-2 lg:order-1"
        >
          <h2 className="text-2xl font-semibold mb-6">Contact Form</h2>

          <label htmlFor="name" className="block mb-1 font-medium">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 mb-5 rounded-md shadow-lg border dark:border-[#0c2233] dark:bg-[#1E3851] focus:outline-blue-500"
            required
          />

          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 mb-5 rounded-md shadow-lg border dark:border-[#0c2233] dark:bg-[#1E3851] focus:outline-blue-500"
            required
          />

          <label htmlFor="subject" className="block mb-1 font-medium">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Your Subject"
            className="w-full p-3 mb-5 rounded-md shadow-lg border dark:border-[#0c2233] dark:bg-[#1E3851] focus:outline-blue-500"
          />

          <label htmlFor="message" className="block mb-1 font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full h-32 p-3 mb-5 rounded-md shadow-lg border dark:border-[#0c2233] dark:bg-[#1E3851] focus:outline-blue-500 resize-y"
            required
          />

          <button
            type="submit"
            className=" px-4 bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-md transition duration-300"
          >
            Send Message
          </button>

          {status && (
            <p className="text-center mt-4 text-sm font-medium">
              {status}
            </p>
          )}
        </motion.form>

        <ContactDetails />
      </div>
    </section>
  );
};

export default Contact;
