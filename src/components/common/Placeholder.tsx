import { ImageIcon } from "lucide-react";

interface PlaceholderProps {
  label: string;
  className?: string;
  aspectRatio?: string;
}

const Placeholder = ({ label, className = "", aspectRatio = "aspect-video" }: PlaceholderProps) => (
  <div className={`${aspectRatio} w-full rounded-xl bg-accent/60 border border-border flex flex-col items-center justify-center gap-3 ${className}`}>
    <ImageIcon className="w-10 h-10 text-primary/40" />
    <span className="text-sm text-muted-foreground font-medium">{label}</span>
  </div>
);

export default Placeholder;
