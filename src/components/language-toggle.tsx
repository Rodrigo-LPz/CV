'use client';

import { motion } from 'framer-motion';
import type { Locale } from '@/data/site-content';

type LanguageToggleProps = {
  locale: Locale;
  onToggle: () => void;
  label: string;
};

export function LanguageToggle({ locale, onToggle, label }: LanguageToggleProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.03 }}
      onClick={onToggle}
      className="w-full self-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold tracking-wide text-white backdrop-blur transition hover:border-[var(--accent)] hover:bg-white/10 sm:w-auto md:self-auto"
      aria-label={locale === 'es' ? 'Switch to English' : 'Cambiar a Espanol'}
      type="button"
    >
      {label}
    </motion.button>
  );
}
