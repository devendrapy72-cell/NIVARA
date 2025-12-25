"use client";
import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, History, Leaf, Clock, 
  ChevronRight, Globe, Moon, Sun, Camera,
  Sprout, CheckCircle2, RotateCcw
} from 'lucide-react';

export default function TrackerPage() {
  const [lang, setLang] = useState('EN'); 
  const [isDark, setIsDark] = useState(false);

  // State to manage plant treatments dynamically
  const [treatments, setTreatments] = useState([
    {
      id: 1,
      plant: "Monarda (Bee Balm)",
      issue: "Leaf Rust",
      progress: 65,
      severity: "Moderate",
      cure: "Apply Copper Fungicide and prune infected lower leaves to stop fungal spores.",
      schedule: "Apply every 7 days; next dose: Tomorrow Morning.",
      isDone: false,
      icon: <History size={24} color="#4A6741" />
    },
    {
      id: 2,
      plant: "Tomato Crop",
      issue: "Early Blight",
      progress: 15,
      severity: "High",
      cure: "Remove 2 inches of soil surface to remove spores. Use Neem oil spray.",
      schedule: "Apply at sunset to avoid leaf burn; next dose: In 4 hours.",
      isDone: false,
      icon: <Leaf size={24} color="#E67E22" />
    }
  ]);

  // Function to handle dose completion
  const handleMarkDone = (id: number) => {
    setTreatments(prev => prev.map(item => {
      if (item.id === id && !item.isDone) {
        return { 
          ...item, 
          progress: Math.min(item.progress + 10, 100), // Increase progress by 10%
          isDone: true 
        };
      }
      return item;
    }));
  };

  // Function to reset the dose for the next day
  const handleReset = (id: number) => {
    setTreatments(prev => prev.map(item => 
      item.id === id ? { ...item, isDone: false } : item
    ));
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
      
      {/* BACKGROUND & OVERLAY */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundImage: "url('/aes1.png')", backgroundSize: 'cover', backgroundPosition: 'center', zIndex: -2 }} />
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: isDark ? 'rgba(18, 20, 18, 0.9)' : 'rgba(253, 252, 251, 0.8)', zIndex: -1 }} />

      {/* TOP CONTROLS */}
      <div style={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', gap: '12px', zIndex: 100 }}>
        <button onClick={() => setIsDark(!isDark)} style={{ background: '#FFF', border: '1px solid #EEE', padding: '8px 12px', borderRadius: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <div style={{ backgroundColor: '#FFF', padding: '8px 15px', borderRadius: '20px', border: '1px solid #EEE', display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Globe size={14} color="#4A6741" />
          <button onClick={() => setLang('EN')} style={{ background: 'none', border: 'none', fontSize: '11px', cursor: 'pointer', fontWeight: lang === 'EN' ? 'bold' : 'normal', color: lang === 'EN' ? '#4A6741' : '#7A8278' }}>EN</button>
          <button onClick={() => setLang('HI')} style={{ background: 'none', border: 'none', fontSize: '11px', cursor: 'pointer', fontWeight: lang === 'HI' ? 'bold' : 'normal', color: lang === 'HI' ? '#4A6741' : '#7A8278' }}>HI</button>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'serif', padding: '40px 24px' }}>
        
        <Link href="/" style={{ alignSelf: 'flex-start', color: '#4A6741', textDecoration: 'none', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 'bold' }}>
          <ArrowLeft size={18} /> BACK
        </Link>

        {/* HEADER SECTION */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ width: '80px', height: '80px', backgroundColor: 'white', borderRadius: '25px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <History size={40} color="#4A6741" />
          </div>
          <h1 style={{ fontSize: '42px', margin: '0', color: '#1A1C19' }}>Recovery Tracker</h1>
          <p style={{ fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#4A6741', marginTop: '10px', fontWeight: 'bold' }}>Progress & Adherence</p>
        </div>

        {/* FEATURE GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '30px', width: '100%', maxWidth: '1000px' }}>
          {treatments.map((item) => (
            <div key={item.id} style={{ 
              backgroundColor: '#FFFFFF', 
              padding: '35px', 
              borderRadius: '40px', 
              boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              opacity: item.progress === 100 ? 0.8 : 1,
              transition: 'all 0.3s ease'
            }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div style={{ backgroundColor: '#F3F7E9', borderRadius: '15px', padding: '15px' }}>
                  {item.icon}
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '10px', padding: '5px 12px', backgroundColor: item.isDone ? '#4A6741' : '#F3F7E9', color: item.isDone ? '#FFF' : '#4A6741', borderRadius: '15px', fontWeight: 'bold', transition: '0.3s' }}>
                    {item.isDone ? 'DOSE COMPLETED' : item.severity}
                  </span>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#4A6741', marginTop: '5px' }}>{item.progress}%</div>
                </div>
              </div>

              <div>
                <h3 style={{ margin: 0, fontSize: '26px', color: '#1A1C19' }}>{item.plant}</h3>
                <p style={{ margin: '5px 0 0', color: '#E67E22', fontWeight: 'bold', fontSize: '14px' }}>Issue: {item.issue}</p>
              </div>

              <div style={{ width: '100%', height: '8px', backgroundColor: '#F0F0F0', borderRadius: '10px', overflow: 'hidden' }}>
                <div style={{ width: `${item.progress}%`, height: '100%', backgroundColor: item.progress === 100 ? '#27ae60' : '#4A6741', transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)' }} />
              </div>

              <div style={{ borderTop: '1px solid #F0F0F0', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <Sprout size={20} color="#4A6741" />
                  <div>
                    <strong style={{ display: 'block', fontSize: '14px' }}>How to Cure:</strong>
                    <p style={{ margin: '3px 0 0', fontSize: '14px', color: '#555', lineHeight: '1.5' }}>{item.cure}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <Clock size={20} color="#4A6741" />
                  <div>
                    <strong style={{ display: 'block', fontSize: '14px' }}>When to Treat:</strong>
                    <p style={{ margin: '3px 0 0', fontSize: '14px', color: '#555', lineHeight: '1.5' }}>{item.schedule}</p>
                  </div>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              {item.isDone ? (
                <button 
                  onClick={() => handleReset(item.id)}
                  style={{ width: '100%', backgroundColor: '#f8f9fa', border: '1px dashed #ccc', padding: '15px', borderRadius: '20px', color: '#777', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <RotateCcw size={18} /> UNDO / RESET FOR NEXT DOSE
                </button>
              ) : (
                <button 
                  onClick={() => handleMarkDone(item.id)}
                  style={{ width: '100%', backgroundColor: '#4A6741', border: 'none', padding: '15px', borderRadius: '20px', color: 'white', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', boxShadow: '0 4px 12px rgba(74, 103, 65, 0.2)' }}>
                  <CheckCircle2 size={18} /> MARK DOSE AS DONE
                </button>
              )}
            </div>
          ))}
        </div>

        <footer style={{ marginTop: '80px', fontSize: '10px', color: '#7A8278', letterSpacing: '3px', fontWeight: 'bold' }}>© 2025 NIVARA</footer>
      </div>
    </div>
  );
}