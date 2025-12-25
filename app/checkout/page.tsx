"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, CreditCard, ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

export default function CheckoutPage() {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate a secure payment process
    setTimeout(() => {
      setIsProcessing(false);
      setOrderComplete(true);
    }, 3000);
  };

  if (orderComplete) {
    return (
      <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'serif', padding: '20px' }}>
        {/* Background Layers */}
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: "url('/aes1.png')", backgroundSize: 'cover', backgroundPosition: 'center', zIndex: -2 }} />
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(253, 252, 251, 0.88)', zIndex: -1 }} />

        <div style={{ textAlign: 'center', animation: 'fadeIn 0.8s ease-out', backgroundColor: 'white', padding: '60px', borderRadius: '50px', boxShadow: '0 20px 50px rgba(0,0,0,0.05)' }}>
          <div style={{ backgroundColor: '#F3F7E9', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
            <CheckCircle2 size={40} color="#4A6741" />
          </div>
          <h1 style={{ fontSize: '36px', marginBottom: '16px', color: '#1A1C19' }}>Order Confirmed</h1>
          <p style={{ color: '#7A8278', maxWidth: '300px', margin: '0 auto 32px', lineHeight: '1.6' }}>Your botanical essentials are being prepared for shipment.</p>
          <Link href="/" style={{ backgroundColor: '#2D4A23', color: 'white', padding: '16px 32px', borderRadius: '30px', textDecoration: 'none', fontWeight: '600', display: 'inline-block' }}>
            Back to Home
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
        backgroundColor: 'rgba(253, 252, 251, 0.92)',
        zIndex: -1
      }} />

      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        fontFamily: 'serif', 
        padding: '60px 20px', 
        minHeight: '100vh'
      }}>
        
        <div style={{ width: '100%', maxWidth: '800px' }}>
          <Link href="/shop" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4A6741', textDecoration: 'none', marginBottom: '40px', fontSize: '14px', fontWeight: '600' }}>
            <ArrowLeft size={18} /> Return to Shop
          </Link>

          <h1 style={{ fontSize: '42px', color: '#1A1C19', marginBottom: '40px' }}>Checkout</h1>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            
            {/* Payment Form */}
            <form onSubmit={handlePayment} style={{ backgroundColor: 'white', padding: '40px', borderRadius: '40px', border: '1px solid #f0f0f0', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px', color: '#4A6741' }}>
                <CreditCard size={20} />
                <span style={{ fontWeight: '600', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '1px' }}>Payment Details</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ fontSize: '12px', color: '#999', display: 'block', marginBottom: '8px' }}>Cardholder Name</label>
                  <input required type="text" placeholder="John Doe" style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #eee', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ fontSize: '12px', color: '#999', display: 'block', marginBottom: '8px' }}>Card Number</label>
                  <input required type="text" placeholder="xxxx xxxx xxxx xxxx" style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #eee', outline: 'none' }} />
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ fontSize: '12px', color: '#999', display: 'block', marginBottom: '8px' }}>Expiry</label>
                    <input required type="text" placeholder="MM/YY" style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #eee', outline: 'none' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ fontSize: '12px', color: '#999', display: 'block', marginBottom: '8px' }}>CVV</label>
                    <input required type="password" placeholder="***" style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #eee', outline: 'none' }} />
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={isProcessing}
                  style={{ width: '100%', backgroundColor: '#2D4A23', color: 'white', border: 'none', padding: '18px', borderRadius: '20px', fontWeight: 'bold', marginTop: '10px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                >
                  {isProcessing ? "Verifying..." : "Pay Securely"}
                </button>
              </div>
            </form>

            {/* Trust Badges & Info */}
            <div style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '24px', color: '#1A1C19' }}>Secure Transaction</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'start' }}>
                  <ShieldCheck color="#4A6741" size={24} />
                  <div>
                    <h4 style={{ margin: '0 0 5px 0', fontSize: '15px', color: '#1A1C19' }}>Data Protection</h4>
                    <p style={{ margin: 0, fontSize: '13px', color: '#7A8278' }}>Your payment info is encrypted and never stored on our servers.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'start' }}>
                  <Lock color="#4A6741" size={24} />
                  <div>
                    <h4 style={{ margin: '0 0 5px 0', fontSize: '15px', color: '#1A1C19' }}>Secure Gateway</h4>
                    <p style={{ margin: 0, fontSize: '13px', color: '#7A8278' }}>Processed through international industry-standard security protocols.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        
        <footer style={{ marginTop: 'auto', paddingTop: '60px', color: '#B2B9B0', fontSize: '10px', letterSpacing: '3px' }}>
          SECURE CHECKOUT TERMINAL
        </footer>
      </div>
    </div>
  );
}