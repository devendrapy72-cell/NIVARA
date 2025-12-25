"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Send, Image as ImageIcon } from 'lucide-react';

export default function NewPostPage() {
  const router = useRouter();
  const [isPublishing, setIsPublishing] = useState(false);

  const handlePublish = () => {
    setIsPublishing(true);
    // Simulate saving the post
    setTimeout(() => {
      router.push('/community');
    }, 1500);
  };

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
        
        <div style={{ width: '100%', maxWidth: '600px' }}>
          <Link href="/community" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4A6741', textDecoration: 'none', marginBottom: '40px', fontSize: '14px', fontWeight: '600' }}>
            <ArrowLeft size={18} /> Back to Forum
          </Link>

          <h1 style={{ fontSize: '38px', color: '#1A1C19', marginBottom: '30px' }}>Create Post</h1>

          <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '45px', border: '1px solid #f0f0f0', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
            <input 
              type="text" 
              placeholder="Subject of your plant issue..." 
              style={{ width: '100%', padding: '15px 0', border: 'none', borderBottom: '1px solid #eee', fontSize: '20px', outline: 'none', marginBottom: '25px', fontFamily: 'serif', backgroundColor: 'transparent' }} 
            />
            
            <textarea 
              placeholder="Describe the symptoms, plant type, and environment..." 
              style={{ width: '100%', height: '200px', border: 'none', fontSize: '16px', outline: 'none', resize: 'none', fontFamily: 'sans-serif', lineHeight: '1.6', color: '#555', backgroundColor: 'transparent' }} 
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #f5f5f5' }}>
              <button style={{ background: '#F3F7E9', border: 'none', padding: '12px 20px', borderRadius: '20px', color: '#4A6741', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: '600' }}>
                <ImageIcon size={18} /> Add Photo
              </button>
              
              <button 
                onClick={handlePublish}
                disabled={isPublishing}
                style={{ backgroundColor: '#2D4A23', color: 'white', border: 'none', padding: '15px 35px', borderRadius: '30px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', transition: 'opacity 0.2s' }}
              >
                {isPublishing ? "Publishing..." : <><Send size={18} /> Publish</>}
              </button>
            </div>
          </div>
        </div>

        <footer style={{ marginTop: 'auto', paddingTop: '60px', color: '#B2B9B0', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}>
          Nivara Botanical Systems • New Entry
        </footer>
      </div>
    </div>
  );
}