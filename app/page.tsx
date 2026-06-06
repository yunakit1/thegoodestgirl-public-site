'use client';

import React, { useState } from 'react';

export default function TheGoodestGirl() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-pink-500">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-2xl">💖</div>
            <h1 className="text-3xl font-bold tracking-tighter text-pink-400">thegoodestgirl</h1>
          </div>

          <div className="hidden md:flex items-center gap-8 text-lg">
            <a href="#about" className="hover:text-pink-400 transition">About Bambi</a>
            <a href="#gallery" className="hover:text-pink-400 transition">Gallery</a>
            <a href="#offers" className="hover:text-pink-400 transition">What I Offer</a>
            <a href="#join" className="hover:text-pink-400 transition">Join Me</a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl"
          >
            ☰
          </button>

          <a
            href="https://onlyfans.com/yourusername"
            target="_blank"
            className="hidden md:block px-8 py-3 bg-pink-600 hover:bg-pink-700 rounded-full font-bold text-lg transition-all active:scale-95"
          >
            Subscribe Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative pt-20 bg-gradient-to-br from-black via-pink-950 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(#ff69b4_1px,transparent_1px)] [background-size:40px_40px] opacity-20"></div>
        
        <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
          <div className="mb-8 inline-block">
            <span className="px-6 py-2 bg-pink-600/20 border border-pink-500 rounded-full text-pink-400 text-sm tracking-widest">BAMBI • THE GOODEST GIRL</span>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
            Your Favorite<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400">Empty Bimbo Doll</span>
          </h1>

          <p className="text-2xl md:text-3xl text-pink-300 mb-10 max-w-2xl mx-auto">
            Always wet. Always obedient.<br />
            Ready to please you~
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#join"
              className="px-12 py-5 bg-pink-600 hover:bg-pink-700 text-2xl font-bold rounded-full transition-all active:scale-95"
            >
              Use Me Now
            </a>
            <a
              href="#gallery"
              className="px-12 py-5 border-2 border-pink-400 hover:bg-pink-900/50 text-2xl font-bold rounded-full transition-all"
            >
              See My Holes
            </a>
          </div>

          <p className="mt-12 text-pink-400 text-sm tracking-widest">27 • Trans Bimbo • Always Horny</p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-4xl">↓</div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8 text-pink-400">Hi, I’m Bambi 💕</h2>
          <p className="text-xl leading-relaxed text-zinc-300 max-w-2xl mx-auto">
            I’m a 27 year old trans bimbo doll who lives to be used and degraded. 
            My only purpose is to look pretty, stay empty-headed, and make men feel good. 
            <span className="text-pink-400">Good girl Bambi does as she’s told~</span>
          </p>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section id="gallery" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 text-pink-400">Your Pretty Bimbo Doll</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Replace these with your actual photos later */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-[4/5] bg-zinc-900 rounded-2xl overflow-hidden border border-pink-900 hover:border-pink-500 transition group">
                <div className="w-full h-full bg-gradient-to-br from-pink-900 to-purple-900 flex items-center justify-center text-6xl opacity-60 group-hover:scale-110 transition">
                  💖
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/gallery" className="text-pink-400 hover:underline text-xl">
              See full gallery → (coming soon)
            </a>
          </div>
        </div>
      </section>

      {/* Offers */}
      <section id="offers" className="py-24 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 text-pink-400">How You Can Use Bambi</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Custom Videos", desc: "Tell me exactly how you want to degrade and fuck your bimbo doll" },
              { title: "Live Sessions", desc: "Watch me edge, obey commands, and cum on command for you" },
              { title: "PPV & Ratings", desc: "Rate my holes, send tasks, and get personal content" }
            ].map((item, i) => (
              <div key={i} className="bg-black border border-pink-900 rounded-3xl p-10 hover:border-pink-500 transition group">
                <div className="text-6xl mb-6">💦</div>
                <h3 className="text-3xl font-bold mb-4 text-pink-400">{item.title}</h3>
                <p className="text-zinc-400 text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="join" className="py-32 bg-gradient-to-b from-black to-pink-950 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-6xl font-black mb-8">Ready to own your Goodest Girl?</h2>
          <p className="text-2xl text-pink-300 mb-12">
            Subscribe and watch Bambi get dumber and sluttier just for you~
          </p>
          
          <a
            href="https://onlyfans.com/yourusername"
            target="_blank"
            className="inline-block px-16 py-7 bg-pink-600 hover:bg-pink-700 text-3xl font-bold rounded-full transition-all active:scale-95 shadow-2xl shadow-pink-600/50"
          >
            Subscribe & Use Me
          </a>
          
          <p className="mt-10 text-pink-400">or follow me on X @TheLilyAkari</p>
        </div>
      </section>

      <footer className="py-12 border-t border-zinc-800 text-center text-zinc-500">
        © 2026 thegoodestgirl.com • All holes reserved for good boys
      </footer>
    </div>
  );
}
