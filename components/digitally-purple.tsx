'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export function DigitallyPurple({ children }: { children: React.ReactNode }) {
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
        {children}
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