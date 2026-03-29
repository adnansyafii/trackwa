import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="gradient-primary rounded-2xl p-10 md:p-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Mau Tahu Iklan Mana yang Benar-Benar Menghasilkan?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
          Daripada terus nebak-nebak, lebih baik mulai dengan data yang jelas.
        </p>
        <Link to="/waiting-list">
          <Button size="lg" className="h-14 px-10 text-base font-semibold bg-card text-foreground hover:bg-card/90 rounded-xl shadow-lg">
            Gabung Waiting List Sekarang
          </Button>
        </Link>
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-primary-foreground/80 text-sm">
          <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Dibantu dari awal</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Tidak ribet</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Gratis konsultasi</span>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
