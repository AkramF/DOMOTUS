'use client'

import { useState } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'

const serviceTypes = [
  'Maison connectée',
  'Division projets',
  'Expertise technique',
  'Support',
]

const projectTypes = [
  'Architectes & Designer',
  'Promoteur immobilier',
  'Hospitalité & Retail',
  'Bâtiment tertiaire',
  'Projets spéciaux',
]

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceType: '',
    projectType: '',
    projectInfo: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'serviceType' && value !== 'Division projets' ? { projectType: '' } : {}),
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
        setFormData({ fullName: '', phone: '', email: '', serviceType: '', projectType: '', projectInfo: '' })
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
          Nom complet
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Votre nom"
          required
          className="w-full px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-transparent transition-all duration-300"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-bold text-gray-800 mb-3">
          Numéro de téléphone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+212 6 XX XX XX XX"
          required
          className="w-full px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-transparent transition-all duration-300"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-3">
          Adresse email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="votre@email.com"
          required
          className="w-full px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-transparent transition-all duration-300"
        />
      </div>

      {/* Service Type */}
      <div>
        <label htmlFor="serviceType" className="block text-sm font-bold text-gray-800 mb-3">
          Type de service
        </label>
        <div className="relative">
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
            className="w-full px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-transparent transition-all duration-300 pr-12"
          >
            <option value="">Sélectionner un service</option>
            {serviceTypes.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
        </div>
      </div>

      {/* Project Type - Conditional */}
      {formData.serviceType === 'Division projets' && (
        <div>
          <label htmlFor="projectType" className="block text-sm font-bold text-gray-800 mb-3">
            Type de projet
          </label>
          <div className="relative">
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="w-full px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-transparent transition-all duration-300 pr-12"
            >
              <option value="">Sélectionner un type de projet</option>
              {projectTypes.map((project) => (
                <option key={project} value={project}>
                  {project}
                </option>
              ))}
            </select>
            <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
          </div>
        </div>
      )}

      {/* Project Info */}
      <div>
        <label htmlFor="projectInfo" className="block text-sm font-bold text-gray-800 mb-3">
          Informations sur le projet
        </label>
        <textarea
          id="projectInfo"
          name="projectInfo"
          value={formData.projectInfo}
          onChange={handleChange}
          placeholder="Décrivez votre projet..."
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
          <span>{isSubmitting ? 'Envoi...' : submitted ? 'Merci!' : 'Envoyer'}</span>
          <div className="w-9 h-9 rounded-full bg-[#e8e27c] ml-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <ArrowRight size={18} className="text-black" strokeWidth={2.5} aria-hidden="true" />
          </div>
        </button>
      </div>
    </form>
  )
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
          Nom complet
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Votre nom"
          required
          className="w-full px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-transparent transition-all duration-300"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-3">
          Adresse email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="votre@email.com"
          required
          className="w-full px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-transparent transition-all duration-300"
        />
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-bold text-gray-800 mb-3">
          Nom de l'entreprise
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Votre entreprise"
          className="w-full px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-transparent transition-all duration-300"
        />
      </div>

      {/* Project Info */}
      <div>
        <label htmlFor="projectInfo" className="block text-sm font-bold text-gray-800 mb-3">
          Informations sur le projet
        </label>
        <textarea
          id="projectInfo"
          name="projectInfo"
          value={formData.projectInfo}
          onChange={handleChange}
          placeholder="Décrivez votre projet..."
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
          <span>{isSubmitting ? 'Envoi...' : submitted ? 'Merci!' : 'Envoyer'}</span>
          <div className="w-9 h-9 rounded-full bg-[#e8e27c] ml-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <ArrowRight size={18} className="text-black" strokeWidth={2.5} aria-hidden="true" />
          </div>
        </button>
      </div>
    </form>
  )
}
