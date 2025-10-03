'use client';

import React, { useState } from 'react';
import FPSMobileUI from '@/components/mobile/FPSMobileUI';
import SocialMetaverseUI from '@/components/mobile/SocialMetaverseUI';
import TradingMarketUI from '@/components/mobile/TradingMarketUI';
import CinematicUI from '@/components/mobile/CinematicUI';
import HybridCasinoUI from '@/components/mobile/HybridCasinoUI';

export default function MobileDemoPage() {
  const [selectedUI, setSelectedUI] = useState<string>('fps');
  const [menuVisible, setMenuVisible] = useState(false);

  const uiComponents = {
    fps: { name: 'FPS/MMO Style', component: <FPSMobileUI /> },
    social: { name: 'Social Metaverse', component: <SocialMetaverseUI /> },
    trading: { name: 'Trading/Market', component: <TradingMarketUI /> },
    cinematic: { name: 'Cinematic/Immersive', component: <CinematicUI /> },
    casino: { name: 'Hybrid Casino/SNS', component: <HybridCasinoUI /> }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* 3D背景エフェクト */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(0,0,0,0))]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* トグルボタン */}
      <button
        onClick={() => setMenuVisible(!menuVisible)}
        className="fixed top-4 right-4 z-50 w-12 h-12 bg-purple-600/80 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center pointer-events-auto hover:bg-purple-600 transition-all shadow-lg"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* UI切り替えメニュー（折りたたみ可能） */}
      <div className={`fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/10 transition-transform duration-300 ${menuVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {Object.entries(uiComponents).map(([key, { name }]) => (
              <button
                key={key}
                onClick={() => {
                  setSelectedUI(key);
                  setMenuVisible(false);
                }}
                className={`px-6 py-3 rounded-xl font-semibold text-sm whitespace-nowrap transition-all ${
                  selectedUI === key
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                    : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* メインコンテンツエリア */}
      <div className="relative">
        {/* UIコンポーネント表示 */}
        {uiComponents[selectedUI as keyof typeof uiComponents].component}
      </div>
    </div>
  );
}
