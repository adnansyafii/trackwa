import SectionWrapper from "@/components/common/SectionWrapper";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Andi R.", role: "Owner Toko Online", text: "Sebelumnya saya bingung iklan mana yang hasilkan chat. Sekarang jelas banget, tinggal lihat datanya." },
  { name: "Sari M.", role: "Digital Marketer", text: "Setup cepet, nggak ribet. Sekarang saya bisa report ke klien dengan data yang real." },
  { name: "Budi T.", role: "Owner F&B", text: "Ternyata iklan yang saya kira bagus, ternyata nggak perform. Untung ketahuan sebelum buang budget lebih banyak." },
];

const TrustSection = () => (
  <SectionWrapper id="trust" alt>
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Sudah Digunakan oleh Berbagai Bisnis
      </h2>
      <p className="text-muted-foreground text-lg">
        Sudah membantu 50+ bisnis melacak sumber chat WhatsApp mereka.
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-card rounded-xl border border-border p-6">
          <div className="flex gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, j) => (
              <Star key={j} className="w-4 h-4 fill-highlight text-highlight" />
            ))}
          </div>
          <p className="text-foreground mb-4 leading-relaxed">"{t.text}"</p>
          <div>
            <p className="font-bold text-foreground">{t.name}</p>
            <p className="text-sm text-muted-foreground">{t.role}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default TrustSection;
