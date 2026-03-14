import { motion } from "framer-motion";
import { Zap, HomeIcon, Building2, Factory, Leaf, CheckCircle2 } from "lucide-react";
import { PageTransition } from "../components/PageTransition";
import { SEO } from "../components/SEO";
import { businessData } from "../data/businessData";

const iconMap: Record<string, any> = {
  Emergency: Zap,
  Residential: HomeIcon,
  Commercial: Building2,
  Industrial: Factory,
  "Green Energy": Leaf,
};

export function Services() {
  return (
    <PageTransition>
      <SEO 
        title={`Services | ${businessData.name}`}
        description="Explore our full range of electrical services including residential, commercial, industrial, and green energy solutions."
      />

      {/* Header */}
      <section className="bg-slate-900 py-20 border-b border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl font-bold text-white sm:text-5xl mb-6"
          >
            Our <span className="text-cyan-400">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-lg text-slate-400"
          >
            Expert electrical solutions tailored to your specific needs. From emergency repairs to massive industrial build-outs, we have the expertise to get it done right.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:gap-24">
            {businessData.services.map((service, index) => {
              const Icon = iconMap[service.category] || Zap;
              const isEven = index % 2 === 0;

              return (
                <motion.div 
                  key={service.category}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className={`flex flex-col gap-8 lg:items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Image Placeholder */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-video overflow-hidden rounded-2xl bg-slate-800">
                      <img 
                        src={service.image} 
                        alt={`${service.category} Electrical Services`}
                        className="object-cover w-full h-full opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950/80 backdrop-blur-md border border-slate-700 text-cyan-400 shadow-xl">
                        <Icon className="h-8 w-8" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2 lg:px-8">
                    <h2 className="font-display text-3xl font-bold text-white mb-4">{service.category}</h2>
                    <p className="text-slate-400 text-lg mb-8">{service.description}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.items.map((item, i) => (
                        <motion.div 
                          key={item}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + (i * 0.1) }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                          <span className="text-slate-300 font-medium">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
