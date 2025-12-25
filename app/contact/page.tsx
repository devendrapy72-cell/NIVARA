"use client";
import Link from 'next/link';
import { ArrowLeft, Mail, MapPin } from 'lucide-react';

export default function Contact() {
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
        
        <div style={{ width: '100%', maxWidth: '500px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4A6741', textDecoration: 'none', marginBottom: '40px', fontSize: '14px', fontWeight: '600' }}>
            <ArrowLeft size={18} /> Back to Home
          </Link>
          
          <h1 style={{ fontSize: '42px', color: '#1A1C19', marginBottom: '30px' }}>Contact Us</h1>
          
          <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '40px', border: '1px solid #f0f0f0', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
            <div style={{ marginBottom: '35px' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#4A6741', fontSize: '18px', marginBottom: '10px' }}>
                <Mail size={20}/> Email
              </h3>
              <p style={{ color: '#666', fontSize: '16px', margin: 0 }}>support@nivara.com</p>
            </div>
            
            <div style={{ marginBottom: '10px' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#4A6741', fontSize: '18px', marginBottom: '10px' }}>
                <MapPin size={20}/> Location
              </h3>
              <p style={{ color: '#666', fontSize: '16px', margin: 0, lineHeight: '1.5' }}>
                Botanical Research Center,<br />
                Digital Valley
              </p>
            </div>
          </div>
        </div>

        <footer style={{ marginTop: 'auto', paddingTop: '100px', color: '#B2B9B0', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}>
          Nivara Botanical Systems • Support
        </footer>
      </div>
    </div>
  );
}