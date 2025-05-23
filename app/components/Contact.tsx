'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser'; // Install this package with `npm install @emailjs/browser`

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        'service_8ckpg5u',
        'template_if4zncc', // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        'nq0KDLApA5IZVhmzq' // Replace with your EmailJS Public Key
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 animate-slide-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center animate-slide-in">Contact Me</h2>
        
        {/* Map Section */}
        <div className="aspect-w-16 aspect-h-9 mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126083.42285880761!2d7.324718582455139!3d9.054396995694854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1685201234567!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            {/* Contact Details */}
            <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <img
                  src="/whatsaap.gif"
                  alt="whats app Icon"
                  className="w-6 h-6 mr-2"
                />
                <span>Whatsapp:</span>
                <a
                  href="https://wa.me/+2348134490997"
                  className="ml-2 text-blue-600 hover:underline"
                >
                  Send a message
                </a>
              </div>
              <div className="flex items-center">
                <img
                  src="/phone call ggif.gif"
                  alt="Phone Icon"
                  className="w-6 h-6 mr-2"
                />
                <span>Phone:</span>
                <a
                  href="tel:+2348134490997"
                  className="ml-2 text-blue-600 hover:underline"
                >
                  Place a call
                </a>
              </div>
              <div className="flex items-center">
                <img
                  src="/emailgif.gif"
                  alt="Email Icon"
                  className="w-6 h-6 mr-2"
                />
                <span>Email:</span>
                <a
                  href="mailto:thanksagbeble@gmail.com"
                  className="ml-2 text-blue-600 hover:underline"
                >
                  Send a mail
                </a>
              </div>
              <div className="flex items-center">
                <img
                  src="/location gif.gif"
                  alt="Location Icon"
                  className="w-6 h-6 mr-2"
                />
                <span>Location:</span>
                <span className="ml-2">Abuja, Nigeria</span>
              </div>
              {/* Download CV Button */}
              <div className="flex items-center">
                <button
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
                  onClick={() => window.open('/thanks_Resume[1].pdf', '_blank')}
                >
                  Download My CV
                </button>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 flex items-center justify-center"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-5 w-5" />
              </button>
              {submitStatus === 'success' && (
                <p className="mt-4 text-green-600 dark:text-green-400 text-center">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="mt-4 text-red-600 dark:text-red-400 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

