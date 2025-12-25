"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ShoppingBag, Star, ShieldCheck, Leaf, ShoppingCart, X } from 'lucide-react';

export default function ShopPage() {
  const [cart, setCart] = useState<number[]>([]);
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const router = useRouter();

  // Curated product list
  const products = [
    { id: 2, name: "Copper Spray", price: 420, category: "Blight Cure", image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=600" },
    { id: 3, name: "Organic Fertilizer", price: 650, category: "Growth", image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&q=80&w=600" },
    { id: 7, name: "Leaf Shine Spray", price: 250, category: "Aesthetic", image: "https://images.unsplash.com/photo-1598512752271-33f913a5af13?auto=format&fit=crop&q=80&w=600" },
    { id: 8, name: "Hydrated Lime", price: 190, category: "Soil pH", image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=600" },
    { id: 9, name: "Potassium Soap", price: 340, category: "Soft Pests", image: "https://images.unsplash.com/photo-1611843467160-25afb8df1074?auto=format&fit=crop&q=80&w=600" },
  ];

  const addToCart = (id: number) => {
    setCart(prev => [...prev, id]);
  };

  const removeFromCart = (indexToRemove: number) => {
    setCart(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  const cartTotal = cart.reduce((total, id) => {
    const product = products.find(p => p.id === id);
    return total + (product ? product.price : 0);
  }, 0);

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
        padding: '40px 20px', 
        minHeight: '100vh',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* Header Section */}
        <div style={{ width: '100%', maxWidth: '1100px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <Link href="/" style={{ color: '#4A6741', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '600' }}>
            <ArrowLeft size={18} /> Back to Home
          </Link>
          
          <div style={{ position: 'relative' }}>
            <button 
              onClick={() => setShowCartDropdown(!showCartDropdown)}
              style={{ background: 'white', border: '1px solid #eee', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px', borderRadius: '15px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <div style={{ position: 'relative' }}>
                <ShoppingCart size={24} color="#1A1C19" />
                {cart.length > 0 && (
                  <span style={{ position: 'absolute', top: '-12px', right: '-12px', backgroundColor: '#2D4A23', color: 'white', borderRadius: '50%', width: '20px', height: '20px', fontSize: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid white' }}>
                    {cart.length}
                  </span>
                )}
              </div>
            </button>

            {showCartDropdown && (
              <div style={{ position: 'absolute', right: 0, top: '60px', width: '320px', backgroundColor: 'white', borderRadius: '25px', boxShadow: '0 20px 50px rgba(0,0,0,0.15)', padding: '25px', zIndex: 100, border: '1px solid #f0f0f0' }}>
                <h4 style={{ margin: '0 0 20px 0', fontSize: '18px', color: '#1A1C19' }}>Your Basket</h4>
                {cart.length === 0 ? (
                  <p style={{ fontSize: '14px', color: '#999', textAlign: 'center', padding: '20px 0' }}>Your basket is currently empty.</p>
                ) : (
                  <>
                    <div style={{ maxHeight: '250px', overflowY: 'auto', marginBottom: '20px' }}>
                      {cart.map((id, index) => {
                        const item = products.find(p => p.id === id);
                        return (
                          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #f9f9f9' }}>
                            <div>
                              <p style={{ margin: 0, fontSize: '14px', fontWeight: '500', color: '#1A1C19' }}>{item?.name}</p>
                              <p style={{ margin: 0, fontSize: '12px', color: '#4A6741' }}>₹{item?.price}</p>
                            </div>
                            <button onClick={() => removeFromCart(index)} style={{ background: 'none', border: 'none', color: '#ccc', cursor: 'pointer' }}><X size={14} /></button>
                          </div>
                        );
                      })}
                    </div>
                    <div style={{ borderTop: '2px solid #f0f0f0', paddingTop: '15px', marginBottom: '20px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '16px', color: '#1A1C19' }}>
                        <span>Total Amount</span>
                        <span style={{ color: '#2D4A23' }}>₹{cartTotal}</span>
                      </div>
                    </div>
                    <Link href="/checkout" style={{ textDecoration: 'none' }}>
                      <button style={{ width: '100%', backgroundColor: '#2D4A23', color: 'white', border: 'none', padding: '16px', borderRadius: '15px', fontWeight: '600', cursor: 'pointer', fontSize: '15px' }}>
                        Proceed to Checkout
                      </button>
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        <h1 style={{ fontSize: '42px', color: '#1A1C19', marginBottom: '40px', fontWeight: '600' }}>Organic Cure Shop</h1>

        {/* Product Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', width: '100%', maxWidth: '1100px' }}>
          {products.map((p) => (
            <div key={p.id} style={{ backgroundColor: 'white', borderRadius: '40px', overflow: 'hidden', border: '1px solid #f2f2f2', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <div style={{ width: '100%', height: '240px' }}>
                <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '25px' }}>
                <span style={{ fontSize: '10px', color: '#4A6741', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>{p.category}</span>
                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '12px 0' }}>
                  <h3 style={{ margin: 0, fontSize: '19px', color: '#1A1C19' }}>{p.name}</h3>
                  <span style={{ fontWeight: 'bold', color: '#1A1C19' }}>₹{p.price}</span>
                </div>
                <button onClick={() => addToCart(p.id)} style={{ width: '100%', backgroundColor: '#2D4A23', color: 'white', border: 'none', padding: '16px', borderRadius: '18px', fontWeight: '600', cursor: 'pointer', transition: 'opacity 0.2s' }}>
                  Add to Basket
                </button>
              </div>
            </div>
          ))}
        </div>

        <footer style={{ marginTop: 'auto', paddingTop: '80px', color: '#B2B9B0', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}>
          Nivara Botanical Shop Terminal
        </footer>
      </div>
    </div>
  );
}