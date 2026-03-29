import SectionWrapper from "@/components/common/SectionWrapper";
import { MessageCircle, Link, MousePointerClick, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const leadsData = [
  {
    name: "0812-3456-xxxx",
    message: "\"Halo min, mau pesen paket 3...\"",
    source: "Google Ads (Search)",
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20"
  },
  {
    name: "0857-1111-xxxx",
    message: "\"Sis, size M masih ada?\"",
    source: "Meta Ads (IG Story)",
    color: "bg-pink-500/10 text-pink-500 border-pink-500/20"
  },
  {
    name: "0819-9999-xxxx",
    message: "\"Bisa COD ke Bandung bang?\"",
    source: "TikTok Ads (Video)",
    color: "bg-zinc-800 text-white border-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 border-zinc-200"
  }
];

const PlatformSection = () => (
  <SectionWrapper id="platform" className="bg-muted/30 relative overflow-hidden border-y border-border/50">
    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* KIRI: Copywriting (Penjelasan Konsep Link) */}
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
          <Link className="w-3.5 h-3.5" />
          DIMANA ADA LINK, KAMI BISA LACAK
        </div>
        
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight leading-[1.1]">
          Satu Persatu Terungkap: 
          <br className="hidden md:block" />
          Tahu Persis Asal Klik Mereka.
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
          Saat <span className="italic">Customer Service</span> Anda menerima *chat*, sistem kami langsung mengenali *"DNA"* asli pengirimnya. <span className="font-semibold text-foreground">"Oh, yang ini masuk dari Google Ads. Kalau yang baru masuk itu dari Meta (FB/IG)."</span>
        </p>
        
        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm mb-6 flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
            <MousePointerClick className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-1 text-lg">Prinsip Kerjanya Sangat Sederhana</h4>
            <p className="text-muted-foreground leading-relaxed">
              Secara umum, <strong className="text-foreground">semua *channel marketing*</strong> yang mengharuskan audiens mengeklik tautan (*link*) terlebih dahulu sebelum diarahkan ke web—<strong className="text-primary italic">semuanya bisa kami track akurasinya.</strong>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {['Google Ads', 'Meta (FB/IG) Ads', 'TikTok Ads', 'KOL/Link Bio'].map((tag, i) => (
             <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background border border-border text-xs font-semibold text-muted-foreground">
               <CheckCircle2 className="w-3 h-3 text-primary" />
               {tag}
             </span>
          ))}
        </div>
      </div>

      {/* KANAN: Visual Simulasi Tracking Masuk */}
      <div className="relative z-10 lg:ml-auto w-full max-w-[500px]">
        <div className="bg-card/80 backdrop-blur-xl border border-border rounded-3xl p-6 md:p-8 shadow-2xl relative">
          
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
             <div>
               <h3 className="font-bold text-foreground">Live Leads Dashboard</h3>
               <p className="text-xs text-muted-foreground">Simulasi Tagging Asal Iklan</p>
             </div>
             <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
             </div>
          </div>
          
          <div className="space-y-4">
            {leadsData.map((lead, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, type: "spring", stiffness: 100 }}
                className="bg-background border border-border rounded-2xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" fill="currentColor" fillOpacity={0.2} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <p className="font-bold text-sm text-foreground truncate">{lead.name}</p>
                    <span className={`text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-md border whitespace-nowrap ${lead.color}`}>
                      {lead.source}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">{lead.message}</p>
                </div>
              </motion.div>
            ))}

            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.8 }}
               className="pt-2 text-center"
            >
               <span className="text-xs font-medium text-muted-foreground/60">...dan ratusan leads valid lainnya langsung terdeteksi.</span>
            </motion.div>
          </div>
        </div>
      </div>

    </div>
  </SectionWrapper>
);

export default PlatformSection;
