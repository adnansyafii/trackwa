import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const WORDS = ["Channel", "Campaign", "Ad Group", "Keyword", "Iklan RSA"];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Premium Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full -z-10 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/30 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="w-full max-w-[1100px] mx-auto flex flex-col items-center">
            
            {/* Glassmorphism Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur-md border border-primary/20 shadow-sm px-4 py-1.5 text-sm font-semibold text-primary mb-8 mx-auto hover:bg-white/80 transition-colors">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              Solusi Tracking Leads WhatsApp
            </div>

            {/* Headline Flow */}
            <h1 className="text-[2.5rem] md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold leading-[1.1] tracking-tight text-foreground mb-6 max-w-[1100px] mx-auto">
              Stop 🔥 Bakar Uang untuk{" "}
              <span className="inline-block text-primary min-w-[160px] lg:min-w-[220px] text-center relative pointer-events-none">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {WORDS[index]}
                  </motion.span>
                </AnimatePresence>
              </span>{" "}
              <br className="hidden md:block" />
              yang Tidak Mendatangkan
              <br className="hidden md:block" />
              Chat WhatsApp
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-4xl mx-auto">
              Jangan biarkan budget iklan Anda terbuang sia-sia. Ketahui persis iklan mana yang
              <br className="hidden md:block" />
              mendatangkan chat WA dan mana yang hanya membakar uang. Matikan yang <span className="text-foreground font-medium">boncos</span>,
              <br className="hidden md:block" />
              perbesar budget di iklan yang terbukti menghasilkan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link to="/waiting-list">
                <Button size="lg" className="h-14 px-8 text-base font-semibold group rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300">
                  Gabung Waiting List Sekarang
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-5 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary/70"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Tidak perlu paham teknis. Kami bantu sampai beres.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

