"use client";
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Droplets, Sun, AlertTriangle } from 'lucide-react';

export default function ResultPage() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
      
      {/* 1. BACKGROUND IMAGE LAYER */}
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
        backgroundColor: 'rgba(253, 252, 251, 0.9)',
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
        
        <Link href="/scan" style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '8px', color: '#4A6741', textDecoration: 'none', marginBottom: '30px', fontSize: '14px', fontWeight: '600' }}>
          <ArrowLeft size={18} /> New Scan
        </Link>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ color: '#E67E22', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <AlertTriangle size={24} />
            <span style={{ fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px' }}>Diagnosis Complete</span>
          </div>
          <h1 style={{ fontSize: '42px', color: '#1A1C19', margin: '0' }}>Leaf Rust</h1>
          <p style={{ color: '#7A8278', marginTop: '10px', fontSize: '18px' }}>Found on: Monarda (Bee Balm)</p>
        </div>

        <div style={{ width: '100%', maxWidth: '600px', backgroundColor: 'white', borderRadius: '45px', padding: '40px', border: '1px solid #f0f0f0', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
          <h3 style={{ fontSize: '22px', color: '#1A1C19', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>How to Cure</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ backgroundColor: '#F3F7E9', padding: '10px', borderRadius: '12px', height: 'fit-content' }}>
                <Droplets color="#4A6741" size={20} />
              </div>
              <div>
                <strong style={{ display: 'block', marginBottom: '5px', color: '#1A1C19' }}>1. Water Management</strong>
                <p style={{ margin: 0, fontSize: '14px', color: '#666', lineHeight: '1.5' }}>Avoid overhead watering. Water only at the base to keep leaves dry.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ backgroundColor: '#F3F7E9', padding: '10px', borderRadius: '12px', height: 'fit-content' }}>
                <Sun color="#4A6741" size={20} />
              </div>
              <div>
                <strong style={{ display: 'block', marginBottom: '5px', color: '#1A1C19' }}>2. Increase Airflow</strong>
                <p style={{ margin: 0, fontSize: '14px', color: '#666', lineHeight: '1.5' }}>Thin out dense patches to help foliage dry faster.</p>
              </div>
            </div>
          </div>

          <Link href="/history" style={{ textDecoration: 'none' }}>
            <button style={{ 
              width: '100%', 
              marginTop: '40px', 
              backgroundColor: '#2D4A23', 
              color: 'white', 
              padding: '18px', 
              borderRadius: '30px', 
              border: 'none', 
              fontWeight: '600', 
              cursor: 'pointer', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '10px',
              boxShadow: '0 10px 20px rgba(45, 74, 35, 0.15)'
            }}>
              <CheckCircle2 size={20} /> Add to Treatment History
            </button>
          </Link>
        </div>

        <footer style={{ marginTop: 'auto', paddingTop: '60px', color: '#B2B9B0', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}>
          Nivara Botanical Diagnosis Result
        </footer>
      </div>
    </div>
  );
}