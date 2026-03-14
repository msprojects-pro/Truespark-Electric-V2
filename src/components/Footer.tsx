import { Link } from "react-router-dom";
import { Zap, MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Star } from "lucide-react";
import { businessData } from "../data/businessData";

const SocialIcon = ({ name }: { name: string }) => {
  switch (name.toLowerCase()) {
    case 'facebook': return <Facebook className="h-5 w-5" />;
    case 'instagram': return <Instagram className="h-5 w-5" />;
    case 'linkedin': return <Linkedin className="h-5 w-5" />;
    case 'angi': return <Star className="h-5 w-5" />;
    default: return <div className="h-5 w-5 capitalize flex items-center justify-center text-xs font-bold">{name[0]}</div>;
  }
};

export function Footer() {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 text-slate-400 border-t border-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500 text-slate-950">
                <Zap className="h-6 w-6" fill="currentColor" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold leading-none text-white tracking-tight">
                  TrueSpark
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-cyan-400">
                  Electric
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              {businessData.tagline} Providing premium electrical services for residential, commercial, and industrial clients since {businessData.established}.
            </p>
            <div className="flex gap-4">
              {Object.entries(businessData.socials).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-slate-400 transition-all duration-300 hover:scale-110 hover:bg-cyan-500 hover:text-slate-950 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                >
                  <span className="sr-only">{name}</span>
                  <SocialIcon name={name} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 font-display text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/services" className="transition-colors hover:text-cyan-400">All Services</Link>
              </li>
              <li>
                <Link to="/green-energy" className="transition-colors hover:text-cyan-400">Green Energy Solutions</Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors hover:text-cyan-400">About Our Team</Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-cyan-400">Contact & Quote</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 font-display text-lg font-bold text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-cyan-500" />
                <span>{businessData.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-cyan-500" />
                <div className="flex flex-col">
                  <a href={`tel:${businessData.phone.main.replace(/\D/g, "")}`} className="hover:text-cyan-400">
                    Main: {businessData.phone.main}
                  </a>
                  <a href={`tel:${businessData.phone.emergency.replace(/\D/g, "")}`} className="font-semibold text-amber-500 hover:text-amber-400">
                    Emergency: {businessData.phone.emergency}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-cyan-500" />
                <a href={`mailto:${businessData.email}`} className="hover:text-cyan-400">
                  {businessData.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-6 font-display text-lg font-bold text-white">Hours</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 shrink-0 text-cyan-500" />
                <div className="flex flex-col gap-1">
                  <span className="flex justify-between gap-4">
                    <span className="text-slate-300">Office:</span>
                    <span>{businessData.hours.office}</span>
                  </span>
                  <span className="flex justify-between gap-4">
                    <span className="text-slate-300">Service:</span>
                    <span>{businessData.hours.service}</span>
                  </span>
                  <span className="flex justify-between gap-4 font-semibold text-amber-500 mt-2">
                    <span>Emergency:</span>
                    <span>{businessData.hours.emergency}</span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-900 pt-8 text-sm md:flex-row">
          <p>© {new Date().getFullYear()} {businessData.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="text-slate-500">TN License #EC000012847</span>
            <span className="text-slate-500">|</span>
            <Link to="/contact" className="hover:text-cyan-400">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
