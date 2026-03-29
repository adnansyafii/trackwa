import SectionWrapper from "@/components/common/SectionWrapper";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Target, Zap, ShieldCheck } from "lucide-react";
import { useRef } from "react";

const SolutionIntroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <SectionWrapper id="intro-solusi" className="bg-primary pt-32 pb-48 relative overflow-hidden">
      <div ref={containerRef} className="absolute inset-0 pointer-events-none">
        {/* Dynamic Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.15),transparent_70%)]" />
        
        {/* Animated Grid / Topo Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" />
        
        {/* Floating Ambient Orbs */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute -top-24 -left-20 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px]" 
        />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
            className="w-full max-w-3xl"
          >
            {/* The Definitive Solution Card */}
            <div className="group relative">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-white/20 rounded-[2.5rem] blur-2xl group-hover:bg-white/30 transition-all duration-700 opacity-50" />
              
              <div className="relative bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[2.5rem] p-10 md:p-14 shadow-2xl overflow-hidden transition-transform duration-700 hover:scale-[1.02]">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-16 -mt-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-2xl -ml-12 -mb-12" />
                
                <div className="flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                    className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-xl mb-10"
                  >
                    <Zap className="w-10 h-10 text-primary fill-primary" />
                  </motion.div>

                  <h3 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight">
                    Perkenalkan, <span className="text-white underline decoration-white/40 underline-offset-8">TrackWA</span>.
                  </h3>
                  
                  <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed mb-4 max-w-2xl mx-auto">
                    Solusi tepat bagi bisnis Anda yang ingin tahu dengan pasti dari mana asal setiap leads yang menghubungi Anda melalui WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SolutionIntroSection;
