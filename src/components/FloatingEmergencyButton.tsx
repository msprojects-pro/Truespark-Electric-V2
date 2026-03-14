import { PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import { businessData } from "../data/businessData";

export function FloatingEmergencyButton() {
  return (
    <motion.a
      href={`tel:${businessData.phone.emergency.replace(/\D/g, "")}`}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-4 font-display font-bold text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.5)] transition-colors hover:bg-amber-400"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: [
          "0 0 20px rgba(245,158,11,0.5)",
          "0 0 40px rgba(245,158,11,0.8)",
          "0 0 20px rgba(245,158,11,0.5)",
        ],
      }}
      transition={{
        boxShadow: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <PhoneCall className="h-5 w-5 animate-pulse" />
      <span className="hidden sm:inline">24/7 EMERGENCY</span>
    </motion.a>
  );
}
