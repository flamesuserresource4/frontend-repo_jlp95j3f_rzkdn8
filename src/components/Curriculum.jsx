import React from 'react';
import { BookOpen, ChevronRight } from 'lucide-react';

const tracks = [
  { key: 'python', name: 'Python', color: 'from-emerald-500 to-teal-500', blurb: 'Beginner-friendly, data science ready.' },
  { key: 'javascript', name: 'JavaScript', color: 'from-yellow-500 to-orange-500', blurb: 'The language of the web.' },
  { key: 'node', name: 'Node.js', color: 'from-lime-600 to-green-600', blurb: 'Backend JavaScript runtime.' },
  { key: 'java', name: 'Java', color: 'from-indigo-600 to-blue-600', blurb: 'Enterprise-grade, strongly typed.' },
  { key: 'csharp', name: 'C#', color: 'from-violet-600 to-purple-600', blurb: 'Modern, powerful, cross-platform.' },
  { key: 'c', name: 'C', color: 'from-sky-600 to-cyan-600', blurb: 'Low-level systems programming.' },
  { key: 'cpp', name: 'C++', color: 'from-fuchsia-600 to-pink-600', blurb: 'High performance and control.' },
  { key: 'css', name: 'CSS', color: 'from-blue-500 to-indigo-500', blurb: 'Design and layout for the web.' },
];

function Curriculum({ onSelect }) {
  return (
    <section id="tracks" className="w-full">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className="h-5 w-5 text-gray-700" />
          <h2 className="text-2xl font-bold text-gray-900">Choose your learning path</h2>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
          {tracks.map((t) => (
            <button key={t.key} onClick={() => onSelect(t.key)} className="group text-left rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition p-4">
              <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${t.color} mb-3`} />
              <div className="font-semibold text-gray-900">{t.name}</div>
              <div className="text-sm text-gray-600 mt-1">{t.blurb}</div>
              <div className="mt-3 inline-flex items-center text-sm text-gray-700 group-hover:text-gray-900">
                Explore <ChevronRight className="h-4 w-4 ml-1" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Curriculum;