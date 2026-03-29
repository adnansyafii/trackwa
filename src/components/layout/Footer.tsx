import { MessageCircle, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="relative bg-white dark:bg-card/40 border-t border-border pt-20 pb-10 overflow-hidden">
    {/* Background Glow */}
    <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
        
        {/* Brand Column */}
        <div className="lg:col-span-5 pr-4">
          <Link to="/" className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity outline-none inline-flex">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/20">
              <MessageCircle className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-foreground">TrackWA</span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-sm">
            Platform tracking konversi WhatsApp yang akurat untuk multi marketing channel. Berhenti membakar uang di kampanye yang boncos.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all bg-card shadow-sm">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all bg-card shadow-sm">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all bg-card shadow-sm">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Product Navigation */}
        <div className="lg:col-span-2">
          <h4 className="font-bold text-foreground mb-6 text-sm uppercase tracking-wider">Produk</h4>
          <ul className="space-y-4 text-sm font-medium text-muted-foreground">
            <li><a href="#solusi" className="hover:text-primary transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" /> Fitur</a></li>
            <li><a href="#kerugian" className="hover:text-primary transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" /> Mengapa Kami</a></li>
            <li><a href="#cara-kerja" className="hover:text-primary transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" /> Cara Kerja</a></li>
            <li>
              <Link to="/waiting-list" className="hover:text-primary transition-colors flex items-center gap-2 group">
                <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" /> 
                Waiting List <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full ml-1 font-bold">LIMITED</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Tools */}
        <div className="lg:col-span-2">
          <h4 className="font-bold text-foreground mb-6 text-sm uppercase tracking-wider">Bantuan</h4>
          <ul className="space-y-4 text-sm font-medium text-muted-foreground">
            <li><a href="#faq" className="hover:text-primary transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" /> FAQ</a></li>
            <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" /> Panduan</a></li>
            <li><a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" /> Hubungi Kami</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-3">
          <h4 className="font-bold text-foreground mb-6 text-sm uppercase tracking-wider">Konsultasi</h4>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Masih ragu apakah bisnis Anda membutuhkan TrackWA?
          </p>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary/10 text-primary font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full justify-center group border border-primary/20 hover:shadow-lg hover:shadow-primary/20"
          >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Tanya via WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground font-medium">
          © {new Date().getFullYear()} TrackWA. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm font-medium text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
