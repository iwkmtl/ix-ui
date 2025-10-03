'use client';

import React, { useState } from 'react';

export default function HybridCasinoUI() {
  const [joystickPos, setJoystickPos] = useState({ x: 0, y: 0 });
  const [vipRank] = useState('Diamond');
  const [balance] = useState(45600);

  const handleJoystickMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    const container = e.currentTarget.getBoundingClientRect();
    const centerX = container.left + container.width / 2;
    const centerY = container.top + container.height / 2;

    const deltaX = touch.clientX - centerX;
    const deltaY = touch.clientY - centerY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = 35;

    if (distance > maxDistance) {
      const angle = Math.atan2(deltaY, deltaX);
      setJoystickPos({
        x: Math.cos(angle) * maxDistance,
        y: Math.sin(angle) * maxDistance
      });
    } else {
      setJoystickPos({ x: deltaX, y: deltaY });
    }
  };

  const handleJoystickEnd = () => {
    setJoystickPos({ x: 0, y: 0 });
  };

  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* 左上: チャット/プロフィール */}
      <div className="absolute top-4 left-4 pointer-events-auto flex gap-2">
        {/* プロフィール */}
        <button className="bg-gradient-to-br from-purple-600 to-pink-600 backdrop-blur-md rounded-xl border-2 border-yellow-400/50 p-2 shadow-xl hover:scale-105 transition-transform">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xl">
              👑
            </div>
            <div className="text-left pr-2">
              <p className="text-white font-bold text-xs">Player</p>
              <p className="text-yellow-400 text-xs">Level 42</p>
            </div>
          </div>
        </button>

        {/* チャット */}
        <button className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 backdrop-blur-md rounded-xl border-2 border-white/30 shadow-lg flex items-center justify-center hover:scale-105 transition-transform relative">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>
          </svg>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center font-bold">5</span>
        </button>
      </div>

      {/* 右上: ウォレット + VIPランク */}
      <div className="absolute top-4 right-4 pointer-events-auto">
        <div className="bg-gradient-to-br from-yellow-600/80 to-orange-600/80 backdrop-blur-xl rounded-2xl border-2 border-yellow-400/50 shadow-2xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div>
              <p className="text-yellow-200 text-xs">VIP Status</p>
              <p className="text-white font-bold text-lg flex items-center gap-1">
                💎 {vipRank}
              </p>
            </div>
          </div>

          <div className="border-t border-white/20 pt-3">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
              </svg>
              <p className="text-white font-bold text-xl">{balance.toLocaleString()}</p>
            </div>
            <p className="text-yellow-200 text-xs mt-1">Credits</p>
          </div>
        </div>
      </div>

      {/* 左下: 移動スティック */}
      <div className="absolute bottom-8 left-8 pointer-events-auto">
        <div
          className="relative w-28 h-28 bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-md rounded-full border-2 border-purple-400/50"
          onTouchStart={() => {}}
          onTouchMove={handleJoystickMove}
          onTouchEnd={handleJoystickEnd}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 bg-purple-400/20 rounded-full border border-purple-400/40"></div>
          </div>
          <div
            className="absolute top-1/2 left-1/2 w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg shadow-purple-400/50 transition-transform"
            style={{
              transform: `translate(calc(-50% + ${joystickPos.x}px), calc(-50% + ${joystickPos.y}px))`
            }}
          >
            <div className="absolute inset-2 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* 中央下: カジノ/イベントボタン */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-auto">
        <div className="flex gap-3">
          {/* Poker */}
          <button className="bg-gradient-to-br from-red-600 to-rose-700 backdrop-blur-md rounded-2xl border-2 border-white/30 shadow-2xl px-6 py-4 hover:scale-105 active:scale-95 transition-transform">
            <div className="flex flex-col items-center gap-1">
              <div className="text-3xl">🃏</div>
              <p className="text-white font-bold text-sm">Poker</p>
            </div>
          </button>

          {/* Slot */}
          <button className="bg-gradient-to-br from-yellow-600 to-orange-600 backdrop-blur-md rounded-2xl border-2 border-white/30 shadow-2xl px-6 py-4 hover:scale-105 active:scale-95 transition-transform">
            <div className="flex flex-col items-center gap-1">
              <div className="text-3xl">🎰</div>
              <p className="text-white font-bold text-sm">Slots</p>
            </div>
          </button>

          {/* Event */}
          <button className="bg-gradient-to-br from-purple-600 to-indigo-600 backdrop-blur-md rounded-2xl border-2 border-yellow-400/50 shadow-2xl px-6 py-4 hover:scale-105 active:scale-95 transition-transform relative">
            <div className="flex flex-col items-center gap-1">
              <div className="text-3xl">🎉</div>
              <p className="text-white font-bold text-sm">Event</p>
            </div>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">NEW</span>
          </button>
        </div>
      </div>

      {/* 右下: エモート/アクションボタン */}
      <div className="absolute bottom-8 right-8 pointer-events-auto">
        <div className="flex flex-col gap-3">
          {/* ジャンプ */}
          <button className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full border-2 border-white/30 shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-transform">
            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
          </button>

          {/* 座る */}
          <button className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full border-2 border-white/30 shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-transform">
            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 11v2h10v-2c0-1.86 1.28-3.41 3-3.86V6c0-1.65-1.35-3-3-3H7C5.35 3 4 4.35 4 6v1.14c1.72.45 3 2 3 3.86z"/>
              <path d="M21 9c-1.1 0-2 .9-2 2v4H5v-4c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h2v2h2v-2h10v2h2v-2h2c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2z"/>
            </svg>
          </button>

          {/* 拍手 */}
          <button className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full border-2 border-white/30 shadow-lg flex items-center justify-center text-2xl hover:scale-110 active:scale-95 transition-transform">
            👏
          </button>

          {/* ダンス */}
          <button className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full border-2 border-white/30 shadow-lg flex items-center justify-center text-2xl hover:scale-110 active:scale-95 transition-transform">
            💃
          </button>
        </div>
      </div>

      {/* プロモーションバナー */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 pointer-events-auto">
        <div className="bg-gradient-to-r from-pink-600/90 to-purple-600/90 backdrop-blur-md px-8 py-3 rounded-full border-2 border-yellow-400/50 shadow-2xl animate-pulse">
          <p className="text-white font-bold text-sm flex items-center gap-2">
            <span className="text-xl">🎁</span>
            Double Credits Weekend - Play Now!
            <span className="text-xl">🎁</span>
          </p>
        </div>
      </div>
    </div>
  );
}
