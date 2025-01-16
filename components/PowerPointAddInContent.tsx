'use client'

import { Button } from "@/components/ui/button"
import { Presentation } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function PowerPointAddInContent() {
  const router = useRouter()

  return (
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
        <Button 
          className="bg-purple-600 hover:bg-purple-700" 
          onClick={() => router.push('/contact')}
        >
          Request Early Access
        </Button>
      </div>
    </div>
  )
} 