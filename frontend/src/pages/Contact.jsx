import React, { useState } from 'react';
import CallToAction from '../components/CallToAction';

const whatsappNumber = '+923365082290';
const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}`;

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open WhatsApp chat with a pre-filled message
    const text = `Name: ${form.name}%0AEmail: ${form.email}%0ASubject: ${form.subject}%0AMessage: ${form.message}`;
    window.open(`${whatsappLink}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white w-full">
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl font-medium">Get in touch with our expert team to discuss your academic writing needs.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Get in Touch</h2>
            <p className="text-gray-700 mb-8">We're here to help you achieve academic excellence. Reach out to us through any of the following channels:</p>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-xl">
                  <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 6-10 7L2 6"/></svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email Us</div>
                  <div className="text-gray-700 text-sm">info@gradeboostdigitals.com</div>
                  <div className="text-gray-500 text-xs">We'll respond within 24 hours</div>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-xl">
                  <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Call Us</div>
                  <div className="text-gray-700 text-sm">+91 8769181227</div>
                  <div className="text-gray-500 text-xs">Available 24/7</div>
                </div>
              </div>
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-xl">
                  <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Visit Us</div>
                  <div className="text-gray-700 text-sm">123 Academic Street</div>
                  <div className="text-gray-500 text-xs">New York, NY 10001</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Send Us a Message</h2>
              <div>
                <label className="block text-gray-700 mb-1">Your Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Email Address</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Subject</label>
                <select name="subject" value={form.subject} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400">
                  <option value="">Select a service</option>
                  <option value="Dissertation Writing">Dissertation Writing</option>
                  <option value="Essay Writing">Essay Writing</option>
                  <option value="Research Papers">Research Papers</option>
                  <option value="Literature Reviews">Literature Reviews</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Your Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400" />
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-red-500 to-red-400 text-white py-3 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:from-red-600 hover:to-red-500 transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 2 11 13"/><path d="m22 2-7 20-4-9-9-4 20-7Z"/></svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <CallToAction />
    </div>
  );
};

export default Contact; 