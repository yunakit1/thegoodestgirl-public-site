'use client';

import React from 'react';

export default function BambiLinks() {
  const links = [
    {
      name: "Twitter / X",
      handle: "@YunaMoths",
      url: "https://twitter.com/YunaMoths",
      icon: "🐦",
      color: "hover:bg-sky-500",
      desc: "Daily slutty thoughts & updates"
    },
    {
      name: "OnlyFans",
      handle: "yunakit",
      url: "https://onlyfans.com/yunakit", // ← change to your real username
      icon: "🔥",
      color: "hover:bg-pink-600",
      desc: "Full videos, nudes & custom content"
    },
    {
      name: "Chaturbate",
      handle: "yunakit",
      url: "https://chaturbate.com/yunakit", // ← change to your real username
      icon: "💦",
      color: "hover:bg-purple-600",
      desc: "Live cam shows"
    },
    {
      name: "Reddit",
      handle: "yuna-kit",
      url: "https://www.reddit.com/user/yuna-kit/", // ← change to your real username
      icon: "🥵",
      color: "hover:bg-rose-600",
      desc: "My highlights and comments lolol"
    },

  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-pink-500">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-2xl">💖</div>
            <h1 className="text-3xl font-bold tracking-tighter text-pink-400">thegoodestgirl</h1>
          </div>

          <div className="flex items-center gap-8 text-lg">
            <a href="/" className="hover:text-pink-400 transition">Home</a>
            <a href="/links" className="text-pink-400 font-bold">Links</a>
          </div>

          <a
            href="https://onlyfans.com/thegoodestgirl"
            target="_blank"
            className="px-8 py-3 bg-pink-600 hover:bg-pink-700 rounded-full font-bold transition-all"
          >
            Subscribe
          </a>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl md:text-7xl font-black tracking-tighter mb-6 text-pink-400">
          Find Your Goodest Girl
        </h1>
        <p className="text-2xl text-pink-300 mb-16">
          Everywhere this empty bimbo doll is waiting to be used~
        </p>

        <div className="space-y-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block bg-zinc-950 border border-zinc-800 hover:border-pink-500 rounded-3xl p-8 transition-all duration-300 ${link.color} hover:scale-[1.02]`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6 text-left">
                  <div className="text-6xl transition-transform group-hover:scale-125">{link.icon}</div>
                  <div>
                    <div className="text-3xl font-bold text-white group-hover:text-pink-400 transition">
                      {link.name}
                    </div>
                    <div className="text-pink-400 text-xl">{link.handle}</div>
                    <div className="text-zinc-400 mt-1">{link.desc}</div>
                  </div>
                </div>
                <div className="text-4xl text-pink-400 group-hover:translate-x-2 transition">→</div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-20 text-zinc-500 text-sm">
          Good girl Bambi does as she’s told 💕<br />
          Always wet. Always available. Always yours.
        </div>
      </div>

      <footer className="py-12 border-t border-zinc-800 text-center text-zinc-500 text-sm">
        © 2026 thegoodestgirl.com • All holes reserved
      </footer>
    </div>
  );
}
