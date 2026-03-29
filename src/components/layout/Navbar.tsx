import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
    <div className="container mx-auto px-4 h-16 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
          <MessageCircle className="w-4 h-4 text-primary-foreground" />
        </div>
        <span className="font-bold text-lg text-foreground">TrackWA</span>
      </Link>
      <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        <a href="#problem" className="hover:text-foreground transition-colors">Masalah</a>
        <a href="#solution" className="hover:text-foreground transition-colors">Solusi</a>
        <a href="#how" className="hover:text-foreground transition-colors">Cara Kerja</a>
        <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
      </div>
      <Link to="/waiting-list">
        <Button variant="hero" size="sm" className="rounded-lg">
          Waiting List
        </Button>
      </Link>
    </div>
  </nav>
);

export default Navbar;
