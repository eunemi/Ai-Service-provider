'use client'

import React from 'react'

export function FinalCTA() {
  return (
    <section className="py-40 relative overflow-hidden flex items-center justify-center min-h-[60vh] z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-72 bg-secondary/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
      
      <div className="relative z-10 text-center max-w-3xl mx-auto px-8 flex flex-col items-center">
        <h2 className="font-display-xl text-[80px] md:text-[110px] tracking-tighter text-gradient mb-10 leading-[0.9] text-glow">
          The Future<br/>is Intelligent.
        </h2>
        
        <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-mono text-[11px] hover:bg-white/90 transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] uppercase tracking-[0.2em] hover-float">
          Get Started
        </button>
      </div>
    </section>
  )
}
