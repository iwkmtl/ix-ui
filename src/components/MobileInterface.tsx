'use client'

import { useState } from 'react'
import MetaverseScene from './MetaverseScene'
import {
  HomeIcon,
  MapIcon,
  CurrencyDollarIcon,
  PuzzlePieceIcon,
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  UserIcon,
  Cog6ToothIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'

export default function MobileInterface() {
  const [activeTab, setActiveTab] = useState<'home' | 'map' | 'chat' | 'wallet' | 'games' | 'menu'>('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [chatType, setChatType] = useState<'friend' | 'world' | 'ai'>('friend')
  const [walletType, setWalletType] = useState<'deposit' | 'withdraw' | 'transfer'>('deposit')

  return (
    <div className="h-screen w-screen flex flex-col bg-black overflow-hidden">
      {/* Mobile Header */}
      <header className="bg-black/90 backdrop-blur-sm border-b border-white/10 px-4 py-3 landscape:py-2 flex items-center justify-between z-50">
        <button
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(true)}
        >
          <Bars3Icon className="w-6 h-6 text-white" />
        </button>

        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          InfaXia
        </h1>

        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors relative landscape:hidden">
          <BellIcon className="w-6 h-6 text-white" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Placeholder for landscape mode to maintain layout */}
        <div className="w-10 h-10 portrait:hidden"></div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative">
        {activeTab === 'chat' ? (
          // Chat Interface
          <div className="h-full flex flex-col bg-gradient-to-b from-gray-900 to-black">
            {/* Chat Type Selector */}
            <div className="bg-black/90 backdrop-blur-sm border-b border-white/10 px-4 py-3 landscape:py-2">
              <div className="flex items-center gap-2 mb-3">
                <h2 className="flex-1 text-white font-bold text-lg">Chat</h2>
                <button
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors text-white"
                  onClick={() => setActiveTab('home')}
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>
              <div className="flex gap-2">
                <button
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                    chatType === 'friend'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                  onClick={() => setChatType('friend')}
                >
                  Friend
                </button>
                <button
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                    chatType === 'world'
                      ? 'bg-green-600 text-white'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                  onClick={() => setChatType('world')}
                >
                  World
                </button>
                <button
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                    chatType === 'ai'
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                  onClick={() => setChatType('ai')}
                >
                  AI Chat
                </button>
              </div>
            </div>

            {/* Chat Content Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {chatType === 'friend' && (
                <>
                  <p className="text-center text-white/50 text-sm mb-4">Friend Chat</p>
                  <div className="bg-blue-900/30 rounded-lg p-3 max-w-[80%]">
                    <p className="text-white text-sm">Hey! How are you?</p>
                    <p className="text-white/50 text-xs mt-1">Friend 1 • 2m ago</p>
                  </div>
                </>
              )}

              {chatType === 'world' && (
                <>
                  <p className="text-center text-white/50 text-sm mb-4">World Chat</p>
                  <div className="bg-green-900/30 rounded-lg p-3 max-w-[80%]">
                    <p className="text-white text-sm">Welcome to FLARE TOWER!</p>
                    <p className="text-white/50 text-xs mt-1">Player123 • 5m ago</p>
                  </div>
                </>
              )}

              {chatType === 'ai' && (
                <>
                  <p className="text-center text-white/50 text-sm mb-4">AI Chat Assistant</p>
                  <div className="bg-purple-900/30 rounded-lg p-3 max-w-[80%]">
                    <p className="text-white text-sm">Hello! How can I help you today?</p>
                    <p className="text-white/50 text-xs mt-1">InfaXia AI • Just now</p>
                  </div>
                </>
              )}
            </div>

            {/* Chat Input */}
            <div className="bg-black/90 backdrop-blur-sm border-t border-white/10 p-4 landscape:p-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder={`Message ${chatType === 'friend' ? 'friends' : chatType === 'world' ? 'everyone' : 'AI'}...`}
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2 text-white font-medium transition-colors">
                  Send
                </button>
              </div>
            </div>
          </div>
        ) : activeTab === 'wallet' ? (
          // Wallet Interface
          <div className="h-full flex flex-col bg-gradient-to-b from-yellow-900 to-black">
            {/* Wallet Type Selector */}
            <div className="bg-black/90 backdrop-blur-sm border-b border-white/10 px-4 py-3 landscape:py-2">
              <div className="flex items-center gap-2 mb-3">
                <h2 className="flex-1 text-white font-bold text-lg">IX Wallet</h2>
                <button
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors text-white"
                  onClick={() => setActiveTab('home')}
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>
              <div className="flex gap-2">
                <button
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                    walletType === 'deposit'
                      ? 'bg-green-600 text-white'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                  onClick={() => setWalletType('deposit')}
                >
                  Deposit
                </button>
                <button
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                    walletType === 'withdraw'
                      ? 'bg-red-600 text-white'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                  onClick={() => setWalletType('withdraw')}
                >
                  Withdraw
                </button>
                <button
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                    walletType === 'transfer'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                  onClick={() => setWalletType('transfer')}
                >
                  Transfer
                </button>
              </div>
            </div>

            {/* Wallet Content */}
            <div className="flex-1 overflow-y-auto p-4">
              {/* Balance Display */}
              <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 border border-yellow-500/30 rounded-xl p-6 landscape:p-4 mb-6 landscape:mb-4">
                <p className="text-white/70 text-sm mb-2">Total Balance</p>
                <p className="text-white text-3xl landscape:text-2xl font-bold mb-4 landscape:mb-2">1,234.56 IX</p>
                <div className="flex gap-4 text-sm">
                  <div>
                    <p className="text-white/70">Available</p>
                    <p className="text-white font-semibold">1,200.00 IX</p>
                  </div>
                  <div>
                    <p className="text-white/70">Locked</p>
                    <p className="text-white font-semibold">34.56 IX</p>
                  </div>
                </div>
              </div>

              {/* Transaction Form */}
              <div className="space-y-4 landscape:space-y-2">
                {walletType === 'deposit' && (
                  <>
                    <h3 className="text-white font-semibold mb-4">Deposit Funds</h3>
                    <div>
                      <label className="text-white/70 text-sm mb-2 block">Amount</label>
                      <input
                        type="number"
                        placeholder="Enter amount"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label className="text-white/70 text-sm mb-2 block">Payment Method</label>
                      <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500">
                        <option>Credit Card</option>
                        <option>Bank Transfer</option>
                        <option>Crypto</option>
                      </select>
                    </div>
                    <button className="w-full bg-green-600 hover:bg-green-700 rounded-lg px-4 py-3 text-white font-medium transition-colors">
                      Deposit
                    </button>
                  </>
                )}

                {walletType === 'withdraw' && (
                  <>
                    <h3 className="text-white font-semibold mb-4">Withdraw Funds</h3>
                    <div>
                      <label className="text-white/70 text-sm mb-2 block">Amount</label>
                      <input
                        type="number"
                        placeholder="Enter amount"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label className="text-white/70 text-sm mb-2 block">Destination</label>
                      <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500">
                        <option>Bank Account</option>
                        <option>Crypto Wallet</option>
                      </select>
                    </div>
                    <button className="w-full bg-red-600 hover:bg-red-700 rounded-lg px-4 py-3 text-white font-medium transition-colors">
                      Withdraw
                    </button>
                  </>
                )}

                {walletType === 'transfer' && (
                  <>
                    <h3 className="text-white font-semibold mb-4">Transfer to User</h3>
                    <div>
                      <label className="text-white/70 text-sm mb-2 block">Recipient Username</label>
                      <input
                        type="text"
                        placeholder="Enter username"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-white/70 text-sm mb-2 block">Amount</label>
                      <input
                        type="number"
                        placeholder="Enter amount"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-white/70 text-sm mb-2 block">Note (Optional)</label>
                      <input
                        type="text"
                        placeholder="Add a message"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-3 text-white font-medium transition-colors">
                      Transfer
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ) : (
          // 3D Space (default view)
          <>
            <MetaverseScene />

            {/* Overlay Info */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
              <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 pointer-events-auto">
                <p className="text-white text-xs">SPACE 001</p>
                <p className="text-white/70 text-xs">FLARE TOWER QUARTER</p>
              </div>

              <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 pointer-events-auto">
                <p className="text-white text-xs font-mono">00:12:34</p>
              </div>
            </div>
          </>
        )}
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="bg-black/95 backdrop-blur-sm border-t border-white/10 px-1 py-2 landscape:py-1 flex items-center justify-around z-50">
        {/* Portrait mode - Show all buttons */}
        <button
          className={`flex flex-col items-center gap-1 px-2 py-2 landscape:py-1 rounded-lg transition-colors ${
            activeTab === 'home' ? 'text-blue-400 bg-blue-400/10' : 'text-white/70'
          }`}
          onClick={() => setActiveTab('home')}
        >
          <HomeIcon className="w-5 h-5 landscape:w-5 landscape:h-5" />
          <span className="text-[10px] landscape:hidden">Home</span>
        </button>

        <button
          className={`flex flex-col portrait:flex items-center gap-1 px-2 py-2 landscape:py-1 rounded-lg transition-colors landscape:hidden ${
            activeTab === 'map' ? 'text-blue-400 bg-blue-400/10' : 'text-white/70'
          }`}
          onClick={() => setActiveTab('map')}
        >
          <MapIcon className="w-5 h-5 landscape:w-5 landscape:h-5" />
          <span className="text-[10px] landscape:hidden">Map</span>
        </button>

        <button
          className={`flex flex-col items-center gap-1 px-2 py-2 landscape:py-1 rounded-lg transition-colors ${
            activeTab === 'chat' ? 'text-blue-400 bg-blue-400/10' : 'text-white/70'
          }`}
          onClick={() => setActiveTab('chat')}
        >
          <ChatBubbleLeftRightIcon className="w-5 h-5 landscape:w-5 landscape:h-5" />
          <span className="text-[10px] landscape:hidden">Chat</span>
        </button>

        <button
          className={`flex flex-col items-center gap-1 px-2 py-2 landscape:py-1 rounded-lg transition-colors ${
            activeTab === 'wallet' ? 'text-blue-400 bg-blue-400/10' : 'text-white/70'
          }`}
          onClick={() => setActiveTab('wallet')}
        >
          <CurrencyDollarIcon className="w-5 h-5 landscape:w-5 landscape:h-5" />
          <span className="text-[10px] landscape:hidden">Wallet</span>
        </button>

        <button
          className={`flex flex-col portrait:flex items-center gap-1 px-2 py-2 landscape:py-1 rounded-lg transition-colors landscape:hidden ${
            activeTab === 'games' ? 'text-blue-400 bg-blue-400/10' : 'text-white/70'
          }`}
          onClick={() => setActiveTab('games')}
        >
          <PuzzlePieceIcon className="w-5 h-5 landscape:w-5 landscape:h-5" />
          <span className="text-[10px] landscape:hidden">Games</span>
        </button>

        <button
          className={`flex flex-col items-center gap-1 px-2 py-2 landscape:py-1 rounded-lg transition-colors ${
            activeTab === 'menu' ? 'text-blue-400 bg-blue-400/10' : 'text-white/70'
          }`}
          onClick={() => {
            setActiveTab('menu')
            setIsMenuOpen(true)
          }}
        >
          <Bars3Icon className="w-5 h-5 landscape:w-5 landscape:h-5" />
          <span className="text-[10px] landscape:hidden">Menu</span>
        </button>
      </nav>

      {/* Slide-out Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 z-[100]"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="fixed left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-black/95 backdrop-blur-sm border-r border-white/20 z-[101] overflow-y-auto">
            <div className="p-6">
              {/* Menu Header */}
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-white text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Menu
                </h2>
                <button
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              {/* User Profile */}
              <div className="mb-8 p-4 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <UserIcon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Player Name</h3>
                    <p className="text-white/70 text-sm">Level 25 Explorer</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 text-center py-2 bg-black/30 rounded">
                    <p className="text-white font-bold">42</p>
                    <p className="text-white/70 text-xs">Spaces</p>
                  </div>
                  <div className="flex-1 text-center py-2 bg-black/30 rounded">
                    <p className="text-white font-bold">156</p>
                    <p className="text-white/70 text-xs">Games</p>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="space-y-2">
                <button className="w-full flex items-center gap-4 p-4 hover:bg-white/10 rounded-lg transition-colors text-left">
                  <UserIcon className="w-6 h-6 text-blue-400" />
                  <span className="text-white">Profile</span>
                </button>

                <button className="w-full flex items-center gap-4 p-4 hover:bg-white/10 rounded-lg transition-colors text-left">
                  <ChatBubbleLeftRightIcon className="w-6 h-6 text-green-400" />
                  <span className="text-white">Chat</span>
                </button>

                <button className="w-full flex items-center gap-4 p-4 hover:bg-white/10 rounded-lg transition-colors text-left">
                  <Cog6ToothIcon className="w-6 h-6 text-gray-400" />
                  <span className="text-white">Settings</span>
                </button>
              </div>

              {/* Version */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/50 text-sm text-center">VER. 0.0.0.7</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
