"use client";
import { useState } from 'react';
import Link from 'next/link';
import { 
  Camera, BookOpen, History, ChevronRight, CloudSun, 
  Droplets, Mail, MessageSquare, Users, ShoppingBag, 
  Globe, Moon, Sun, Thermometer, Zap, X, CalendarDays, Wind, Sparkles, Heart
} from 'lucide-react';

export default function Home() {
  const [lang, setLang] = useState('EN'); 
  const [isDark, setIsDark] = useState(false); 
  const [showForecast, setShowForecast] = useState(false);
  const [showAloeDetails, setShowAloeDetails] = useState(false);

  const theme = {
    bg: isDark ? '#121412' : '#FDFCFB',
    card: isDark ? '#1A1C19' : '#FFFFFF',
    text: isDark ? '#FDFCFB' : '#1A1C19',
    subtext: isDark ? '#AAB3A8' : '#7A8278',
    border: isDark ? '#2D312C' : '#F2F2F2',
    accent: '#4A6741',
    widget: isDark ? '#232622' : '#F3F7E9',
    success: '#2D4A23',
  };

  const translations = {
    EN: {
      tagline: "Rooted in Nature • Driven by Insight",
      scanBtn: "Scan a Plant",
      library: "Library", libDesc: "Common plant threats.",
      history: "History", hisDesc: "Your past scan logs.",
      community: "Community", comDesc: "Ask botanical experts.",
      shop: "Cure Shop", shopDesc: "Buy organic treatments.",
      contact: "Contact", feedback: "Feedback",
      potd: "Plant of the Day",
      aloeName: "Aloe Vera",
      aloeDesc: "A succulent known for its healing gel and air-purifying qualities.",
      weatherMsg: "Click to view 7-day botanical outlook",
      tempLabel: "H: 28° / L: 19°",
      forecastTitle: "7-Day Botanical Outlook",
      proTip: "Sunday is perfect for watering deep-root plants as temperatures peak."
    },
    HI: {
      tagline: "प्रकृति में निहित • अंतर्दृष्टि द्वारा संचालित",
      scanBtn: "पौधे को स्कैन करें",
      library: "पुस्तकालय", libDesc: "पौधों के सामान्य खतरे।",
      history: "इतिहास", hisDesc: "पुराने स्कैन लॉग।",
      community: "समुदाय", comDesc: "विशेषज्ञों से पूछें।",
      shop: "दुकान", shopDesc: "जैविक उपचार खरीदें।",
      contact: "संपर्क", feedback: "प्रतिक्रिया",
      potd: "आज का पौधा",
      aloeName: "एलोवेरा",
      aloeDesc: "अपने उपचार जेल और वायु-शोधन गुणों के लिए जाना जाने वाला एक रसीला पौधा।",
      weatherMsg: "7-दिवसीय वानस्पतिक दृष्टिकोण देखने के लिए क्लिक करें",
      tempLabel: "अधिकतम: 28° / न्यूनतम: 19°",
      forecastTitle: "7-दिवसीय वानस्पतिक दृष्टिकोण",
      proTip: "तापमान चरम पर होने के कारण रविवार गहरी जड़ों वाले पौधों को पानी देने के लिए उपयुक्त है।"
    }
  };

  const t = lang === 'HI' ? translations.HI : translations.EN;

  const forecastData = [
    { day: "Fri", temp: "24°", icon: CloudSun },
    { day: "Sat", temp: "22°", icon: Droplets },
    { day: "Sun", temp: "26°", icon: Sun },
    { day: "Mon", temp: "23°", icon: Wind },
    { day: "Tue", temp: "21°", icon: CloudSun },
    { day: "Wed", temp: "25°", icon: Sun },
    { day: "Thu", temp: "24°", icon: CloudSun },
  ];

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <style jsx global>{`
        .hover-bulge { transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease !important; }
        .hover-bulge:hover { transform: scale(1.02) translateY(-4px) !important; box-shadow: 0 15px 30px rgba(0,0,0,0.08) !important; }
        .btn-bulge { transition: transform 0.2s ease !important; }
        .btn-bulge:hover { transform: scale(1.05) !important; }
      `}</style>

      {/* BACKGROUND */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: "url('/aes1.png')", backgroundSize: 'cover', backgroundPosition: 'center', zIndex: -2 }} />
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: isDark ? 'rgba(18, 20, 18, 0.92)' : 'rgba(253, 252, 251, 0.88)', zIndex: -1 }} />

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'serif', padding: '40px 24px', minHeight: '100vh', color: theme.text }}>
        
        {/* TOP CONTROLS */}
        <div style={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', gap: '12px', zIndex: 10 }}>
          <button onClick={() => setIsDark(!isDark)} className="btn-bulge" style={{ background: theme.card, border: `1px solid ${theme.border}`, padding: '8px 12px', borderRadius: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center', color: theme.text }}>
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <div style={{ backgroundColor: theme.card, padding: '8px 15px', borderRadius: '20px', border: `1px solid ${theme.border}`, display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Globe size={14} color={theme.accent} />
            <button onClick={() => setLang('EN')} style={{ background: 'none', border: 'none', fontSize: '11px', cursor: 'pointer', fontWeight: lang === 'EN' ? 'bold' : 'normal', color: lang === 'EN' ? theme.accent : theme.subtext }}>EN</button>
            <button onClick={() => setLang('HI')} style={{ background: 'none', border: 'none', fontSize: '11px', cursor: 'pointer', fontWeight: lang === 'HI' ? 'bold' : 'normal', color: lang === 'HI' ? theme.accent : theme.subtext }}>हिन्दी</button>
          </div>
        </div>

        {/* 1. WEATHER WIDGET */}
        <div onClick={() => setShowForecast(true)} className="hover-bulge" style={{ width: '100%', maxWidth: '820px', backgroundColor: theme.card, borderRadius: '35px', padding: '25px 35px', marginBottom: '50px', border: `1px solid ${theme.border}`, cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ backgroundColor: theme.widget, padding: '15px', borderRadius: '20px' }}><CloudSun size={32} color={theme.accent} /></div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '24px', fontWeight: '700' }}>24°C</span>
                <span style={{ fontSize: '12px', color: theme.subtext }}>{t.tempLabel}</span>
              </div>
              <p style={{ margin: '4px 0 0', fontSize: '13px', color: theme.accent, fontWeight: '500' }}>{t.weatherMsg}</p>
            </div>
          </div>
          <CalendarDays size={20} color={theme.subtext} />
        </div>

        {/* 2. BRAND SECTION (Logo Restored) */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ width: '90px', height: '90px', backgroundColor: 'white', borderRadius: '30px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px', border: `1px solid ${theme.border}`, overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <img src="/icon.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '12px' }} />
          </div>
          <h1 style={{ fontSize: '52px', margin: '0', fontWeight: '600' }}>Nivara</h1>
          <p style={{ fontSize: '11px', letterSpacing: '0.5em', textTransform: 'uppercase', color: theme.accent, marginTop: '15px', fontWeight: '600' }}>{t.tagline}</p>
        </div>

        {/* 3. SCAN BUTTON */}
        <div style={{ width: '100%', maxWidth: '420px', textAlign: 'center', marginBottom: '60px' }}>
          <Link href="/scan" style={{ textDecoration: 'none' }}>
            <div className="btn-bulge" style={{ backgroundColor: theme.success, padding: '22px 30px', borderRadius: '600px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'white' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <Camera size={22} />
                <span style={{ fontSize: '18px', fontWeight: '500' }}>{t.scanBtn}</span>
              </div>
              <ChevronRight size={20} />
            </div>
          </Link>
        </div>

        {/* 4. FEATURE CARDS GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', width: '100%', maxWidth: '900px', marginBottom: '30px' }}>
          {[
            { href: "/diseases", icon: BookOpen, title: t.library, desc: t.libDesc },
            { href: "/tracker", icon: History, title: t.history, desc: t.hisDesc },
            { href: "/community", icon: Users, title: t.community, desc: t.comDesc },
            { href: "/shop", icon: ShoppingBag, title: t.shop, desc: t.shopDesc }
          ].map((item, idx) => (
            <Link key={idx} href={item.href} className="hover-bulge" style={{ backgroundColor: theme.card, padding: '30px', borderRadius: '40px', border: `1px solid ${theme.border}`, textDecoration: 'none', color: theme.text, display: 'flex', flexDirection: 'column' }}>
              <div style={{ backgroundColor: theme.widget, width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}><item.icon size={20} color={theme.accent} /></div>
              <span style={{ fontWeight: '600', fontSize: '18px' }}>{item.title}</span>
              <p style={{ fontSize: '12px', color: theme.subtext, marginTop: '5px' }}>{item.desc}</p>
            </Link>
          ))}
        </div>

        {/* 5. PLANT OF THE DAY */}
        <div onClick={() => setShowAloeDetails(true)} className="hover-bulge" style={{ width: '100%', maxWidth: '900px', backgroundColor: theme.card, borderRadius: '40px', padding: '25px', marginBottom: '60px', border: `1px solid ${theme.border}`, cursor: 'pointer', display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ width: '220px', height: '180px', borderRadius: '25px', overflow: 'hidden', flexShrink: 0 }}>
             <img src="https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&q=80&w=600" alt="Aloe Vera" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ flex: '1 1 300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: theme.accent, marginBottom: '8px' }}>
              <Sparkles size={16} /> <span style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase' }}>{t.potd}</span>
            </div>
            <h3 style={{ fontSize: '24px', margin: '0 0 8px 0' }}>{t.aloeName}</h3>
            <p style={{ fontSize: '14px', color: theme.subtext, margin: '0 0 15px 0', lineHeight: '1.6' }}>{t.aloeDesc}</p>
            <span style={{ color: theme.accent, fontSize: '14px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '4px' }}>{lang === 'EN' ? 'View Profile' : 'प्रोफ़ाइल देखें'} <ChevronRight size={16} /></span>
          </div>
        </div>

        {/* 6. CONTACT & FEEDBACK (Restored) */}
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginBottom: '40px' }}>
          <Link href="/contact" className="btn-bulge" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '30px', border: `1px solid ${theme.border}`, backgroundColor: theme.card, color: theme.accent, fontSize: '13px', fontWeight: '500', textDecoration: 'none' }}>
            <Mail size={16} /> {t.contact}
          </Link>
          <Link href="/feedback" className="btn-bulge" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '30px', border: `1px solid ${theme.border}`, backgroundColor: theme.card, color: theme.accent, fontSize: '13px', fontWeight: '500', textDecoration: 'none' }}>
            <MessageSquare size={16} /> {t.feedback}
          </Link>
        </div>

        <footer style={{ marginTop: 'auto', fontSize: '10px', color: theme.subtext, letterSpacing: '3px', fontWeight: 'bold' }}>© 2025 NIVARA</footer>
      </div>

      {/* FORECAST MODAL */}
      {showForecast && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ backgroundColor: theme.card, width: '90%', maxWidth: '600px', borderRadius: '40px', padding: '40px', position: 'relative', boxShadow: '0 30px 60px rgba(0,0,0,0.2)' }}>
            <button onClick={() => setShowForecast(false)} style={{ position: 'absolute', right: '25px', top: '25px', border: 'none', background: theme.widget, borderRadius: '50%', padding: '10px', cursor: 'pointer' }}><X size={20} /></button>
            <h2 style={{ marginBottom: '25px', color: theme.text }}>{t.forecastTitle}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '10px', marginBottom: '25px' }}>
              {forecastData.map((f, i) => (
                <div key={i} style={{ backgroundColor: theme.widget, padding: '15px 5px', borderRadius: '15px', textAlign: 'center' }}>
                  <span style={{ fontSize: '11px', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>{f.day}</span>
                  <f.icon size={20} color={theme.accent} style={{ margin: '8px auto' }} />
                  <span style={{ fontSize: '14px', fontWeight: '700' }}>{f.temp}</span>
                </div>
              ))}
            </div>
            <div style={{ backgroundColor: theme.widget, padding: '20px', borderRadius: '25px', display: 'flex', gap: '15px', alignItems: 'center' }}>
              <Zap size={20} color={theme.accent} />
              <span style={{ fontSize: '14px', color: theme.text }}><strong>Pro Tip:</strong> {t.proTip}</span>
            </div>
          </div>
        </div>
      )}

      {/* ALOE VERA PROFILE MODAL */}
      {showAloeDetails && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(15px)', zIndex: 1001, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ backgroundColor: theme.card, width: '90%', maxWidth: '500px', borderRadius: '45px', overflow: 'hidden', position: 'relative' }}>
            <div style={{ height: '250px', width: '100%', background: 'url(https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&q=80&w=800) center/cover' }} />
            <button onClick={() => setShowAloeDetails(false)} style={{ position: 'absolute', right: '20px', top: '20px', border: 'none', background: 'rgba(255,255,255,0.8)', borderRadius: '50%', padding: '10px', cursor: 'pointer' }}><X size={20} /></button>
            <div style={{ padding: '35px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h2 style={{ margin: 0 }}>{t.aloeName}</h2>
                <Heart size={24} color={theme.accent} />
              </div>
              <p style={{ color: theme.subtext, lineHeight: '1.6', fontSize: '15px' }}>
                Aloe Vera is a succulent plant species used in traditional herbal medicine for various health benefits.
              </p>
              <div style={{ marginTop: '25px', display: 'flex', gap: '15px' }}>
                <div style={{ flex: 1, padding: '15px', background: theme.widget, borderRadius: '20px', textAlign: 'center' }}>
                  <Droplets size={20} color={theme.accent} style={{ margin: '0 auto 8px' }} />
                  <span style={{ fontSize: '12px' }}>Water Weekly</span>
                </div>
                <div style={{ flex: 1, padding: '15px', background: theme.widget, borderRadius: '20px', textAlign: 'center' }}>
                  <Sun size={20} color={theme.accent} style={{ margin: '0 auto 8px' }} />
                  <span style={{ fontSize: '12px' }}>Bright Light</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}