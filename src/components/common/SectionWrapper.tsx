import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  alt?: boolean;
}

const SectionWrapper = ({ children, className = "", id, alt }: SectionWrapperProps) => (
  <section id={id} className={`py-20 md:py-28 ${alt ? "section-alt" : ""} ${className}`}>
    <motion.div
      className="container mx-auto px-4"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  </section>
);

export default SectionWrapper;
