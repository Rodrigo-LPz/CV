import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type SectionCardProps = {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
};

export function SectionCard({ id, title, description, icon, className = '' }: SectionCardProps) {
  return (
    <motion.article
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={`rounded-[28px] border border-white/10 bg-[var(--card)]/45 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.25)] sm:p-6 xl:p-7 ${className}`}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)]/15 text-[var(--accent)]">
        {icon}
      </div>
      <h2 className="mb-2 text-xl font-bold text-white sm:text-2xl">{title}</h2>
      <p className="text-sm leading-relaxed text-[var(--muted)] whitespace-pre-line">{description}</p>
    </motion.article>
  );
}
