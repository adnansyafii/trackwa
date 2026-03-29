import SectionWrapper from "@/components/common/SectionWrapper";
import { MessageCircle, Settings, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Konsultasi Kebutuhan",
    desc: "Anda menghubungi kami untuk menyampaikan kebutuhan, dan kami akan menjelaskan apa saja syarat agar tracking WA memungkinkan dilakukan.",
    detail: "Tanpa biaya & komitmen",
  },
  {
    icon: Settings,
    title: "Proses Setup & Perbaikan",
    desc: "Lolos audit & DP selesai? Tim teknis kami langsung merakit integrasi script. Jika ada konflik kode atau error, kami bantu perbaiki sampai beres.",
    detail: "100% Terima Beres",
  },
  {
    icon: Rocket,
    title: "Tracking Aktif, Siap Scale-Up",
    desc: "Dashboard pelacakan Anda siap digunakan. Anda kini bebas mematikan iklan yang boncos dan melipatgandakan budget dengan 100% data valid.",
    detail: "Data masuk secara Real-time",
  },
];

const HowItWorksSection = () => (
  <SectionWrapper id="how" alt>
    <div className="text-center mb-16">
      <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">
        Cara Kerja
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Prosesnya Simpel, Tidak Ribet
      </h2>
      <p className="text-lg text-muted-foreground max-w-xl mx-auto">
        Cukup 3 langkah, Anda tinggal pakai. Semua hal teknis kami yang urus.
      </p>
    </div>

    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-3 gap-6 relative">
        {/* Connector lines (desktop) */}
        <div className="hidden md:block absolute top-10 left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-0.5 bg-border z-0" />

        {steps.map(({ icon: Icon, title, desc, detail }, i) => (
          <div key={i} className="relative z-10 flex flex-col items-center text-center">
            {/* Step number + icon */}
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-2xl bg-card border-2 border-primary/20 flex items-center justify-center shadow-lg shadow-primary/10">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full gradient-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-md">
                {i + 1}
              </span>
            </div>

            {/* Content card */}
            <div className="bg-card rounded-xl p-6 border border-border shadow-sm w-full flex-1">
              <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{desc}</p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                {detail}
              </span>
            </div>

            {/* Arrow between steps (mobile) */}
            {i < steps.length - 1 && (
              <div className="md:hidden my-4">
                <ArrowRight className="w-5 h-5 text-primary rotate-90" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default HowItWorksSection;
