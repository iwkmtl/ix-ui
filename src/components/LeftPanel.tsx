'use client'

import { useState, useRef, useEffect } from 'react'
import { 
  ChatBubbleLeftRightIcon,
  UserIcon,
  HandRaisedIcon,
  UserPlusIcon,
  XMarkIcon,
  MinusIcon
} from '@heroicons/react/24/outline'

interface Position {
  x: number
  y: number
}

export default function LeftPanel() {
  const [activeChat, setActiveChat] = useState<'local' | 'group' | 'world' | 'ai'>('local')
  const [isOpen, setIsOpen] = useState(true)
  const [isMinimized, setIsMinimized] = useState(false)
  const [position, setPosition] = useState<Position>({ x: 16, y: 80 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState<Position>({ x: 0, y: 0 })
  const panelRef = useRef<HTMLDivElement>(null)
  const [messages] = useState([
    { type: 'local', user: 'IWK', message: 'hello' },
    { type: 'local', user: 'IWK', message: 'xin chao' },
    { type: 'local', user: 'IWK', message: 'Paul can you see my message?' },
    { type: 'local', user: 'Thansukii', message: 'asan warp?' },
    { type: 'local', user: 'alyoontti', message: 'SALOWER LEFT BOBO' },
    { type: 'local', user: 'ThongNO', message: 'Hello guys' },
    { type: 'group', user: 'TeamLeader', message: 'Everyone ready for the raid?' },
    { type: 'group', user: 'Player1', message: 'Yes, let\'s go!' },
    { type: 'group', user: 'Player2', message: 'Waiting at the portal' },
    { type: 'group', user: 'TeamLeader', message: 'Meet at FLARE TOWER QUARTER in 5 minutes' },
    { type: 'world', user: 'Cna', message: 'New to Rock-Paper-Scissors in INFAXIA? Master the basics, rule the arena! Watch this quick tutorial on how to play RPS inside the metaverse.' },
    { type: 'world', user: 'Cna', message: '' },
    { type: 'ai', user: 'InfaXia AI', message: 'Hello! I\'m your AI assistant in the InfaXia metaverse. How can I help you today?' },
    { type: 'ai', user: 'InfaXia AI', message: 'I can help you with navigation, game rules, space management, and answer questions about the metaverse.' },
    { type: 'ai', user: 'You', message: 'How do I start playing games?' },
    { type: 'ai', user: 'InfaXia AI', message: 'You can access games through the Games dropdown in the header. Try MCCBET for casino games, or RPS for Rock Paper Scissors!' }
  ])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newX = e.clientX - dragStart.x
        const newY = e.clientY - dragStart.y
        
        // Constrain to viewport boundaries
        const maxX = window.innerWidth - 320 // 320px is the panel width
        const maxY = window.innerHeight - 100 // Leave some space at bottom
        
        setPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY))
        })
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, dragStart])

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    })
  }

  if (!isOpen) {
    return (
      <button
        className="fixed left-4 top-20 z-50 bg-black/50 backdrop-blur-sm rounded-lg p-2 text-white hover:bg-black/70 transition-colors"
        onClick={() => setIsOpen(true)}
      >
        <ChatBubbleLeftRightIcon className="w-5 h-5" />
      </button>
    )
  }

  return (
    <div 
      ref={panelRef}
      className="fixed w-80 z-40 select-none"
      style={{ left: position.x, top: position.y }}
    >
      {/* Title Bar with Drag Handle */}
      <div 
        className="bg-black/60 backdrop-blur-sm rounded-t-lg p-2 flex justify-between items-center cursor-move select-none border border-white/20"
        onMouseDown={handleMouseDown}
        style={{ userSelect: 'none' }}
      >
        <div className="flex items-center gap-2 pointer-events-none">
          <ChatBubbleLeftRightIcon className="w-4 h-4 text-white" />
          <span className="text-white text-sm font-medium">Chat</span>
          <div className="flex gap-1 ml-2">
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
          </div>
        </div>
        <div className="flex gap-1 pointer-events-auto">
          <button
            className="p-1 hover:bg-white/20 rounded transition-colors pointer-events-auto"
            onClick={(e) => {
              e.stopPropagation()
              setIsMinimized(!isMinimized)
            }}
          >
            <MinusIcon className="w-4 h-4 text-white" />
          </button>
          <button
            className="p-1 hover:bg-white/20 rounded transition-colors pointer-events-auto"
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(false)
            }}
          >
            <XMarkIcon className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Chat Tabs */}
          <div className="bg-black/50 backdrop-blur-sm p-2 flex gap-1">
            <button 
              className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
                activeChat === 'local' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => setActiveChat('local')}
            >
              Local
            </button>
            <button 
              className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
                activeChat === 'group' 
                  ? 'bg-green-600 text-white' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => setActiveChat('group')}
            >
              Group
            </button>
            <button 
              className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
                activeChat === 'world' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => setActiveChat('world')}
            >
              World
            </button>
            <button 
              className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
                activeChat === 'ai' 
                  ? 'bg-purple-600 text-white' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => setActiveChat('ai')}
            >
              AI
            </button>
          </div>

          {/* Chat Messages */}
          <div className="bg-black/50 backdrop-blur-sm rounded-none p-4 h-80 overflow-y-auto">
            <div className="space-y-2">
              {messages
                .filter(msg => msg.type === activeChat)
                .map((msg, index) => (
                  <div key={index} className="text-sm">
                    {msg.user && (
                      <span className={`font-medium ${
                        activeChat === 'ai' 
                          ? msg.user === 'InfaXia AI' 
                            ? 'text-purple-400' 
                            : 'text-blue-400'
                          : 'text-yellow-400'
                      }`}>
                        [{activeChat === 'local' ? 'Local' : activeChat === 'group' ? 'Group' : activeChat === 'world' ? 'World' : 'AI'}] {msg.user}
                      </span>
                    )}
                    {msg.message && (
                      <div className="text-white/90 mt-1">{msg.message}</div>
                    )}
                  </div>
                ))}
            </div>
          </div>

          {/* Chat Input */}
          <div className="bg-black/50 backdrop-blur-sm rounded-none p-3">
            <input 
              type="text" 
              placeholder={
                activeChat === 'ai' 
                  ? "Ask InfaXia AI anything..." 
                  : "Type your message..."
              }
              className={`w-full bg-black/30 border border-white/20 rounded px-3 py-2 text-white placeholder-white/50 focus:outline-none ${
                activeChat === 'ai' 
                  ? 'focus:border-purple-500' 
                  : 'focus:border-blue-500'
              }`}
            />
          </div>

          {/* Avatar & Social Controls */}
          <div className="bg-black/50 backdrop-blur-sm rounded-b-lg p-3 flex justify-between items-center">
            <div className="flex gap-2">
              <button className="p-2 hover:bg-white/20 rounded-lg transition-colors text-white" title="Avatar Controls">
                <UserIcon className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-white/20 rounded-lg transition-colors text-white" title="Motions">
                <HandRaisedIcon className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-white/20 rounded-lg transition-colors text-white" title="Invite Friend">
                <UserPlusIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="flex gap-2">
              <button className="p-1 hover:bg-white/20 rounded transition-colors">
                <span className="text-blue-400 text-lg">𝕏</span>
              </button>
              <button className="p-1 hover:bg-white/20 rounded transition-colors">
                <span className="text-blue-600 text-lg">f</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}