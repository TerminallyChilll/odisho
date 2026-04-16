import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Scissors, MapPin, Phone, MessageSquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm"
    >
      <Link to="/" className="text-2xl font-serif tracking-widest uppercase text-luxury-cream">Odisho</Link>
      <div className="hidden md:flex gap-8 text-[10px] items-center font-medium uppercase tracking-[0.2em] text-luxury-cream/70">
        <Link to="/" className={`hover:text-luxury-gold transition-colors ${location.pathname === '/' ? 'text-luxury-gold' : ''}`}>Experience</Link>
        <Link to="/about" className={`hover:text-luxury-gold transition-colors ${location.pathname === '/about' ? 'text-luxury-gold' : ''}`}>Mastery</Link>
        <Link to="/products" className={`hover:text-luxury-gold transition-colors ${location.pathname === '/products' ? 'text-luxury-gold' : ''}`}>Apothecary</Link>
        <a href={isHome ? "#booking" : "/#booking"} className="hover:text-luxury-gold transition-colors">Reserve</a>
      </div>
      <Link 
        to={isHome ? "#booking" : "/#booking"}
        className="px-6 py-2 border border-luxury-gold/30 rounded-full text-[10px] uppercase tracking-[0.22em] hover:bg-luxury-gold hover:text-luxury-black transition-all duration-500"
      >
        Reserve
      </Link>
    </motion.nav>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="py-32 border-t border-luxury-cream/5 luxury-gradient">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
        <div className="space-y-8">
          <h3 className="text-3xl font-serif tracking-widest uppercase">Odisho.</h3>
          <p className="text-sm text-luxury-cream/30 leading-loose italic font-light">
            Elevating modern beauty through architectural precision, artisanal mastery, and bespoke service.
          </p>
          <div className="flex gap-6 pt-6">
            <a href="#" className="p-4 border border-white/5 rounded-full hover:border-luxury-gold/50 hover:text-luxury-gold transition-all group">
              <Instagram size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="p-4 border border-white/5 rounded-full hover:border-luxury-gold/50 hover:text-luxury-gold transition-all group text-luxury-gold">
              <Scissors size={20} className="group-hover:rotate-45 transition-transform duration-700" />
            </a>
          </div>
        </div>

        <div className="space-y-8">
          <h5 className="text-[10px] uppercase tracking-[0.5em] font-black text-luxury-gold/60">The Salon</h5>
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <MapPin size={20} className="text-luxury-gold shrink-0 mt-1" />
              <p className="text-sm text-luxury-cream/60 leading-relaxed font-light">
                1245 Luxury Lane, Suite 200<br />
                Toronto, ON M5V 2L1
              </p>
            </div>
            <div className="flex gap-6 items-center">
              <Phone size={20} className="text-luxury-gold shrink-0" />
              <p className="text-sm text-luxury-cream/60 tracking-widest font-medium">
                +1 (416) 555-0192
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h5 className="text-[10px] uppercase tracking-[0.5em] font-black text-luxury-gold/60">Schedule</h5>
          <ul className="text-[10px] uppercase tracking-[0.3em] font-medium text-luxury-cream/50 space-y-6">
            <li className="flex justify-between border-b border-white/5 pb-4">
              <span>Tue — Fri</span>
              <span className="text-luxury-cream">10:00 — 20:00</span>
            </li>
            <li className="flex justify-between border-b border-white/5 pb-4">
              <span>Saturday</span>
              <span className="text-luxury-cream">09:00 — 18:00</span>
            </li>
            <li className="flex justify-between opacity-30">
              <span>Sun — Mon</span>
              <span>Closed</span>
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <h5 className="text-[10px] uppercase tracking-[0.5em] font-black text-luxury-gold/60">Philosophy</h5>
          <p className="text-xs text-luxury-cream/40 leading-loose italic font-light tracking-wide">
            "Hair is the architecture of the face. We don't just cut; we compose visuals that celebrate your unique geometry."
          </p>
          <div className="h-px w-20 bg-luxury-gold mt-16 shadow-[0_0_10px_rgba(197,160,89,0.5)]" />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.4em] text-luxury-cream/20 font-bold">
        <p>© 2026 ODISHOU SALON. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-12">
          <a href="#" className="hover:text-luxury-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-luxury-gold transition-colors">Legal Terms</a>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen selection:bg-luxury-gold/30 selection:text-luxury-cream bg-luxury-black text-luxury-cream overflow-x-hidden">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};
