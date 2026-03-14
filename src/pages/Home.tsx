import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { PageTransition } from "../components/PageTransition";
import { SEO } from "../components/SEO";
import { businessData } from "../data/businessData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "name": businessData.name,
    "image": "https://picsum.photos/seed/truespark/1200/800",
    "@id": "",
    "url": "https://truesparkelectric.co",
    "telephone": businessData.phone.main,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1920 Current Way",
      "addressLocality": "Nashville",
      "addressRegion": "TN",
      "postalCode": "37209",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.1627,
      "longitude": -86.7816
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "07:00",
      "closes": "17:00"
    },
    "sameAs": [
      businessData.socials.facebook,
      businessData.socials.instagram,
      businessData.socials.linkedin
    ]
  };

  return (
    <PageTransition>
      <SEO 
        title={`${businessData.name} | ${businessData.tagline}`}
        description="Premium residential, commercial, and industrial electrical services in Middle Tennessee. 24/7 emergency response."
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-slate-950 pt-20">
        {/* Background Particles/Glows */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-amber-500/10 blur-[120px]" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=1920&h=1080')] opacity-10 mix-blend-overlay bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
              <span className="flex h-8 items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 text-sm font-semibold text-cyan-400">
                <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                Serving Middle Tennessee
              </span>
              <span className="flex h-8 items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-4 text-sm font-semibold text-amber-400">
                24/7 Emergency Service
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="mb-6 font-display text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Power You Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Trust.</span><br />
              Service You Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Feel.</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="mb-10 max-w-2xl text-lg text-slate-300 sm:text-xl"
            >
              Premium electrical solutions for residential, commercial, and industrial clients. Backed by a lifetime workmanship warranty and {businessData.googleRating} rating.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group relative flex h-14 items-center justify-center gap-2 overflow-hidden rounded-lg bg-cyan-500 px-8 font-bold text-slate-950 transition-all hover:bg-cyan-400"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get a Free Quote <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Link>
              <a
                href={`tel:${businessData.phone.main.replace(/\D/g, "")}`}
                className="flex h-14 items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800/50 px-8 font-bold text-white backdrop-blur-sm transition-all hover:bg-slate-800 hover:border-slate-600"
              >
                <PhoneCallIcon className="h-5 w-5 text-cyan-400" />
                {businessData.phone.main}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-y border-slate-800 bg-slate-900/50 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8">
            {[
              { icon: ShieldCheck, title: "Lifetime Warranty", desc: "On all workmanship" },
              { icon: Clock, title: "Fast Response", desc: businessData.response.emergency },
              { icon: Award, title: "Award Winning", desc: "Angi Super Service" },
              { icon: Zap, title: "Licensed & Insured", desc: businessData.credentials[0] },
            ].map((badge, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center sm:flex-row sm:text-left gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-800 text-cyan-400">
                  <badge.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white">{badge.title}</h3>
                  <p className="text-sm text-slate-400">{badge.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="mb-4 font-display text-3xl font-bold text-white sm:text-4xl">Comprehensive Electrical Services</h2>
              <p className="text-slate-400">From minor residential repairs to massive industrial installations, our master electricians deliver precision and safety.</p>
            </div>
            <Link to="/services" className="flex items-center gap-2 font-semibold text-cyan-400 hover:text-cyan-300">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {businessData.services.slice(0, 3).map((service, i) => (
              <motion.div
                key={service.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-slate-800 text-cyan-400 transition-colors group-hover:bg-cyan-500 group-hover:text-slate-950">
                  <Zap className="h-7 w-7" />
                </div>
                <h3 className="mb-3 font-display text-2xl font-bold text-white">{service.category}</h3>
                <p className="mb-6 text-slate-400">{service.description}</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  {service.items.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                      {item}
                    </li>
                  ))}
                  <li className="text-cyan-400 pt-2 font-medium">And more...</li>
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cyan-950/20" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1920&h=1080')] opacity-5 mix-blend-luminosity bg-cover bg-center" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="flex flex-col items-center text-center py-6 md:py-0">
              <span className="font-display text-5xl font-bold text-cyan-400 mb-2">12k+</span>
              <span className="text-lg font-medium text-slate-300">Homes Powered</span>
            </div>
            <div className="flex flex-col items-center text-center py-6 md:py-0">
              <span className="font-display text-5xl font-bold text-amber-500 mb-2">2.5M</span>
              <span className="text-lg font-medium text-slate-300">kWh Saved via Green Tech</span>
            </div>
            <div className="flex flex-col items-center text-center py-6 md:py-0">
              <span className="font-display text-5xl font-bold text-cyan-400 mb-2">100%</span>
              <span className="text-lg font-medium text-slate-300">Satisfaction Guarantee</span>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

// Simple icon component for the hero
function PhoneCallIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
