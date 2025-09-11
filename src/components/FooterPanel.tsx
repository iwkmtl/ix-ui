'use client'

import { useState } from 'react'
import { 
  Cog6ToothIcon,
  UserIcon,
  ArchiveBoxIcon,
  ClockIcon,
  TrophyIcon,
  XMarkIcon,
  VolumeXIcon,
  SpeakerWaveIcon,
  ComputerDesktopIcon,
  CogIcon,
  StarIcon,
  GiftIcon,
  ShieldCheckIcon,
  MapIcon,
  ChatBubbleLeftRightIcon,
  BellIcon,
  CurrencyDollarIcon,
  ShoppingBagIcon,
  PuzzlePieceIcon,
  WrenchScrewdriverIcon,
  UserPlusIcon,
  ArrowRightOnRectangleIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

export default function FooterPanel() {
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false)
  const [isSettingsDrawerOpen, setIsSettingsDrawerOpen] = useState(false)
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'settings' | 'profile' | 'inventory' | 'history' | 'ranking'>('settings')
  return (
    <footer className="absolute bottom-4 left-4 right-4 z-50">
      <div className="flex items-center justify-between">
        {/* Left Section - Logo and Settings */}
        <div className="flex items-center gap-4">
          {/* InfaXia Logo */}
          <button 
            className="bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-black/70 transition-colors cursor-pointer"
            onClick={() => setIsMainMenuOpen(true)}
            title="Open InfaXia Main Menu"
          >
            <span className="text-white font-bold text-lg bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              InfaXia
            </span>
          </button>

          {/* Account Functions */}
          <div className="relative">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2 flex items-center gap-2">
            <button 
              className="p-2 hover:bg-white/20 rounded-lg transition-colors text-white" 
              title="Settings Menu"
              onClick={() => setIsSettingsMenuOpen(!isSettingsMenuOpen)}
            >
              <Cog6ToothIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Settings Menu Dropdown */}
          {isSettingsMenuOpen && (
            <>
              {/* Backdrop */}
              <div 
                className="fixed inset-0 z-[60]"
                onClick={() => setIsSettingsMenuOpen(false)}
              />
              
              {/* Menu */}
              <div className="absolute bottom-0 left-full ml-2 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg p-2 min-w-48 z-[61]">
                <button 
                  className="w-full flex items-center gap-3 p-3 hover:bg-white/20 rounded-lg transition-colors text-white text-left"
                  onClick={() => {
                    setActiveTab('settings')
                    setIsSettingsDrawerOpen(true)
                    setIsSettingsMenuOpen(false)
                  }}
                >
                  <Cog6ToothIcon className="w-5 h-5" />
                  <span>Settings</span>
                </button>
                
                <button 
                  className="w-full flex items-center gap-3 p-3 hover:bg-white/20 rounded-lg transition-colors text-white text-left"
                  onClick={() => {
                    setActiveTab('profile')
                    setIsSettingsDrawerOpen(true)
                    setIsSettingsMenuOpen(false)
                  }}
                >
                  <UserIcon className="w-5 h-5" />
                  <span>Profile</span>
                </button>
                
                <button 
                  className="w-full flex items-center gap-3 p-3 hover:bg-white/20 rounded-lg transition-colors text-white text-left"
                  onClick={() => {
                    setActiveTab('inventory')
                    setIsSettingsDrawerOpen(true)
                    setIsSettingsMenuOpen(false)
                  }}
                >
                  <ArchiveBoxIcon className="w-5 h-5" />
                  <span>Inventory</span>
                </button>
                
                <button 
                  className="w-full flex items-center gap-3 p-3 hover:bg-white/20 rounded-lg transition-colors text-white text-left"
                  onClick={() => {
                    setActiveTab('history')
                    setIsSettingsDrawerOpen(true)
                    setIsSettingsMenuOpen(false)
                  }}
                >
                  <ClockIcon className="w-5 h-5" />
                  <span>History</span>
                </button>
                
                <button 
                  className="w-full flex items-center gap-3 p-3 hover:bg-white/20 rounded-lg transition-colors text-white text-left"
                  onClick={() => {
                    setActiveTab('ranking')
                    setIsSettingsDrawerOpen(true)
                    setIsSettingsMenuOpen(false)
                  }}
                >
                  <TrophyIcon className="w-5 h-5" />
                  <span>Ranking</span>
                </button>
              </div>
            </>
          )}
          </div>
        </div>

        {/* Right Section - Version Info */}
        <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
          <span className="text-white/70 text-sm">VER. 0.0.0.7</span>
        </div>
      </div>

      {/* Settings Drawer */}
      {isSettingsDrawerOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-[100]"
            onClick={() => setIsSettingsDrawerOpen(false)}
          />
          
          {/* Drawer */}
          <div className="fixed right-0 top-0 h-full w-96 bg-black/90 backdrop-blur-sm border-l border-white/20 z-[101] transform transition-transform duration-300 ease-in-out">
            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-white text-xl font-bold flex items-center gap-2">
                  {activeTab === 'settings' && <CogIcon className="w-6 h-6" />}
                  {activeTab === 'profile' && <UserIcon className="w-6 h-6" />}
                  {activeTab === 'inventory' && <ArchiveBoxIcon className="w-6 h-6" />}
                  {activeTab === 'history' && <ClockIcon className="w-6 h-6" />}
                  {activeTab === 'ranking' && <TrophyIcon className="w-6 h-6" />}
                  {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                </h2>
                <button 
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors text-white"
                  onClick={() => setIsSettingsDrawerOpen(false)}
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              {/* Tab Navigation */}
              <div className="flex gap-1 mb-6 bg-black/50 p-1 rounded-lg">
                <button
                  className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
                    activeTab === 'settings' ? 'bg-blue-600 text-white' : 'text-white/70 hover:text-white'
                  }`}
                  onClick={() => setActiveTab('settings')}
                >
                  Settings
                </button>
                <button
                  className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
                    activeTab === 'profile' ? 'bg-blue-600 text-white' : 'text-white/70 hover:text-white'
                  }`}
                  onClick={() => setActiveTab('profile')}
                >
                  Profile
                </button>
                <button
                  className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
                    activeTab === 'inventory' ? 'bg-blue-600 text-white' : 'text-white/70 hover:text-white'
                  }`}
                  onClick={() => setActiveTab('inventory')}
                >
                  Inventory
                </button>
                <button
                  className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
                    activeTab === 'history' ? 'bg-blue-600 text-white' : 'text-white/70 hover:text-white'
                  }`}
                  onClick={() => setActiveTab('history')}
                >
                  History
                </button>
                <button
                  className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
                    activeTab === 'ranking' ? 'bg-blue-600 text-white' : 'text-white/70 hover:text-white'
                  }`}
                  onClick={() => setActiveTab('ranking')}
                >
                  Ranking
                </button>
              </div>

              {/* Tab Content */}
              <div className="flex-1 overflow-y-auto">
                {activeTab === 'settings' && (
                  <div className="space-y-6">
                {/* Audio Settings */}
                <div>
                  <h3 className="text-white font-medium mb-3 flex items-center gap-2">
                    <SpeakerWaveIcon className="w-5 h-5" />
                    Audio
                  </h3>
                  <div className="space-y-3 ml-7">
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Master Volume</span>
                      <input type="range" min="0" max="100" defaultValue="75" className="w-24" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">SFX Volume</span>
                      <input type="range" min="0" max="100" defaultValue="80" className="w-24" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Music Volume</span>
                      <input type="range" min="0" max="100" defaultValue="60" className="w-24" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Voice Chat</span>
                      <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-white text-sm transition-colors">
                        Enabled
                      </button>
                    </div>
                  </div>
                </div>

                {/* Graphics Settings */}
                <div>
                  <h3 className="text-white font-medium mb-3 flex items-center gap-2">
                    <ComputerDesktopIcon className="w-5 h-5" />
                    Graphics
                  </h3>
                  <div className="space-y-3 ml-7">
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Quality</span>
                      <select className="bg-black/50 border border-white/20 rounded px-2 py-1 text-white text-sm">
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                      </select>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">FPS Limit</span>
                      <select className="bg-black/50 border border-white/20 rounded px-2 py-1 text-white text-sm">
                        <option>60 FPS</option>
                        <option>30 FPS</option>
                        <option>Unlimited</option>
                      </select>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">V-Sync</span>
                      <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm transition-colors">
                        On
                      </button>
                    </div>
                  </div>
                </div>

                {/* Privacy Settings */}
                <div>
                  <h3 className="text-white font-medium mb-3">Privacy</h3>
                  <div className="space-y-3 ml-7">
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Show Online Status</span>
                      <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-white text-sm transition-colors">
                        Public
                      </button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Allow Friend Requests</span>
                      <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-white text-sm transition-colors">
                        Yes
                      </button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Show Activity</span>
                      <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-white text-sm transition-colors">
                        Friends Only
                      </button>
                    </div>
                  </div>
                </div>

                {/* Controls */}
                <div>
                  <h3 className="text-white font-medium mb-3">Controls</h3>
                  <div className="space-y-3 ml-7">
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Mouse Sensitivity</span>
                      <input type="range" min="1" max="10" defaultValue="5" className="w-24" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Invert Y-Axis</span>
                      <button className="px-3 py-1 bg-gray-600 hover:bg-gray-700 rounded text-white text-sm transition-colors">
                        Off
                      </button>
                    </div>
                  </div>
                </div>
                  </div>
                )}

                {activeTab === 'profile' && (
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <UserIcon className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-white font-bold text-lg">Player Name</h3>
                      <p className="text-white/70">Level 25 Explorer</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-white/70">Join Date:</span>
                        <span className="text-white">Jan 15, 2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Spaces Visited:</span>
                        <span className="text-white">42</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Games Played:</span>
                        <span className="text-white">156</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'inventory' && (
                  <div className="space-y-4">
                    <h3 className="text-white font-medium">Your Items</h3>
                    <div className="grid grid-cols-3 gap-3">
                      {Array.from({length: 9}).map((_, i) => (
                        <div key={i} className="bg-black/50 border border-white/20 rounded-lg p-3 text-center">
                          <GiftIcon className="w-8 h-8 text-white/70 mx-auto mb-2" />
                          <p className="text-white/70 text-xs">Item {i + 1}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'history' && (
                  <div className="space-y-4">
                    <h3 className="text-white font-medium">Recent Activity</h3>
                    <div className="space-y-3">
                      {[
                        'Visited FLARE TOWER QUARTER',
                        'Played RPS Tournament',
                        'Joined Poker Game',
                        'Exchanged Tokens',
                        'Visited BLOOMING CITY'
                      ].map((activity, i) => (
                        <div key={i} className="flex items-center gap-3 p-2 bg-black/30 rounded">
                          <ClockIcon className="w-4 h-4 text-white/70" />
                          <span className="text-white/90 text-sm">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'ranking' && (
                  <div className="space-y-4">
                    <h3 className="text-white font-medium">Leaderboards</h3>
                    <div className="space-y-3">
                      {[
                        { rank: '#15', category: 'RPS Tournament', points: '2,450' },
                        { rank: '#8', category: 'Poker Wins', points: '1,890' },
                        { rank: '#23', category: 'Space Explorer', points: '3,200' }
                      ].map((entry, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-black/30 rounded">
                          <div className="flex items-center gap-3">
                            <TrophyIcon className="w-5 h-5 text-yellow-500" />
                            <div>
                              <p className="text-white font-medium text-sm">{entry.category}</p>
                              <p className="text-white/70 text-xs">Rank {entry.rank}</p>
                            </div>
                          </div>
                          <span className="text-white font-bold">{entry.points}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer Buttons */}
              <div className="mt-8 pt-6 border-t border-white/20 flex gap-3">
                <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-medium transition-colors">
                  Save Changes
                </button>
                <button 
                  className="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded text-white font-medium transition-colors"
                  onClick={() => setIsSettingsDrawerOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Main Menu Full Screen */}
      {isMainMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 z-[200]"
            onClick={() => setIsMainMenuOpen(false)}
          />
          
          {/* Menu Interface */}
          <div className="fixed inset-4 bg-black/95 backdrop-blur-sm border border-white/20 rounded-lg z-[201] overflow-y-auto">
            <div className="p-8">
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-white text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  InfaXia Main Menu
                </h1>
                <button 
                  className="p-3 hover:bg-white/20 rounded-lg transition-colors text-white"
                  onClick={() => setIsMainMenuOpen(false)}
                >
                  <XMarkIcon className="w-8 h-8" />
                </button>
              </div>

              {/* Menu Cards Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                
                {/* Navigation & Movement */}
                <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-500/30 rounded-xl p-6 hover:bg-blue-600/30 transition-all cursor-pointer group">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-blue-600/20 rounded-full group-hover:bg-blue-600/40 transition-colors">
                      <MapIcon className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-white font-bold text-lg">Navigation</h3>
                    <p className="text-white/70 text-sm">MAP, Space 001, Warp destinations</p>
                  </div>
                </div>

                {/* Communication */}
                <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 border border-green-500/30 rounded-xl p-6 hover:bg-green-600/30 transition-all cursor-pointer group">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-green-600/20 rounded-full group-hover:bg-green-600/40 transition-colors">
                      <ChatBubbleLeftRightIcon className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-white font-bold text-lg">Communication</h3>
                    <p className="text-white/70 text-sm">Local, Group, World, AI Chat</p>
                  </div>
                </div>

                {/* Wallet & Economy */}
                <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 border border-yellow-500/30 rounded-xl p-6 hover:bg-yellow-600/30 transition-all cursor-pointer group">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-yellow-600/20 rounded-full group-hover:bg-yellow-600/40 transition-colors">
                      <CurrencyDollarIcon className="w-8 h-8 text-yellow-400" />
                    </div>
                    <h3 className="text-white font-bold text-lg">IX Wallet</h3>
                    <p className="text-white/70 text-sm">Deposit, Exchange, Withdraw, Transfer</p>
                  </div>
                </div>

                {/* Shopping */}
                <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-500/30 rounded-xl p-6 hover:bg-purple-600/30 transition-all cursor-pointer group">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-purple-600/20 rounded-full group-hover:bg-purple-600/40 transition-colors">
                      <ShoppingBagIcon className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-white font-bold text-lg">Shop</h3>
                    <p className="text-white/70 text-sm">InfaXia Market Place</p>
                  </div>
                </div>

                {/* Games */}
                <div className="bg-gradient-to-br from-red-600/20 to-red-800/20 border border-red-500/30 rounded-xl p-6 hover:bg-red-600/30 transition-all cursor-pointer group">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-red-600/20 rounded-full group-hover:bg-red-600/40 transition-colors">
                      <PuzzlePieceIcon className="w-8 h-8 text-red-400" />
                    </div>
                    <h3 className="text-white font-bold text-lg">Games</h3>
                    <p className="text-white/70 text-sm">MCCBET Lobby, Poker, RPS, Baccarat, Car Race</p>
                  </div>
                </div>

                {/* Profile */}
                <div className="bg-gradient-to-br from-indigo-600/20 to-indigo-800/20 border border-indigo-500/30 rounded-xl p-6 hover:bg-indigo-600/30 transition-all cursor-pointer group">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-indigo-600/20 rounded-full group-hover:bg-indigo-600/40 transition-colors">
                      <UserIcon className="w-8 h-8 text-indigo-400" />
                    </div>
                    <h3 className="text-white font-bold text-lg">Profile</h3>
                    <p className="text-white/70 text-sm">Character info, stats, achievements</p>
                  </div>
                </div>

                {/* Inventory */}
                <div className="bg-gradient-to-br from-teal-600/20 to-teal-800/20 border border-teal-500/30 rounded-xl p-6 hover:bg-teal-600/30 transition-all cursor-pointer group">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-teal-600/20 rounded-full group-hover:bg-teal-600/40 transition-colors">
                      <ArchiveBoxIcon className="w-8 h-8 text-teal-400" />
                    </div>
                    <h3 className="text-white font-bold text-lg">Inventory</h3>
                    <p className="text-white/70 text-sm">Items, equipment, collectibles</p>
                  </div>
                </div>

                {/* Settings */}
                <div className="bg-gradient-to-br from-gray-600/20 to-gray-800/20 border border-gray-500/30 rounded-xl p-6 hover:bg-gray-600/30 transition-all cursor-pointer group">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-gray-600/20 rounded-full group-hover:bg-gray-600/40 transition-colors">
                      <WrenchScrewdriverIcon className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-white font-bold text-lg">Settings</h3>
                    <p className="text-white/70 text-sm">Audio, graphics, controls, privacy</p>
                  </div>
                </div>

                {/* Notifications */}
                <div className="bg-gradient-to-br from-orange-600/20 to-orange-800/20 border border-orange-500/30 rounded-xl p-6 hover:bg-orange-600/30 transition-all cursor-pointer group">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-orange-600/20 rounded-full group-hover:bg-orange-600/40 transition-colors">
                      <BellIcon className="w-8 h-8 text-orange-400" />
                    </div>
                    <h3 className="text-white font-bold text-lg">Notifications</h3>
                    <p className="text-white/70 text-sm">Alerts, messages, updates</p>
                  </div>
                </div>

                {/* Social */}
                <div className="bg-gradient-to-br from-pink-600/20 to-pink-800/20 border border-pink-500/30 rounded-xl p-6 hover:bg-pink-600/30 transition-all cursor-pointer group">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-pink-600/20 rounded-full group-hover:bg-pink-600/40 transition-colors">
                      <UserPlusIcon className="w-8 h-8 text-pink-400" />
                    </div>
                    <h3 className="text-white font-bold text-lg">Social</h3>
                    <p className="text-white/70 text-sm">Friends, invite, social media</p>
                  </div>
                </div>

                {/* History & Ranking */}
                <div className="bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 border border-emerald-500/30 rounded-xl p-6 hover:bg-emerald-600/30 transition-all cursor-pointer group">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-emerald-600/20 rounded-full group-hover:bg-emerald-600/40 transition-colors">
                      <TrophyIcon className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="text-white font-bold text-lg">Ranking</h3>
                    <p className="text-white/70 text-sm">Leaderboards, history, achievements</p>
                  </div>
                </div>

                {/* World Info */}
                <div className="bg-gradient-to-br from-cyan-600/20 to-cyan-800/20 border border-cyan-500/30 rounded-xl p-6 hover:bg-cyan-600/30 transition-all cursor-pointer group">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-cyan-600/20 rounded-full group-hover:bg-cyan-600/40 transition-colors">
                      <GlobeAltIcon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-white font-bold text-lg">World Info</h3>
                    <p className="text-white/70 text-sm">Space info, tutorials, help</p>
                  </div>
                </div>

              </div>

              {/* Quick Actions */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <h2 className="text-white text-xl font-bold mb-4">Quick Actions</h2>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors">
                    Quick Warp
                  </button>
                  <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white font-medium transition-colors">
                    Open Chat
                  </button>
                  <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition-colors">
                    View Wallet
                  </button>
                  <button className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-medium transition-colors">
                    Play Games
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </footer>
  )
}
