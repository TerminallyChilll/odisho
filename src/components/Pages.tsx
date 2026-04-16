import React from 'react';
import { motion } from 'motion/react';
import { Layout } from './Layout';
import { Scissors, Award, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
  return (
    <Layout>
      {/* --- Simple Hero --- */}
      <section className="pt-48 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.6em] font-bold text-luxury-gold mb-6 block"
          >
            The Visionary
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif mb-12 tracking-tighter"
          >
            Artistry & <span className="italic font-light">Precision</span>
          </motion.h1>
        </div>
      </section>

      {/* --- Founder Bio --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center border-y border-white/5 py-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
             <img 
              src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=800" 
              alt="The Artist" 
              className="w-full aspect-[4/5] object-cover rounded-[2rem] grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-luxury-gold/5 backdrop-blur-3xl rounded-full -z-10" />
          </motion.div>
          
          <div className="space-y-10">
            <h2 className="text-4xl font-serif leading-tight">Founded on the <br />principles of <span className="text-luxury-gold">Structural Harmony</span></h2>
            <p className="text-luxury-cream/60 leading-loose text-lg font-light italic">
              "Hair is a living canvas. My mission was to create a sanctuary where architecture meets aesthetics, providing a service that transcends the standard salon visit."
            </p>
            <div className="space-y-6 pt-6">
              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold">
                  <Scissors size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-luxury-cream">Tailored Craft</h4>
                  <p className="text-xs text-luxury-cream/40 mt-1">Every cut is designed for your unique bone structure.</p>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-luxury-cream">Master Education</h4>
                  <p className="text-xs text-luxury-cream/40 mt-1">Over a decade of high-end editorial and salon experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Philosophy --- */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent to-black">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <Sparkles className="mx-auto text-luxury-gold" size={40} />
          <h2 className="text-5xl font-serif">The Odisho Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12">
            <div className="space-y-4">
              <h4 className="font-serif text-xl italic text-luxury-gold">Atmosphere</h4>
              <p className="text-sm text-luxury-cream/50 leading-relaxed font-light">Minimalist design intended to clear the mind and focus on the transformation.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-serif text-xl italic text-luxury-gold">Chemistry</h4>
              <p className="text-sm text-luxury-cream/50 leading-relaxed font-light">We use only the most refined pigments and structural treatments available globally.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-serif text-xl italic text-luxury-gold">Legacy</h4>
              <p className="text-sm text-luxury-cream/50 leading-relaxed font-light">Creating a silhouette that lasts long after you have left our sanctuary.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const ProductsPage = () => {
  return (
    <Layout>
      <section className="h-screen flex items-center justify-center text-center px-6">
        <div className="space-y-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto border border-luxury-gold/30"
          >
            <Sparkles size={32} className="text-luxury-gold" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif italic font-light tracking-tighter"
          >
            COMING SOON
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[10px] uppercase tracking-[0.5em] text-luxury-cream/40"
          >
            The Odisho Apothecary Collection
          </motion.p>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            className="h-px bg-luxury-gold mx-auto mt-8"
          />
          <div className="pt-12">
            <Link to="/" className="text-[10px] uppercase tracking-widest text-luxury-gold hover:text-luxury-cream transition-colors">
              Return to Experience
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
