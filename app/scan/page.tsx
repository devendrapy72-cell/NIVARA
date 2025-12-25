"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Camera, Upload, Loader2, Globe, Moon, Sun } from 'lucide-react';

export default function ScanPage() {
  const [lang, setLang] = useState('EN'); 
  const [isDark, setIsDark] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [streamActive, setStreamActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();

  // Theme configuration
  const theme = {
    bg: isDark ? 'rgba(18, 20, 18, 0.92)' : 'rgba(253, 252, 251, 0.88)',
    card: isDark ? '#1A1C19' : '#FFFFFF',
    text: isDark ? '#FDFCFB' : '#1A1C19',
    subtext: isDark ? '#AAB3A8' : '#7A8278',
    border: isDark ? '#2D312C' : '#F2F2F2',
    accent: '#4A6741'
  };

  const translations = {
    EN: { title: "Plant Scanner", subtitle: "Position the leaf clearly in the frame", identify: "Identify Disease", upload: "Upload Image", status: "Waiting for camera...", analyzing: "ANALYZING PLANT..." },
    HI: { title: "प्लांट स्कैनर", subtitle: "पत्ती को फ्रेम में स्पष्ट रूप से रखें", identify: "बीमारी की पहचान करें", upload: "छवि अपलोड करें", status: "कैमरे की प्रतीक्षा कर रहा है...", analyzing: "पौधे का विश्लेषण..." }
  };

  const t = lang === 'HI' ? translations.HI : translations.EN;

  // Start Camera
  useEffect(() => {
    async function setupCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } } 
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setStreamActive(true);
        }
      } catch (err) {
        console.error("Camera error:", err);
      }
    }
    setupCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  const handleCapture = () => {
    setIsScanning(true);
    setTimeout(() => {
      router.push('/result');
    }, 2000);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%', color: theme.text }}>
      
      {/* BACKGROUND IMAGE LAYER */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundImage: "url('/aes1.png')", backgroundSize: 'cover', backgroundPosition: 'center', zIndex: -2 }} />
      
      {/* SOLID OVERLAY */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: theme.bg, zIndex: -1, transition: 'background-color 0.4s ease' }} />

      {/* TOP CONTROLS: Language & Dark Mode */}
      <div style={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', gap: '12px', zIndex: 20 }}>
        <button onClick={() => setIsDark(!isDark)} style={{ background: theme.card, border: `1px solid ${theme.border}`, padding: '8px 12px', borderRadius: '20px', cursor: 'pointer', color: theme.text, boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <div style={{ backgroundColor: theme.card, padding: '8px 15px', borderRadius: '20px', border: `1px solid ${theme.border}`, display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Globe size={14} color={theme.accent} />
          <button onClick={() => setLang('EN')} style={{ background: 'none', border: 'none', fontSize: '11px', cursor: 'pointer', fontWeight: lang === 'EN' ? 'bold' : 'normal', color: lang === 'EN' ? theme.accent : theme.subtext }}>EN</button>
          <button onClick={() => setLang('HI')} style={{ background: 'none', border: 'none', fontSize: '11px', cursor: 'pointer', fontWeight: lang === 'HI' ? 'bold' : 'normal', color: lang === 'HI' ? theme.accent : theme.subtext }}>हिन्दी</button>
        </div>
      </div>

      {/* CONTENT LAYER */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'serif', padding: '60px 20px', minHeight: '100vh' }}>
        <Link href="/" style={{ alignSelf: 'flex-start', color: theme.accent, textDecoration: 'none', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 'bold' }}>
          <ArrowLeft size={20} /> Home
        </Link>

        <h1 style={{ fontSize: '42px', marginBottom: '10px' }}>{t.title}</h1>
        <p style={{ color: theme.subtext, marginBottom: '30px' }}>{t.subtitle}</p>

        {/* Camera Container */}
        <div style={{ width: '100%', maxWidth: '450px', position: 'relative', marginBottom: '25px' }}>
          <div style={{ width: '100%', aspectRatio: '4/3', backgroundColor: '#1a1a1a', borderRadius: '30px', overflow: 'hidden', border: `4px solid ${theme.card}`, boxShadow: '0 15px 35px rgba(0,0,0,0.2)' }}>
            <video ref={videoRef} autoPlay playsInline muted style={{ width: '100%', height: '100%', objectFit: 'cover', display: streamActive ? 'block' : 'none' }} />
            {!streamActive && (
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: theme.accent }}>
                <Camera size={40} />
                <p style={{ fontSize: '12px', marginTop: '10px' }}>{t.status}</p>
              </div>
            )}
            {isScanning && (
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', zIndex: 10 }}>
                <Loader2 style={{ animation: 'spin 1s linear infinite' }} size={40} />
                <p style={{ marginTop: '15px', fontWeight: 'bold', letterSpacing: '2px' }}>{t.analyzing}</p>
              </div>
            )}
          </div>
        </div>

        {/* Buttons Section */}
        <div style={{ width: '100%', maxWidth: '450px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <button onClick={handleCapture} disabled={!streamActive || isScanning} style={{ backgroundColor: streamActive ? theme.accent : '#ccc', color: 'white', padding: '20px', borderRadius: '25px', border: 'none', fontSize: '18px', fontWeight: '600', cursor: 'pointer', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
            {isScanning ? '...' : t.identify}
          </button>
          <div style={{ textAlign: 'center', color: theme.subtext, fontSize: '14px' }}>— OR —</div>
          <label style={{ backgroundColor: theme.card, color: theme.accent, padding: '15px', borderRadius: '25px', border: `1px solid ${theme.border}`, textAlign: 'center', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontWeight: 'bold' }}>
            <Upload size={18} /> {t.upload}
            <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handleCapture} />
          </label>
        </div>

        <footer style={{ marginTop: 'auto', paddingTop: '40px', color: theme.subtext, fontSize: '10px', letterSpacing: '3px' }}>© 2025 NIVARA AI SYSTEMS</footer>
      </div>
      <style jsx>{` @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } } `}</style>
    </div>
  );
}