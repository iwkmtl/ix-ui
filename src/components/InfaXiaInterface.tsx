'use client'

import { useState, useEffect } from 'react'
import HeaderNavigation from './HeaderNavigation'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import FooterPanel from './FooterPanel'
import MetaverseScene from './MetaverseScene'

export default function InfaXiaInterface() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null)
  const [isNotificationOpen, setIsNotificationOpen] = useState(true)

  useEffect(() => {
    // Function to remove only specific Next.js development overlays
    const removeNextJSOverlays = () => {
      // Only target specific Next.js development elements
      const nextJSElements = document.querySelectorAll(`
        [data-nextjs-call-stack-frame],
        [data-nextjs-toast],
        .__next-dev-overlay,
        .__next-dev-overlay-backdrop,
        #__next-dev-overlay,
        .__nextjs_original-stack-frame,
        .__nextjs_original-stack-frame-collapsed
      `)
      
      nextJSElements.forEach((element) => {
        (element as HTMLElement).style.display = 'none'
      })
    }

    // Run only a few times, not continuously
    removeNextJSOverlays()
    setTimeout(removeNextJSOverlays, 1000)
    setTimeout(removeNextJSOverlays, 3000)
  }, [])

  return (
    <div className="relative h-screen w-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 overflow-hidden">
      {/* Background 3D Scene */}
      <MetaverseScene />
      
      {/* Header Navigation */}
      <HeaderNavigation 
        onFeatureSelect={setActiveFeature} 
        onNotificationClick={() => setIsNotificationOpen(!isNotificationOpen)}
      />
      
      {/* Left Communication Panel */}
      <LeftPanel />
      
      {/* Right Support Panel */}
      <RightPanel 
        isNotificationOpen={isNotificationOpen}
        setIsNotificationOpen={setIsNotificationOpen}
      />
      
      {/* Footer Panel */}
      <FooterPanel />
      
      {/* Beta Version Badge */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-blue-600/80 backdrop-blur-sm px-4 py-1 rounded-full text-white text-sm font-semibold">
        BETA VERSION
      </div>


    </div>
  )
}
