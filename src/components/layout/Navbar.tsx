'use client'

import React from 'react'

export function Navbar() {
  return (
    <nav className="bg-background/40 backdrop-blur-3xl text-primary fixed top-0 w-full z-50 border-b border-white/5 flex justify-between items-center h-16 px-8 max-w-[1920px] mx-auto left-0 right-0 transition-all duration-500">
      <div className="font-headline-lg-mobile text-[28px] font-light tracking-tighter text-primary scale-95 active:scale-90 transition-transform">
        AtomAI
      </div>
      <div className="hidden md:flex gap-8">
        <a className="text-on-surface-variant font-light hover:text-primary transition-colors duration-500 font-label-mono text-[10px] tracking-[0.2em] uppercase" href="#products">Products</a>
        <a className="text-on-surface-variant font-light hover:text-primary transition-colors duration-500 font-label-mono text-[10px] tracking-[0.2em] uppercase" href="#services">Services</a>
        <a className="text-on-surface-variant font-light hover:text-primary transition-colors duration-500 font-label-mono text-[10px] tracking-[0.2em] uppercase" href="#">Projects</a>
      </div>
      <a className="hidden md:flex bg-white/5 backdrop-blur-md border border-white/10 text-primary px-5 py-2 rounded-full font-label-mono text-[10px] hover:bg-white/10 transition-all duration-500 uppercase tracking-widest hover-float" href="#contact">
        Contact
      </a>
      <button className="md:hidden text-primary">
        <span className="material-symbols-outlined text-[24px]">menu</span>
      </button>
    </nav>
  )
}
