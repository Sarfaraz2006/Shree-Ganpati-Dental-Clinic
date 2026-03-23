import React, { useState, useEffect, FormEvent, createContext } from 'react';
import { motion } from 'motion/react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import { 
  Menu, 
  X, 
  MessageCircle,
  MessageSquare,
  Smile
} from 'lucide-react';

export const PopupContext = createContext<{ openPopup: (problem?: string) => void }>({ openPopup: () => {} });

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isFloatingFormOpen, setIsFloatingFormOpen] = useState(false);
  const [floatingForm, setFloatingForm] = useState({ name: '', phone: '', email: '', problem: '' });
  const [floatingErrors, setFloatingErrors] = useState({ name: false, phone: false, email: false });

  const chatOptions = [
    { icon: "🦷", label: "Tooth Pain" },
    { icon: "😁", label: "Teeth Whitening" },
    { icon: "🔧", label: "Broken Tooth" },
    { icon: "👶", label: "Child Dentistry" },
    { icon: "💰", label: "Know Pricing" },
    { icon: "📅", label: "Book Appointment" },
  ];

  const openPopup = (problem?: string) => {
    if (problem) {
      setFloatingForm(prev => ({ ...prev, problem }));
    }
    setIsFloatingFormOpen(true);
  };

  const handleChatOptionClick = (option: string) => {
    openPopup(option);
    setIsChatOpen(false);
  };

  const handleFloatingSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = {
      name: !floatingForm.name.trim(),
      phone: !floatingForm.phone.trim(),
      email: !floatingForm.email.trim()
    };
    
    setFloatingErrors(errors);

    if (!errors.name && !errors.phone && !errors.email) {
      const problemText = floatingForm.problem.trim() || 'General Inquiry';
      const whatsappMessage = `Hello Shree Ganpati Dental Clinic! 🦷\n\n👤 Name: ${floatingForm.name}\n📞 Phone: ${floatingForm.phone}\n📧 Email: ${floatingForm.email}\n🦷 Problem: ${problemText}\n\nI would like to book an appointment. Please confirm \nmy slot. Thank you!`;
      
      window.open(`https://wa.me/918130238201?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
      setIsFloatingFormOpen(false);
      setFloatingForm({ name: '', phone: '', email: '', problem: '' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Why Us', href: '/#why-us' },
    { name: 'Doctor', href: '/#doctor' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Contact', href: '/#contact' },
  ];

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen font-sans text-navy bg-white selection:bg-gold selection:text-navy">
      {/* Navbar */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-navy/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2">
                <Smile className="text-gold h-8 w-8" />
                <span>Shree Ganpati<span className="text-gold">.</span></span>
              </Link>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href}
                  className="text-white/90 hover:text-gold transition-colors text-sm font-medium uppercase tracking-wider"
                >
                  {link.name}
                </Link>
              ))}
              <button 
                onClick={() => openPopup('Book Appointment')}
                className="bg-gold hover:bg-gold-hover text-navy px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-lg"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white focus:outline-none"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-navy shadow-xl border-t border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-white hover:text-gold hover:bg-white/5 rounded-md"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openPopup('Book Appointment');
                  }}
                  className="block w-full text-center bg-gold text-navy px-6 py-3 rounded-full font-bold active:scale-95 transition-transform"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      <PopupContext.Provider value={{ openPopup }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </PopupContext.Provider>

      {/* Footer */}
      <footer className="bg-[#050b14] text-white/70 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <a href="#home" className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                <Smile className="text-gold h-8 w-8" />
                <span>Shree Ganpati<span className="text-gold">.</span></span>
              </a>
              <p className="max-w-md mb-6">
                Rohini's 5-Star Rated Dental Care. Premium dental services focused on your comfort, health, and perfect smile.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <Link to={link.href} className="hover:text-gold transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Services</h4>
              <ul className="space-y-2">
                <li><Link to="/services" className="hover:text-gold transition-colors">Root Canal (RCT)</Link></li>
                <li><Link to="/services" className="hover:text-gold transition-colors">Painless Extraction</Link></li>
                <li><Link to="/services" className="hover:text-gold transition-colors">Teeth Whitening</Link></li>
                <li><Link to="/services" className="hover:text-gold transition-colors">Kids Dentistry</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} All Rights Reserved - Shree Ganpati Dental Clinic</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Smart Mini Form Popup (Floating WhatsApp) */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end">
        {isFloatingFormOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-[calc(100vw-2rem)] sm:w-80 bg-white rounded-2xl shadow-2xl border-2 border-navy overflow-hidden"
          >
            <div className="bg-navy p-4 text-white flex justify-between items-center border-b-2 border-gold">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-gold" />
                <h4 className="font-bold">Chat with Us</h4>
              </div>
              <button onClick={() => setIsFloatingFormOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5">
              <form onSubmit={handleFloatingSubmit} className="space-y-4">
                <div>
                  <label htmlFor="float-name" className="block text-xs font-medium text-navy mb-1">Full Name *</label>
                  <input 
                    type="text" 
                    id="float-name" 
                    value={floatingForm.name}
                    onChange={(e) => setFloatingForm({...floatingForm, name: e.target.value})}
                    className={`w-full px-3 py-2 bg-gray-50 border ${floatingErrors.name ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-navy text-sm transition-all`}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="float-phone" className="block text-xs font-medium text-navy mb-1">Phone Number *</label>
                  <input 
                    type="number" 
                    id="float-phone" 
                    value={floatingForm.phone}
                    onChange={(e) => setFloatingForm({...floatingForm, phone: e.target.value})}
                    className={`w-full px-3 py-2 bg-gray-50 border ${floatingErrors.phone ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-navy text-sm transition-all`}
                    placeholder="5550000000"
                  />
                </div>
                <div>
                  <label htmlFor="float-email" className="block text-xs font-medium text-navy mb-1">Email *</label>
                  <input 
                    type="email" 
                    id="float-email" 
                    value={floatingForm.email}
                    onChange={(e) => setFloatingForm({...floatingForm, email: e.target.value})}
                    className={`w-full px-3 py-2 bg-gray-50 border ${floatingErrors.email ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-navy text-sm transition-all`}
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="float-problem" className="block text-xs font-medium text-navy mb-1">Your Problem (Optional)</label>
                  <textarea 
                    id="float-problem" 
                    rows={2}
                    value={floatingForm.problem}
                    onChange={(e) => setFloatingForm({...floatingForm, problem: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-navy text-sm transition-all resize-none"
                    placeholder="e.g. Tooth pain, whitening query..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm py-3 rounded-lg transition-all shadow-md flex items-center justify-center gap-2 mt-2 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  Send on WhatsApp
                </button>
              </form>
            </div>
          </motion.div>
        )}

        <button
          onClick={() => setIsFloatingFormOpen(!isFloatingFormOpen)}
          className="bg-[#25D366] text-white px-3 py-2.5 md:px-5 md:py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-transform duration-300 flex items-center justify-center gap-1.5 md:gap-2 group"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 md:w-6 md:h-6" />
          <span className="font-bold text-xs md:text-base">Chat with Us</span>
        </button>
      </div>

      {/* AI Chatbot Widget */}
      <div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50">
        {isChatOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 md:bottom-20 left-0 w-[calc(100vw-2rem)] sm:w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            <div className="bg-navy p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <h4 className="font-bold">How Can We Help You?</h4>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 bg-gray-50">
              <p className="text-sm text-gray-600 mb-4">Select an option below to chat with our team on WhatsApp:</p>
              <div className="grid grid-cols-1 gap-2">
                {chatOptions.map((opt, idx) => (
                  <button 
                    key={idx}
                    onClick={() => handleChatOptionClick(opt.label)}
                    className="flex items-center gap-3 w-full text-left px-4 py-3 bg-white border border-gray-100 rounded-xl hover:border-gold hover:shadow-md transition-all group"
                  >
                    <span className="text-xl">{opt.icon}</span>
                    <span className="font-medium text-navy group-hover:text-gold transition-colors">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-navy text-white px-3 py-2.5 md:px-6 md:py-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-transform duration-300 flex items-center justify-center gap-1.5 md:gap-3 border-2 border-gold"
        >
          <MessageSquare className="w-4 h-4 md:w-6 md:h-6 text-gold" />
          <span className="font-bold text-xs md:text-base">Need Help?</span>
        </button>
      </div>
    </div>
  );
}
