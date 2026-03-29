import SectionWrapper from "@/components/common/SectionWrapper";
import { TrendingDown, Ban, CircleDollarSign } from "lucide-react";

const points = [
  { icon: Ban, text: "Iklan bagus bisa dimatikan karena Anda tidak tahu performanya" },
  { icon: TrendingDown, text: "Iklan jelek tetap jalan karena terlihat 'biasa aja'" },
  { icon: CircleDollarSign, text: "Budget terus keluar tanpa arah yang jelas" },
];

const AgitateSection = () => (
  <SectionWrapper id="agitate">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
        Masalahnya, Ini Bisa Bikin Budget Terbuang Tanpa Sadar
      </h2>
      <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
        Tanpa tracking yang jelas, keputusan Anda berdasarkan asumsi — bukan data.
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
      {points.map(({ icon: Icon, text }, i) => (
        <div key={i} className="bg-card rounded-xl border border-border p-6 text-center">
          <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mx-auto mb-4">
            <Icon className="w-6 h-6 text-destructive" />
          </div>
          <p className="text-foreground font-medium">{text}</p>
        </div>
      ))}
    </div>
    <p className="text-center text-lg font-semibold text-foreground">
      Dan yang paling sering terjadi:{" "}
      <span className="text-destructive">Anda merasa semuanya baik-baik saja.</span>
    </p>
  </SectionWrapper>
);

export default AgitateSection;
