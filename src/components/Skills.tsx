import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useTranslation } from 'react-i18next';
import { skillCategories, techStack } from '../data/portfolio';
import {
  SiReact, SiTypescript, SiVuedotjs, SiFlutter, SiElectron,
  SiNodedotjs, SiSpringboot, SiExpress, SiNestjs, SiGraphql,
  SiPostgresql, SiMongodb, SiRedis, SiMysql,
  SiDocker, SiGit, SiGithubactions, SiLinux,
  SiTailwindcss,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import type { IconType } from 'react-icons';

const TECH_ICONS: Record<string, { Icon: IconType; color: string }> = {
  'React':          { Icon: SiReact,          color: '#61dafb' },
  'TypeScript':     { Icon: SiTypescript,     color: '#3178c6' },
  'Vue.js':         { Icon: SiVuedotjs,       color: '#42b883' },
  'Flutter':        { Icon: SiFlutter,        color: '#54c5f8' },
  'Electron.js':    { Icon: SiElectron,       color: '#9feaf9' },
  'Node.js':        { Icon: SiNodedotjs,      color: '#5fa04e' },
  'Spring Boot':    { Icon: SiSpringboot,     color: '#6db33f' },
  'Express':        { Icon: SiExpress,        color: '#888888' },
  'NestJS':         { Icon: SiNestjs,         color: '#e0234e' },
  'GraphQL':        { Icon: SiGraphql,        color: '#e10098' },
  'PostgreSQL':     { Icon: SiPostgresql,     color: '#336791' },
  'MongoDB':        { Icon: SiMongodb,        color: '#47a248' },
  'Redis':          { Icon: SiRedis,          color: '#dc382d' },
  'MySQL':          { Icon: SiMysql,          color: '#4479a1' },
  'Docker':         { Icon: SiDocker,         color: '#2496ed' },
  'Git':            { Icon: SiGit,            color: '#f05032' },
  'GitHub Actions': { Icon: SiGithubactions,  color: '#2088ff' },
  'Linux':          { Icon: SiLinux,          color: '#fcc624' },
  'Tailwind CSS':   { Icon: SiTailwindcss,    color: '#38bdf8' },
  'JavaFX':         { Icon: FaJava,            color: '#007396' },
};

function TechBadge({ tech, delay }: { tech: string; delay: number }) {
  const [hovered, setHovered] = useState(false);
  const entry = TECH_ICONS[tech];
  const color = entry?.color ?? 'var(--cyan)';
  const Icon = entry?.Icon;

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs mono cursor-default transition-all duration-200"
      style={{
        background: 'var(--card)',
        border: `1px solid ${hovered ? color : 'var(--border)'}`,
        color: hovered ? color : 'var(--text-muted)',
        boxShadow: hovered ? `0 0 8px ${color}33` : 'none',
      }}
    >
      {Icon && <Icon size={12} style={{ color: hovered ? color : 'var(--text-muted)', transition: 'color 0.2s' }} />}
      {tech}
    </motion.span>
  );
}

export default function Skills() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ threshold: 0.1 });
  const catLabels = t('skills.categories', { returnObjects: true }) as string[];
  return (
    <section id="skills" ref={ref} style={{ borderTop: '1px solid var(--section-border)' }}>
      <div className="px-6 lg:px-14">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }} className="mb-12">
          <p className="section-tag mb-4">{t('skills.tag')}</p>
          <h2 className="text-3xl font-bold" style={{ color: 'var(--text)' }}>{t('skills.title')}</h2>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-8 mb-10">
          {skillCategories.map((cat, ci) => (
            <motion.div key={cat.category}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: ci * 0.12 }} className="space-y-4">
              <p className="text-xs mono font-medium" style={{ color: 'var(--text-muted)' }}>{catLabels[ci] ?? cat.category}</p>
              <div className="space-y-3.5">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span style={{ color: 'var(--text-dim)' }}>{skill.name}</span>
                      <span className="mono" style={{ color: 'var(--text-muted)' }}>{skill.level}%</span>
                    </div>
                    <div className="bar-track">
                      <motion.div className="bar-fill"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.2, delay: ci * 0.12 + si * 0.07, ease: 'easeOut' }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 pt-8" style={{ borderTop: '1px solid var(--section-border)' }}>
          {inView && techStack.map((tech, i) => (
            <TechBadge key={tech} tech={tech} delay={0.4 + i * 0.03} />
          ))}
        </div>
      </div>
    </section>
  );
}
