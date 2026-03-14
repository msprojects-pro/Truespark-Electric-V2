import { motion } from "framer-motion";
import { Award, CheckCircle2, History, Users } from "lucide-react";
import { PageTransition } from "../components/PageTransition";
import { SEO } from "../components/SEO";
import { businessData } from "../data/businessData";

export function About() {
  return (
    <PageTransition>
      <SEO 
        title={`About Us | ${businessData.name}`}
        description={`Learn about ${businessData.name}, our master electricians, and our commitment to safety and quality since ${businessData.established}.`}
      />

      <section className="bg-slate-900 py-20 border-b border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl font-bold text-white sm:text-5xl mb-6"
          >
            About <span className="text-cyan-400">TrueSpark</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-lg text-slate-400"
          >
            {businessData.tagline} We are a team of dedicated master electricians serving Middle Tennessee with integrity and expertise.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-3xl font-bold text-white mb-4">Our History</h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Founded in {businessData.established}, TrueSpark Electric began with a simple mission: to provide the most reliable, transparent, and high-quality electrical services in Nashville and the surrounding areas. Over the years, we've grown from a single van to a fleet of {businessData.fleet}, serving over {businessData.stats.homes.toLocaleString()} homes and businesses.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                  <History className="h-8 w-8 text-amber-500 mb-4" />
                  <h3 className="font-bold text-white mb-2">Established {businessData.established}</h3>
                  <p className="text-sm text-slate-400">Decades of combined experience.</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                  <Award className="h-8 w-8 text-cyan-500 mb-4" />
                  <h3 className="font-bold text-white mb-2">{businessData.googleRating}</h3>
                  <p className="text-sm text-slate-400">Top-rated on Google & Angi.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="TrueSpark Electric Team" 
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 bg-slate-900/90 backdrop-blur border border-slate-700 p-6 rounded-2xl">
                <h3 className="font-display font-bold text-xl text-white mb-2">Credentials & Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {businessData.credentials.map(cred => (
                    <span key={cred} className="text-xs font-semibold bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/30">
                      {cred}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-white mb-4">Meet The Team</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">The experts behind the power. Our master electricians and support staff are dedicated to your safety and satisfaction.</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {businessData.team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950 rounded-2xl p-6 border border-slate-800 text-center hover:border-cyan-500/50 transition-colors group"
              >
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-2 border-slate-800 group-hover:border-cyan-500 transition-colors">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="font-bold text-white text-lg mb-1">{member.name}</h3>
                <p className="text-cyan-400 text-sm font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
