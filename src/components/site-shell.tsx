'use client';

import { motion } from 'framer-motion';
import {
  BriefcaseBusiness,
  ContactRound,
  GraduationCap,
  Layers3,
  UserRound,
  Wrench,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import { siteContent, type Locale } from '@/data/site-content';
import { LanguageToggle } from './language-toggle';
import { SectionCard } from './section-card';

const navLinks = ['about', 'projects', 'skills', 'journey', 'contact'] as const;

export function SiteShell() {
  const [locale, setLocale] = useState<Locale>('es');
  const content = useMemo(() => siteContent[locale], [locale]);

  return (
    <div className="mx-auto max-w-6xl px-6 pb-14 pt-8 md:px-10">
      <header className="mb-12 flex flex-col gap-6 rounded-3xl border border-white/10 bg-[var(--surface)]/60 p-6 backdrop-blur md:flex-row md:items-center md:justify-between">
        <nav className="flex flex-wrap gap-4 text-sm font-medium text-[var(--muted)]">
          {navLinks.map((link) => (
            <a key={link} href={`#${link}`} className="transition hover:text-[var(--accent)]">
              {content.nav[link]}
            </a>
          ))}
        </nav>
        <LanguageToggle
          locale={locale}
          label={content.localeLabel}
          onToggle={() => setLocale((prev) => (prev === 'es' ? 'en' : 'es'))}
        />
      </header>

      <main className="space-y-8">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-[var(--surface)]/55 p-8"
        >
          <span className="mb-5 inline-flex rounded-full border border-[var(--accent)]/35 bg-[var(--accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent)]">
            {content.hero.badge}
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            {content.hero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
            {content.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-[var(--accent-dark)]"
            >
              {content.hero.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {content.hero.ctaSecondary}
            </a>
          </div>
        </motion.section>

        <section className="grid gap-6 md:grid-cols-2">
          <SectionCard
            id="about"
            title={content.sections.about.title}
            description={content.sections.about.description}
            icon={<UserRound size={22} />}
          />
          <SectionCard
            id="projects"
            title={content.sections.projects.title}
            description={content.sections.projects.description}
            icon={<Layers3 size={22} />}
          />
          <SectionCard
            id="skills"
            title={content.sections.skills.title}
            description={content.sections.skills.description}
            icon={<Wrench size={22} />}
          />
          <SectionCard
            id="journey"
            title={content.sections.journey.title}
            description={content.sections.journey.description}
            icon={<GraduationCap size={22} />}
          />
        </section>

        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="rounded-3xl border border-white/10 bg-[var(--surface)]/60 p-8"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="rounded-xl bg-[var(--accent)]/15 p-2 text-[var(--accent)]">
              <ContactRound size={22} />
            </span>
            <h2 className="text-2xl font-bold text-white">{content.sections.contact.title}</h2>
          </div>
          <p className="mb-6 text-sm text-[var(--muted)]">{content.sections.contact.description}</p>

          <ul className="space-y-2 text-sm text-[var(--muted)]">
            <li className="flex items-center gap-2">
              <BriefcaseBusiness size={16} className="text-[var(--accent)]" />
              <span>{content.contact.location}</span>
            </li>
            <li>{content.contact.email}</li>
            <li>{content.contact.github}</li>
            <li>{content.contact.linkedin}</li>
          </ul>
        </motion.section>
      </main>
    </div>
  );
}
