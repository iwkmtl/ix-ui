'use client'

import { useState, useEffect, useRef } from 'react'
import { 
  MapIcon, 
  CurrencyDollarIcon, 
  InformationCircleIcon,
  ShoppingCartIcon,
  BellIcon,
  SpeakerXMarkIcon,
  SpeakerWaveIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'

interface HeaderNavigationProps {
  onFeatureSelect: (feature: string | null) => void
  onNotificationClick: () => void
}

export default function HeaderNavigation({ onFeatureSelect, onNotificationClick }: HeaderNavigationProps) {
  const [isMuted, setIsMuted] = useState(false)
  const [notifications, setNotifications] = useState(9)
  const [isGamesDropdownOpen, setIsGamesDropdownOpen] = useState(false)
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false)
  const [isWalletDropdownOpen, setIsWalletDropdownOpen] = useState(false)
  const [isSpaceDropdownOpen, setIsSpaceDropdownOpen] = useState(false)
  const [isWarpDropdownOpen, setIsWarpDropdownOpen] = useState(false)
  const gamesDropdownRef = useRef<HTMLDivElement>(null)
  const shopDropdownRef = useRef<HTMLDivElement>(null)
  const walletDropdownRef = useRef<HTMLDivElement>(null)
  const spaceDropdownRef = useRef<HTMLDivElement>(null)
  const warpDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (gamesDropdownRef.current && !gamesDropdownRef.current.contains(event.target as Node)) {
        setIsGamesDropdownOpen(false)
      }
      if (shopDropdownRef.current && !shopDropdownRef.current.contains(event.target as Node)) {
        setIsShopDropdownOpen(false)
      }
      if (walletDropdownRef.current && !walletDropdownRef.current.contains(event.target as Node)) {
        setIsWalletDropdownOpen(false)
      }
      if (spaceDropdownRef.current && !spaceDropdownRef.current.contains(event.target as Node)) {
        setIsSpaceDropdownOpen(false)
      }
      if (warpDropdownRef.current && !warpDropdownRef.current.contains(event.target as Node)) {
        setIsWarpDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-4">
      <div className="flex justify-between items-center">
        {/* Left Section - Space Controls */}
        <div className="flex items-center gap-4">
          {/* Space Actions */}
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2 flex items-center gap-2">
            {/* Minimap */}
            <button 
              className="px-3 py-2 hover:bg-white/20 rounded-lg transition-colors text-white text-sm font-medium"
              onClick={() => onFeatureSelect('minimap')}
              title="Minimap - View map of current space and navigate"
            >
              MAP
            </button>
            
            {/* SPOO1 Dropdown */}
            <div ref={spaceDropdownRef} className="relative">
              <button 
                className="flex items-center gap-1 bg-blue-600 rounded-full px-3 py-1 text-white text-sm font-bold hover:bg-blue-700 transition-colors"
                onClick={() => setIsSpaceDropdownOpen(!isSpaceDropdownOpen)}
                title="Space 001 - Current space identifier and management options"
              >
                <span>Space 001</span>
                <ChevronDownIcon className={`w-3 h-3 transition-transform ${isSpaceDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isSpaceDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-black/80 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg z-50">
                  <div className="py-2">
                    <button 
                      className="w-full px-4 py-2 text-left text-white hover:bg-white/20 transition-colors text-sm"
                      onClick={() => {
                        onFeatureSelect('invite-space')
                        setIsSpaceDropdownOpen(false)
                      }}
                    >
                      Invite Space
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Warp Dropdown */}
            <div ref={warpDropdownRef} className="relative">
              <button 
                className="flex items-center gap-1 px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm transition-colors"
                onClick={() => setIsWarpDropdownOpen(!isWarpDropdownOpen)}
                title="Warp - Teleport to different locations in the metaverse"
              >
                <span>Warp</span>
                <ChevronDownIcon className={`w-3 h-3 transition-transform ${isWarpDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isWarpDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg z-50">
                  <div className="p-4">
                    <div className="text-center text-white font-bold text-lg mb-4">WHERE NEXT?</div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {/* Frequently Used Destinations */}
                      <div>
                        <h3 className="text-white/70 text-xs font-medium mb-2 uppercase">Frequently Used Destinations</h3>
                        <div className="space-y-1">
                          <button className="w-full text-left p-2 rounded hover:bg-white/10 text-white text-sm transition-colors">
                            Start Position
                          </button>
                          <button className="w-full text-left p-2 rounded hover:bg-white/10 text-white text-sm transition-colors">
                            FLARE TOWER QUARTER<br />
                            <span className="text-white/60 text-xs">Flare Hall</span>
                          </button>
                          <button className="w-full text-left p-2 rounded hover:bg-white/10 text-white text-sm transition-colors">
                            FLARE TOWER QUARTER<br />
                            <span className="text-white/60 text-xs">Flare Tower</span>
                          </button>
                          <button className="w-full text-left p-2 rounded hover:bg-white/10 text-white text-sm transition-colors">
                            BLOOMING CITY<br />
                            <span className="text-white/60 text-xs">NFT Shop</span>
                          </button>
                          <button className="w-full text-left p-2 rounded hover:bg-white/10 text-white text-sm transition-colors bg-purple-600/20">
                            RPS TOURNAMENT
                          </button>
                          <button className="w-full text-left p-2 rounded hover:bg-white/10 text-white text-sm transition-colors">
                            MCC Poker
                          </button>
                          <button className="w-full text-left p-2 rounded hover:bg-white/10 text-white text-sm transition-colors">
                            Online Casino Games on<br />
                            <span className="text-white/60 text-xs">Each Floor of Flare Tower</span>
                          </button>
                        </div>
                      </div>

                      {/* Locations */}
                      <div>
                        <h3 className="text-white/70 text-xs font-medium mb-2 uppercase">Locations</h3>
                        <div className="space-y-1">
                          <button className="w-full text-left p-2 rounded hover:bg-white/10 text-white text-sm transition-colors flex items-center justify-between">
                            FLARE TOWER QUARTER
                            <span className="text-white/60">▶</span>
                          </button>
                          <button className="w-full text-left p-2 rounded hover:bg-white/10 text-white text-sm transition-colors flex items-center justify-between">
                            BLOOMING CITY
                            <span className="text-white/60">▶</span>
                          </button>
                          <button className="w-full text-left p-2 rounded hover:bg-white/10 text-white text-sm transition-colors flex items-center justify-between">
                            QUAYSIDE TOWN
                            <span className="text-white/60">▶</span>
                          </button>
                          <button className="w-full text-left p-2 rounded hover:bg-white/10 text-white text-sm transition-colors flex items-center justify-between">
                            BASEMENT
                            <span className="text-white/60">▶</span>
                          </button>
                        </div>

                        <h3 className="text-white/70 text-xs font-medium mb-2 mt-4 uppercase">Online Casino Game Providers</h3>
                        <div className="space-y-1">
                          <button className="w-full text-left p-2 rounded hover:bg-white/10 text-white text-sm transition-colors">
                            Company 1
                          </button>
                          <button className="w-full text-left p-2 rounded hover:bg-white/10 text-white text-sm transition-colors">
                            Company 2
                          </button>
                          <button className="w-full text-left p-2 rounded hover:bg-white/10 text-white text-sm transition-colors">
                            Company 3
                          </button>
                        </div>

                        <h3 className="text-white/70 text-xs font-medium mb-2 mt-4 uppercase">Online Casino Games</h3>
                        <div className="space-y-1">
                          <button className="w-full text-left p-2 rounded hover:bg-white/10 text-white text-sm transition-colors flex items-center justify-between">
                            MCC Bet
                            <span className="text-white/60">▶</span>
                          </button>
                          <button className="w-full text-left p-2 rounded hover:bg-white/10 text-white text-sm transition-colors">
                            MCC RSP Game
                          </button>
                          <button className="w-full text-left p-2 rounded hover:bg-white/10 text-white text-sm transition-colors">
                            MCC Poker
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>


        {/* Right Section - Economy & Utils */}
        <div className="flex items-center gap-4">
          {/* InfaXia Wallet Dropdown */}
          <div ref={walletDropdownRef} className="relative bg-black/50 backdrop-blur-sm rounded-lg p-2">
            <button 
              className="flex items-center gap-2 hover:bg-white/20 rounded-lg transition-colors text-white px-2 py-1"
              onClick={() => setIsWalletDropdownOpen(!isWalletDropdownOpen)}
            >
              <div className="text-lg font-bold">49.75</div>
              <span className="text-white/70 text-xs">IX Wallet</span>
              <ChevronDownIcon className={`w-4 h-4 transition-transform ${isWalletDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Dropdown Menu */}
            {isWalletDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-black/80 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg z-50">
                <div className="py-2">
                  <button 
                    className="w-full px-4 py-2 text-left text-white hover:bg-white/20 transition-colors text-sm"
                    onClick={() => {
                      onFeatureSelect('deposit')
                      setIsWalletDropdownOpen(false)
                    }}
                  >
                    DEPOSIT
                  </button>
                  <button 
                    className="w-full px-4 py-2 text-left text-white hover:bg-white/20 transition-colors text-sm"
                    onClick={() => {
                      onFeatureSelect('exchange')
                      setIsWalletDropdownOpen(false)
                    }}
                  >
                    EXCHANGE
                  </button>
                  <button 
                    className="w-full px-4 py-2 text-left text-white hover:bg-white/20 transition-colors text-sm"
                    onClick={() => {
                      onFeatureSelect('withdraw')
                      setIsWalletDropdownOpen(false)
                    }}
                  >
                    WITHDRAW
                  </button>
                  <button 
                    className="w-full px-4 py-2 text-left text-white hover:bg-white/20 transition-colors text-sm"
                    onClick={() => {
                      onFeatureSelect('transfer')
                      setIsWalletDropdownOpen(false)
                    }}
                  >
                    TRANSFER
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Shop Dropdown */}
          <div ref={shopDropdownRef} className="relative bg-black/50 backdrop-blur-sm rounded-lg p-2">
            <button 
              className="flex items-center gap-2 px-3 py-1 hover:bg-white/20 rounded-lg transition-colors text-white"
              onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
            >
              <ShoppingCartIcon className="w-5 h-5" />
              <span className="text-sm font-medium">Shop</span>
              <ChevronDownIcon className={`w-4 h-4 transition-transform ${isShopDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Dropdown Menu */}
            {isShopDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-black/80 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg z-50">
                <div className="py-2">
                  <button 
                    className="w-full px-4 py-2 text-left text-white hover:bg-white/20 transition-colors text-sm"
                    onClick={() => {
                      onFeatureSelect('marketplace')
                      setIsShopDropdownOpen(false)
                    }}
                  >
                    InfaXia Market Place
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Games Dropdown */}
          <div ref={gamesDropdownRef} className="relative bg-black/50 backdrop-blur-sm rounded-lg p-2">
            <button 
              className="flex items-center gap-2 px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-white text-sm font-medium transition-colors"
              onClick={() => setIsGamesDropdownOpen(!isGamesDropdownOpen)}
            >
              <span>Games</span>
              <ChevronDownIcon className={`w-4 h-4 transition-transform ${isGamesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Dropdown Menu */}
            {isGamesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-black/80 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg z-50">
                <div className="py-2">
                  <button 
                    className="w-full px-4 py-2 text-left text-white hover:bg-white/20 transition-colors text-sm"
                    onClick={() => {
                      onFeatureSelect('mccbet')
                      setIsGamesDropdownOpen(false)
                    }}
                  >
                    MCCBET Lobby
                  </button>
                  <button 
                    className="w-full px-4 py-2 text-left text-white hover:bg-white/20 transition-colors text-sm"
                    onClick={() => {
                      onFeatureSelect('poker')
                      setIsGamesDropdownOpen(false)
                    }}
                  >
                    Poker
                  </button>
                  <button 
                    className="w-full px-4 py-2 text-left text-white hover:bg-white/20 transition-colors text-sm"
                    onClick={() => {
                      onFeatureSelect('rps')
                      setIsGamesDropdownOpen(false)
                    }}
                  >
                    RPS (Rock Paper Scissors)
                  </button>
                  <button 
                    className="w-full px-4 py-2 text-left text-white hover:bg-white/20 transition-colors text-sm"
                    onClick={() => {
                      onFeatureSelect('baccarat')
                      setIsGamesDropdownOpen(false)
                    }}
                  >
                    Baccarat
                  </button>
                  <button 
                    className="w-full px-4 py-2 text-left text-white hover:bg-white/20 transition-colors text-sm"
                    onClick={() => {
                      onFeatureSelect('car-race')
                      setIsGamesDropdownOpen(false)
                    }}
                  >
                    Car Race
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Notifications & Mute */}
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2 flex items-center gap-2">
            <button 
              className="relative p-2 hover:bg-white/20 rounded-lg transition-colors text-white"
              onClick={onNotificationClick}
            >
              <BellIcon className="w-5 h-5" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>
            <button 
              className="p-2 hover:bg-white/20 rounded-lg transition-colors text-white"
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? <SpeakerXMarkIcon className="w-5 h-5" /> : <SpeakerWaveIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
