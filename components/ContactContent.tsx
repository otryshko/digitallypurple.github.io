'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail } from 'lucide-react'
import { useState } from 'react'

export function ContactContent() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">Ready to enhance your productivity with AI or learn more about our PowerPoint add-in? Get in touch with us:</p>
          <div className="flex items-center mb-2">
            <Mail className="mr-2" />
            <a 
              href="mailto:info@digitallypurple.com" 
              className="hover:text-purple-600 transition-colors"
            >
              info@digitallypurple.com
            </a>
          </div>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input 
            name="name"
            placeholder="Your Name" 
            value={formData.name}
            onChange={handleInputChange}
          />
          <Input 
            name="email"
            type="email" 
            placeholder="Your Email" 
            value={formData.email}
            onChange={handleInputChange}
          />
          <Textarea 
            name="message"
            placeholder="Your Message" 
            value={formData.message}
            onChange={handleInputChange}
          />
          <Button type="submit" className="bg-purple-600 hover:bg-purple-700">Send Message</Button>
        </form>
      </div>
    </div>
  )
} 