import SectionWrapper from "@/components/common/SectionWrapper";
import { AlertTriangle, TrendingDown, ArrowRight, HelpCircle, Trash2, ZapOff, AlertCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";

const LossSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <SectionWrapper id="kerugian" className="relative overflow-hidden bg-white/50 dark:bg-background/50 py-24 border-y border-border">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-destructive/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-20 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-destructive/10 border border-destructive/20 text-destructive font-bold uppercase tracking-widest mb-6 text-sm"
        >
          <AlertCircle className="w-4 h-4" />
          Kebocoran Profit
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight leading-[1.05]"
        >
          Berapa Banyak Uang Anda 
          <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-destructive via-orange-500 to-destructive animate-gradient-x">
            Yang Menguap Sia-sia?
          </span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
        >
          Beriklan tanpa tracking yang akurat hanyalah sebuah <strong>pertaruhan</strong> yang sangat mahal bagi bisnis Anda.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto px-6" ref={containerRef}>
        
        {/* THE PREMIUM MATH CARD */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative bg-white/80 dark:bg-card/90 backdrop-blur-3xl rounded-[3rem] border border-destructive/10 p-10 md:p-16 shadow-[0_32px_64px_-16px_rgba(239,68,68,0.1)] overflow-hidden group"
        >
          {/* Top accent line */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-destructive to-transparent opacity-50" />
          
          <div className="relative z-10">
            <div className="flex flex-col gap-12">
              
              {/* Pain Points List */}
              <div className="space-y-8">
                {[
                  {
                    icon: <HelpCircle className="w-6 h-6" />,
                    text: <>Jika Anda tidak tahu dari mana leads dan customer berasal, beriklan sekadar menjadi <strong className="text-foreground">tebak-tebakan dan coba-coba</strong>.</>
                  },
                  {
                    icon: <Trash2 className="w-6 h-6" />,
                    text: <>Anda tanpa sengaja terus membuang budget ke <em className="text-foreground">channel, campaign, keyword, maupun iklan</em> yang sebenarnya tidak menghasilkan.</>
                  },
                  {
                    icon: <ZapOff className="w-6 h-6" />,
                    text: <>Tanpa tracking, Anda berisiko terus membakar dana ke <strong>channel marketing</strong> yang nyatanya <span className="text-destructive font-bold">boncos total</span>.</>
                  }
                ].map((item, i) => (
                  <motion.div key={i} variants={itemVariants} className="flex gap-6 group/item">
                    <div className="w-12 h-12 rounded-2xl bg-destructive/5 flex items-center justify-center flex-shrink-0 group-hover/item:bg-destructive/10 group-hover/item:scale-110 transition-all duration-300 text-destructive border border-destructive/10 shadow-sm">
                      {item.icon}
                    </div>
                    <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed group-hover/item:text-foreground transition-colors duration-300">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Divider with Icon */}
              <div className="relative flex items-center py-4">
                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-destructive/20 to-transparent"></div>
                <div className="px-4 text-destructive flex gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive animate-pulse" />
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive opacity-50" />
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive opacity-25" />
                </div>
                <div className="flex-grow h-px bg-gradient-to-r from-destructive/20 via-destructive/5 to-transparent"></div>
              </div>

              {/* Accumulation Header & Counter */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                <motion.div variants={itemVariants} className="space-y-4 max-w-md">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-destructive/10 text-destructive text-xs font-black uppercase tracking-widest">
                    Akumulasi Kebocoran Budget
                  </div>
                  <h3 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground drop-shadow-xl tracking-tighter tabular-nums selection:bg-destructive/20">
                    Rp <span className="text-destructive">???</span>.???
                  </h3>
                </motion.div>

                <motion.div variants={itemVariants} className="flex-shrink-0">
                  <div className="p-6 md:p-8 rounded-[2rem] bg-destructive/5 border border-destructive/10 backdrop-blur-sm relative group/alert max-w-xs ml-auto">
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-white dark:bg-card border border-destructive/20 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12 group-hover/alert:rotate-0 transition-transform duration-500">
                      <TrendingDown className="w-6 h-6 text-destructive" />
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground font-bold leading-relaxed pr-2">
                      Karena Anda <span className="text-destructive uppercase">buta data</span>, kerugian ini berpotensi tak terbatas dan terus membengkak setiap hari.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Micro-CTA Footer */}
              <motion.div variants={itemVariants} className="pt-8 border-t border-border mt-4 flex flex-col md:flex-row items-center justify-between gap-6">
                 <p className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-500" />
                    Jangan biarkan budget Anda jadi taruhan.
                 </p>
                 <Link to="/waiting-list">
                    <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-destructive text-white font-bold hover:bg-destructive/90 transition-all shadow-lg shadow-destructive/20 hover:shadow-destructive/40 active:scale-95">
                      Berhenti Bakar Uang Sekarang
                      <ArrowRight className="w-4 h-4" />
                    </button>
                 </Link>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default LossSection;
