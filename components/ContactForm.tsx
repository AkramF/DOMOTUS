'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    projectInfo: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormData({ fullName: '', email: '', company: '', projectInfo: '' })
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        alert('Une erreur est survenue. Veuillez réessayer.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-bold text-gray-800 mb-3">
          Full name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="First Name"
          required
          className="w-full px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-transparent transition-all duration-300"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-3">
          Email address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          required
          className="w-full px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-transparent transition-all duration-300"
        />
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-bold text-gray-800 mb-3">
          Company name
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company name"
          className="w-full px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-transparent transition-all duration-300"
        />
      </div>

      {/* Project Info */}
      <div>
        <label htmlFor="projectInfo" className="block text-sm font-bold text-gray-800 mb-3">
          Project information
        </label>
        <textarea
          id="projectInfo"
          name="projectInfo"
          value={formData.projectInfo}
          onChange={handleChange}
          placeholder="Tell us about your project..."
          rows={6}
          className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-transparent transition-all duration-300 resize-none font-sans"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting || submitted}
          className="inline-flex items-center gap-0 bg-black hover:bg-gray-900 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 group"
        >
          <span>{isSubmitting ? 'Envoi...' : submitted ? 'Merci!' : 'Submit'}</span>
          <div className="w-9 h-9 rounded-full bg-[#e8e27c] ml-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <ArrowRight size={18} className="text-black" strokeWidth={2.5} aria-hidden="true" />
          </div>
        </button>
      </div>
    </form>
  )
}
