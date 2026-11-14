import type { LucideIcon } from 'lucide-react';

export function VisualCard({ title, text, Icon, color = '#0866ff', number }: { title: string; text: string; Icon: LucideIcon; color?: string; number?: string }) {
  return <article className="visual-card" style={{ '--card-accent': color } as React.CSSProperties}><div className="card-visual"><div className="orb orb-one"/><div className="orb orb-two"/><div className="mini-window"><Icon size={35}/><span>{number ?? '01'}</span></div><div className="chart-lines"><i/><i/><i/><i/><i/></div></div><h3>{title}</h3><p>{text}</p></article>;
}
