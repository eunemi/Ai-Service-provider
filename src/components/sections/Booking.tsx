'use client'

import React from 'react'

export function Booking() {
  return (
    <section id="services" className="py-40 border-t border-white/5 bg-surface-container-lowest/80 relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.03)_0%,_transparent_60%)] pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="font-display-lg text-[60px] tracking-tighter text-gradient mb-8 leading-[1.05]">
              AI-Powered Workflow Automation
            </h2>
            <p className="font-body-lg text-[16px] text-on-surface-variant mb-8 font-light leading-relaxed max-w-xl">
              We build AI-powered systems tailored to your goals. Every solution starts with a clear, goal-focused strategy. Automate repetitive tasks, enhance decision-making, and unlock new operational capabilities.
            </p>
            
            <ul className="space-y-5 mb-10">
              <li className="flex items-center gap-4 text-on-surface-variant font-body-md text-[15px] font-light">
                <span className="material-symbols-outlined text-secondary text-[20px] opacity-80">check_circle</span> 
                Custom Agentic Swarms
              </li>
              <li className="flex items-center gap-4 text-on-surface-variant font-body-md text-[15px] font-light">
                <span className="material-symbols-outlined text-secondary text-[20px] opacity-80">check_circle</span> 
                Predictive Analytics Engine
              </li>
              <li className="flex items-center gap-4 text-on-surface-variant font-body-md text-[15px] font-light">
                <span className="material-symbols-outlined text-secondary text-[20px] opacity-80">check_circle</span> 
                Legacy System Integration
              </li>
            </ul>
            
            <button className="bg-white text-black px-7 py-3.5 rounded-full font-label-mono text-[10px] hover:bg-white/90 transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.15)] uppercase tracking-widest hover-float">
              Discuss Services
            </button>
          </div>

          <div className="relative lg:ml-auto w-full max-w-md">
            <div className="absolute inset-0 bg-secondary/10 blur-[100px] rounded-full mix-blend-screen ambient-motion"></div>
            
            <div className="relative bg-glass-heavy border-glass inner-glow rounded-2xl p-7 lg:p-8 premium-shadow hover-float">
              <div className="flex items-center justify-between mb-7 border-b border-white/10 pb-6">
                <div className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-[0.2em]">
                  Services for All Sectors
                </div>
                <span className="material-symbols-outlined text-on-surface-variant text-[18px]">tune</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-500 cursor-pointer group">
                  <span className="font-body-md text-[14px] text-primary font-light">Marketing Agencies</span>
                  <span className="material-symbols-outlined text-on-surface-variant text-[16px] group-hover:text-white group-hover:translate-x-2 transition-all">arrow_forward</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-500 cursor-pointer group">
                  <span className="font-body-md text-[14px] text-primary font-light">Financial Technology</span>
                  <span className="material-symbols-outlined text-on-surface-variant text-[16px] group-hover:text-white group-hover:translate-x-2 transition-all">arrow_forward</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-500 cursor-pointer group">
                  <span className="font-body-md text-[14px] text-primary font-light">E-Commerce & Drop-shipping</span>
                  <span className="material-symbols-outlined text-on-surface-variant text-[16px] group-hover:text-white group-hover:translate-x-2 transition-all">arrow_forward</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
