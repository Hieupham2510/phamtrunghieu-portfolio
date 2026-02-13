'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        details: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Placeholder for form submission logic
        console.log('Form submitted:', formData)
        alert("Thanks! I'll be in touch properly once the backend is hooked up.")
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section className="px-6 md:px-12 pb-32">
            <div className="container mx-auto">
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    onSubmit={handleSubmit}
                    className="max-w-4xl"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mb-16">
                        {/* Name */}
                        <div className="relative group">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name*"
                                required
                                className="w-full bg-transparent border-b border-foreground/20 py-4 text-xl text-foreground outline-none focus:border-accent-purple transition-colors placeholder:text-muted"
                            />
                        </div>

                        {/* Company */}
                        <div className="relative group">
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder="Company name"
                                className="w-full bg-transparent border-b border-foreground/20 py-4 text-xl text-foreground outline-none focus:border-accent-purple transition-colors placeholder:text-muted"
                            />
                        </div>

                        {/* Email */}
                        <div className="relative group">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email*"
                                required
                                className="w-full bg-transparent border-b border-foreground/20 py-4 text-xl text-foreground outline-none focus:border-accent-purple transition-colors placeholder:text-muted"
                            />
                        </div>

                        {/* Phone */}
                        <div className="relative group">
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone number*"
                                required
                                className="w-full bg-transparent border-b border-foreground/20 py-4 text-xl text-foreground outline-none focus:border-accent-purple transition-colors placeholder:text-muted"
                            />
                        </div>
                    </div>

                    {/* Details */}
                    <div className="relative group mb-16">
                        <textarea
                            name="details"
                            value={formData.details}
                            onChange={handleChange}
                            placeholder="Project details*"
                            required
                            rows={4}
                            className="w-full bg-transparent border-b border-foreground/20 py-4 text-xl text-foreground outline-none focus:border-accent-purple transition-colors placeholder:text-muted resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="group flex items-center gap-4 text-foreground text-xl font-medium hover:text-accent-purple transition-colors"
                    >
                        <span className="w-16 h-16 rounded-full bg-foreground/10 flex items-center justify-center group-hover:bg-accent-purple transition-colors duration-300">
                            <ArrowRight className="w-6 h-6 text-foreground group-hover:text-white transform group-hover:-rotate-45 transition-transform duration-300" />
                        </span>
                        Submit Inquiry
                    </button>
                </motion.form>

                {/* Footer Illustration Removed - Moved to ContactFooter */}

            </div>
        </section>
    )
}
