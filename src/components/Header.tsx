import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { Theme } from '../hooks/useTheme';

type Lang = 'fr' | 'en';

interface Props {
  active: string;
  theme: Theme;
  onToggleTheme: () => void;
  lang?: Lang;
  onSwitchLang?: (l: Lang) => void;
}

export default function Header({ active, theme, onToggleTheme }: Props) {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isDark = theme === 'dark';

  const NAV = [
    { id: 'home',     label: t('nav.home') },
    { id: 'about',    label: t('nav.about') },
    { id: 'services', label: t('nav.services') },
    { id: 'resume',   label: t('nav.resume') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'skills',   label: t('nav.skills') },
    { id: 'contact',  label: t('nav.contact') },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  const bg = isDark
    ? scrolled ? 'rgba(10,10,10,0.85)' : 'rgba(10,10,10,0.55)'
    : scrolled ? 'rgba(236,240,243,0.88)' : 'rgba(236,240,243,0.65)';

  const border = scrolled
    ? 'rgba(0,180,200,0.18)'
    : isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.07)';

  const shadow = scrolled
    ? isDark
      ? '0 4px 24px rgba(0,0,0,0.4)'
      : '0 4px 24px rgba(0,0,0,0.08), 0 1px 0 rgba(255,255,255,0.6) inset'
    : isDark ? 'none' : '0 1px 0 rgba(255,255,255,0.5) inset';

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
      >
        <div
          className="w-full max-w-4xl flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300"
          style={{
            background: bg,
            backdropFilter: 'blur(22px)',
            WebkitBackdropFilter: 'blur(22px)',
            border: `1px solid ${border}`,
            boxShadow: shadow,
          }}
        >
          {/* Logo */}
          <button onClick={() => go('home')} className="flex items-center gap-2.5 shrink-0">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
              style={{ background: 'var(--cyan)', color: isDark ? '#0a0a0a' : '#fff' }}
            >
              BK
            </div>
            <span className="text-sm font-semibold hidden sm:block" style={{ color: 'var(--text)' }}>
              Bernard Kpedzi
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {NAV.map(({ id, label }) => {
              const isActive = active === id;
              return (
                <button
                  key={id}
                  onClick={() => go(id)}
                  className="relative px-3 py-1.5 text-xs font-medium rounded-lg transition-colors duration-150"
                  style={{ color: isActive ? 'var(--cyan)' : 'var(--text-muted)' }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="pill"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: 'var(--cyan-dim)', border: '1px solid var(--cyan-border)' }}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative">{label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">

            {/* Theme toggle */}
            <button
              onClick={onToggleTheme}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
              style={{
                background: 'var(--cyan-dim)',
                border: '1px solid var(--cyan-border)',
                color: 'var(--cyan)',
              }}
              title={isDark ? 'Light mode' : 'Dark mode'}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -30, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 30, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  {isDark ? <Sun size={14} /> : <Moon size={14} />}
                </motion.span>
              </AnimatePresence>
            </button>

            {/* CTA — desktop only */}
            <button
              onClick={() => go('contact')}
              className="hidden md:block px-4 py-1.5 text-xs font-semibold rounded-lg transition-all hover:opacity-80"
              style={{ background: 'var(--cyan)', color: isDark ? '#0a0a0a' : '#fff' }}
            >
              {t('hero.cta_contact')}
            </button>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-1.5 rounded-lg"
              style={{ color: 'var(--text-muted)' }}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 rounded-2xl p-3"
            style={{
              background: isDark ? 'rgba(10,10,10,0.95)' : 'rgba(236,240,243,0.97)',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--cyan-border)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            {NAV.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => go(id)}
                className="w-full text-left px-3 py-2.5 text-sm rounded-lg transition-colors"
                style={{ color: active === id ? 'var(--cyan)' : 'var(--text-dim)' }}
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
