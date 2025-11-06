import React from 'react';

function Header() {
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold">VC</div>
          <span className="hidden sm:inline text-gray-800 font-semibold">Vibe Code Academy</span>
        </div>
        <nav className="flex items-center gap-2 sm:gap-3">
          <button onClick={() => scrollToId('tracks')} className="text-sm text-gray-700 hover:text-gray-900 px-3 py-1.5 rounded-md hover:bg-gray-100">Tracks</button>
          <button onClick={() => scrollToId('playground')} className="text-sm text-gray-700 hover:text-gray-900 px-3 py-1.5 rounded-md hover:bg-gray-100">Playground</button>
          <a href="#" onClick={(e)=>{e.preventDefault(); scrollToId('hero');}} className="text-sm bg-gray-900 text-white px-3 py-1.5 rounded-md hover:bg-black">Get Started</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;