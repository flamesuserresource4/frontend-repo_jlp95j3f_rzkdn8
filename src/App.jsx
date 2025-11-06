import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Curriculum from './components/Curriculum';
import Playground from './components/Playground';
import FAQ from './components/FAQ';

function App() {
  const [selected, setSelected] = React.useState('python');

  const handleStart = () => {
    const el = document.getElementById('tracks');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero onStart={handleStart} />
        <Curriculum onSelect={(key) => {
          setSelected(key);
          const el = document.getElementById('playground');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }} />
        <Playground selected={selected} />
        <FAQ />
      </main>
      <footer className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Vibe Code Academy</span>
          <a className="hover:text-gray-900" href="#hero">Back to top</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
