'use client';

import React, { useState } from 'react';

export default function CinematicUI() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [leftPanelOpen, setLeftPanelOpen] = useState(false);
  const [rightPanelOpen, setRightPanelOpen] = useState(false);
  const [actionRingVisible, setActionRingVisible] = useState(false);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* 上部中央: イベントバナー（常時表示） */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-auto">
        <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10">
          <p className="text-white text-xs font-semibold">🎬 Cinematic Mode</p>
        </div>
      </div>

      {/* 左側スライドインパネル: インベントリ */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-80 bg-black/80 backdrop-blur-xl border-r border-cyan-400/30 pointer-events-auto transition-transform duration-300 ${
          leftPanelOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-white font-bold text-xl">Inventory</h2>
            <button
              onClick={() => setLeftPanelOpen(false)}
              className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* アイテムグリッド */}
          <div className="grid grid-cols-4 gap-3">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-400/20 flex items-center justify-center hover:border-cyan-400/60 transition-all cursor-pointer"
              >
                {i < 6 && (
                  <div className="text-2xl">
                    {['⚔️', '🛡️', '💎', '🗝️', '📜', '🧪'][i]}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 右側スライドインパネル: マップ＆チャット */}
      <div
        className={`absolute right-0 top-0 bottom-0 w-80 bg-black/80 backdrop-blur-xl border-l border-purple-400/30 pointer-events-auto transition-transform duration-300 ${
          rightPanelOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-white font-bold text-xl">Map & Chat</h2>
            <button
              onClick={() => setRightPanelOpen(false)}
              className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* ミニマップ */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-3 mb-4 border border-purple-400/20">
            <div className="aspect-square bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 gap-px">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div key={i} className="bg-purple-400/5"></div>
                ))}
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"></div>
            </div>
          </div>

          {/* チャット */}
          <div className="space-y-2">
            <div className="bg-purple-900/20 rounded-lg p-3 border border-purple-400/20">
              <p className="text-purple-400 text-xs font-semibold">Player1</p>
              <p className="text-white text-sm mt-1">Great view here!</p>
            </div>
            <div className="bg-purple-900/20 rounded-lg p-3 border border-purple-400/20">
              <p className="text-purple-400 text-xs font-semibold">Player2</p>
              <p className="text-white text-sm mt-1">Agreed 👍</p>
            </div>
          </div>
        </div>
      </div>

      {/* 左右端のスライドトリガー */}
      <button
        onClick={() => setLeftPanelOpen(!leftPanelOpen)}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-24 bg-cyan-400/20 backdrop-blur-sm rounded-r-xl border-r border-t border-b border-cyan-400/30 pointer-events-auto hover:bg-cyan-400/30 transition-all"
      >
        <svg
          className={`w-4 h-4 text-cyan-400 mx-auto transition-transform ${leftPanelOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <button
        onClick={() => setRightPanelOpen(!rightPanelOpen)}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-24 bg-purple-400/20 backdrop-blur-sm rounded-l-xl border-l border-t border-b border-purple-400/30 pointer-events-auto hover:bg-purple-400/30 transition-all"
      >
        <svg
          className={`w-4 h-4 text-purple-400 mx-auto transition-transform ${rightPanelOpen ? '' : 'rotate-180'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* 下中央: アクションリング（タップで表示） */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 pointer-events-auto">
        <div
          onTouchStart={() => setActionRingVisible(true)}
          onTouchEnd={() => setActionRingVisible(false)}
          onMouseDown={() => setActionRingVisible(true)}
          onMouseUp={() => setActionRingVisible(false)}
          className="relative"
        >
          {/* 中央のメインボタン */}
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500/60 to-pink-500/60 backdrop-blur-md rounded-full border-2 border-white/30 shadow-2xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>

          {/* アクションリング（表示時のみ） */}
          {actionRingVisible && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-in fade-in zoom-in duration-200">
              {/* ジャンプ */}
              <button className="absolute -top-20 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full border-2 border-white/30 shadow-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">Jump</span>
              </button>

              {/* 座る */}
              <button className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full border-2 border-white/30 shadow-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">Sit</span>
              </button>

              {/* インタラクト */}
              <button className="absolute -left-20 top-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full border-2 border-white/30 shadow-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">Use</span>
              </button>

              {/* エモート */}
              <button className="absolute -right-20 top-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full border-2 border-white/30 shadow-lg flex items-center justify-center">
                <span className="text-2xl">👋</span>
              </button>
            </div>
          )}
        </div>

        <p className="text-white/60 text-xs text-center mt-3">Tap & Hold for Actions</p>
      </div>
    </div>
  );
}
