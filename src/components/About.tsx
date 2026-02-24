import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useTranslation } from 'react-i18next';
import { personalInfo } from '../data/portfolio';

function Counter({ to, inView }: { to: number; inView: boolean }) {
  const [n, setN] = useState(0);
  const done = useRef(false);
  useEffect(() => {
    if (!inView || done.current) return;
    done.current = true;
    let start = 0;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1400, 1);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * to));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to]);
  return <>{n}</>;
}

export default function About() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <section id="about" ref={ref} style={{ borderTop: '1px solid var(--section-border)' }}>
      <div className="px-6 lg:px-14">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }} className="mb-12">
          <p className="section-tag mb-4">{t('about.tag')}</p>
          <h2 className="text-3xl font-bold" style={{ color: 'var(--text)' }}>{t('about.title')}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}>
            <div className="photo-frame overflow-hidden" style={{ height: 320 }}>
              <img
                src="/photo.jpg"
                alt="Bernard Kokou Kpedzi"
                className="w-full h-full object-cover object-top"
                style={{ transform: 'scaleX(-1)' }}
              />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.12 }} className="lg:col-span-2 space-y-8">

            <div className="space-y-3 text-sm leading-relaxed" style={{ color: 'var(--text-dim)' }}>
              <p>{t('about.bio1')}</p>
              <p>{t('about.bio2')}</p>
            </div>

            <div className="grid grid-cols-3 gap-6 py-6"
              style={{ borderTop: '1px solid var(--section-border)', borderBottom: '1px solid var(--section-border)' }}>
              {[
                { v: 3,  l: t('about.stats.experience') },
                { v: 10, l: t('about.stats.projects') },
                { v: 5,  l: t('about.stats.clients') },
              ].map(s => (
                <div key={s.l}>
                  <p className="text-2xl font-bold" style={{ color: 'var(--cyan)' }}>
                    <Counter to={s.v} inView={inView} />+
                  </p>
                  <p className="text-xs mono mt-0.5" style={{ color: 'var(--text-muted)' }}>{s.l}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {(t('about.traits', { returnObjects: true }) as string[]).map((trait: string) => (
                <span key={trait} className="tag">{trait}</span>
              ))}
            </div>


            <div className="space-y-0">
              {[
                { l: t('about.links.email'),    v: personalInfo.email,          href: `mailto:${personalInfo.email}` },
                { l: t('about.links.github'),   v: personalInfo.githubUsername,  href: personalInfo.github },
                { l: t('about.links.linkedin'), v: personalInfo.linkedinName,    href: personalInfo.linkedin },
                { l: t('about.links.twitter'),  v: personalInfo.twitterUsername, href: personalInfo.twitter },
              ].map(({ l, v, href }) => (
                <div key={l} className="flex items-center justify-between text-xs py-2.5"
                  style={{ borderBottom: '1px solid var(--section-border)' }}>
                  <span className="mono" style={{ color: 'var(--text-muted)' }}>{l}</span>
                  <a href={href} target="_blank" rel="noopener noreferrer"
                    style={{ color: 'var(--text-dim)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--cyan)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dim)')}>
                    {v}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
