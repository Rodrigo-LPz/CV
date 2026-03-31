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
  const bulletItems = description
    .split('●')
    .map((item) => item.trim())
    .filter(Boolean);

  const descriptionLines = description.split('\n');
  const hasBulletList = bulletItems.length > 1;

  return (
    <motion.article
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={`rounded-3xl border border-white/10 bg-[var(--card)]/45 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.25)] ${className}`}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)]/15 text-[var(--accent)]">
        {icon}
      </div>
      <h2 className="mb-2 text-2xl font-bold text-white">{title}</h2>

      {hasBulletList ? (
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--muted)] marker:text-[var(--muted)]">
          {bulletItems.map((item, index) => (
            <li key={`${id}-bullet-${index}`}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-sm leading-relaxed text-[var(--muted)]">
          {descriptionLines.map((line, index) => (
            <span key={`${id}-line-${index}`}>
              {line}
              {index < descriptionLines.length - 1 && <br />}
            </span>
          ))}
        </p>
      )}
    </motion.article>
  );
}