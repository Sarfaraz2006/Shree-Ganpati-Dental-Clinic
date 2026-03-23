import { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Shield, Stethoscope, Smile, Activity, Baby, ArrowRight, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PopupContext } from '../App';

export default function Services() {
  const { openPopup } = useContext(PopupContext);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const services = [
    { 
      icon: Shield, 
      title: "Painless Extraction", 
      desc: "Expert and gentle tooth extraction with minimal discomfort. We ensure a smooth procedure and quick recovery for our patients.", 
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop"
    },
    { 
      icon: Activity, 
      title: "Root Canal (RCT)", 
      desc: "Painless endodontic therapy to save infected or damaged teeth. We use the latest rotary instruments for a quick, comfortable procedure.", 
      image: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?q=80&w=800&auto=format&fit=crop"
    },
    { 
      icon: Sparkles, 
      title: "Teeth Whitening", 
      desc: "Professional scaling and whitening for a brighter, more confident smile. We remove years of stains safely and effectively.", 
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop"
    },
    { 
      icon: Smile, 
      title: "Dentures", 
      desc: "High-quality complete and partial dentures to restore your smile and chewing ability. Custom-fitted for maximum comfort.", 
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop"
    },
    { 
      icon: Baby, 
      title: "Kids Dentistry", 
      desc: "Gentle and fun dental care tailored specifically for children. We create a positive environment to build lifelong healthy habits.", 
      image: "https://images.unsplash.com/photo-1544507888-56d73eb6046e?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Dark Hero Section to fix Navbar visibility */}
      <div className="bg-navy pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold font-semibold tracking-wider uppercase text-sm mb-2"
          >
            Comprehensive Care
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white font-serif"
          >
            Our Premium Services
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-gold mx-auto mt-6 rounded-full"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg text-white/80 max-w-2xl mx-auto"
          >
            We offer a full range of dental treatments using state-of-the-art technology to ensure your smile is healthy, beautiful, and long-lasting.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Services Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative h-[400px] w-full cursor-pointer perspective-[1000px]"
              onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
              onMouseEnter={() => setFlippedIndex(index)}
              onMouseLeave={() => setFlippedIndex(null)}
            >
              <motion.div
                className="w-full h-full relative [transform-style:preserve-3d]"
                animate={{ rotateY: flippedIndex === index ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
              >
                {/* Front of Card */}
                <div className="absolute w-full h-full [backface-visibility:hidden] rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-navy/60 flex flex-col items-center justify-center p-6 text-center transition-colors hover:bg-navy/70">
                    <service.icon className="w-16 h-16 text-gold mb-4 drop-shadow-lg" />
                    <h3 className="text-3xl font-bold text-white font-serif drop-shadow-md">{service.title}</h3>
                    <div className="mt-6 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                      <RotateCcw className="w-4 h-4" /> Tap to flip
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl bg-white border-2 border-gold/30 shadow-xl p-8 flex flex-col items-center justify-center text-center">
                  <div className="bg-navy/5 p-4 rounded-full mb-4">
                    <service.icon className="w-10 h-10 text-navy" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-4 font-serif">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-8 flex-grow flex items-center">
                    {service.desc}
                  </p>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      openPopup(service.title);
                    }}
                    className="w-full bg-navy hover:bg-navy/90 text-white px-8 py-4 rounded-full font-bold transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    Book this service 
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-navy rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop" 
              alt="Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white font-serif mb-6">Not sure what you need?</h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Schedule a consultation with our expert team at Shree Ganpati Dental Clinic. We'll assess your oral health and create a personalized treatment plan just for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => openPopup('General Consultation')}
                className="bg-gold hover:bg-gold-hover text-navy px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-xl"
              >
                Book Consultation
              </button>
              <Link 
                to="/#contact"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
