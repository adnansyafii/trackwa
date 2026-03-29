import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ChevronLeft, ShieldCheck, Mail, Lock, Eye, Database } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group">
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Beranda
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-3.5 h-3.5" />
              Legal Documentation
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Privacy <span className="text-primary italic">Policy</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Kami di TrackWA berkomitmen penuh untuk melindungi data dan privasi Anda. Halaman ini menjelaskan bagaimana kami mengelola informasi Anda.
            </p>
            <p className="text-sm text-muted-foreground italic">
              Terakhir diperbarui: 30 Maret 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              
              {/* Introduction */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Eye className="w-5 h-5" />
                  </div>
                  1. Pendahuluan
                </h2>
                <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                  <p>
                    TrackWA ("kami", "milik kami", atau "TrackWA") menghargai privasi pengguna kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan menjaga informasi Anda saat Anda menggunakan layanan kami atau mengunjungi situs web kami.
                  </p>
                  <p>
                    Dengan menggunakan layanan TrackWA, Anda menyetujui praktik yang dijelaskan dalam Kebijakan Privasi ini serta Syarat dan Ketentuan kami.
                  </p>
                </div>
              </div>

              {/* Data Collection */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Database className="w-5 h-5" />
                  </div>
                  2. Informasi yang Kami Kumpulkan
                </h2>
                <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                  <p>Kami mengumpulkan informasi melalui beberapa cara:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Informasi Pendaftaran:</strong> Email, Nama, dan nomor WhatsApp yang diinput saat mendaftar.</li>
                    <li><strong>Data Pelacakan:</strong> Informasi tentang klik dari channel marketing Anda yang menuju ke WhatsApp (sumber trafik, browser user, IP address, dll).</li>
                    <li><strong>Konten Pesan:</strong> Kami TIDAK membaca atau menyimpan isi pesan WhatsApp pribadi Anda atau pelanggan Anda. Sistem kami hanya melacak terjadinya event "klik" untuk keperluan atribusi marketing.</li>
                  </ul>
                </div>
              </div>

              {/* Usage */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Lock className="w-5 h-5" />
                  </div>
                  3. Penggunaan Informasi
                </h2>
                <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                  <p>Informasi yang kami kumpulkan digunakan untuk:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Menyediakan laporan konversi yang akurat kepada Anda.</li>
                    <li>Meningkatkan performa dashboard dan kestabilan sistem tracking.</li>
                    <li>Mengirimkan informasi terkait update layanan atau status akun Anda.</li>
                    <li>Mencegah penyalahgunaan sistem dan penipuan.</li>
                  </ul>
                </div>
              </div>

              {/* Security */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  4. Keamanan Data
                </h2>
                <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                  <p>
                    Kami mengimplementasikan langkah-langkah keamanan teknis yang wajar untuk melindungi data Anda. Data disimpan di server yang aman dan hanya dapat diakses oleh personil yang berwenang untuk tujuan operasional.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  5. Hubungi Kami
                </h2>
                <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                  <p>
                    Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami melalui email di <strong>support@trackwa.com</strong> atau melalui nomor WhatsApp resmi yang tersedia di dashboard.
                  </p>
                </div>
              </div>

            </div>

            {/* Sidebar / Quick Links */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="p-8 rounded-3xl bg-card border border-border shadow-sm">
                  <h3 className="font-bold text-xl mb-4">Ringkasan</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Intinya: Kami tidak menjual data Anda. Kami mengumpulkan data hanya untuk membantu Anda melacak ROI marketing Anda ke WhatsApp dengan lebih akurat.
                  </p>
                  <Link 
                    to="/waiting-list" 
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity"
                  >
                    Daftar Waiting List
                  </Link>
                </div>
                
                <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10">
                  <h3 className="font-bold text-lg mb-2 text-primary">Pertanyaan?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Tim kami siap membantu menjawab keraguan Anda mengenai privasi dan keamanan data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
