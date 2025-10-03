'use client';

import React, { useState } from 'react';

export default function FPSMobileUI() {
  const [joystickPos, setJoystickPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleJoystickMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    const container = e.currentTarget.getBoundingClientRect();
    const centerX = container.left + container.width / 2;
    const centerY = container.top + container.height / 2;

    const deltaX = touch.clientX - centerX;
    const deltaY = touch.clientY - centerY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = 40;

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
    setIsDragging(false);
  };

  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* 左上: メニューアイコン */}
      <div className="absolute top-4 left-4 pointer-events-auto">
        <button className="w-12 h-12 bg-black/40 backdrop-blur-md rounded-xl border border-cyan-400/30 flex items-center justify-center hover:bg-black/60 transition-all">
          <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* 中央上: 通知バー / イベントバナー */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-auto">
        <div className="bg-gradient-to-r from-purple-600/80 to-pink-600/80 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 shadow-lg">
          <p className="text-white text-sm font-semibold">🎉 New Event: Winter Festival</p>
        </div>
      </div>

      {/* 右上: ミニマップ + コントロール */}
      <div className="absolute top-4 right-4 pointer-events-auto">
        <div className="bg-black/60 backdrop-blur-md rounded-xl border border-cyan-400/30 p-2 w-32 h-32">
          {/* ミニマップの簡易表示 */}
          <div className="w-full h-full relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-px">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="bg-cyan-400/10"></div>
              ))}
            </div>
            {/* プレイヤー位置 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
          </div>
        </div>
        {/* ズームボタン */}
        <div className="flex gap-1 mt-2">
          <button className="flex-1 bg-black/40 backdrop-blur-md rounded-lg border border-cyan-400/30 py-1 text-cyan-400 text-xs font-semibold hover:bg-black/60">
            +
          </button>
          <button className="flex-1 bg-black/40 backdrop-blur-md rounded-lg border border-cyan-400/30 py-1 text-cyan-400 text-xs font-semibold hover:bg-black/60">
            -
          </button>
        </div>
      </div>

      {/* 左側下部: 移動スティック */}
      <div className="absolute bottom-8 left-8 pointer-events-auto">
        <div
          className="relative w-32 h-32 bg-black/30 backdrop-blur-md rounded-full border-2 border-cyan-400/40"
          onTouchStart={() => setIsDragging(true)}
          onTouchMove={handleJoystickMove}
          onTouchEnd={handleJoystickEnd}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-cyan-400/20 rounded-full border border-cyan-400/40"></div>
          </div>
          <div
            className="absolute top-1/2 left-1/2 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-400/50 transition-transform"
            style={{
              transform: `translate(calc(-50% + ${joystickPos.x}px), calc(-50% + ${joystickPos.y}px))`
            }}
          >
            <div className="absolute inset-2 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* 右側下部: アクションボタン */}
      <div className="absolute bottom-8 right-8 pointer-events-auto">
        <div className="relative w-48 h-40">
          {/* ジャンプボタン */}
          <button className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full border-2 border-white/30 shadow-lg flex items-center justify-center font-bold text-white hover:scale-105 active:scale-95 transition-transform">
            <span className="text-sm">JUMP</span>
          </button>

          {/* アタックボタン */}
          <button className="absolute bottom-16 right-12 w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-full border-2 border-white/30 shadow-lg flex items-center justify-center font-bold text-white hover:scale-105 active:scale-95 transition-transform">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-4 0-7-3-7-7s3-7 7-7 7 3 7 7-3 7-7 7z"/>
            </svg>
          </button>

          {/* インタラクトボタン */}
          <button className="absolute bottom-8 right-24 w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full border-2 border-white/30 shadow-lg flex items-center justify-center font-bold text-white text-xs hover:scale-105 active:scale-95 transition-transform">
            USE
          </button>

          {/* スプリントボタン */}
          <button className="absolute bottom-0 right-20 w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full border-2 border-white/30 shadow-lg flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-transform">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
