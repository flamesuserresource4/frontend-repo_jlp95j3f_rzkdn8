import React from 'react';
import { Rocket, Star } from 'lucide-react';

function Hero({ onStart }) {
  return (
    <section id="hero" className="relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-white to-blue-100 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white shadow px-3 py-1 text-xs font-medium text-gray-700 border border-gray-200 mb-4">
              <Star className="h-3.5 w-3.5 text-yellow-500" />
              Project-based learning for polyglot developers
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Learn to code in multiple languages with confidence
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Python, JavaScript, Node.js, Java, C#, C, C++, and CSS — interactive lessons, hands-on challenges, and an embedded playground.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <button onClick={onStart} className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-md hover:bg-black">
                <Rocket className="h-4 w-4" /> Start Learning
              </button>
              <a href="#tracks" className="text-gray-700 hover:text-gray-900">Browse Tracks</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 p-1 shadow-lg">
              <div className="h-full w-full bg-white rounded-lg grid grid-cols-3 gap-1 p-2">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="rounded-md bg-gray-100" />
                ))}
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-500 text-center">A beautiful learning dashboard awaits</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;