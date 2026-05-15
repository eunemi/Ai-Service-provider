'use client'

import React from 'react'

export function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden hero-bg pt-16">
      <div className="absolute inset-0 bg-transparent z-0">
        <div className="absolute top-[20%] left-[15%] w-52 h-52 rounded-full shape-gradient-1 blur-[80px] animate-float opacity-60"></div>
        <div className="absolute bottom-[20%] right-[15%] w-72 h-72 rounded-full shape-gradient-2 blur-[100px] animate-float-delayed opacity-50"></div>
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[600px] h-[300px] rounded-[100%] bg-white/5 blur-[120px] mix-blend-overlay"></div>
      </div>

      {/* 3D Geometric Shapes (Simulated via CSS) */}
      <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
        <div className="absolute left-[20%] top-[30%] w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10 rounded-2xl transform rotate-12 animate-float" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255,255,255,0.2)' }}></div>
        <div className="absolute right-[25%] bottom-[35%] w-28 h-28 bg-gradient-to-br from-rose-500/20 to-amber-500/20 backdrop-blur-xl border border-white/10 rounded-full transform -rotate-12 animate-float-delayed" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255,255,255,0.2)' }}></div>
        <div className="absolute left-[60%] top-[15%] w-14 h-14 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 backdrop-blur-xl border border-white/10 rounded-lg transform rotate-45 animate-float opacity-70" style={{ animationDelay: '2s', boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255,255,255,0.2)' }}></div>
      </div>

      <div className="relative z-20 max-w-[1200px] mx-auto px-8 text-center flex flex-col items-center gap-5 mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full font-label-mono text-[10px] text-on-surface-variant mb-4 uppercase tracking-[0.3em] backdrop-blur-md relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <span className="relative z-10 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse-slow"></span>
            Nova AI Systems
          </span>
        </div>

        <h1 className="font-display-xl text-[44px] md:text-[72px] lg:text-[96px] tracking-tighter max-w-[900px] mx-auto leading-[1.1] md:leading-[0.95] text-glow pb-3 font-light flex flex-col gap-1">
          <span className="text-white/90 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>Elevate Your</span>
          <span className="text-white/90 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>Digital Vision</span>
          <span className="text-gradient-custom font-normal mt-1 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>AtomAI Intelligence</span>
        </h1>

        <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto mt-4 font-light leading-relaxed text-[15px] md:text-[17px] opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          Bespoke AI products and automated systems designed for modern performance. Manage data, automate workflows, and optimize strategy with precision.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <button className="bg-white text-black px-7 py-3.5 rounded-full font-label-mono text-[11px] hover:bg-white/90 transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 uppercase tracking-widest hover-float group">
            Explore Products
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>

          <button className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-7 py-3.5 rounded-full font-label-mono text-[11px] hover:bg-white/10 transition-all duration-500 flex items-center justify-center gap-2 uppercase tracking-widest hover-float">
            View Projects
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: '1.5s' }}>
        <span className="font-label-mono text-[9px] text-white/40 tracking-[0.3em] uppercase">Scroll to explore</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/20 to-transparent"></div>
      </div>
    </section>
  )
}
