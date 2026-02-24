import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const STORAGE_KEY = 'cookie_consent';

export default function CookieConsent() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setTimeout(() => setVisible(true), 1200);
  }, []);

  const save = (acceptAll: boolean) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ necessary: true, analytics: acceptAll || analytics, date: Date.now() })
    );
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop blur (subtle) */}
          <motion.div
            className="fixed inset-0 z-[90]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ backdropFilter: 'blur(2px)', background: 'rgba(0,0,0,0.18)' }}
            onClick={() => save(false)}
          />

          {/* Modal */}
          <motion.div
            className="fixed bottom-0 sm:bottom-6 left-0 right-0 sm:left-1/2 z-[100] w-full sm:max-w-lg sm:px-4 px-0"
            style={{ ['--tw-translate-x' as string]: undefined, margin: '0 auto' }}
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ type: 'spring', bounce: 0.2, duration: 0.45 }}
          >
            <div
              className="rounded-t-2xl sm:rounded-2xl p-5 relative overflow-y-auto"
              style={{
                maxHeight: '90dvh',
                background: 'var(--card)',
                border: '1px solid var(--cyan-border)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.25)',
              }}
            >
              {/* Close */}
              <button
                onClick={() => save(false)}
                className="absolute top-4 right-4 p-1 rounded-lg opacity-50 hover:opacity-100 transition-opacity"
                style={{ color: 'var(--text-muted)' }}
              >
                <X size={15} />
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'var(--cyan-dim)', border: '1px solid var(--cyan-border)' }}
                >
                  <Cookie size={18} style={{ color: 'var(--cyan)' }} />
                </div>
                <h3 className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
                  {t('cookies.title')}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                {t('cookies.description')}
              </p>

              {/* Expandable settings */}
              <button
                onClick={() => setExpanded(v => !v)}
                className="flex items-center gap-1.5 text-xs font-medium mb-3 transition-colors"
                style={{ color: 'var(--cyan)' }}
              >
                {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                {t('cookies.settings')}
              </button>

              <AnimatePresence>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="overflow-hidden mb-4"
                  >
                    <div
                      className="rounded-xl p-3 space-y-3"
                      style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
                    >
                      {/* Necessary */}
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <ShieldCheck size={12} style={{ color: 'var(--cyan)' }} />
                            <span className="text-xs font-medium" style={{ color: 'var(--text)' }}>
                              {t('cookies.necessary')}
                            </span>
                          </div>
                          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                            {t('cookies.necessary_desc')}
                          </p>
                        </div>
                        {/* Always on toggle */}
                        <div
                          className="shrink-0 w-9 h-5 rounded-full flex items-center px-0.5"
                          style={{ background: 'var(--cyan)' }}
                        >
                          <div className="w-4 h-4 rounded-full bg-white ml-auto" />
                        </div>
                      </div>

                      {/* Analytics */}
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs font-medium mb-0.5" style={{ color: 'var(--text)' }}>
                            {t('cookies.analytics')}
                          </p>
                          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                            {t('cookies.analytics_desc')}
                          </p>
                        </div>
                        {/* Toggle */}
                        <button
                          onClick={() => setAnalytics(v => !v)}
                          className="shrink-0 w-9 h-5 rounded-full flex items-center px-0.5 transition-colors"
                          style={{
                            background: analytics ? 'var(--cyan)' : 'var(--border)',
                            transition: 'background 0.2s ease',
                          }}
                        >
                          <div
                            className="w-4 h-4 rounded-full bg-white transition-transform"
                            style={{ transform: analytics ? 'translateX(16px)' : 'translateX(0)' }}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Save preferences */}
                    <button
                      onClick={() => save(false)}
                      className="mt-2 w-full py-2 text-xs font-semibold rounded-xl transition-opacity hover:opacity-80"
                      style={{ background: 'var(--cyan-dim)', border: '1px solid var(--cyan-border)', color: 'var(--cyan)' }}
                    >
                      {t('cookies.save')}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => save(false)}
                  className="flex-1 py-2 text-xs font-medium rounded-xl transition-opacity hover:opacity-70"
                  style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                >
                  {t('cookies.decline')}
                </button>
                <button
                  onClick={() => save(true)}
                  className="flex-1 py-2 text-xs font-semibold rounded-xl transition-opacity hover:opacity-80"
                  style={{ background: 'var(--cyan)', color: 'var(--bg)' }}
                >
                  {t('cookies.accept')}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
