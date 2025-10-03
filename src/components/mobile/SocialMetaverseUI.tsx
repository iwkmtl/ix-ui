'use client';

import React, { useState } from 'react';

export default function SocialMetaverseUI() {
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([
    { user: 'Player1', text: 'Hello everyone!', avatar: '👤' },
    { user: 'Player2', text: 'Welcome to the party! 🎉', avatar: '🎮' }
  ]);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* 左上: プロフィールアイコン */}
      <div className="absolute top-4 left-4 pointer-events-auto">
        <button className="bg-gradient-to-br from-purple-600 to-pink-600 backdrop-blur-md rounded-2xl border-2 border-white/30 p-3 shadow-xl hover:scale-105 transition-transform">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-2xl">
              👤
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-sm">You</p>
              <p className="text-green-400 text-xs flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Online
              </p>
            </div>
          </div>
        </button>
      </div>

      {/* 右上: 通知・設定・ウォレット */}
      <div className="absolute top-4 right-4 pointer-events-auto flex gap-2">
        {/* 通知 */}
        <button className="w-12 h-12 bg-black/40 backdrop-blur-md rounded-xl border border-purple-400/30 flex items-center justify-center hover:bg-black/60 transition-all relative">
          <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center font-bold">3</span>
        </button>

        {/* ウォレット */}
        <button className="bg-gradient-to-r from-yellow-500 to-orange-500 backdrop-blur-md rounded-xl border border-white/30 px-4 py-2 flex items-center gap-2 hover:scale-105 transition-transform">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
          </svg>
          <span className="text-white font-bold text-sm">1,250</span>
        </button>

        {/* 設定 */}
        <button className="w-12 h-12 bg-black/40 backdrop-blur-md rounded-xl border border-purple-400/30 flex items-center justify-center hover:bg-black/60 transition-all">
          <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>

      {/* 右側縦並び: ソーシャル機能 */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-auto flex flex-col gap-3">
        {/* 友達リスト */}
        <button className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl border-2 border-white/30 shadow-lg flex flex-col items-center justify-center hover:scale-110 transition-transform">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
          </svg>
          <span className="text-white text-xs font-bold mt-0.5">24</span>
        </button>

        {/* グループ */}
        <button className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl border-2 border-white/30 shadow-lg flex flex-col items-center justify-center hover:scale-110 transition-transform">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/>
          </svg>
          <span className="text-white text-xs font-bold mt-0.5">5</span>
        </button>

        {/* 周辺プレイヤー */}
        <button className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl border-2 border-white/30 shadow-lg flex flex-col items-center justify-center hover:scale-110 transition-transform relative">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          <span className="text-white text-xs font-bold mt-0.5">12</span>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
        </button>
      </div>

      {/* チャット履歴（下部上に表示） */}
      <div className="absolute bottom-24 left-4 right-4 pointer-events-none">
        <div className="max-w-md space-y-2">
          {messages.map((msg, i) => (
            <div key={i} className="bg-black/60 backdrop-blur-md rounded-xl border border-purple-400/30 p-3 shadow-lg pointer-events-auto">
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-lg shrink-0">
                  {msg.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-purple-400 text-xs font-semibold">{msg.user}</p>
                  <p className="text-white text-sm mt-0.5">{msg.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 下部中央: チャット入力 */}
      <div className="absolute bottom-4 left-4 right-4 pointer-events-auto">
        <div className="max-w-2xl mx-auto bg-black/60 backdrop-blur-md rounded-2xl border border-purple-400/30 shadow-xl p-3">
          <div className="flex items-center gap-3">
            {/* 絵文字ボタン */}
            <button className="w-10 h-10 bg-purple-600/50 rounded-xl flex items-center justify-center hover:bg-purple-600/70 transition-all">
              <span className="text-xl">😊</span>
            </button>

            {/* 入力フィールド */}
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 transition-all"
            />

            {/* ボイスボタン */}
            <button className="w-10 h-10 bg-pink-600/50 rounded-xl flex items-center justify-center hover:bg-pink-600/70 transition-all">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
              </svg>
            </button>

            {/* 送信ボタン */}
            <button className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center hover:scale-105 transition-transform">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
