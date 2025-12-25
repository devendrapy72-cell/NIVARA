"use client";
import React, { useState } from 'react';
import { Info, ArrowLeft, Search } from 'lucide-react';
import Link from 'next/link';

const DISEASES_DB = [
  { name: "Leaf Spot", plants: "Beets, Spinach", symptoms: "Circular brown spots.", prevention: "Avoid overhead watering." },
  { name: "Black Spot", plants: "Roses", symptoms: "Circular black spots.", prevention: "Improve air circulation." },
  { name: "Powdery Mildew", plants: "Grapes, Roses", symptoms: "White flour-like spots.", prevention: "Apply neem oil." }
];

export default function DiseasesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const filtered = DISEASES_DB.filter(d => d.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#F4F7F2] p-8 text-[#2D5A27]">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 mb-6 text-stone-500"><ArrowLeft size={18} /> Back</Link>
        <h1 className="text-3xl font-bold mb-6">Common Diseases</h1>
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
          <input 
            type="text" placeholder="Search diseases..." 
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-stone-200 shadow-sm outline-none focus:ring-2 focus:ring-[#2D5A27]"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid gap-4">
          {filtered.map((d, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><Info size={18} /> {d.name}</h3>
              <p className="text-sm text-emerald-700 font-bold mb-1 italic">Plants: {d.plants}</p>
              <p className="text-sm text-stone-600 mb-2"><strong>Symptoms:</strong> {d.symptoms}</p>
              <p className="text-sm bg-stone-50 p-3 rounded-xl border border-stone-100"><strong>Tip:</strong> {d.prevention}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}