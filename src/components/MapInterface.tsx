'use client'

import { useState } from 'react'
import { 
  XMarkIcon,
  MapPinIcon,
  UserIcon,
  BuildingOfficeIcon,
  ShoppingBagIcon,
  GamepadIcon
} from '@heroicons/react/24/outline'

interface MapInterfaceProps {
  isOpen: boolean
  onClose: () => void
}

export default function MapInterface({ isOpen, onClose }: MapInterfaceProps) {
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 z-[200]"
        onClick={onClose}
      />
      
      {/* Map Interface */}
      <div className="fixed inset-4 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg z-[201]">
        <div className="p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-white text-2xl font-bold flex items-center gap-2">
              <MapPinIcon className="w-7 h-7" />
              InfaXia World Map
            </h2>
            <button 
              className="p-2 hover:bg-white/20 rounded-lg transition-colors text-white"
              onClick={onClose}
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Map Container */}
          <div className="flex-1 bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-lg border border-white/10 relative overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
                {Array.from({ length: 400 }).map((_, i) => (
                  <div key={i} className="border border-white/10"></div>
                ))}
              </div>
            </div>

            {/* Current Location - SPOO1 */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-blue-600 w-4 h-4 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-600/80 px-2 py-1 rounded text-white text-xs font-bold whitespace-nowrap">
                SPOO1 (You are here)
              </div>
            </div>

            {/* FLARE TOWER QUARTER */}
            <div className="absolute top-1/4 left-1/3">
              <div className="bg-orange-500 w-3 h-3 rounded-full shadow-lg"></div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-orange-500/80 px-2 py-1 rounded text-white text-xs whitespace-nowrap">
                Flare Tower Quarter
              </div>
            </div>

            {/* BLOOMING CITY */}
            <div className="absolute top-1/3 right-1/4">
              <div className="bg-green-500 w-3 h-3 rounded-full shadow-lg"></div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-green-500/80 px-2 py-1 rounded text-white text-xs whitespace-nowrap">
                Blooming City
              </div>
            </div>

            {/* QUAYSIDE TOWN */}
            <div className="absolute bottom-1/3 left-1/4">
              <div className="bg-cyan-500 w-3 h-3 rounded-full shadow-lg"></div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-cyan-500/80 px-2 py-1 rounded text-white text-xs whitespace-nowrap">
                Quayside Town
              </div>
            </div>

            {/* BASEMENT */}
            <div className="absolute bottom-1/4 right-1/3">
              <div className="bg-purple-500 w-3 h-3 rounded-full shadow-lg"></div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-purple-500/80 px-2 py-1 rounded text-white text-xs whitespace-nowrap">
                Basement
              </div>
            </div>

            {/* Casino Locations */}
            <div className="absolute top-1/2 right-1/4">
              <div className="bg-red-500 w-2 h-2 rounded-full shadow-lg"></div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-red-500/80 px-2 py-1 rounded text-white text-xs whitespace-nowrap">
                Casino
              </div>
            </div>

            {/* RPS Tournament */}
            <div className="absolute top-2/3 left-2/3">
              <div className="bg-pink-500 w-2 h-2 rounded-full shadow-lg"></div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-pink-500/80 px-2 py-1 rounded text-white text-xs whitespace-nowrap">
                RPS Tournament
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-4 bg-black/50 rounded-lg p-4">
            <h3 className="text-white font-medium mb-3">Legend</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-white/80">Current Location</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-white/80">Main Districts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-white/80">Shopping Areas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-white/80">Gaming Zones</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-4 flex gap-3">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-medium transition-colors">
              Warp to Location
            </button>
            <button className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded text-white font-medium transition-colors">
              Set Waypoint
            </button>
            <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-white font-medium transition-colors">
              Share Location
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
