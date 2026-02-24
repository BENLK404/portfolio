import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowRight, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { personalInfo } from '../data/portfolio';

const FLAKES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  size: 18 + Math.random() * 26,
  delay: Math.random() * 8,
  duration: 6 + Math.random() * 8,
  drift: (Math.random() - 0.5) * 120,
  opacity: 0.15 + Math.random() * 0.45,
}));

export default function Hero() {
  const { t } = useTranslation();
  const ROLES = personalInfo.roles;
  const BIO_META = [{ Icon: MapPin, text: t('hero.available') }];

  const typedRef = useRef<HTMLSpanElement>(null);
  const roleIdx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    roleIdx.current = 0;
    charIdx.current = 0;
    deleting.current = false;
    const tick = () => {
      const cur = ROLES[roleIdx.current];
      if (!typedRef.current) return;
      if (deleting.current) {
        typedRef.current.textContent = cur.slice(0, --charIdx.current);
        if (charIdx.current === 0) {
          deleting.current = false;
          roleIdx.current = (roleIdx.current + 1) % ROLES.length;
          timer.current = setTimeout(tick, 400);
        } else timer.current = setTimeout(tick, 42);
      } else {
        typedRef.current.textContent = cur.slice(0, ++charIdx.current);
        if (charIdx.current === cur.length) {
          deleting.current = true;
          timer.current = setTimeout(tick, 2200);
        } else timer.current = setTimeout(tick, 80);
      }
    };
    timer.current = setTimeout(tick, 900);
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [ROLES]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">

      {/* Snowflakes */}
      {FLAKES.map(f => (
        <motion.span
          key={f.id}
          aria-hidden
          style={{
            position: 'absolute',
            left: `${f.left}%`,
            top: '-2rem',
            fontSize: f.size,
            color: 'var(--cyan)',
            opacity: f.opacity,
            pointerEvents: 'none',
            userSelect: 'none',
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, f.drift],
            rotate: [0, 360],
            opacity: [f.opacity, f.opacity * 0.6, f.opacity],
          }}
          transition={{
            duration: f.duration,
            delay: f.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          ❄
        </motion.span>
      ))}
      <div className="w-full px-6 lg:px-16 pt-10 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

          {/* LEFT */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}>
              <h1 className="font-bold leading-[1.05] tracking-tight mb-1"
                style={{ fontSize: 'clamp(2rem, 5.5vw, 3.8rem)', color: 'var(--text)' }}>
                Bernard Kokou
              </h1>
              <h1 className="font-bold leading-[1.05] tracking-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 5.5vw, 3.8rem)', color: 'var(--hero-name-dim)' }}>
                Kpedzi
              </h1>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }}
              className="flex items-center gap-2 mb-6">
              <span className="w-6 h-px" style={{ background: 'var(--cyan)' }} />
              <p className="text-base" style={{ color: 'var(--text-dim)' }}>
                <span ref={typedRef} style={{ color: 'var(--cyan)' }} />
                <span className="inline-block w-px h-[18px] ml-0.5 align-middle"
                  style={{ background: 'var(--cyan)', animation: 'blink 1s step-end infinite' }} />
              </p>
            </motion.div>

            {/* Bio */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38 }}
              className="flex flex-col gap-2.5 mb-7 max-w-sm">
              <p className="text-sm leading-relaxed mb-1" style={{ color: 'var(--text-muted)' }}>
                {t('hero.bio')}
              </p>
              {BIO_META.map(({ Icon, text }, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 + i * 0.08 }}
                  className="flex items-center gap-2.5 text-xs mono"
                  style={{ color: 'var(--text-muted)' }}>
                  <Icon size={13} style={{ color: 'var(--cyan)', flexShrink: 0 }} />
                  {text}
                </motion.div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.48 }}
              className="flex items-center gap-3 mb-10">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn flex items-center gap-2"
                style={{ background: 'var(--cyan)', color: 'var(--bg)', fontWeight: 600 }}
              >
                {t('hero.cta_contact')} <ArrowRight size={14} />
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-ghost"
              >
                {t('hero.cta_projects')}
              </button>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.58 }}
              className="flex items-center gap-5">
              {[
                { Icon: Github,   href: personalInfo.github,   label: 'GitHub' },
                { Icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                { Icon: Twitter,  href: personalInfo.twitter,  label: 'X / Twitter' },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs mono transition-colors"
                  style={{ color: 'var(--text-muted)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--cyan)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  <Icon size={13} /> {label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.25 }}
            className="hidden lg:flex flex-col items-center gap-6"
          >
            {/* Photo frame */}
            <div className="photo-frame w-full overflow-hidden" style={{ height: 320 }}>
              <img
                src="/photo.jpg"
                alt="Bernard Kokou Kpedzi"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Stats row */}
            <div className="flex gap-4 w-full">
              {[
                { v: '10+', l: t('hero.stats.projects') },
                { v: '3+',  l: t('hero.stats.experience') },
                { v: '3',   l: t('hero.stats.platforms') },
              ].map(({ v, l }, i) => (
                <motion.div key={l}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 + i * 0.08 }}
                  className="flex-1 py-3 rounded-xl text-center transition-all"
                  style={{ background: 'var(--card)', border: '1px solid var(--cyan-border)', boxShadow: 'var(--shadow)' }}>
                  <p className="text-lg font-bold" style={{ color: 'var(--cyan)' }}>{v}</p>
                  <p className="text-xs mono" style={{ color: 'var(--text-muted)' }}>{l}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
    </section>
  );
}
