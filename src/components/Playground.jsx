import React, { useMemo, useState } from 'react';
import { TerminalSquare, Play, Loader2 } from 'lucide-react';

const STARTERS = {
  python: `# Python\nprint('Hello, Python!')`,
  javascript: `// JavaScript\nconsole.log('Hello, JavaScript!')`,
  node: `// Node.js\nconsole.log('Hello from Node.js')`,
  java: `// Java\npublic class Main {\n  public static void main(String[] args){\n    System.out.println("Hello, Java!");\n  }\n}`,
  csharp: `// C#\nusing System;\nclass Program {\n  static void Main(){\n    Console.WriteLine("Hello, C#");\n  }\n}`,
  c: `// C\n#include <stdio.h>\nint main(){ printf("Hello, C\\n"); return 0; }`,
  cpp: `// C++\n#include <bits/stdc++.h>\nusing namespace std;\nint main(){ cout << "Hello, C++\\n"; return 0; }`,
  css: `/* CSS */\nbody {\n  background: linear-gradient(135deg, #eef2ff, #fdf2f8);\n}`,
};

function Playground({ selected }) {
  const [code, setCode] = useState(STARTERS[selected] || '');
  const [running, setRunning] = useState(false);
  const [output, setOutput] = useState('');

  React.useEffect(() => {
    setCode(STARTERS[selected] || '');
    setOutput('');
  }, [selected]);

  const run = async () => {
    setRunning(true);
    setOutput('');

    await new Promise((r) => setTimeout(r, 600));

    const preview = code.split('\n').slice(0, 6).join('\n');
    let result = `Simulated run for ${selected.toUpperCase()}\n---\n${preview}`;
    if (selected === 'css') {
      result = 'CSS applied! (simulation)';
    }
    setOutput(result);
    setRunning(false);
  };

  const label = useMemo(() => {
    const map = { python: 'Python', javascript: 'JavaScript', node: 'Node.js', java: 'Java', csharp: 'C#', c: 'C', cpp: 'C++', css: 'CSS' };
    return map[selected] || 'Code';
  }, [selected]);

  return (
    <section id="playground" className="w-full bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center gap-2 mb-4">
          <TerminalSquare className="h-5 w-5 text-gray-700" />
          <h2 className="text-2xl font-bold text-gray-900">Playground · {label}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
            <div className="flex items-center justify-between px-3 py-2 border-b border-gray-200 bg-gray-50">
              <span className="text-sm text-gray-700">Editor</span>
              <button disabled={running} onClick={run} className="inline-flex items-center gap-2 bg-gray-900 text-white px-3 py-1.5 rounded-md hover:bg-black disabled:opacity-60">
                {running ? <Loader2 className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />} Run
              </button>
            </div>
            <textarea value={code} onChange={(e)=>setCode(e.target.value)} className="w-full h-72 sm:h-80 p-3 font-mono text-sm outline-none" spellCheck={false} />
          </div>
          <div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
            <div className="px-3 py-2 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
              <span className="text-sm text-gray-700">Output</span>
            </div>
            <pre className="w-full h-72 sm:h-80 p-3 font-mono text-sm text-gray-800 overflow-auto whitespace-pre-wrap">{output || 'Run your code to see output here.'}</pre>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-500">Execution is simulated. We can wire a real backend runner next.</p>
      </div>
    </section>
  );
}

export default Playground;