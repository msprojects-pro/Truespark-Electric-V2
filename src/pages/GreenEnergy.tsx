import { motion } from "framer-motion";
import { Leaf, Sun, Battery, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PageTransition } from "../components/PageTransition";
import { SEO } from "../components/SEO";
import { businessData } from "../data/businessData";

export function GreenEnergy() {
  return (
    <PageTransition>
      <SEO 
        title={`Green Energy Solutions | ${businessData.name}`}
        description="Solar panel installation, EV charging, and battery backups in Middle Tennessee. Save money and the environment."
      />

      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1920&h=1080')] opacity-20 mix-blend-luminosity bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-6">
              <Leaf className="h-5 w-5" />
              <span>Sustainable Power Solutions</span>
            </div>
            <h1 className="font-display text-5xl font-bold text-white sm:text-6xl mb-6 leading-tight">
              Power Your Future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Green Energy</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10">
              Reduce your carbon footprint and lower your energy bills with our expert solar, battery, and EV charging installations.
            </p>
            <Link
              to="/contact"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-emerald-500 px-8 font-bold text-slate-950 transition-all hover:bg-emerald-400"
            >
              Get a Free Energy Audit <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Sun, title: "Solar Installation", desc: "Custom-designed solar arrays for maximum efficiency and ROI." },
              { icon: Battery, title: "Battery Backup", desc: "Keep the lights on during outages with Tesla Powerwall & Generac." },
              { icon: Zap, title: "EV Charging", desc: "Level 2 charger installations for all electric vehicle makes and models." }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950 p-8 rounded-3xl border border-slate-800 hover:border-emerald-500/50 transition-colors"
              >
                <div className="h-14 w-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Financing */}
      <section className="py-24 bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-16 border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-bold text-white mb-4">Make the Switch Affordable</h2>
              <p className="text-slate-300 text-lg mb-8">
                We partner with top green energy lenders to offer flexible financing options. {businessData.financing}.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="font-display text-4xl font-bold text-emerald-400">{businessData.stats.kwhSaved.toLocaleString()}</span>
                  <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">kWh Saved by Clients</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-auto">
              <Link
                to="/contact"
                className="flex w-full md:w-auto h-14 items-center justify-center gap-2 rounded-lg bg-white px-8 font-bold text-slate-900 transition-all hover:bg-slate-200"
              >
                Discuss Financing Options
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
