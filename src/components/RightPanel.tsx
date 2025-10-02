'use client'

import { useState } from 'react'
import { 
  QuestionMarkCircleIcon,
  ChatBubbleBottomCenterTextIcon,
  LifebuoyIcon,
  ExclamationTriangleIcon,
  BellIcon,
  XMarkIcon,
  MinusIcon
} from '@heroicons/react/24/outline'

interface RightPanelProps {
  isNotificationOpen: boolean
  setIsNotificationOpen: (open: boolean) => void
}

export default function RightPanel({ isNotificationOpen, setIsNotificationOpen }: RightPanelProps) {
  const [supportOpen, setSupportOpen] = useState(true)
  const [notificationMinimized, setNotificationMinimized] = useState(false)
  const [supportMinimized, setSupportMinimized] = useState(false)
  const [notifications] = useState([
    { type: 'event', message: 'User join group' },
    { type: 'event', message: 'User join group' },
    { type: 'friend', message: 'Friend request accepted' },
    { type: 'friend', message: 'Friend request accepted' },
    { type: 'event', message: 'User join group' },
    { type: 'event', message: 'User join group' },
    { type: 'event', message: 'User join group' },
    { type: 'invite', message: 'Invite group' },
    { type: 'event', message: 'User join group' }
  ])

  return (
    <div className="fixed right-0 top-20 w-80 z-40 space-y-4 p-4">
      {/* Notification Toggle Button */}
      {!isNotificationOpen && (
        <button
          className="bg-black/50 backdrop-blur-sm rounded-lg p-2 text-white hover:bg-black/70 transition-colors flex items-center gap-2 ml-auto"
          onClick={() => setIsNotificationOpen(true)}
        >
          <BellIcon className="w-5 h-5" />
          <span className="text-sm">Notifications</span>
        </button>
      )}

      {/* Notifications Panel */}
      {isNotificationOpen && (
        <div className="bg-black/50 backdrop-blur-sm rounded-lg">
          <div className="p-3 border-b border-white/20 flex justify-between items-center">
            <div className="flex gap-4">
              <button className="px-3 py-1 bg-blue-600 rounded text-white text-sm font-medium">
                Event
              </button>
              <button className="px-3 py-1 text-white/70 hover:text-white text-sm font-medium transition-colors">
                Notification
              </button>
            </div>
            <div className="flex gap-1">
              <button
                className="p-1 hover:bg-white/20 rounded transition-colors"
                onClick={() => setNotificationMinimized(!notificationMinimized)}
              >
                <MinusIcon className="w-4 h-4 text-white" />
              </button>
              <button
                className="p-1 hover:bg-white/20 rounded transition-colors"
                onClick={() => setIsNotificationOpen(false)}
              >
                <XMarkIcon className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
          
          {!notificationMinimized && (
            <div className="p-3 h-60 overflow-y-auto">
              <div className="space-y-2">
                {notifications.map((notification, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-white/90 hover:bg-white/10 p-2 rounded transition-colors">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>{notification.message}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Support Toggle Button */}
      {!supportOpen && (
        <button
          className="bg-black/50 backdrop-blur-sm rounded-lg p-2 text-white hover:bg-black/70 transition-colors flex items-center gap-2 ml-auto"
          onClick={() => setSupportOpen(true)}
        >
          <LifebuoyIcon className="w-5 h-5" />
          <span className="text-sm">Support</span>
        </button>
      )}

      {/* Support Panel */}
      {supportOpen && (
        <div className="bg-black/50 backdrop-blur-sm rounded-lg">
          <div className="p-3 border-b border-white/20 flex justify-between items-center">
            <h3 className="text-white font-medium">Support</h3>
            <div className="flex gap-1">
              <button
                className="p-1 hover:bg-white/20 rounded transition-colors"
                onClick={() => setSupportMinimized(!supportMinimized)}
              >
                <MinusIcon className="w-4 h-4 text-white" />
              </button>
              <button
                className="p-1 hover:bg-white/20 rounded transition-colors"
                onClick={() => setSupportOpen(false)}
              >
                <XMarkIcon className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
          
          {!supportMinimized && (
            <div className="p-3 space-y-2">
          <button className="w-full flex items-center gap-3 p-3 hover:bg-white/10 rounded-lg transition-colors text-left">
            <div className="bg-blue-600 p-2 rounded-lg">
              <QuestionMarkCircleIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-white font-medium">Tutorial</div>
              <div className="text-white/60 text-sm">Learn the basics</div>
            </div>
          </button>
          
          <button className="w-full flex items-center gap-3 p-3 hover:bg-white/10 rounded-lg transition-colors text-left">
            <div className="bg-green-600 p-2 rounded-lg">
              <ChatBubbleBottomCenterTextIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-white font-medium">Q&A</div>
              <div className="text-white/60 text-sm">Common questions</div>
            </div>
          </button>
          
          <button className="w-full flex items-center gap-3 p-3 hover:bg-white/10 rounded-lg transition-colors text-left">
            <div className="bg-orange-600 p-2 rounded-lg">
              <LifebuoyIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-white font-medium">Help / FAQ</div>
              <div className="text-white/60 text-sm">Get assistance</div>
            </div>
          </button>
          
          <button className="w-full flex items-center gap-3 p-3 hover:bg-white/10 rounded-lg transition-colors text-left">
            <div className="bg-red-600 p-2 rounded-lg">
              <ExclamationTriangleIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-white font-medium">Report / Contact</div>
              <div className="text-white/60 text-sm">Report issues</div>
            </div>
          </button>
            </div>
          )}
        </div>
      )}

      {/* Tutorial Badge */}
      <div className="flex justify-end mt-4">
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-medium transition-colors shadow-lg">
          Tutorial
        </button>
      </div>
    </div>
  )
}
