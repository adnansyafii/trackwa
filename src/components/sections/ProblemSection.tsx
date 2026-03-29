import SectionWrapper from "@/components/common/SectionWrapper";
import { EyeOff, Unplug, Ghost, AlertCircle, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  {
    icon: EyeOff,
    number: "01",
    title: "Blank 100% di WhatsApp",
    desc: "Anda menyebar budget di Google, Meta, TikTok, hingga KOL. Namun saat leads WA masuk, Anda kehilangan jejak sumber aslinya. Anda tidak tahu pasti leads A datang dari Iklan B."
  },
  {
    icon: Ghost,
    number: "02",
    title: "Solusi Manual Sama Dengan Boros",
    desc: "Jika pun Anda mencoba melacaknya, Anda terpaksa membedakan Landing Page atau membedakan Nomor WhatsApp untuk tiap channel marketing. Cara kuno ini sangat repot dan butuh biaya jauh lebih besar."
  },
  {
    icon: Unplug,
    number: "03",
    title: "Skala Bisnis Jadi Macet",
    desc: "Tanpa kepastian 100% dari mana lead berasal, Anda tidak akan pernah percaya diri untuk menaikkan budget iklan (scale up), karena takut dana terbuang tanpa hasil nyata."
  }
];

const ProblemSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <SectionWrapper id="masalah" alt className="relative overflow-hidden py-32">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4')] pointer-events-none opacity-50" />
      <div className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -right-48 w-[500px] h-[500px] bg-primary-glow/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      
      {/* Section Header */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-24 px-6">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-xs font-black uppercase tracking-widest mb-8 shadow-sm"
        >
          <AlertCircle className="w-4 h-4" />
          Tantangan Pemilik Bisnis
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-8 tracking-tighter leading-[1.05]"
        >
          Leads WhatsApp Berdatangan,<br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-glow to-primary animate-gradient-x underline decoration-primary/20 decoration-4 underline-offset-8">
            Tapi Anda Gak Tahu Dari Mana Asalnya?
          </span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium"
        >
          Iklan terus berjalan di Google, Meta, hingga TikTok. Namun saat leads mulai masuk ke WhatsApp, Anda tidak tahu iklan mana yang mendatangkan mereka. Akhirnya, Anda hanya menebak-nebak iklan mana yang benar-benar menguntungkan.
        </motion.p>
      </div>

      {/* Cards Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto px-6"
      >
        {problems.map((item, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            className="group relative p-10 rounded-[2.5rem] bg-white dark:bg-card/80 backdrop-blur-3xl border border-primary/10 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(56,189,248,0.15)] overflow-hidden flex flex-col"
          >
            {/* Numeric Indicator */}
            <div className="absolute top-8 right-8 text-4xl font-black text-primary/5 group-hover:text-primary/10 transition-colors duration-500">
              {item.number}
            </div>

            {/* Icon Container with multi-layered glow */}
            <div className="relative mb-10 self-start">
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl scale-125" />
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner overflow-hidden">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <item.icon className="w-8 h-8 text-primary group-hover:rotate-6 transition-transform duration-500" />
              </div>
            </div>

            <h3 className="text-2xl font-black text-foreground mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
              {item.title}
            </h3>
            
            <p className="text-muted-foreground text-lg leading-relaxed flex-grow">
              {item.desc}
            </p>
            
            {/* Subtle interactive element */}
            <div className="mt-8 flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
              Kenali Lebih Dalam <ArrowUpRight className="w-4 h-4" />
            </div>

            {/* Top border highlight effect */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default ProblemSection;
