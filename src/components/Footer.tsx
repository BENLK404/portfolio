import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { personalInfo } from '../data/portfolio';

type Lang = 'fr' | 'en';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const currentLang = i18n.language as Lang;

  const switchLang = (l: Lang) => {
    const newPath = location.pathname.replace(`/${currentLang}`, `/${l}`);
    navigate(newPath || `/${l}`);
  };

  return (
    <footer style={{ borderTop: '1px solid var(--section-border)' }}>

      {/* Lang switcher strip */}
      <div className="flex items-center justify-center gap-0 px-6 py-8"
        style={{ borderBottom: '1px solid var(--section-border)' }}>
        <div className="flex items-center gap-4">
          <span className="text-xs mono" style={{ color: 'var(--text-muted)' }}>
            {currentLang === 'fr' ? 'Langue' : 'Language'}
          </span>
          <div className="flex items-center rounded-full overflow-hidden"
            style={{ border: '1px solid var(--cyan-border)', background: 'var(--card)' }}>
            {(['fr', 'en'] as Lang[]).map((l, i) => (
              <button
                key={l}
                onClick={() => switchLang(l)}
                className="relative flex items-center gap-2 px-5 py-2 text-sm font-semibold mono transition-all duration-200"
                style={{
                  background: currentLang === l ? 'var(--cyan)' : 'transparent',
                  color: currentLang === l ? 'var(--bg)' : 'var(--text-muted)',
                  borderRight: i === 0 ? '1px solid var(--cyan-border)' : 'none',
                }}
              >
                <span className="text-base leading-none">
                  {l === 'fr' ? '🇫🇷' : '🇬🇧'}
                </span>
                {l.toUpperCase()}
                {currentLang === l && (
                  <span className="w-1.5 h-1.5 rounded-full"
                    style={{ background: 'var(--bg)', opacity: 0.6 }} />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-6 lg:px-14 py-6 flex flex-wrap items-center justify-between gap-3 text-xs mono"
        style={{ color: 'var(--text-muted)' }}>
        <span>Bernard Kokou Kpedzi · {t('footer.tagline')}</span>
        <span>© 2025 · {t('footer.rights')}</span>
        <a href={`mailto:${personalInfo.email}`}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--cyan)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
          {personalInfo.email}
        </a>
      </div>
    </footer>
  );
}
