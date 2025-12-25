"use client";
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, MessageSquare, ThumbsUp, Share2, Plus, UserCircle2 } from 'lucide-react';

export default function CommunityPage() {
  // Sample forum data
  const posts = [
    {
      id: 1,
      author: "Aarav Sharma",
      time: "2h ago",
      title: "Sudden yellow spots on Mango leaves?",
      content: "I've noticed these small yellow spots spreading on my young mango saplings. Is this a nutrient deficiency or something worse?",
      likes: 24,
      replies: 5,
      tag: "Diagnosis Needed"
    },
    {
      id: 2,
      author: "Dr. Elena Moss",
      time: "5h ago",
      title: "Tips for preventing Root Rot in the Monsoon",
      content: "With the rains coming, ensure your pots have clear drainage holes. I recommend adding a layer of perlite to your soil mix now.",
      likes: 89,
      replies: 12,
      tag: "Expert Tip"
    }
  ];

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
        
        {/* Navigation */}
        <div style={{ width: '100%', maxWidth: '700px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4A6741', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>
            <ArrowLeft size={18} /> Back to Home
          </Link>
          <Link href="/new-post" style={{ textDecoration: 'none' }}>
            <button style={{ 
                backgroundColor: '#2D4A23', 
                color: 'white', 
                border: 'none', 
                padding: '10px 20px', 
                borderRadius: '25px', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px', 
                cursor: 'pointer', 
                fontWeight: '500',
                boxShadow: '0 4px 12px rgba(45, 74, 35, 0.2)'
            }}>
                <Plus size={18} /> New Post
            </button>
          </Link>
        </div>

        <div style={{ width: '100%', maxWidth: '700px' }}>
          <h1 style={{ fontSize: '42px', color: '#1A1C19', marginBottom: '10px' }}>Expert Forum</h1>
          <p style={{ color: '#7A8278', marginBottom: '40px', fontSize: '18px' }}>Share your findings and learn from botanical experts worldwide.</p>

          {/* Forum Feed */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            {posts.map((post) => (
              <div key={post.id} style={{ backgroundColor: 'white', padding: '30px', borderRadius: '40px', border: '1px solid #f0f0f0', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <UserCircle2 size={35} color="#B2B9B0" />
                    <div>
                      <h4 style={{ margin: 0, fontSize: '16px', color: '#1A1C19' }}>{post.author}</h4>
                      <span style={{ fontSize: '12px', color: '#999' }}>{post.time}</span>
                    </div>
                  </div>
                  <span style={{ fontSize: '10px', padding: '5px 12px', backgroundColor: '#F3F7E9', color: '#4A6741', borderRadius: '15px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {post.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: '20px', marginBottom: '10px', color: '#1A1C19', fontWeight: '600' }}>{post.title}</h3>
                <p style={{ color: '#666', lineHeight: '1.6', fontSize: '15px', marginBottom: '25px' }}>{post.content}</p>

                <div style={{ display: 'flex', gap: '25px', borderTop: '1px solid #f5f5f5', paddingTop: '20px' }}>
                  <button style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '6px', color: '#7A8278', cursor: 'pointer' }}>
                    <ThumbsUp size={18} /> <span style={{ fontSize: '14px' }}>{post.likes}</span>
                  </button>
                  <button style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '6px', color: '#7A8278', cursor: 'pointer' }}>
                    <MessageSquare size={18} /> <span style={{ fontSize: '14px' }}>{post.replies}</span>
                  </button>
                  <button style={{ background: 'none', border: 'none', marginLeft: 'auto', color: '#7A8278', cursor: 'pointer' }}>
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <footer style={{ marginTop: '80px', color: '#B2B9B0', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}>
          Nivara Botanical Community
        </footer>
      </div>
    </div>
  );
}