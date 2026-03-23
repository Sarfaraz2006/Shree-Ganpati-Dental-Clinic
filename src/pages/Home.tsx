import { motion } from 'motion/react';
import { FormEvent, useContext } from 'react';
import { Link } from 'react-router-dom';
import { PopupContext } from '../App';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  CheckCircle2, 
  Star, 
  MessageCircle,
  Stethoscope,
  Sparkles,
  Shield,
  Smile,
  Activity,
  Baby,
  Award,
  GraduationCap
} from 'lucide-react';

export default function Home() {
  const { openPopup } = useContext(PopupContext);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const date = formData.get('date');
    const message = formData.get('message');

    const whatsappMessage = `Hello Shree Ganpati Dental Clinic! 🦷\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n📧 Email: ${email}\n📅 Preferred Date: ${date}\n🦷 Problem: ${message || 'General Inquiry'}\n\nI would like to book an appointment. Please confirm \nmy slot. Thank you!`;

    window.open(`https://wa.me/918130238201?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop" 
            alt="Modern Dental Clinic" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-navy/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/40 to-navy/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Rohini's 5-Star <br className="hidden md:block" />
              <span className="text-gold italic font-serif">Rated Dental Care</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
              Now Booking Appointments Online! Expert dental care for the whole family in Sector 33, Rohini.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => openPopup('Book Appointment')}
                className="w-full sm:w-auto bg-gold hover:bg-gold-hover text-navy px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Book Appointment
              </button>
              <Link 
                to="/services"
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy px-8 py-4 rounded-full font-bold text-lg transition-all active:scale-95"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy py-16 border-b border-white/10 relative z-20 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5,000+", label: "Happy Patients" },
              { number: "10+", label: "Years Experience" },
              { number: "100%", label: "Painless Care" },
              { number: "5.0★", label: "Google Rating" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-4"
              >
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2 font-serif">{stat.number}</div>
                <div className="text-white/70 text-sm md:text-base uppercase tracking-wider font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section id="services" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gold font-semibold tracking-wider uppercase text-sm mb-2">What We Do</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-navy font-serif">Premium Dental Services</h3>
            <div className="w-24 h-1 bg-gold mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Activity, title: "Root Canal (RCT)", desc: "Painless endodontic therapy to save infected or damaged teeth using latest technology.", image: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?q=80&w=800&auto=format&fit=crop" },
              { icon: Shield, title: "Painless Extraction", desc: "Expert and gentle tooth extraction with minimal discomfort and quick recovery.", image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop" },
              { icon: Sparkles, title: "Teeth Whitening", desc: "Professional scaling and whitening for a brighter, more confident smile.", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop" },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/20 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 bg-white p-2 rounded-xl shadow-lg">
                    <service.icon className="w-6 h-6 text-navy" />
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h4 className="text-xl font-bold text-navy mb-3">{service.title}</h4>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              to="/services"
              className="inline-flex items-center justify-center bg-navy hover:bg-navy/90 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-gold rounded-3xl transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop" 
                alt="Dental Equipment" 
                className="relative z-10 rounded-3xl shadow-2xl object-cover h-[600px] w-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 border border-gray-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-navy">100%</div>
                    <div className="text-sm text-gray-500 font-medium">Painless Procedures</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-gold font-semibold tracking-wider uppercase text-sm mb-2">Why Choose Us</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-navy font-serif mb-6">World-Class Dental Care You Can Trust</h3>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                We combine advanced dental technology with a compassionate approach to deliver the best possible care for your smile. Your comfort and health are our top priorities.
              </p>

              <div className="space-y-6">
                {[
                  "Painless & Comfortable Treatment",
                  "State-of-the-art Modern Equipment",
                  "Highly Experienced & Certified Doctors",
                  "Transparent & Affordable Pricing",
                  "Same Day Emergency Appointments"
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1 bg-gold/20 p-1 rounded-full">
                      <CheckCircle2 className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-lg text-navy font-medium">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <button 
                  onClick={() => openPopup('Schedule a Visit')}
                  className="inline-flex items-center gap-2 bg-navy hover:bg-navy/90 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl active:scale-95"
                >
                  Schedule a Visit
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet The Doctor */}
      <section id="doctor" className="py-32 relative overflow-hidden bg-navy text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
            alt="Clinic Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative rounded-3xl overflow-hidden border-4 border-gold/20 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?q=80&w=2070&auto=format&fit=crop" 
                  alt="Dr. Sarah Mitchell (AI Generated)" 
                  className="w-full h-auto object-cover aspect-[4/5]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white/80 text-xs px-3 py-1 rounded-full border border-white/20 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-gold" /> AI Generated
                </div>
              </div>
              
              {/* Floating Badges */}
              <div className="absolute -bottom-6 -left-6 bg-white text-navy p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:flex items-center gap-4">
                <div className="bg-gold/20 p-3 rounded-full text-gold">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Years Experience</div>
                </div>
              </div>
              
              <div className="absolute top-12 -right-6 bg-navy p-5 rounded-2xl shadow-xl border border-white/10 hidden md:flex items-center gap-4">
                <div className="bg-gold/20 p-2 rounded-full text-gold">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white">Top Rated</div>
                  <div className="text-xs font-medium text-white/70 uppercase tracking-wider">Dentist 2025</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-gold font-semibold tracking-wider uppercase text-sm mb-2 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-gold"></span> Lead Specialist
              </h2>
              <h3 className="text-4xl md:text-6xl font-bold font-serif mb-4">Our Lead Dentist</h3>
              <div className="text-xl text-gold font-medium mb-8">BDS, MDS Specialist</div>
              
              <p className="text-white/80 text-lg leading-relaxed mb-8 font-light">
                "At Shree Ganpati Dental Clinic, our philosophy is simple: treat every patient like family. We believe that a healthy smile is the foundation of overall well-being and confidence. We've built this clinic to be a place where quality care is delivered with a gentle touch."
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-6 h-6 text-gold shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Harvard Medical</h4>
                    <p className="text-sm text-white/60">Doctor of Dental Medicine</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-gold shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">ADA Certified</h4>
                    <p className="text-sm text-white/60">American Dental Association</p>
                  </div>
                </div>
              </div>
              
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_of_John_Hancock.svg" 
                alt="Signature" 
                className="h-12 opacity-50 invert"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gold font-semibold tracking-wider uppercase text-sm mb-2">Patient Stories</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-navy font-serif">What Our Patients Say</h3>
            <div className="w-24 h-1 bg-gold mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Michael R.", quote: "The most painless root canal I've ever had. Dr. Sarah and her team are incredibly professional and made me feel at ease throughout the entire process." },
              { name: "Emily T.", quote: "I got my teeth whitened here for my wedding, and the results were spectacular! The clinic is spotless and feels more like a spa than a dentist's office." },
              { name: "David L.", quote: "Brought my 5-year-old for his first checkup. They were so gentle and patient with him. He actually looks forward to going to the dentist now!" }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative"
              >
                <div className="flex text-gold mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="font-bold text-navy">{testimonial.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Booking */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-gold font-semibold tracking-wider uppercase text-sm mb-2">Get In Touch</h2>
              <h3 className="text-4xl font-bold text-navy font-serif mb-8">Visit Our Clinic</h3>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-navy/5 p-4 rounded-full text-navy">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-lg mb-1">Location</h4>
                    <p className="text-gray-600">A1, Begum Vihar, Sector 33<br/>Rohini, Delhi - 110099</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-navy/5 p-4 rounded-full text-navy">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-lg mb-1">Phone</h4>
                    <p className="text-gray-600">+91 81302 38201</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-navy/5 p-4 rounded-full text-navy">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-lg mb-1">Email</h4>
                    <p className="text-gray-600">info@shreeganpatidental.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-navy/5 p-4 rounded-full text-navy">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-lg mb-1">Working Hours</h4>
                    <p className="text-gray-600">Mon - Sat: 10:00 AM - 8:00 PM<br/>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                  alt="Map Location" 
                  className="w-full h-full object-cover opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-navy text-white px-4 py-2 rounded-full font-medium shadow-lg flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> View on Google Maps
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-navy p-8 md:p-12 rounded-3xl shadow-2xl text-white"
            >
              <h3 className="text-3xl font-bold font-serif mb-2">Request Appointment</h3>
              <p className="text-white/70 mb-8">Fill out the form below and we'll get back to you shortly.</p>
              
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold text-white placeholder-white/40 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold text-white placeholder-white/40 transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold text-white placeholder-white/40 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-white/80 mb-2">Preferred Date</label>
                  <input 
                    type="date" 
                    id="date" 
                    name="date" 
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold text-white placeholder-white/40 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">Message / Reason for Visit</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold text-white placeholder-white/40 transition-all resize-none"
                    placeholder="I would like to schedule a teeth cleaning..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-6 h-6" />
                  Send via WhatsApp
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
