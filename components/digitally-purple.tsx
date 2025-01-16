'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, CheckCircle, Code, Mail, Zap, Presentation } from 'lucide-react'
import Link from 'next/link'

export function DigitallyPurple() {
  const router = useRouter()
  const pathname = usePathname()
  
  // Initialize activeTab based on pathname
  const getInitialTab = () => {
    const path = pathname.replace('/', '')
    if (path === '') return 'home'
    if (path === 'powerpoint-add-in') return 'powerpoint add-in'
    return path
  }

  const [activeTab, setActiveTab] = useState(getInitialTab())
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const pathMap = {
    'home': '/',
    'services': '/services',
    'powerpoint add-in': '/powerpoint-add-in',
    'about': '/about',
    'contact': '/contact',
    'privacy': '/privacy'
  }

  useEffect(() => {
    setActiveTab(getInitialTab())
  }, [pathname])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  const handleNavigation = (path: string) => {
    const routePath = pathMap[path as keyof typeof pathMap]
    router.push(routePath)
    setActiveTab(path)
  }

  return (
    <div className="bg-purple-50 min-h-screen">
      <header className="bg-purple-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Digitally Purple</h1>
          <nav>
            <ul className="flex space-x-4">
              {['Home', 'Services', 'PowerPoint Add-in', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Button
                    variant="link"
                    className={`text-white ${activeTab === item.toLowerCase() ? 'bg-purple-700 rounded-md' : ''}`}
                    onClick={() => handleNavigation(item.toLowerCase())}
                  >
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto mt-8 p-4">
        {activeTab === 'home' && (  
          <div className="flex flex-col items-center">
            <div className="text-center mb-8 max-w-2xl">
              <h2 className="text-4xl font-bold mb-4">Empowering businesses with AI-driven productivity tools</h2>
              <p className="text-lg mb-8">Revolutionizing PowerPoint with our AI-powered add-in</p>
            </div>
            <div className="w-full mb-8">
              <img
                src="/screenshot.png"
                alt="PowerPoint Add-in Screenshot"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700" onClick={() => setActiveTab('powerpoint add-in')}>
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </div>
        )}

        {activeTab === 'services' && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'AI-Driven Productivity Tools',
                  description: 'Enhance efficiency with smart, AI-powered solutions.',
                  icon: <Zap className="w-12 h-12 text-purple-600" />
                },
                {
                  title: 'Custom Software Development',
                  description: 'Tailored software solutions with AI at their core.',
                  icon: <Code className="w-12 h-12 text-purple-600" />
                },
                {
                  title: 'AI Consultancy Services',
                  description: 'Expert guidance on implementing AI in your business.',
                  icon: <CheckCircle className="w-12 h-12 text-purple-600" />
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  {service.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'powerpoint add-in' && (
          <div>
            <h2 className="text-3xl font-bold mb-6">AI-Powered PowerPoint Add-in</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-6">
                <Presentation className="w-12 h-12 text-purple-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Revolutionize Your Presentations</h3>
                  <p className="mb-4">
                    Our cutting-edge PowerPoint add-in leverages the latest AI advancements to dramatically improve your slide authoring experience. Create more engaging, professional, and impactful presentations in less time.
                  </p>
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-4">Key Features:</h4>
              <ul className="list-disc list-inside mb-6">
                <li>AI-powered content suggestions</li>
                <li>Automatic slide layout optimization</li>
                <li>Smart data visualization</li>
                <li>Real-time design recommendations</li>
                <li>Intelligent image selection and placement</li>
                <li>Automated slide summarization</li>
              </ul>
              <h4 className="text-xl font-semibold mb-4">Benefits:</h4>
              <ul className="list-disc list-inside mb-6">
                <li>Save time on presentation creation</li>
                <li>Improve the quality and consistency of your slides</li>
                <li>Enhance audience engagement with better visuals</li>
                <li>Reduce the learning curve for creating professional presentations</li>
              </ul>
              <Button className="bg-purple-600 hover:bg-purple-700" onClick={() => setActiveTab('contact')}>
                Request Early Access
              </Button>
            </div>
          </div>
        )}

        {activeTab === 'about' && (
          <div>
            <h2 className="text-3xl font-bold mb-6">About Digitally Purple</h2>
            <p className="mb-4">
              Digitally Purple is a boutique software consultancy specializing in applying cutting-edge 
              Artificial Intelligence (AI) technologies to productivity tools. Our goal is to empower 
              businesses and individuals by leveraging AI to enhance efficiency, streamline workflows, 
              and unlock new potential for innovation.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Our Core Values</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Innovation: We constantly push the boundaries of what AI can achieve in the productivity space.</li>
              <li>Client-Centricity: Every solution we provide is based on understanding the unique needs and goals of each client.</li>
              <li>Efficiency: Our mission is to help businesses do more with less, making every second and every resource count.</li>
            </ul>
            <h3 className="text-2xl font-semibold mb-4">Our Latest Innovation</h3>
            <p className="mb-4">
              We&apos;re excited to announce our work on an AI-powered PowerPoint add-in. This tool represents our commitment to enhancing productivity through innovative AI applications. By improving the slide authoring experience, we&apos;re helping professionals create more impactful presentations with less effort.
            </p>
          </div>
        )}

        {activeTab === 'contact' && (
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
        )}

        {pathname === '/privacy' && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
              <section>
                <h3 className="text-2xl font-semibold mb-4">Information We Collect</h3>
                <p className="mb-4">We collect minimal information necessary to provide our services. This may include:</p>
                <ul className="list-disc list-inside mb-4">
                  <li>Contact information you voluntarily provide through our contact form</li>
                  <li>Basic usage analytics to improve our website</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4">How We Use Your Information</h3>
                <p className="mb-4">Any information we collect is used solely for:</p>
                <ul className="list-disc list-inside mb-4">
                  <li>Responding to your inquiries</li>
                  <li>Improving our website and services</li>
                  <li>Sending you information you have explicitly requested</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4">Data Protection</h3>
                <p className="mb-4">
                  We implement reasonable security measures to protect your information. 
                  We do not sell or share your personal data with third parties.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4">Your Rights</h3>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc list-inside mb-4">
                  <li>Access your personal data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of communications</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
                <p>
                  If you have any questions about our privacy policy, please contact us through our contact form 
                  or email us at{' '}
                  <a 
                    href="mailto:info@digitallypurple.com"
                    className="text-purple-600 hover:text-purple-800 transition-colors"
                  >
                    info@digitallypurple.com
                  </a>.
                </p>
              </section>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-purple-900 text-white p-4 mt-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2025 Digitally Purple. All rights reserved.</p>
            <div className="mt-2 md:mt-0">
              <Link 
                href="/privacy" 
                className="text-white hover:text-purple-200 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}