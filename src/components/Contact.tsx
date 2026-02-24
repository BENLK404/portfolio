import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useTranslation } from 'react-i18next';
import { Send, Check, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function Contact() {
  const { t, i18n } = useTranslation();
  const { ref, inView } = useInView({ threshold: 0.15 });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, lang: i18n.language }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Erreur serveur');
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Erreur réseau. Réessayez.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" ref={ref}
      style={{ borderTop: '1px solid var(--section-border)', background: 'var(--bg-alt)' }}>
      <div className="px-6 lg:px-14">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }} className="mb-12">
          <p className="section-tag mb-4">{t('contact.tag')}</p>
          <h2 className="text-3xl font-bold" style={{ color: 'var(--text)' }}>{t('contact.title')}</h2>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }} className="space-y-6">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {t('contact.subtitle')}
            </p>
            <div className="space-y-0">
              {[
                { l: 'Email', v: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { l: 'Téléphone', v: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                { l: 'GitHub', v: `github.com/${personalInfo.githubUsername}`, href: personalInfo.github },
                { l: 'LinkedIn', v: personalInfo.linkedinName, href: personalInfo.linkedin },
              ].map(({ l, v, href }) => (
                <a key={l} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs py-3 group"
                  style={{ borderBottom: '1px solid var(--section-border)' }}>
                  <span className="mono" style={{ color: 'var(--text-muted)' }}>{l}</span>
                  <span style={{ color: 'var(--text-dim)' }}
                    className="group-hover:text-[var(--cyan)] transition-colors">{v}</span>
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2 text-xs mono">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--cyan)' }} />
              <span style={{ color: 'var(--cyan)' }}>{t('contact.available')} · Réponse sous 24h</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.18 }}>
            {sent ? (
              <div className="card p-8 flex flex-col items-center text-center gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--cyan-dim)', border: '1px solid var(--cyan-border)' }}>
                  <Check size={18} style={{ color: 'var(--cyan)' }} />
                </div>
                <p className="text-sm font-medium" style={{ color: 'var(--text)' }}>{t('contact.form.send')} ✓</p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{t('contact.available')}</p>
                <button onClick={() => setSent(false)} className="btn btn-ghost text-xs py-2 px-4 mt-2">
                  {t('contact.form.send')}
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block mono text-xs mb-1.5" style={{ color: 'var(--text-muted)' }}>{t('contact.form.name')}</label>
                    <input type="text" required value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder={t('contact.form.name_placeholder')} className="input" />
                  </div>
                  <div>
                    <label className="block mono text-xs mb-1.5" style={{ color: 'var(--text-muted)' }}>{t('contact.form.email')}</label>
                    <input type="email" required value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder={t('contact.form.email_placeholder')} className="input" />
                  </div>
                </div>
                <div>
                  <label className="block mono text-xs mb-1.5" style={{ color: 'var(--text-muted)' }}>{t('contact.form.subject')}</label>
                  <input type="text" value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    placeholder={t('contact.form.subject_placeholder')} className="input" />
                </div>
                <div>
                  <label className="block mono text-xs mb-1.5" style={{ color: 'var(--text-muted)' }}>{t('contact.form.message')}</label>
                  <textarea required rows={5} value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder={t('contact.form.message_placeholder')} className="input resize-none" />
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg"
                    style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#ef4444' }}>
                    <AlertCircle size={13} />
                    {error}
                  </div>
                )}

                <button type="submit" disabled={loading}
                  className="btn w-full gap-2 disabled:opacity-50"
                  style={{ background: 'var(--cyan)', color: 'var(--bg)', fontWeight: 600 }}>
                  {loading
                    ? <span className="mono text-xs">…</span>
                    : <><Send size={13} /><span>{t('contact.form.send')}</span></>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
