"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Send, Star, CheckCircle2 } from 'lucide-react';

export default function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [isSent, setIsSent] = useState(false);
  const [hover, setHover] = useState(0);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    
    // Safety redirect after 3 seconds
    setTimeout(() => {
      router.push('/');
    }, 3000);
  };

  // Success View with Background Consistency
  if (isSent) {
    return (
      <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'serif', padding: '20px' }}>
        {/* Background Layers */}
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: "url('/aes1.png')", backgroundSize: 'cover', backgroundPosition: 'center', zIndex: -2 }} />
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(253, 252, 251, 0.9)', zIndex: -1 }} />

        <div style={{ textAlign: 'center', backgroundColor: 'white', padding: '50px', borderRadius: '50px', boxShadow: '0 20px 50px rgba(0,0,0,0.05)', animation: 'fadeIn 0.8s ease-out' }}>
          <div style={{ backgroundColor: '#F3F7E9', padding: '30px', borderRadius: '50%', marginBottom: '25px', display: 'inline-block' }}>
            <CheckCircle2 size={60} color="#4A6741" />
          </div>
          <h1 style={{ fontSize: '38px', color: '#1A1C19', marginBottom: '10px' }}>Feedback Received</h1>
          <p style={{ color: '#7A8278', fontSize: '18px', maxWidth: '400px', lineHeight: '1.6', margin: '0 auto' }}>
            Thank you for helping us grow. Your insights are being reviewed by our botanical team.
          </p>
          <Link href="/" style={{ marginTop: '30px', display: 'inline-block', color: '#4A6741', fontWeight: '600', textDecoration: 'underline' }}>
            Return Home Now
          </Link>
        </div>
      </div>
    );
  }

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
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'serif', padding: '60px 20px', minHeight: '100vh' }}>
        
        <div style={{ width: '100%', maxWidth: '600px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4A6741', textDecoration: 'none', marginBottom: '40px', fontSize: '14px', fontWeight: '600' }}>
            <ArrowLeft size={18} /> Back to Home
          </Link>

          <h1 style={{ fontSize: '46px', color: '#1A1C19', marginBottom: '15px' }}>Feedback</h1>
          <p style={{ color: '#7A8278', fontSize: '18px', marginBottom: '45px' }}>Help us refine the Nivara experience.</p>

          <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '45px', borderRadius: '50px', border: '1px solid #f0f0f0', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
            
            <div style={{ marginBottom: '40px', textAlign: 'center' }}>
              <p style={{ fontSize: '12px', color: '#B2B9B0', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>Rate your experience</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button 
                    key={star} 
                    type="button" 
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', transition: 'transform 0.2s' }}
                  >
                    <Star 
                      size={36} 
                      fill={(hover || rating) >= star ? "#F1C40F" : "none"} 
                      color={(hover || rating) >= star ? "#F1C40F" : "#E5E7EB"} 
                      strokeWidth={1.5}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <label style={{ fontSize: '14px', color: '#1A1C19', fontWeight: '600', display: 'block', marginBottom: '10px' }}>Your Comments</label>
              <textarea 
                placeholder="What can we do better?" 
                required
                style={{ width: '100%', height: '160px', padding: '20px', borderRadius: '25px', border: '1px solid #eee', fontSize: '16px', outline: 'none', resize: 'none', fontFamily: 'sans-serif', backgroundColor: '#FAFAFA' }} 
              />
            </div>

            <button 
              type="submit"
              style={{ width: '100%', backgroundColor: '#2D4A23', color: 'white', border: 'none', padding: '20px', borderRadius: '35px', fontWeight: 'bold', fontSize: '17px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', boxShadow: '0 10px 20px rgba(45, 74, 35, 0.15)' }}
            >
              <Send size={18} /> Send Feedback
            </button>
          </form>
        </div>

        <footer style={{ marginTop: 'auto', paddingTop: '60px', color: '#B2B9B0', fontSize: '10px', letterSpacing: '3px' }}>
          NIVARA USER INSIGHT TERMINAL
        </footer>
      </div>
    </div>
  );
}