'use client';

import { motion } from 'framer-motion';
import {
  ContactRound,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
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
      <path d="M5.2 18.2c.5 0 .9-.4.9-.9v-1.8c0-3.5 2.9-6.4 6.4-6.4h3.7l-1.8 1.8a.9.9 0 0 0 1.3 1.3l3.4-3.4a.9.9 0 0 0 0-1.3l-3.4-3.4a.9.9 0 1 0-1.3 1.3l1.8 1.8h-3.7c-4.6 0-8.2 3.7-8.2 8.2v1.8c0 .5.4.9.9.9Z"/>
    </svg>
  );
}

function renderSectionList(text: string) {
  const normalized = text.replace(/\r/g, '');
  const items = normalized
    .split(/[●•]/)
    .map((item) => item.trim())
    .filter(Boolean);

  if (items.length > 1) {
    return (
      <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--muted)] marker:text-[var(--muted)]">
        {items.map((item, index) => (
          <li key={`section-item-${index}`} className="whitespace-pre-wrap">
            {item.split('\n').map((line, lineIndex, lines) => (
              <span key={`section-item-${index}-line-${lineIndex}`}>
                {line}
                {lineIndex < lines.length - 1 && <br />}
              </span>
            ))}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p className="text-sm leading-relaxed text-[var(--muted)]">
      {normalized.split('\n').map((line, index, lines) => (
        <span key={`section-line-${index}`}>
          {line}
          {index < lines.length - 1 && <br />}
        </span>
      ))}
    </p>
  );
}

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
                src="/Images/Perfil/FotoDePerfil.png"
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
                {renderSectionList(content.sections.studies.description)}
              </div>

              <div
                id="credentials"
                className="rounded-2xl border border-white/10 bg-[var(--surface)]/45 p-4 shadow-[0_8px_20px_rgba(0,0,0,0.2)]"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)]/15 text-[var(--accent)]">
                  <ScrollText size={18} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{content.sections.credentials.title}</h3>
                {renderSectionList(content.sections.credentials.description)}
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
          className="rounded-3xl border border-white/10 bg-[var(--surface)]/60 p-5 sm:p-7 lg:p-8"
        >
          <div className="grid gap-5 lg:grid-cols-[0.95fr_1.8fr] lg:gap-7">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="rounded-xl bg-[var(--accent)]/15 p-2 text-[var(--accent)]">
                  <ContactRound size={22} />
                </span>
                <h2 className="text-2xl font-bold text-white">{content.sections.contact.title}</h2>
              </div>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                {content.sections.contact.description}
              </p>
            </div>

            <ul className="grid gap-3 text-base font-semibold text-[var(--foreground)] sm:grid-cols-2">
              <li className="sm:col-span-2">
                <span className="flex min-h-14 items-center gap-3 rounded-2xl border border-white/10 bg-[var(--card)]/35 px-4 py-3">
                  <MapPin size={18} className="shrink-0 text-[var(--accent)]" />
                  <span className="leading-relaxed">{content.contact.location}</span>
                </span>
              </li>

              <li>
                <a
                  href={`mailto:${content.contact.email}`}
                  className="flex min-h-14 items-center gap-3 rounded-2xl border border-white/10 bg-[var(--card)]/35 px-4 py-3 leading-relaxed transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <Mail size={18} className="shrink-0 text-[var(--accent)]" />
                  <span className="break-words">{content.contact.email}</span>
                </a>
              </li>

              <li>
                <a
                  href="tel:+34645950225"
                  className="flex min-h-14 items-center gap-3 rounded-2xl border border-white/10 bg-[var(--card)]/35 px-4 py-3 leading-relaxed transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <Phone size={18} className="shrink-0 text-[var(--accent)]" />
                  <span>{content.contact.phone}</span>
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/34645950225"
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-14 items-center gap-3 rounded-2xl border border-white/10 bg-[var(--card)]/35 px-4 py-3 leading-relaxed transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <MessageCircle size={18} className="shrink-0 text-[var(--accent)]" />
                  <span>{content.contact.whatsapp}</span>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/Rodrigo-LPz"
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-14 items-center gap-3 rounded-2xl border border-white/10 bg-[var(--card)]/35 px-4 py-3 leading-relaxed transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <Github size={18} className="shrink-0 text-[var(--accent)]" />
                  <span>{content.contact.github}</span>
                </a>
              </li>

              <li className="sm:col-span-2">
                <a
                  href="https://www.linkedin.com/in/rodrigo-l%C3%B3pepez/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-14 items-center gap-3 rounded-2xl border border-white/10 bg-[var(--card)]/35 px-4 py-3 leading-relaxed transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <Linkedin size={18} className="shrink-0 text-[var(--accent)]" />
                  <span>{content.contact.linkedin}</span>
                </a>
              </li>
            </ul>
          </div>
        </motion.section>
      </main>
    </div>
  );
}