import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useTranslation } from 'react-i18next';
import { Globe, Smartphone, Monitor, Server, Database, Layers } from 'lucide-react';

const ICONS = [Globe, Smartphone, Monitor, Server, Database, Layers];

export default function Services() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ threshold: 0.1 });
  const items = t('services.items', { returnObjects: true }) as { title: string; description: string }[];

  return (
    <section id="services" ref={ref}
      style={{ borderTop: '1px solid var(--section-border)', background: 'var(--bg-alt)' }}>
      <div className="px-6 lg:px-14">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }} className="mb-12">
          <p className="section-tag mb-4">{t('services.tag')}</p>
          <h2 className="text-3xl font-bold" style={{ color: 'var(--text)' }}>{t('services.title')}</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(({ title, description }, i) => {
            const Icon = ICONS[i];
            return (
            <motion.div key={title}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="card p-5 group cursor-default">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                style={{ background: 'var(--cyan-dim)', border: '1px solid var(--cyan-border)' }}>
                <Icon size={16} style={{ color: 'var(--cyan)' }} />
              </div>
              <h3 className="text-sm font-semibold mb-2" style={{ color: 'var(--text)' }}>{title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{description}</p>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
