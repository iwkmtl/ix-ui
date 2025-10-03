'use client';

import React, { useState } from 'react';

export default function TradingMarketUI() {
  const [walletBalance] = useState({ eth: 2.456, points: 15800 });

  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* 左上: ショップ/クエストバナー */}
      <div className="absolute top-4 left-4 pointer-events-auto">
        <div className="flex gap-2">
          <button className="bg-gradient-to-r from-amber-500 to-orange-600 backdrop-blur-md rounded-xl border-2 border-white/30 px-4 py-2 shadow-lg hover:scale-105 transition-transform">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
              <span className="text-white font-bold text-sm">Shop</span>
            </div>
          </button>

          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 backdrop-blur-md rounded-xl border-2 border-white/30 px-4 py-2 shadow-lg hover:scale-105 transition-transform">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
              </svg>
              <span className="text-white font-bold text-sm">Quest</span>
            </div>
          </button>
        </div>
      </div>

      {/* 右上: ウォレット残高表示 */}
      <div className="absolute top-4 right-4 pointer-events-auto">
        <div className="bg-black/70 backdrop-blur-md rounded-2xl border border-cyan-400/30 p-4 shadow-2xl">
          <div className="flex flex-col gap-2">
            {/* ETH */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M15.927 23.959l-9.823-5.797 9.817 13.839 9.828-13.839-9.828 5.797zM16.073 0l-9.819 16.297 9.819 5.807 9.823-5.801z"/>
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-xs">Ethereum</p>
                <p className="text-white font-bold text-lg">{walletBalance.eth} ETH</p>
              </div>
            </div>

            {/* ポイント */}
            <div className="flex items-center gap-3 pt-2 border-t border-white/10">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-xs">Points</p>
                <p className="text-white font-bold text-lg">{walletBalance.points.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 左下: 移動ボタン */}
      <div className="absolute bottom-8 left-8 pointer-events-auto">
        <div className="relative w-32 h-32">
          {/* 十字キー風 */}
          <div className="absolute inset-0">
            {/* 上 */}
            <button className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-lg border-2 border-white/30 shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
              </svg>
            </button>

            {/* 下 */}
            <button className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-lg border-2 border-white/30 shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
              </svg>
            </button>

            {/* 左 */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg border-2 border-white/30 shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
              </svg>
            </button>

            {/* 右 */}
            <button className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg border-2 border-white/30 shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </button>

            {/* 中央 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/10 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* 中央下: アクションボタン */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-auto">
        <div className="flex gap-3">
          <button className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full border-2 border-white/30 shadow-lg flex flex-col items-center justify-center hover:scale-105 active:scale-95 transition-transform">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
            <span className="text-white text-xs font-bold mt-1">Jump</span>
          </button>

          <button className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full border-2 border-white/30 shadow-lg flex flex-col items-center justify-center hover:scale-105 active:scale-95 transition-transform">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>
            </svg>
            <span className="text-white text-xs font-bold mt-1">Talk</span>
          </button>
        </div>
      </div>

      {/* 右下: 取引系ボタン */}
      <div className="absolute bottom-8 right-8 pointer-events-auto">
        <div className="flex flex-col gap-3">
          {/* マーケット */}
          <button className="bg-gradient-to-r from-blue-600 to-cyan-600 backdrop-blur-md rounded-2xl border-2 border-white/30 px-5 py-3 shadow-xl hover:scale-105 transition-transform">
            <div className="flex items-center gap-3">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/>
              </svg>
              <div className="text-left">
                <p className="text-white font-bold text-sm">Market</p>
                <p className="text-cyan-200 text-xs">Trade Items</p>
              </div>
            </div>
          </button>

          {/* インベントリ */}
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 backdrop-blur-md rounded-2xl border-2 border-white/30 px-5 py-3 shadow-xl hover:scale-105 transition-transform">
            <div className="flex items-center gap-3">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2zm-5 12H9v-2h6v2zm5-7H4V4h16v3z"/>
              </svg>
              <div className="text-left">
                <p className="text-white font-bold text-sm">Items</p>
                <p className="text-purple-200 text-xs">24/50</p>
              </div>
            </div>
          </button>

          {/* ウォレット詳細 */}
          <button className="bg-gradient-to-r from-yellow-600 to-orange-600 backdrop-blur-md rounded-2xl border-2 border-white/30 px-5 py-3 shadow-xl hover:scale-105 transition-transform">
            <div className="flex items-center gap-3">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
              </svg>
              <div className="text-left">
                <p className="text-white font-bold text-sm">Wallet</p>
                <p className="text-yellow-200 text-xs">Manage</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
