"use client";
import React, { useState } from 'react';
import { Upload, Loader2, CheckCircle2, ArrowLeft, Camera } from 'lucide-react';
import Link from 'next/link';

export default function ScanPage() {
  const [image, setImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setAnalyzing(true);
      setResult(null);
      
      setTimeout(() => {
        const mockResult = {
          id: Date.now(),
          disease: "Early Blight",
          severity: "Medium",
          date: new Date().toLocaleDateString(),
          solution: "Remove infected leaves and apply a copper-based fungicide."
        };
        setResult(mockResult);
        setAnalyzing(false);

        const existingHistory = JSON.parse(localStorage.getItem('nivara_history') || '[]');
        localStorage.setItem('nivara_history', JSON.stringify([mockResult, ...existingHistory]));
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F7F2] p-6 text-[#2D5A27]">
      <div className="max-w-xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 mb-6 text-stone-500">
          <ArrowLeft size={18} /> Back
        </Link>
        <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-stone-200">
          {!image ? (
            <label className="border-2 border-dashed border-stone-200 rounded-3xl p-12 flex flex-col items-center cursor-pointer hover:bg-stone-50">
              <Camera size={40} className="text-[#2D5A27] mb-4" />
              <span className="font-bold text-lg text-stone-700">Upload Leaf Photo</span>
              <input type="file" accept="image/*" className="hidden" onChange={handleUpload} />
            </label>
          ) : (
            <div className="space-y-6">
              <img src={image} className="w-full h-64 object-cover rounded-2xl" alt="Preview" />
              {analyzing ? (
                <div className="flex flex-col items-center py-4 text-stone-500">
                  <Loader2 className="animate-spin mb-2" />
                  <p>Analyzing patterns...</p>
                </div>
              ) : result && (
                <div className="bg-emerald-50 p-5 rounded-2xl border-l-4 border-[#2D5A27]">
                  <h3 className="text-xl font-bold mb-2">{result.disease}</h3>
                  <p className="text-emerald-800 text-sm mb-4">{result.solution}</p>
                  <button onClick={() => {setImage(null); setResult(null);}} className="text-xs underline text-stone-400">Scan New</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}