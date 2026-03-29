import SectionWrapper from "@/components/common/SectionWrapper";
import { CheckCircle2, ShieldCheck, Wrench, Sparkles, Activity } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Audit Prasyarat Awal",
    desc: "Kami cek kesiapan website dan akun iklan Anda sebelum setup dimulai."
  },
  {
    icon: Wrench,
    title: "Bantuan Kendala Teknis",
    desc: "Ada konflik kode atau error di website? Teknisi kami siap membantu perbaikannya."
  },
  {
    icon: Sparkles,
    title: "100% Terima Beres",
    desc: "Anda cukup duduk manis. Dari script hingga pembuatan dashboard, kami yang kerjakan."
  }
];

const SolutionSection = () => (
  <SectionWrapper id="solusi" className="bg-background relative overflow-hidden">
    {/* Subtle Green Background Glow */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* KANAN: Copywriting Solusi (Ditukar urutannya nanti di mobile) */}
      <div className="order-1 lg:order-2 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          KAMI PANDU SAMPAI BERES
        </div>
        
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 tracking-tight leading-[1.2]">
          Fokus Scale-Up Bisnis, 
          <br className="hidden md:block" />
          Biar Kami Urus Teknisnya.
        </h2>
        
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          Sistem <span className="italic">tracking</span> butuh integrasi yang rumit. Karena itu, kami memberikan layanan pendampingan penuh—dari cek syarat awal sampai data Anda akurat.
        </p>
        
        <div className="space-y-8 mb-8">
          {benefits.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* KIRI: Visual Ceklis Audit (The Setup Process) */}
      <div className="order-2 lg:order-1 relative z-10 w-full max-w-[500px] mx-auto lg:mx-0">
        <div className="bg-card/80 backdrop-blur-xl border border-border rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
          
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Activity className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">Proses Integrasi TrackWA</p>
              <p className="text-xs text-muted-foreground">Status: <span className="text-primary font-medium">Sedang Berjalan</span></p>
            </div>
          </div>

          <div className="space-y-4 relative">
            {/* The line connecting steps */}
            <div className="absolute left-4 top-2 bottom-6 w-px bg-border z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10 flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 flex-shrink-0">
                <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="bg-background border border-border rounded-xl p-3 w-full shadow-sm">
                <p className="text-sm font-bold text-foreground mb-0.5">1. Masuk Waiting List</p>
                <p className="text-xs text-muted-foreground">Calon klien mendaftar ke antrean setup.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex gap-4 items-start">
               <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 flex-shrink-0">
                <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="bg-background border border-border rounded-xl p-3 w-full shadow-sm">
                <p className="text-sm font-bold text-foreground mb-0.5">2. Pengecekan Kebutuhan</p>
                <p className="text-xs text-muted-foreground">Kami menghubungi Anda untuk mengecek syarat teknis (requirement).</p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative z-10 flex gap-4 items-start">
               <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 flex-shrink-0">
                <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="bg-background border border-border rounded-xl p-3 w-full shadow-sm">
                <p className="text-sm font-bold text-foreground mb-0.5">3. Pembayaran DP 20%</p>
                <p className="text-xs text-muted-foreground">Jika requirement lengkap, lanjut ke pembayaran awal.</p>
              </div>
            </div>

            {/* Step 4 (Active) */}
            <div className="relative z-10 flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center flex-shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></div>
              </div>
              <div className="bg-primary/5 border border-primary/30 rounded-xl p-3 w-full shadow-md shadow-primary/5 mb-1">
                <p className="text-sm font-bold text-primary mb-0.5">4. Proses Setup & Dashboard</p>
                <p className="text-xs text-muted-foreground">Kami mulai pengerjaan tracking dan dashboard analitik.</p>
              </div>
            </div>
            
            {/* Step 5 (Pending) */}
            <div className="relative z-10 flex gap-4 items-start opacity-50">
              <div className="w-8 h-8 rounded-full bg-muted border border-border flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
              </div>
              <div className="bg-transparent border border-border rounded-xl p-3 w-full">
                <p className="text-sm font-bold text-muted-foreground mb-0.5">5. Setup Selesai</p>
                <p className="text-xs text-muted-foreground">Sistem siap dimanfaatkan untuk meningkatkan bisnis Anda.</p>
              </div>
            </div>
          </div>

        </div>
        
        {/* Floating Success Badge */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="absolute -bottom-6 -right-6 md:-right-10 bg-card border border-primary/40 rounded-2xl p-4 shadow-2xl flex items-center gap-4 z-20"
        >
          <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
            <CheckCircle2 className="w-7 h-7 text-green-500" />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mb-1">Notifikasi Tracking</p>
            <p className="text-sm font-bold text-foreground">Data Konversi Aktif! 🚀</p>
          </div>
        </motion.div>
      </div>

    </div>
  </SectionWrapper>
);

export default SolutionSection;
