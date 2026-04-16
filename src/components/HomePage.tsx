import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Scissors, 
  ChevronRight, 
  Check, 
  Plus
} from 'lucide-react';
import { Layout } from './Layout';

// --- Types ---
interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
}

interface ServiceCategory {
  title: string;
  services: Service[];
}

// --- Data ---
const SERVICES: ServiceCategory[] = [
  {
    title: "Artistic Cuts",
    services: [
      { id: 'c1', name: "Signature Haircut", description: "Precision cut tailored to your face shape and hair texture.", price: "from $120", duration: "60 min" },
      { id: 'c2', name: "Creative Restyle", description: "Complete transformation with modern edge and artistic flair.", price: "from $160", duration: "90 min" },
      { id: 'c3', name: "Barbering Ritual", description: "Traditional techniques with a luxury modern finish.", price: "from $85", duration: "45 min" },
    ]
  },
  {
    title: "Master Color",
    services: [
      { id: 'co1', name: "Bespoke Balayage", description: "Hand-painted sun-kissed dimension with seamless transitions.", price: "from $350", duration: "180 min" },
      { id: 'co2', name: "Luxe Highlights", description: "Multi-tonal depth from root to tip.", price: "from $280", duration: "150 min" },
      { id: 'co3', name: "Editorial Color", description: "High-fashion pigments and structural shading.", price: "from $200", duration: "120 min" },
    ]
  },
  {
    title: "Treatments & Styling",
    services: [
      { id: 't1', name: "Odisho Ritual", description: "Deep hydration and protein reconstruction specifically for your needs.", price: "$95", duration: "45 min" },
      { id: 't2', name: "Glossing Gloss", description: "Enhance shine and vibrancy with a sheer pigment wash.", price: "$75", duration: "30 min" },
      { id: 't3', name: "Signature Blowout", description: "Red-carpet volume and mirror-like shine.", price: "$85", duration: "45 min" },
    ]
  }
];

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative border-b border-luxury-cream/10 py-8 flex flex-col md:flex-row md:items-center justify-between hover:bg-white/5 transition-all px-4 rounded-lg"
    >
      <div className="flex-1">
        <h4 className="text-xl font-serif mb-2 group-hover:text-luxury-gold transition-colors">{service.name}</h4>
        <p className="text-sm text-luxury-cream/50 max-w-md">{service.description}</p>
      </div>
      <div className="flex items-center gap-8 mt-4 md:mt-0">
        <div className="text-[10px] tracking-widest text-luxury-cream/40 uppercase">{service.duration}</div>
        <div className="text-lg font-serif text-luxury-gold">{service.price}</div>
        <button className="hidden md:flex p-2 rounded-full border border-luxury-gold/0 group-hover:border-luxury-gold/50 group-hover:text-luxury-gold transition-all">
          <Plus size={18} />
        </button>
      </div>
    </motion.div>
  );
};

export const HomePage = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");

  const handleAppleCalendarExport = () => {
    const start = new Date(`${bookingDate}T${bookingTime}`);
    const end = new Date(start.getTime() + 60 * 60 * 1000); // Default 1hr
    
    const formatDate = (date: Date) => date.toISOString().replace(/-|:|\.\d+/g, '');
    
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      `DTSTART:${formatDate(start)}`,
      `DTEND:${formatDate(end)}`,
      'SUMMARY:Hair Appointment at Odisho Salon',
      'DESCRIPTION:Luxury hair service appointment at Odisho Salon.',
      'LOCATION:Odisho Salon Toronto',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'odisho-appointment.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout>
      {/* --- Hero Section --- */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 2.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920" 
            alt="Luxury Salon Interior" 
            className="w-full h-full object-cover grayscale-[0.2]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/40 to-transparent" />
        </motion.div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.8em' }}
            transition={{ duration: 1.5 }}
            className="text-[10px] uppercase font-bold text-luxury-gold mb-8 ml-[0.8em] tracking-[0.8em]"
          >
            The Art of Distinction
          </motion.div>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="text-7xl md:text-9xl font-serif mb-12 tracking-tighter"
          >
            Odisho
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
          >
            <a href="#services" className="px-10 py-5 bg-luxury-cream text-luxury-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-luxury-gold hover:text-luxury-black transition-all rounded-sm border border-luxury-cream">
              View Services
            </a>
            <a href="#booking" className="px-10 py-5 border border-luxury-cream/20 text-[10px] font-bold uppercase tracking-[0.2em] hover:border-luxury-gold hover:text-luxury-gold transition-all rounded-sm backdrop-blur-md">
              Reserve Appointment
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-luxury-cream/30 flex flex-col items-center"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-luxury-cream/40 to-transparent mb-4" />
          <span className="text-[9px] uppercase tracking-[0.3em]">Explore</span>
        </motion.div>
      </header>

      {/* --- Services Section --- */}
      <section id="services" className="py-32 px-4 md:px-8 max-w-7xl mx-auto border-x border-luxury-cream/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit mb-12 lg:mb-0">
            <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-luxury-gold mb-6 block">Our Mastery</span>
            <h2 className="text-5xl md:text-6xl font-serif leading-tight mb-8">Refining <br />The Modern <br /><span className="italic font-light">Craft</span></h2>
            <div className="w-12 h-[1px] bg-luxury-gold mb-8" />
            <p className="text-sm text-luxury-cream/50 leading-loose font-light italic max-w-xs">
              Curated hair experiences defined by architectural precision, high-end pigments, and artisanal care.
            </p>
          </div>
          
          <div className="lg:col-span-8 flex flex-col gap-32">
            {SERVICES.map((category) => (
              <div key={category.title}>
                <h3 className="text-[10px] uppercase tracking-[0.5em] font-semibold text-luxury-gold/40 mb-12 border-b border-luxury-gold/10 pb-6 inline-block w-full">
                  {category.title}
                </h3>
                <div className="flex flex-col space-y-2">
                  {category.services.map((service, idx) => (
                    <div key={service.id}>
                      <ServiceCard service={service} index={idx} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Booking Section --- */}
      <section id="booking" className="py-40 bg-gradient-to-b from-black to-[#050505] relative overflow-hidden">
        <motion.div 
          initial={{ rotate: -20, opacity: 0 }}
          whileInView={{ rotate: -12, opacity: 0.05 }}
          className="absolute top-20 right-[-100px] w-96 h-96 pointer-events-none"
        >
          <Scissors className="w-full h-full text-luxury-gold" />
        </motion.div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-serif mb-8 tracking-tighter">Your Session</h2>
            <div className="flex justify-center items-center gap-6 mb-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center gap-6">
                  <motion.div 
                    animate={{ 
                      scale: bookingStep === step ? 1.2 : 1,
                      backgroundColor: bookingStep >= step ? '#c5a059' : 'transparent',
                      borderColor: '#c5a059'
                    }}
                    className="w-4 h-4 rounded-full border border-luxury-gold transition-all duration-700"
                  />
                  {step < 3 && <div className={`w-12 h-[1px] ${bookingStep > step ? 'bg-luxury-gold' : 'bg-luxury-gold/20'}`} />}
                </div>
              ))}
            </div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold/60">Stage {bookingStep} of 3</p>
          </div>

          <div className="bg-[#111] border border-luxury-cream/5 p-8 md:p-16 rounded-[2rem] shadow-[0_0_100px_rgba(0,0,0,0.5)]">
            <AnimatePresence mode="wait">
              {bookingStep === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <h3 className="text-2xl font-serif mb-12 text-center text-luxury-gold italic">Desired Services</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {SERVICES.flatMap(c => c.services).slice(0, 6).map((service) => (
                      <button
                        key={service.id}
                        onClick={() => setSelectedServices(prev => 
                          prev.includes(service.id) ? prev.filter(id => id !== service.id) : [...prev, service.id]
                        )}
                        className={`p-6 border text-left rounded-2xl transition-all duration-500 group relative overflow-hidden ${
                          selectedServices.includes(service.id) 
                            ? 'border-luxury-gold/60 bg-white/5' 
                            : 'border-luxury-cream/5 hover:border-luxury-gold/30 hover:bg-white/[0.02]'
                        }`}
                      >
                        {selectedServices.includes(service.id) && (
                          <motion.div layoutId="active-bg" className="absolute inset-0 bg-luxury-gold/5 -z-10" />
                        )}
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="text-sm font-semibold mb-2">{service.name}</div>
                            <div className="text-[10px] text-luxury-gold/70 tracking-widest uppercase font-medium">{service.price}</div>
                          </div>
                          <div className={`w-5 h-5 rounded-full border border-luxury-gold/30 flex items-center justify-center transition-all ${selectedServices.includes(service.id) ? 'bg-luxury-gold border-luxury-gold' : ''}`}>
                            {selectedServices.includes(service.id) && <Check size={12} className="text-black" />}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="pt-16 flex justify-center">
                    <button 
                      disabled={selectedServices.length === 0}
                      onClick={() => setBookingStep(2)}
                      className="group px-16 py-5 bg-luxury-cream text-luxury-black text-[10px] font-bold uppercase tracking-[0.25em] disabled:opacity-20 transition-all rounded-sm flex items-center gap-4 hover:bg-luxury-gold shadow-lg shadow-black"
                    >
                      Next Step <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              )}

              {bookingStep === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-12"
                >
                  <h3 className="text-2xl font-serif text-center text-luxury-gold italic">Date & Time</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-2xl mx-auto">
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-luxury-cream/30 block mb-2">Preferred Date</label>
                      <input 
                        type="date" 
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="w-full bg-black border border-luxury-cream/10 p-5 rounded-xl focus:border-luxury-gold/60 outline-none text-luxury-cream transition-all hover:border-luxury-cream/30"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-luxury-cream/30 block mb-2">Preferred Time</label>
                      <select 
                        value={bookingTime}
                        onChange={(e) => setBookingTime(e.target.value)}
                        className="w-full bg-black border border-luxury-cream/10 p-5 rounded-xl focus:border-luxury-gold/60 outline-none text-luxury-cream transition-all hover:border-luxury-cream/30 appearance-none"
                      >
                        <option value="" className="bg-black text-luxury-cream">Choose hour</option>
                        <option value="10:00" className="bg-black text-luxury-cream">10:00 AM</option>
                        <option value="11:30" className="bg-black text-luxury-cream">11:30 AM</option>
                        <option value="13:00" className="bg-black text-luxury-cream">01:00 PM</option>
                        <option value="14:30" className="bg-black text-luxury-cream">02:30 PM</option>
                        <option value="16:00" className="bg-black text-luxury-cream">04:00 PM</option>
                      </select>
                    </div>
                  </div>
                  <div className="pt-12 flex justify-center gap-6">
                    <button 
                      onClick={() => setBookingStep(1)}
                      className="px-10 py-5 border border-luxury-cream/10 text-[10px] font-bold uppercase tracking-[0.2em] hover:border-luxury-gold/50 transition-all text-luxury-cream/60"
                    >
                      Return
                    </button>
                    <button 
                      disabled={!bookingDate || !bookingTime}
                      onClick={() => setBookingStep(3)}
                      className="px-16 py-5 bg-luxury-cream text-luxury-black text-[10px] font-bold uppercase tracking-[0.25em] disabled:opacity-20 transition-all shadow-lg"
                    >
                      Finalize
                    </button>
                  </div>
                </motion.div>
              )}

              {bookingStep === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-12 py-10"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12 }}
                    className="w-24 h-24 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-luxury-gold shadow-[0_0_30px_rgba(197,160,89,0.2)]"
                  >
                    <Calendar size={36} className="text-luxury-gold" />
                  </motion.div>
                  <div className="space-y-4">
                    <h3 className="text-4xl md:text-5xl font-serif tracking-tight">Concierge Sync</h3>
                    <p className="text-sm text-luxury-cream/40 max-w-sm mx-auto leading-loose italic">
                      "Real luxury is seamless. Add your session to your calendar for an effortlessly integrated lifestyle."
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-6 mt-12 bg-white/[0.02] p-8 rounded-3xl border border-white/5">
                    <div className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-bold">Sync Feature</div>
                    <button 
                      onClick={handleAppleCalendarExport}
                      className="group px-16 py-6 bg-luxury-gold text-luxury-black text-[11px] font-extrabold uppercase tracking-[0.3em] hover:brightness-110 transition-all rounded-sm flex items-center justify-center gap-4 w-full md:w-fit mx-auto shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
                    >
                      <Plus className="group-hover:rotate-90 transition-transform duration-500" /> Confirm & Sync to Calendar
                    </button>
                    <p className="text-[9px] text-luxury-cream/20 tracking-[0.3em] font-medium uppercase">Works with Apple Calendar, Google & Outlook</p>
                  </div>
                  <button 
                    onClick={() => setBookingStep(1)}
                    className="text-[9px] uppercase tracking-[0.5em] text-luxury-cream/30 hover:text-luxury-gold transition-all pt-8"
                  >
                    Reschedule Appointment
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </Layout>
  );
};
