import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ArrowUpRight, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { projects as projectsData } from '../data/portfolio';

export default function Projects() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ threshold: 0.1 });
  const projectsI18n = t('projects.items', { returnObjects: true }) as {
    name: string; type: string; description: string; highlights: string[];
  }[];

  const projects = projectsData.map((p, i) => ({
    ...p,
    name: projectsI18n[i]?.name ?? p.name,
    type: projectsI18n[i]?.type ?? p.type,
    description: projectsI18n[i]?.description ?? p.description,
  }));

  return (
    <section id="projects" ref={ref}
      style={{ borderTop: '1px solid var(--section-border)', background: 'var(--bg-alt)' }}>
      <div className="px-6 lg:px-14">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }} className="mb-12">
          <p className="section-tag mb-4">{t('projects.tag')}</p>
          <h2 className="text-3xl font-bold" style={{ color: 'var(--text)' }}>{t('projects.title')}</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <motion.div key={p.name}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="card p-5 flex flex-col group relative overflow-hidden"
              style={{ cursor: (p as { link?: string }).link ? 'pointer' : 'default' }}
              onClick={() => { if ((p as { link?: string }).link) window.open((p as { link?: string }).link, '_blank'); }}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="mono text-xs mb-1" style={{ color: 'var(--cyan)', opacity: 0.7 }}>{p.year}</p>
                  <h3 className="text-sm font-semibold leading-snug" style={{ color: 'var(--text)' }}>{p.name}</h3>
                </div>
                {(p as { link?: string }).link
                  ? <Github size={14} className="shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--cyan)' }} />
                  : <ArrowUpRight size={14} className="shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--cyan)' }} />
                }
              </div>
              <p className="text-xs leading-relaxed mb-4 flex-1" style={{ color: 'var(--text-muted)' }}>
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map(tech => <span key={tech} className="tag">{tech}</span>)}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(90deg, transparent, var(--cyan-border), transparent)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
