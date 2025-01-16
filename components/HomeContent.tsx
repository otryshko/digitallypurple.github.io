'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function HomeContent() {
  const router = useRouter()

  return (
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
      <Button 
        className="bg-purple-600 hover:bg-purple-700" 
        onClick={() => router.push('/powerpoint-add-in')}
      >
        Get Started <ArrowRight className="ml-2" />
      </Button>
    </div>
  )
} 