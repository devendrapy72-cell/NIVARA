"use client";
import { useEffect, useState } from 'react';
import { Trash2, Leaf, ArrowLeft, Clock } from 'lucide-react';
import Link from 'next/link';

export default function HistoryPage() {
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('nivara_history');
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  const deleteItem = (id: number) => {
    const updated = history.filter(item => item.id !== id);
    setHistory(updated);
    localStorage.setItem('nivara_history', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-[#F4F7F2] p-8 text-[#2D5A27]">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 mb-6 text-stone-500"><ArrowLeft size={18} /> Back</Link>
        <h1 className="text-3xl font-bold mb-8">Scan History</h1>
        {history.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-stone-200">
            <Leaf size={48} className="mx-auto mb-4 text-stone-200" />
            <p className="text-stone-400 font-medium">No history recorded.</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {history.map((item) => (
              <div key={item.id} className="bg-white p-5 rounded-2xl shadow-sm flex items-center justify-between border border-stone-50">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-50 p-3 rounded-xl"><Leaf size={24} /></div>
                  <div>
                    <h3 className="font-bold text-lg text-stone-800">{item.disease}</h3>
                    <p className="text-xs text-stone-400 flex items-center gap-1"><Clock size={12}/> {item.date}</p>
                  </div>
                </div>
                <button onClick={() => deleteItem(item.id)} className="text-stone-300 hover:text-red-500 transition-colors"><Trash2 size={20}/></button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}