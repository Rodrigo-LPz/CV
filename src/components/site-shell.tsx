'use client';

import { motion } from 'framer-motion';
import {
  ContactRound,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Monitor,
  Phone,
  Redo2,
  School,
  ScrollText,
  UserRound,
  UsersRound,
  Wrench,
} from 'lucide-react';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { siteContent, type Locale } from '@/data/site-content';
import { LanguageToggle } from './language-toggle';
import { SectionCard } from './section-card';

const navLinks = ['about', 'journey', 'references', 'techStack', 'contact'] as const;

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
          <div className="grid gap-8 lg:grid-cols-[1.45fr_0.8fr] lg:items-center">
            <div>
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
                  href="#techStack"
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
            </div>

            <div className="mx-auto h-56 w-56 overflow-hidden rounded-full border-4 border-white/15 bg-zinc-700/40 shadow-[0_12px_40px_rgba(0,0,0,0.35)] sm:h-64 sm:w-64">
              <Image
                src="/profile.jpg"
                alt="Foto de perfil de Rodrigo López Pérez"
                width={512}
                height={512}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </motion.section>

        <section className="grid items-stretch gap-6 lg:grid-cols-2">
          <SectionCard
            id="about"
            title={content.sections.about.title}
            description={content.sections.about.description}
            icon={<UserRound size={22} />}
            className="h-full"
          />

          <motion.article
            id="journey"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="h-full rounded-3xl border border-white/10 bg-[var(--card)]/45 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)]/15 text-[var(--accent)]">
              <GraduationCap size={22} />
            </div>
            <h2 className="mb-2 text-2xl font-bold text-white">{content.sections.journey.title}</h2>
            <p className="mb-6 text-sm leading-relaxed text-[var(--muted)]">
              {content.sections.journey.description}
            </p>

            <div className="grid gap-4">
              <div
                id="studies"
                className="rounded-2xl border border-white/10 bg-[var(--surface)]/45 p-4 shadow-[0_8px_20px_rgba(0,0,0,0.2)]"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)]/15 text-[var(--accent)]">
                  <School size={18} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{content.sections.studies.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {content.sections.studies.description}
                </p>
              </div>

              <div
                id="credentials"
                className="rounded-2xl border border-white/10 bg-[var(--surface)]/45 p-4 shadow-[0_8px_20px_rgba(0,0,0,0.2)]"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)]/15 text-[var(--accent)]">
                  <ScrollText size={18} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{content.sections.credentials.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {content.sections.credentials.description}
                </p>
              </div>
            </div>
          </motion.article>
        </section>

        <SectionCard
          id="references"
          title={content.sections.references.title}
          description={content.sections.references.description}
          icon={<Redo2 size={22} />}
        />

        <motion.article
          id="techStack"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="rounded-3xl border border-white/10 bg-[var(--card)]/45 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)]/15 text-[var(--accent)]">
            <Monitor size={22} />
          </div>
          <h2 className="mb-2 text-2xl font-bold text-white">{content.sections.techStack.title}</h2>
          <p className="mb-6 text-sm leading-relaxed text-[var(--muted)]">
            {content.sections.techStack.description}
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div
              id="hard-skills"
              className="rounded-2xl border border-white/10 bg-[var(--surface)]/45 p-4 shadow-[0_8px_20px_rgba(0,0,0,0.2)]"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)]/15 text-[var(--accent)]">
                <Wrench size={18} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{content.sections.hardSkills.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                {content.sections.hardSkills.description}
              </p>
            </div>

            <div
              id="soft-skills"
              className="rounded-2xl border border-white/10 bg-[var(--surface)]/45 p-4 shadow-[0_8px_20px_rgba(0,0,0,0.2)]"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)]/15 text-[var(--accent)]">
                <UsersRound size={18} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{content.sections.softSkills.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                {content.sections.softSkills.description}
              </p>
            </div>
          </div>
        </motion.article>

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

          <ul className="space-y-3 text-base font-medium text-[var(--foreground)]">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-[var(--accent)]" />
              <span>{content.contact.location}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[var(--accent)]" />
              <a href={`mailto:${content.contact.email}`} className="transition hover:text-[var(--accent)]">
                {content.contact.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[var(--accent)]" />
              <a href="tel:+34645950225" className="transition hover:text-[var(--accent)]">
                {content.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Github size={18} className="text-[var(--accent)]" />
              <a
                href="https://github.com/Rodrigo-LPz"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[var(--accent)]"
              >
                {content.contact.github}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Linkedin size={18} className="text-[var(--accent)]" />
              <a
                href="https://www.linkedin.com/in/rodrigo-lopez-perez"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[var(--accent)]"
              >
                {content.contact.linkedin}
              </a>
            </li>
          </ul>
        </motion.section>
      </main>
    </div>
  );
}
