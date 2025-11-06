import React from 'react';
import { HelpCircle, CheckCircle2 } from 'lucide-react';

function FAQ() {
  const items = [
    {
      q: 'What languages are covered?',
      a: 'Python, JavaScript, Node.js, Java, C#, C, C++, and CSS. More coming soon.'
    },
    {
      q: 'Is the code runner real?',
      a: 'Currently simulated for safety. We can connect a real backend to execute securely.'
    },
    {
      q: 'Do I need prior experience?',
      a: 'No. The curriculum starts from the basics and progresses to real projects.'
    },
  ];

  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center gap-2 mb-6">
          <HelpCircle className="h-5 w-5 text-gray-700" />
          <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <div key={i} className="rounded-xl border border-gray-200 bg-white p-5">
              <div className="font-semibold text-gray-900 flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                {it.q}
              </div>
              <p className="text-sm text-gray-600 mt-2">{it.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;