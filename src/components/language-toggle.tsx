'use client';

import { motion } from 'framer-motion';
import type { Locale } from '@/data/site-content';

type LanguageToggleProps = {
  locale: Locale;
  onToggle: () => void;
  label: string;
};

function LanguageFlag({ locale }: { locale: Locale }) {
  const flagSrc = locale === 'es' ? '/Images/Banderas/ESP.png' : '/Images/Banderas/GB.png';
  const altText = locale === 'es' ? 'Bandera de España' : 'Bandera del Reino Unido';

  return (
    <img
      src={flagSrc}
      alt={altText}
      width={36}
      height={24}
      className="h-6 w-9 rounded-sm object-cover"
    />
  );
}

export function LanguageToggle({ locale, onToggle, label }: LanguageToggleProps) {
  const targetLocale: Locale = locale === 'es' ? 'en' : 'es';
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.03 }}
      onClick={onToggle}
      className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold tracking-wide text-white backdrop-blur transition hover:border-[var(--accent)] hover:bg-white/10"
      aria-label={locale === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      type="button"
    >
      <span className="mr-3 inline-flex items-center" aria-hidden="true">
        <LanguageFlag locale={targetLocale} />
      </span>
      {label}
    </motion.button>
  );
}