import { useState } from 'react';
import Navbar from "@/components/layout/Navbar";
import { Activity, Lock, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "@/components/layout/Footer";

const waitlistData = [
  { rank: 1, name: "Budxxxxx", phone: "081xxxxx", status: "Klien (Sedang Setup)", active: true, date: "20 Okt 2023", estDate: "Besok" },
  { rank: 2, name: "Sitxxxxx", phone: "085xxxxx", status: "Klien (Sudah Bayar)", active: false, date: "21 Okt 2023", estDate: "3 Hari Lagi" },
  { rank: 3, name: "Antxxxxx", phone: "089xxxxx", status: "Klien (Sudah Bayar)", active: false, date: "22 Okt 2023", estDate: "5 Hari Lagi" },
  { rank: 4, name: "Dewxxxxx", phone: "081xxxxx", status: "Klien (Sudah Bayar)", active: false, date: "24 Okt 2023", estDate: "1 Minggu Lagi" },
  { rank: 5, name: "Rizxxxxx", phone: "082xxxxx", status: "Calon Klien", active: false, date: "25 Okt 2023", estDate: "Menunggu DP" },
  { rank: 6, name: "Dimxxxxx", phone: "081xxxxx", status: "Calon Klien", active: false, date: "25 Okt 2023", estDate: "Menunggu DP" },
  { rank: 7, name: "Kevxxxxx", phone: "087xxxxx", status: "Calon Klien", active: false, date: "26 Okt 2023", estDate: "Menunggu DP" },
  { rank: 8, name: "Ferxxxxx", phone: "081xxxxx", status: "Calon Klien", active: false, date: "26 Okt 2023", estDate: "Menunggu DP" },
  { rank: 9, name: "Lisxxxxx", phone: "085xxxxx", status: "Calon Klien", active: false, date: "27 Okt 2023", estDate: "Menunggu DP" },
  { rank: 10, name: "Gunxxxxx", phone: "089xxxxx", status: "Calon Klien", active: false, date: "27 Okt 2023", estDate: "Menunggu DP" },
  { rank: 11, name: "Hendxxxx", phone: "082xxxxx", status: "Calon Klien", active: false, date: "28 Okt 2023", estDate: "Menunggu DP" },
  { rank: 12, name: "Sarxxxxx", phone: "081xxxxx", status: "Calon Klien", active: false, date: "28 Okt 2023", estDate: "Menunggu DP" },
  { rank: 13, name: "Tomxxxxx", phone: "087xxxxx", status: "Calon Klien", active: false, date: "29 Okt 2023", estDate: "Menunggu DP" },
  { rank: 14, name: "Verxxxxx", phone: "085xxxxx", status: "Calon Klien", active: false, date: "29 Okt 2023", estDate: "Menunggu DP" },
];

export default function WaitingList() {
  const [isLogged, setIsLogged] = useState(false);
  const [list, setList] = useState(waitlistData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(list.length / itemsPerPage);

  const paginatedList = list.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleLogin = () => {
    setIsLogged(true);
    const today = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
    const newList = [...list, { rank: list.length + 1, name: "Adnxxxxx", phone: "085xxxxx", status: "Calon Klien", active: false, date: today, estDate: "Menunggu DP" }];
    setList(newList);
    // Langsung arahkan ke halaman terakhir dimana nama klien baru ditambahkan
    setCurrentPage(Math.ceil(newList.length / itemsPerPage));
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center p-6 pt-32 pb-24">
        {!isLogged ? (
          <div className="max-w-md w-full bg-card border border-border rounded-3xl p-8 shadow-2xl text-center relative overflow-hidden">
            {/* Dekorasi Cahaya */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[80px]" />
            
            <div className="relative z-10 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
               <Lock className="w-8 h-8 text-primary" />
            </div>
            <h1 className="relative z-10 text-2xl font-bold text-foreground mb-3">Papan Antrean Eksklusif</h1>
            <p className="relative z-10 text-muted-foreground mb-10 text-sm leading-relaxed">
              Masuk menggunakan akun Google Anda untuk mengambil tiket antrean instalasi TrackWA.
            </p>
            
            <button 
              onClick={handleLogin}
              className="relative z-10 w-full flex items-center justify-center gap-3 bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 focus:ring-4 focus:ring-gray-100 font-medium rounded-xl text-sm px-5 py-3.5 transition-colors shadow-sm"
            >
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4"/>
                <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853"/>
                <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04"/>
                <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335"/>
              </svg>
              Sign in with Google
            </button>
            <div className="relative z-10 p-4 border border-border bg-background/50 rounded-xl mt-6 text-left">
               <p className="text-xs text-muted-foreground flex gap-3">
                  <Lock className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  Sistem otomatis menyamarkan nama dan nomor Anda di papan antrean transparan untuk menjaga kerahasiaan *Business Owner*.
               </p>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-4xl animate-in fade-in zoom-in-95 duration-500">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-extrabold text-foreground mb-3 tracking-tight">Papan Antrean TrackWA</h1>
              <p className="text-muted-foreground text-lg">Transparansi antrean sesi pengecekan & instalasi untuk klien kami.</p>
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-2xl p-6 md:p-8 mb-8 flex flex-col md:flex-row items-center justify-between shadow-xl shadow-primary/5 gap-6 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center flex-shrink-0 relative">
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></div>
                  <Activity className="w-7 h-7 text-primary-foreground animate-pulse" />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary mb-1 uppercase tracking-widest">Tim Sedang Melayani</p>
                  <p className="text-xl font-extrabold text-foreground">Klien: {list.find(l => l.active)?.name}</p>
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-2 bg-background border border-border px-4 py-2.5 rounded-full text-sm font-bold shadow-sm whitespace-nowrap">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                Teknisi Sedang Aktif
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse whitespace-nowrap">
                  <thead>
                    <tr className="bg-muted/50 border-b border-border">
                      <th className="px-6 py-4 text-sm font-bold text-muted-foreground w-16 text-center">Urutan</th>
                      <th className="px-6 py-4 text-sm font-bold text-muted-foreground">Tgl Join</th>
                      <th className="px-6 py-4 text-sm font-bold text-muted-foreground">Nama Klien</th>
                      <th className="px-6 py-4 text-sm font-bold text-muted-foreground">No Whatsapp</th>
                      <th className="px-6 py-4 text-sm font-bold text-muted-foreground">Status Pelayanan</th>
                      <th className="px-6 py-4 text-sm font-bold text-muted-foreground text-right">Estimasi Selesai</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {paginatedList.map((item, i) => (
                      <tr key={i} className={`transition-all hover:bg-muted/30 relative
                        ${item.active ? 'bg-primary/5 border-l-4 border-l-primary' : 'border-l-4 border-l-transparent'} 
                        ${item.name === 'Adnxxxxx' ? 'bg-muted/50 border-l-muted-foreground' : ''}`}
                      >
                        <td className="px-6 py-4 text-center">
                          <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${item.active ? 'bg-primary text-primary-foreground shadow-[0_0_15px_rgba(37,211,102,0.5)] animate-pulse' : 'bg-muted border border-border text-muted-foreground'}`}>
                            {item.rank}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">{item.date}</span>
                        </td>
                        <td className="px-6 py-4">
                          <p className={`font-bold flex items-center gap-2 ${item.active ? 'text-primary' : 'text-foreground'}`}>
                            {item.name}
                            {item.active && (
                               <span className="text-[10px] bg-primary/20 text-primary border border-primary/30 px-2 py-0.5 rounded-full uppercase tracking-wider font-bold flex items-center gap-1">
                                 <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                                 PROSES SETUP
                               </span>
                            )}
                            {item.name === 'Adnxxxxx' && (
                               <span className="text-[10px] bg-foreground text-background px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">Anda</span>
                            )}
                          </p>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`font-mono text-sm px-2 py-1 rounded ${item.active ? 'bg-primary/10 text-primary font-bold' : 'text-muted-foreground bg-muted/50'}`}>
                            {item.phone}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap
                            ${item.status.includes('Sudah Bayar') ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 
                              item.active ? 'bg-primary text-primary-foreground shadow-lg' : 
                              'bg-zinc-500/10 text-zinc-500 border border-zinc-500/20 dark:bg-zinc-400/10 dark:text-zinc-400'}`}
                          >
                            {item.status.includes('Bayar') || item.active ? <CheckCircle2 className={`w-3.5 h-3.5 ${item.active ? 'text-primary-foreground' : ''}`} /> : null}
                            {item.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className={`text-sm font-bold ${item.active ? 'text-primary animate-pulse' : item.estDate === 'Menunggu DP' ? 'text-muted-foreground/50 italic font-medium' : 'text-foreground'}`}>
                             {item.estDate}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="bg-card border-t border-border p-4 flex items-center justify-between shadow-sm">
                <p className="text-xs md:text-sm text-muted-foreground">Menampilkan {((currentPage - 1) * itemsPerPage) + 1} - {Math.min(currentPage * itemsPerPage, list.length)} dari {list.length} antrean</p>
                <div className="flex gap-2">
                   <button 
                     disabled={currentPage === 1}
                     onClick={() => setCurrentPage(p => p - 1)}
                     className="px-3 py-1.5 rounded-lg border border-border bg-background text-foreground disabled:opacity-50 flex items-center gap-1 text-sm font-medium hover:bg-muted transition-colors"
                   >
                     <ChevronLeft className="w-4 h-4" /> <span className="hidden md:inline">Sebelumnya</span>
                   </button>
                   <button 
                     disabled={currentPage === totalPages}
                     onClick={() => setCurrentPage(p => p + 1)}
                     className="px-3 py-1.5 rounded-lg border border-border bg-background text-foreground disabled:opacity-50 flex items-center gap-1 text-sm font-medium hover:bg-muted transition-colors"
                   >
                     <span className="hidden md:inline">Selanjutnya</span> <ChevronRight className="w-4 h-4" />
                   </button>
                </div>
              </div>
            </div>
             
            <div className="mt-8 text-center max-w-2xl mx-auto p-6 bg-muted/20 rounded-2xl border border-border flex flex-col gap-4 shadow-sm">
              <p className="text-muted-foreground text-sm leading-relaxed">
                 <strong className="text-foreground">Sistem Antrean:</strong> Tim teknis kami akan menghubungi Anda <strong className="text-foreground">via WhatsApp</strong> sesuai nomor urut untuk melakukan pengecekan prasyarat awal website & akun iklan.
              </p>
              <div className="bg-primary/10 border border-primary/20 text-foreground px-4 py-3 rounded-xl text-sm">
                 <span className="text-primary font-bold">⚠️ Jalur Prioritas:</span> Klien yang telah lolos audit dan <strong>membayar DP 20% lebih dulu</strong> akan langsung diprioritaskan naik antrean untuk masuk ke tahap <i>Setup & Eksekusi</i>.
              </div>
            </div>
          </div>
        )}
      </main>
      
      {!isLogged && <Footer />}
    </div>
  )
}
