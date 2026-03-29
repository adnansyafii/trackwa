import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ChevronLeft, FileText, Scale, UserCheck, Ban, CreditCard, ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TermsOfService = () => {
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
              <Scale className="w-3.5 h-3.5" />
              Legal Documentation
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Terms of <span className="text-primary italic">Service</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Ketentuan penggunaan layanan TrackWA. Mohon baca dengan seksama untuk memahami hak dan kewajiban Anda sebagai pengguna.
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
              
              {/* Acceptance of Terms */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  1. Penerimaan Ketentuan
                </h2>
                <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                  <p>
                    Dengan mengakses atau menggunakan platform TrackWA, Anda setuju untuk terikat oleh Ketentuan Layanan ini. Jika Anda tidak menyetujui bagian mana pun dari ketentuan ini, Anda tidak diperkenankan menggunakan layanan kami.
                  </p>
                </div>
              </div>

              {/* Account Registration */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <FileText className="w-5 h-5" />
                  </div>
                  2. Registrasi dan Akun
                </h2>
                <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                  <p>Untuk menggunakan fitur TrackWA, Anda harus melakukan registrasi melalui prosedur yang ditetapkan. Anda bertanggung jawab untuk:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Memberikan informasi yang akurat dan lengkap.</li>
                    <li>Menjaga kerahasiaan kredensial login Anda.</li>
                    <li>Segala aktivitas yang terjadi di bawah akun Anda.</li>
                  </ul>
                </div>
              </div>

              {/* Usage Restrictions */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Ban className="w-5 h-5" />
                  </div>
                  3. Larangan Penggunaan
                </h2>
                <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                  <p>Anda dilarang menggunakan TrackWA untuk:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Aktivitas ilegal atau melanggar hukum yang berlaku di Indonesia.</li>
                    <li>Mengirimkan spam melalui mekanisme tracking kami.</li>
                    <li>Mencoba merusak, mengganggu, atau melakukan hacking pada infrastruktur TrackWA.</li>
                    <li>Mengumpulkan data pribadi orang lain secara tidak sah.</li>
                  </ul>
                </div>
              </div>

              {/* Payments & Billing */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  4. Pembayaran dan Berlangganan
                </h2>
                <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                  <p>
                    Beberapa fitur TrackWA mungkin memerlukan pembayaran biaya berlangganan. Semua biaya tidak dapat dikembalikan (*non-refundable*) kecuali dinyatakan sebaliknya oleh pihak manajemen TrackWA.
                  </p>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  5. Batasan Tanggung Jawab
                </h2>
                <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                  <p>
                    TrackWA disediakan "apa adanya" (*as is*). Kami tidak memberikan jaminan bahwa layanan akan selalu tersedia tanpa gangguan atau bebas dari kesalahan teknis. Kami tidak bertanggung jawab atas kerugian finansial atau bisnis yang timbul dari ketidakakuratan data tracking yang disebabkan oleh faktor eksternal (misal: update API WhatsApp, update browser, dll).
                  </p>
                </div>
              </div>

            </div>

            {/* Sidebar / Quick Links */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="p-8 rounded-3xl bg-card border border-border shadow-sm">
                  <h3 className="font-bold text-xl mb-4">Butuh Bantuan?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Jika ada poin dalam Ketentuan Layanan ini yang membingungkan, jangan ragu untuk bertanya langsung kepada tim kami.
                  </p>
                  <a 
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary/10 text-primary font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Hubungi Admin
                  </a>
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

export default TermsOfService;
