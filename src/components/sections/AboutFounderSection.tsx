import SectionWrapper from "@/components/common/SectionWrapper";
import { Clock, Wrench, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const AboutFounderSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <SectionWrapper id="about" alt className="overflow-hidden">
      <div className="relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4"
          >
            <Sparkles className="w-4 h-4" />
            <span>Kualitas Eksklusif</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Kenapa Harus TrackWA?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Kami percaya bahwa tracking yang akurat adalah fondasi bisnis yang sehat.
            Itulah mengapa kami tidak menggunakan bot otomatis.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16"
        >
          {/* Manual & Akurat */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="group relative bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40">Premium Setup</span>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Wrench className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Dikerjakan Manual & Detail</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Setiap setup tracking dilakukan secara personal oleh tim kami. Tidak ada template massal atau bot otomatis.
            </p>
            <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/10">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-sm text-foreground/80 italic">
                "Hasilnya jauh lebih akurat dibanding plugin otomatis mana pun."
              </p>
            </div>
          </motion.div>

          {/* Daftar Tunggu */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="group relative bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Antrean Prioritas</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Karena dikerjakan satu per satu secara detail, kami membatasi jumlah klien untuk menjaga standar kualitas.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Kapasitas Mingguan</span>
                <span className="font-semibold text-primary">Terbatas</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-primary" 
                />
              </div>
              <p className="text-[12px] text-muted-foreground text-center">
                Daftar sekarang untuk amankan slot Anda di antrean.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutFounderSection;

