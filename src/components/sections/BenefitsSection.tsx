import SectionWrapper from "@/components/common/SectionWrapper";
import { Eye, Target, TrendingUp, ShieldCheck } from "lucide-react";

const benefits = [
  { icon: Eye, text: "Lebih jelas melihat performa iklan" },
  { icon: Target, text: "Tidak lagi nebak-nebak" },
  { icon: TrendingUp, text: "Budget lebih terarah" },
  { icon: ShieldCheck, text: "Lebih percaya diri saat scale" },
];

const BenefitsSection = () => (
  <SectionWrapper id="benefits">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Apa yang Akan Anda Rasakan?
      </h2>
    </div>
    <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
      {benefits.map(({ icon: Icon, text }, i) => (
        <div key={i} className="flex items-center gap-4 bg-card rounded-xl border border-border p-5">
          <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-accent-foreground" />
          </div>
          <span className="text-foreground font-semibold">{text}</span>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default BenefitsSection;
