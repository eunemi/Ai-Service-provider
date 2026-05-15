'use client'

import React from 'react'

export function ProductGrid() {
  return (
    <section id="products" className="py-40 max-w-[1200px] mx-auto px-8 relative z-10">
      <div className="mb-20 text-center md:text-left">
        <h2 className="font-display-lg text-[64px] tracking-tighter text-gradient mb-6">Featured AI Products</h2>
        <p className="font-body-lg text-[17px] text-on-surface-variant font-light max-w-2xl">Enterprise-grade software solutions engineered for scale and speed.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Main Product */}
        <div className="lg:col-span-8 bg-glass border-glass inner-glow rounded-2xl p-8 lg:p-10 flex flex-col justify-between group overflow-hidden relative hover-float premium-shadow min-h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0"></div>
          <div className="absolute -top-32 -right-32 w-72 h-72 bg-secondary/10 blur-[80px] rounded-full z-0 group-hover:bg-secondary/20 transition-colors duration-1000"></div>
          
          <div className="relative z-10 mb-10">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full font-label-mono text-[10px] text-secondary mb-6 uppercase tracking-[0.2em]">
              PRODUCT // 01
            </div>
            <h3 className="font-headline-lg text-[44px] text-primary mb-4 tracking-tight">Neural Data Pipeline</h3>
            <p className="font-body-md text-[15px] text-on-surface-variant max-w-lg font-light leading-relaxed">
              Seamlessly aggregate, process, and analyze vast datasets in real-time with autonomous agents.
            </p>
          </div>

          <div className="relative z-10 w-full h-[280px] rounded-xl overflow-hidden border border-white/10 bg-black mt-auto shadow-2xl">
            <img 
              alt="Data visualization" 
              className="w-full h-full object-cover opacity-60 mix-blend-screen group-hover:opacity-90 group-hover:scale-105 transition-all duration-1000 ease-out" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWrPrE5DyCKBt_mQevHs0BG3CnkIf8wSX5oqDtxgCQ2dkboI9EPAjYQZa7_GoiF30JcKKzqiGGBOdZB6G5fe8eIw5dlJszhG30Q_T9pZK8swJhPsBK4Rrk2HW4perVGauumsBcRdy6xbOlt7n5zHF6u19n1PLi_EA1MLThE7wP8tiUQQj476FlqNPj4nxq9NjBxX1r7akDVfQlYZTjZAvzgXESwoDORBSIDXwxZqb2KtOhDIAOo_j3rL7w8t9jo1YCmmWnLPdLqGw"
            />
          </div>

          <div className="relative z-10 flex gap-4 mt-8">
            <button className="bg-glass border border-white/20 text-primary px-6 py-3 rounded-full font-label-mono text-[10px] hover:bg-white/10 transition-all duration-500 flex items-center gap-2 uppercase tracking-widest hover-float">
              <span className="material-symbols-outlined text-[16px]">download</span> Software Downloads
            </button>
          </div>
        </div>

        {/* Secondary Products */}
        <div className="lg:col-span-4 flex flex-col gap-6 lg:gap-8">
          
          <div className="flex-1 bg-glass border-glass inner-glow rounded-2xl p-7 lg:p-8 flex flex-col justify-between group relative overflow-hidden hover-float premium-shadow">
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/5 blur-[60px] rounded-full z-0 group-hover:bg-white/10 transition-colors duration-1000"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full font-label-mono text-[10px] text-secondary mb-6 uppercase tracking-[0.2em]">
                PRODUCT // 02
              </div>
              <h3 className="font-headline-lg-mobile text-[32px] text-primary mb-3 tracking-tight">Automata Studio</h3>
              <p className="font-body-md text-[14px] text-on-surface-variant font-light leading-relaxed">
                Visual builder for complex AI workflows.
              </p>
            </div>
            <button className="mt-8 bg-transparent border border-white/20 text-primary px-6 py-3 rounded-full font-label-mono text-[10px] hover:border-white hover:bg-white/5 transition-all duration-500 w-fit flex items-center gap-2 uppercase tracking-widest relative z-10">
              <span className="material-symbols-outlined text-[16px]">play_arrow</span> Live Demo
            </button>
          </div>

          <div className="flex-1 bg-glass border-glass inner-glow rounded-2xl p-7 lg:p-8 flex flex-col justify-between group relative overflow-hidden hover-float premium-shadow">
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/5 blur-[60px] rounded-full z-0 group-hover:bg-white/10 transition-colors duration-1000"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full font-label-mono text-[10px] text-secondary mb-6 uppercase tracking-[0.2em]">
                PRODUCT // 03
              </div>
              <h3 className="font-headline-lg-mobile text-[32px] text-primary mb-3 tracking-tight">Synapse API</h3>
              <p className="font-body-md text-[14px] text-on-surface-variant font-light leading-relaxed">
                Low-latency language model routing.
              </p>
            </div>
            <button className="mt-8 bg-transparent border border-white/20 text-primary px-6 py-3 rounded-full font-label-mono text-[10px] hover:border-white hover:bg-white/5 transition-all duration-500 w-fit flex items-center gap-2 uppercase tracking-widest relative z-10">
              <span className="material-symbols-outlined text-[16px]">play_arrow</span> Live Demo
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
