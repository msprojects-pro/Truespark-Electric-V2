import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle2, Send } from "lucide-react";
import { PageTransition } from "../components/PageTransition";
import { SEO } from "../components/SEO";
import { businessData } from "../data/businessData";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <PageTransition>
      <SEO 
        title={`Contact & Quote | ${businessData.name}`}
        description="Get a free quote or request emergency electrical service in Nashville and Middle Tennessee."
      />

      <section className="bg-slate-900 py-20 border-b border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl font-bold text-white sm:text-5xl mb-6"
          >
            Contact <span className="text-cyan-400">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-lg text-slate-400"
          >
            Need an electrician? Request a free quote for your project or call our 24/7 emergency line for immediate assistance.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              <div>
                <h2 className="font-display text-3xl font-bold text-white mb-8">Get In Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900 text-cyan-400 border border-slate-800">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Phone</h3>
                      <p className="text-slate-400">Main: <a href={`tel:${businessData.phone.main.replace(/\D/g, "")}`} className="hover:text-cyan-400">{businessData.phone.main}</a></p>
                      <p className="text-amber-500 font-semibold">Emergency: <a href={`tel:${businessData.phone.emergency.replace(/\D/g, "")}`} className="hover:text-amber-400">{businessData.phone.emergency}</a></p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900 text-cyan-400 border border-slate-800">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Email</h3>
                      <a href={`mailto:${businessData.email}`} className="text-slate-400 hover:text-cyan-400">{businessData.email}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900 text-cyan-400 border border-slate-800">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Location</h3>
                      <p className="text-slate-400">{businessData.address}</p>
                      <p className="text-sm text-slate-500 mt-1">Serving: {businessData.serviceArea}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900 text-cyan-400 border border-slate-800">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Hours</h3>
                      <p className="text-slate-400">Office: {businessData.hours.office}</p>
                      <p className="text-slate-400">Service: {businessData.hours.service}</p>
                      <p className="text-amber-500 font-semibold">Emergency: {businessData.hours.emergency}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-64 rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1590579491624-f98f36d4c763?auto=format&fit=crop&q=80&w=800&h=400" 
                  alt="Nashville Location" 
                  className="w-full h-full object-cover opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-slate-950/80 backdrop-blur px-6 py-3 rounded-full border border-slate-700 text-sm font-medium text-slate-300 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-cyan-500" />
                    Interactive Map Disabled in Preview
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-800 relative overflow-hidden"
            >
              <AnimatePresence>
                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 z-10 bg-slate-900 flex flex-col items-center justify-center text-center p-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 15 }}
                      className="h-20 w-20 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6"
                    >
                      <CheckCircle2 className="h-10 w-10 text-emerald-400" />
                    </motion.div>
                    <h3 className="font-display text-3xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-400">Thank you for reaching out. A member of our team will contact you shortly.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <h2 className="font-display text-3xl font-bold text-white mb-8">Request a Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-slate-300">First Name</label>
                    <input required type="text" id="firstName" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-slate-300">Last Name</label>
                    <input required type="text" id="lastName" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address</label>
                  <input required type="email" id="email" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-300">Phone Number</label>
                  <input required type="tel" id="phone" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors" placeholder="(555) 123-4567" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-slate-300">Service Needed</label>
                  <select id="service" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none">
                    <option value="">Select a service...</option>
                    {businessData.services.map(s => (
                      <option key={s.category} value={s.category}>{s.category}</option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300">Project Details</label>
                  <textarea required id="message" rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none" placeholder="Tell us about your electrical needs..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-4 rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="h-5 w-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>Send Request <Send className="h-4 w-4" /></>
                  )}
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
}
