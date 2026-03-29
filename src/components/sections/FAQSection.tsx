import SectionWrapper from "@/components/common/SectionWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Apakah saya harus paham teknis?",
    a: "Tidak perlu sama sekali. Kami yang handle semua teknis dari awal sampai akhir. Anda tinggal terima hasilnya.",
  },
  {
    q: "Apakah bisa untuk semua platform iklan?",
    a: "Bisa. TrackWA mendukung Google Ads, Meta Ads (Facebook & Instagram), dan TikTok Ads. Kalau Anda pakai platform lain, bisa konsultasi dulu.",
  },
  {
    q: "Berapa lama proses setup-nya?",
    a: "Biasanya 1–3 hari kerja, tergantung kompleksitas. Tapi sebagian besar bisa selesai di hari yang sama.",
  },
  {
    q: "Apakah ini aman untuk bisnis saya?",
    a: "Tentu. Kami hanya melakukan tracking sumber chat, tidak mengakses isi percakapan Anda. Data Anda tetap aman dan privat.",
  },
];

const FAQSection = () => (
  <SectionWrapper id="faq" alt>
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
        Pertanyaan yang Sering Ditanyakan
      </h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6">
            <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </SectionWrapper>
);

export default FAQSection;
