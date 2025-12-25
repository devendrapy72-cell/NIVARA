"use client";
import Link from 'next/link';
import { Leaf, History, BookOpen, Camera, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4F7F2] text-[#2D5A27] font-sans">
      <main className="max-w-4xl mx-auto px-6 py-16 flex flex-col items-center text-center">
        
        <div className="mb-10 flex flex-col items-center">
          <div className="bg-white p-5 rounded-full shadow-sm mb-6 border border-emerald-50">
            <Leaf size={56} className="text-[#4A7c44]" />
          </div>
          <h1 className="text-6xl font-bold tracking-tight mb-2">Nivara</h1>
          <p className="text-xl italic text-[#5C715E]">Rooted in Nature. Driven by Insight.</p>
        </div>

        <div className="w-full max-w-md bg-white p-8 rounded-[2.5rem] shadow-sm border border-stone-100 mb-10">
          <h2 className="text-lg font-bold mb-4 text-stone-800">Start Analysis</h2>
          <Link href="/scan" className="group flex items-center justify-between bg-[#2D5A27] text-white p-5 rounded-2xl hover:bg-[#1f3f1b] transition-all shadow-lg text-lg font-medium">
            <div className="flex items-center gap-3">
              <Camera size={24} />
              <span>Scan a Leaf</span>
            </div>
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
          <Link href="/diseases" className="group p-6 bg-white rounded-3xl border border-stone-200 hover:border-[#2D5A27] hover:shadow-md transition-all text-left">
            <div className="bg-emerald-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-[#2D5A27]">
              <BookOpen size={24} />
            </div>
            <h3 className="font-bold text-xl mb-1 group-hover:text-[#2D5A27]">Library</h3>
            <p className="text-sm text-stone-500">Browse common diseases and treatment guides.</p>
          </Link>

          <Link href="/history" className="group p-6 bg-white rounded-3xl border border-stone-200 hover:border-[#2D5A27] hover:shadow-md transition-all text-left">
            <div className="bg-orange-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-[#8B5E3C]">
              <History size={24} />
            </div>
            <h3 className="font-bold text-xl mb-1 group-hover:text-[#2D5A27]">History</h3>
            <p className="text-sm text-stone-500">Access and manage your previous plant scans.</p>
          </Link>
        </div>
      </main>
    </div>
  );
}