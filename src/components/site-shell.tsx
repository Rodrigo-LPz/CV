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

function CurvedArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-current" aria-hidden="true">
      <path d="M5.2 18.2c.5 0 .9-.4.9-.9v-1.8c0-3.5 2.9-6.4 6.4-6.4h3.7l-1.8 1.8a.9.9 0 0 0 1.3 1.3l3.4-3.4a.9.9 0 0 0 0-1.3l-3.4-3.4a.9.9 0 1 0-1.3 1.3l1.8 1.8h-3.7c-4.6 0-8.2 3.7-8.2 8.2v1.8c0 .5.4.9.9.9Z" />
    </svg>
  );
}

export function SiteShell() {
  const [locale, setLocale] = useState<Locale>('es');
  const content = useMemo(() => siteContent[locale], [locale]);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-10 pt-5 sm:px-6 sm:pb-12 sm:pt-6 md:px-8 md:pb-14 md:pt-8 xl:px-10 2xl:max-w-[90rem]">
      <header className="mb-8 flex flex-col gap-5 rounded-[28px] border border-white/10 bg-[var(--surface)]/60 p-4 backdrop-blur sm:mb-10 sm:p-5 md:mb-12 md:flex-row md:items-center md:justify-between md:p-6">
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-xs font-medium text-[var(--muted)] sm:text-sm md:justify-start">
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

      <main className="space-y-6 sm:space-y-8 xl:space-y-10">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-[28px] border border-white/10 bg-[var(--surface)]/55 p-5 sm:p-7 lg:p-8 xl:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)] lg:items-center lg:gap-10 xl:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.78fr)] xl:gap-12">
            <div className="text-center lg:text-left">
              <span className="mb-4 inline-flex rounded-full border border-[var(--accent)]/35 bg-[var(--accent)]/10 px-3 py-1 text-[11px] font-semibold text-[var(--accent)] sm:mb-5 sm:text-xs">
                {content.hero.badge}
              </span>
              <h1 className="text-4xl font-extrabold leading-none tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
                {content.hero.title}
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--muted)] sm:text-base md:text-lg lg:mx-0">
                {content.hero.subtitle}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
                <a
                  href="#techStack"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-[var(--accent-dark)] sm:w-auto"
                >
                  {content.hero.ctaPrimary}
                </a>
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-[var(--accent)] hover:text-[var(--accent)] sm:w-auto"
                >
                  {content.hero.ctaSecondary}
                </a>
              </div>
            </div>

            <div className="relative mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-full border-[3px] border-white/15 bg-zinc-700/40 shadow-[0_12px_40px_rgba(0,0,0,0.35)] sm:max-w-[260px] sm:border-4 md:max-w-[300px] xl:max-w-[340px]">
              <Image
                src="/Images/FotoDePerfil.png"
                alt="Foto de perfil de Rodrigo López Pérez"
                fill
                sizes="(max-width: 639px) 220px, (max-width: 767px) 260px, (max-width: 1279px) 300px, 340px"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </motion.section>

        <section className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] xl:gap-8">
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
            className="h-full rounded-[28px] border border-white/10 bg-[var(--card)]/45 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.25)] sm:p-6 xl:p-7"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)]/15 text-[var(--accent)]">
              <GraduationCap size={22} />
            </div>
            <h2 className="mb-2 text-xl font-bold text-white sm:text-2xl">{content.sections.journey.title}</h2>
            <p className="mb-5 text-sm leading-relaxed text-[var(--muted)] sm:mb-6">
              {content.sections.journey.description}
            </p>

            <div className="grid gap-4">
              <div
                id="studies"
                className="rounded-2xl border border-white/10 bg-[var(--surface)]/45 p-4 shadow-[0_8px_20px_rgba(0,0,0,0.2)] sm:p-5"
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
                className="rounded-2xl border border-white/10 bg-[var(--surface)]/45 p-4 shadow-[0_8px_20px_rgba(0,0,0,0.2)] sm:p-5"
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
          icon={<CurvedArrowIcon />}
        />

        <motion.article
          id="techStack"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="rounded-[28px] border border-white/10 bg-[var(--card)]/45 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.25)] sm:p-6 xl:p-7"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)]/15 text-[var(--accent)]">
            <Monitor size={22} />
          </div>
          <h2 className="mb-2 text-xl font-bold text-white sm:text-2xl">{content.sections.techStack.title}</h2>
          <p className="mb-5 text-sm leading-relaxed text-[var(--muted)] sm:mb-6">
            {content.sections.techStack.description}
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div
              id="hard-skills"
              className="h-full rounded-2xl border border-white/10 bg-[var(--surface)]/45 p-4 shadow-[0_8px_20px_rgba(0,0,0,0.2)] sm:p-5"
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
              className="h-full rounded-2xl border border-white/10 bg-[var(--surface)]/45 p-4 shadow-[0_8px_20px_rgba(0,0,0,0.2)] sm:p-5"
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
          className="rounded-[28px] border border-white/10 bg-[var(--surface)]/60 p-5 sm:p-6 xl:p-8"
        >
          <div className="grid gap-6 lg:grid-cols-[minmax(220px,0.62fr)_minmax(0,1.38fr)] lg:gap-8">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-xl bg-[var(--accent)]/15 p-2 text-[var(--accent)]">
                  <ContactRound size={22} />
                </span>
                <h2 className="text-xl font-bold text-white sm:text-2xl">{content.sections.contact.title}</h2>
              </div>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                {content.sections.contact.description}
              </p>
            </div>

            <ul className="grid gap-3 text-sm font-medium text-[var(--foreground)] sm:text-base xl:grid-cols-2">
              <li className="flex min-w-0 items-start gap-3 rounded-2xl border border-white/10 bg-[var(--card)]/35 p-4 xl:col-span-2">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                <span className="leading-relaxed xl:whitespace-nowrap">{content.contact.location}</span>
              </li>
              <li className="flex min-w-0 items-start gap-3 rounded-2xl border border-white/10 bg-[var(--card)]/35 p-4">
                <Mail size={18} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                <a
                  href={`mailto:${content.contact.email}`}
                  className="break-all leading-relaxed transition hover:text-[var(--accent)]"
                >
                  {content.contact.email}
                </a>
              </li>
              <li className="flex min-w-0 items-start gap-3 rounded-2xl border border-white/10 bg-[var(--card)]/35 p-4">
                <Phone size={18} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                <a href="tel:+34645950225" className="leading-relaxed transition hover:text-[var(--accent)]">
                  {content.contact.phone}
                </a>
              </li>
              <li className="flex min-w-0 items-start gap-3 rounded-2xl border border-white/10 bg-[var(--card)]/35 p-4">
                <Github size={18} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                <a
                  href="https://github.com/Rodrigo-LPz"
                  target="_blank"
                  rel="noreferrer"
                  className="break-words leading-relaxed transition hover:text-[var(--accent)]"
                >
                  {content.contact.github}
                </a>
              </li>
              <li className="flex min-w-0 items-start gap-3 rounded-2xl border border-white/10 bg-[var(--card)]/35 p-4 xl:col-span-2">
                <Linkedin size={18} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                <a
                  href="https://www.linkedin.com/in/rodrigo-lopez-perez"
                  target="_blank"
                  rel="noreferrer"
                  className="break-words leading-relaxed transition hover:text-[var(--accent)]"
                >
                  {content.contact.linkedin}
                </a>
              </li>
            </ul>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
