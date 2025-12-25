"use client";
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Search, Leaf, ChevronRight, X, Droplets, Sun, Sprout } from 'lucide-react';

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDisease, setSelectedDisease] = useState<any>(null);

  const diseaseData = [
    { 
      id: 1, 
      name: "Leaf Rust", 
      plant: "Coffee, Wheat, Roses", 
      severity: "Moderate",
      cure: [
        { icon: <Droplets size={18}/>, title: "Watering", desc: "Water at the base only; keep leaves dry." },
        { icon: <Sun size={18}/>, title: "Airflow", desc: "Space plants out to allow better circulation." },
        { icon: <Sprout size={18}/>, title: "Removal", desc: "Prune and burn infected leaves immediately." }
      ]
    },
    { 
      id: 2, 
      name: "Powdery Mildew", 
      plant: "Cucumbers, Grapes, Apples", 
      severity: "High",
      cure: [
        { icon: <Droplets size={18}/>, title: "Fungicide", desc: "Apply neem oil or sulfur-based sprays." },
        { icon: <Sun size={18}/>, title: "Sunlight", desc: "Move plants to a location with more direct sun." },
        { icon: <Sprout size={18}/>, title: "Cleaning", desc: "Wipe leaves with a milk-water solution (1:9)." }
      ]
    },
    { 
      id: 3, 
      name: "Root Rot", 
      plant: "Indoor Plants, Monstera", 
      severity: "Critical",
      cure: [
        { icon: <Droplets size={18}/>, title: "Drainage", desc: "Repot in fresh soil with better drainage holes." },
        { icon: <Sprout size={18}/>, title: "Surgery", desc: "Cut away mushy, black roots with sterile scissors." },
        { icon: <X size={18}/>, title: "Dry Out", desc: "Stop watering until the top 2 inches of soil are dry." }
      ]
    }
  ];

  const filteredDiseases = diseaseData.filter(d => 
    d.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    d.plant.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      
      {/* BACKGROUND IMAGE LAYER */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: "url('/aes1.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -2
      }} />

      {/* SOLID OVERLAY FOR READABILITY */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(253, 252, 251, 0.9)',
        zIndex: -1
      }} />

      {/* CONTENT LAYER */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'serif', padding: '60px 20px' }}>
        
        <div style={{ width: '100%', maxWidth: '800px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4A6741', textDecoration: 'none', marginBottom: '30px', fontSize: '14px', fontWeight: '600' }}>
            <ArrowLeft size={18} /> Back to Home
          </Link>
          <h1 style={{ fontSize: '42px', color: '#1A1C19', marginBottom: '40px' }}>Botanical Library</h1>

          <div style={{ position: 'relative', marginBottom: '40px' }}>
            <Search style={{ position: 'absolute', left: '20px', top: '20px', color: '#4A6741' }} size={20} />
            <input 
              type="text" 
              placeholder="Search diseases or crops..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: '100%', padding: '20px 20px 20px 60px', borderRadius: '30px', border: '1px solid #eee', fontSize: '16px', outline: 'none', backgroundColor: 'white', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }} 
            />
          </div>

          {/* List */}
          <div style={{ display: 'grid', gap: '15px' }}>
            {filteredDiseases.map(disease => (
              <div 
                key={disease.id} 
                onClick={() => setSelectedDisease(disease)}
                style={{ backgroundColor: 'white', padding: '25px', borderRadius: '30px', border: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}
              >
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <Leaf color="#4A6741" />
                  <div>
                    <h3 style={{ margin: 0, color: '#1A1C19' }}>{disease.name}</h3>
                    <p style={{ margin: 0, fontSize: '13px', color: '#7A8278' }}>Crops: {disease.plant}</p>
                  </div>
                </div>
                <ChevronRight size={20} color="#D1D5DB" />
              </div>
            ))}
          </div>
        </div>

        {/* LUXURY CURE OVERLAY */}
        {selectedDisease && (
          <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: '20px' }}>
            <div style={{ backgroundColor: 'white', width: '100%', maxWidth: '500px', borderRadius: '45px', padding: '40px', position: 'relative', boxShadow: '0 20px 50px rgba(0,0,0,0.2)' }}>
              <button onClick={() => setSelectedDisease(null)} style={{ position: 'absolute', right: '30px', top: '30px', border: 'none', background: '#f5f5f5', borderRadius: '50%', padding: '10px', cursor: 'pointer' }}>
                <X size={20} />
              </button>

              <span style={{ fontSize: '12px', color: '#4A6741', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>Treatment Guide</span>
              <h2 style={{ fontSize: '32px', marginTop: '10px', marginBottom: '5px', color: '#1A1C19' }}>{selectedDisease.name}</h2>
              <p style={{ color: '#7A8278', marginBottom: '30px' }}>Recommended actions for recovery</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {selectedDisease.cure.map((step: any, idx: number) => (
                  <div key={idx} style={{ display: 'flex', gap: '15px' }}>
                    <div style={{ backgroundColor: '#F3F7E9', padding: '12px', borderRadius: '15px', height: 'fit-content', color: '#4A6741' }}>{step.icon}</div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '16px', color: '#1A1C19' }}>{step.title}</strong>
                      <p style={{ margin: 0, fontSize: '14px', color: '#666', lineHeight: '1.4' }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button onClick={() => setSelectedDisease(null)} style={{ width: '100%', marginTop: '30px', backgroundColor: '#2D4A23', color: 'white', padding: '18px', borderRadius: '25px', border: 'none', fontWeight: 'bold', cursor: 'pointer', transition: 'background-color 0.2s' }}>
                Got it, thanks!
              </button>
            </div>
          </div>
        )}
        
        <footer style={{ marginTop: 'auto', paddingTop: '60px', color: '#B2B9B0', fontSize: '10px', letterSpacing: '3px' }}>
          NIVARA BOTANICAL KNOWLEDGE BASE
        </footer>
      </div>
    </div>
  );
}