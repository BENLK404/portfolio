import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useTranslation } from 'react-i18next';

export default function Resume() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ threshold: 0.1 });
  const experiences = t('experiences', { returnObjects: true }) as {
    title: string; company: string; subtitle: string; period: string; tasks: string[];
  }[];

  return (
    <section id="resume" ref={ref} style={{ borderTop: '1px solid var(--section-border)' }}>
      <div className="px-6 lg:px-14">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }} className="mb-12">
          <p className="section-tag mb-4">{t('resume.tag')}</p>
          <h2 className="text-3xl font-bold" style={{ color: 'var(--text)' }}>{t('resume.title')}</h2>
        </motion.div>
        <div style={{ borderLeft: '1px solid var(--cyan-border)' }}>
          {experiences.map((exp, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -12 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative pl-8 pb-10">
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full"
                style={{ background: 'var(--bg)', border: '2px solid var(--cyan)', boxShadow: '0 0 0 3px var(--cyan-dim)' }} />
              <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{exp.title}</h3>
                  <p className="text-xs mono mt-0.5" style={{ color: 'var(--text-muted)' }}>
                    {exp.company}{exp.subtitle ? ` — ${exp.subtitle}` : ''}
                  </p>
                </div>
                <span className="tag text-xs shrink-0">{exp.period}</span>
              </div>
              <ul className="space-y-1.5">
                {exp.tasks.map((task, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-xs" style={{ color: 'var(--text-muted)' }}>
                    <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: 'var(--cyan-border)' }} />
                    {task}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
