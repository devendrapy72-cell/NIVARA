"use client";
import Link from 'next/link';
import { ArrowLeft, Leaf } from 'lucide-react';

export default function HistoryPage() {
  const scans = [
    { id: 1, plant: "Monarda", disease: "Leaf Rust", date: "Dec 25, 2025", status: "In Treatment" },
    { id: 2, plant: "Tomato", disease: "Early Blight", date: "Dec 20, 2025", status: "Recovered" },
  ];

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
      
      {/* 1. BACKGROUND IMAGE LAYER - Ensure /aes1.png is in your 'public' folder */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundImage: "url('/aes1.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        zIndex: -2
      }} />

      {/* 2. SOLID OVERLAY FOR READABILITY */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(253, 252, 251, 0.9)', // Adjusted opacity to 0.9 for better image visibility
        zIndex: -1
      }} />

      {/* 3. CONTENT LAYER */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        fontFamily: 'serif', 
        padding: '60px 20px', 
        minHeight: '100vh',
        position: 'relative',
        zIndex: 1
      }}>
        
        <div style={{ width: '100%', maxWidth: '600px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4A6741', textDecoration: 'none', marginBottom: '40px', fontWeight: '600' }}>
            <ArrowLeft size={18} /> Back to Home
          </Link>

          <h1 style={{ fontSize: '42px', color: '#1A1C19', marginBottom: '40px' }}>Scan History</h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {scans.map((scan) => (
              <div key={scan.id} style={{ 
                backgroundColor: 'white', 
                padding: '25px', 
                borderRadius: '35px', 
                border: '1px solid #f0f0f0', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)' 
              }}>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div style={{ backgroundColor: '#F3F7E9', borderRadius: '15px', padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Leaf color="#4A6741" size={24} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '18px', color: '#1A1C19' }}>{scan.plant}</h3>
                    <p style={{ margin: 0, fontSize: '14px', color: '#E67E22', fontWeight: '500' }}>{scan.disease}</p>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '12px', color: '#999', marginBottom: '8px' }}>{scan.date}</div>
                  <span style={{ 
                    fontSize: '11px', 
                    backgroundColor: scan.status === 'Recovered' ? '#E8F5E9' : '#FFF3E0', 
                    color: scan.status === 'Recovered' ? '#2E7D32' : '#EF6C00', 
                    padding: '6px 14px', 
                    borderRadius: '20px', 
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {scan.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer style={{ marginTop: 'auto', paddingTop: '60px', color: '#B2B9B0', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}>
          Nivara Health Archives
        </footer>
      </div>
    </div>
  );
}