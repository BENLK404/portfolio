import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Home, User, Zap, FileText, FolderOpen, Code, Mail, Menu, X } from 'lucide-react';

const NAV = [
  { id: 'home', label: 'Accueil', Icon: Home },
  { id: 'about', label: 'À propos', Icon: User },
  { id: 'services', label: 'Services', Icon: Zap },
  { id: 'resume', label: 'Expérience', Icon: FileText },
  { id: 'projects', label: 'Projets', Icon: FolderOpen },
  { id: 'skills', label: 'Compétences', Icon: Code },
  { id: 'contact', label: 'Contact', Icon: Mail },
];

export default function Sidebar({ activeSection }: { activeSection: string }) {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-5 left-5 z-50 md:hidden p-2 rounded-lg"
        style={{ background: 'rgba(17,17,17,0.9)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(12px)' }}
      >
        {open ? <X size={18} style={{ color: 'rgba(226,232,240,0.7)' }} /> : <Menu size={18} style={{ color: 'rgba(226,232,240,0.7)' }} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-30 md:hidden"
            style={{ background: 'rgba(0,0,0,0.5)' }}
          />
        )}
      </AnimatePresence>

      <aside
        className={`fixed left-0 top-0 h-full z-40 flex flex-col transition-transform duration-300
          w-56 md:w-[60px] lg:w-56
          ${open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
        style={{ background: 'rgba(10,10,10,0.97)', borderRight: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)' }}
      >
        {/* Logo */}
        <div className="px-4 py-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0"
              style={{ background: 'white', color: '#0a0a0a' }}
            >
              BK
            </div>
            <div className="lg:block md:hidden leading-tight">
              <p className="text-sm font-semibold text-white">Bernard Kpedzi</p>
              <p className="text-xs mono" style={{ color: 'rgba(226,232,240,0.3)' }}>Full-Stack Dev</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 px-2 space-y-0.5">
          {NAV.map(({ id, label, Icon }) => {
            const active = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => go(id)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-150 text-left group relative"
                style={{
                  background: active ? 'rgba(0,216,232,0.06)' : 'transparent',
                  color: active ? '#00d8e8' : 'rgba(226,232,240,0.35)',
                }}
              >
                <Icon size={15} className="shrink-0" />
                <span className="text-sm lg:block md:hidden">{label}</span>

                {/* Tooltip md-only */}
                <span
                  className="absolute left-14 px-2.5 py-1 rounded-md text-xs mono whitespace-nowrap z-50
                             opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none
                             md:block lg:hidden hidden"
                  style={{ background: '#1c1c1c', border: '1px solid rgba(255,255,255,0.07)', color: 'white' }}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </nav>

        <div className="px-4 py-4 lg:block md:hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="text-xs mono" style={{ color: 'rgba(226,232,240,0.15)' }}>© 2025</p>
        </div>
      </aside>
    </>
  );
}
