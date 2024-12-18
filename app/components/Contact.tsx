'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 animate-slide-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center animate-slide-in">Contact Me</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
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
                  href="https://wa.me/+234 08134490997"
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
  )
}

