import Link from 'next/link';
import { ArrowUpRight, Asterisk } from 'lucide-react';

export function PageHero({ eyebrow, title, intro, action = 'Start a project', href = '/contact' }: { eyebrow: string; title: string; intro: string; action?: string; href?: string }) {
  return <section className="page-hero"><span className="eyebrow"><Asterisk size={21}/>{eyebrow}</span><h1>{title}</h1><p>{intro}</p><Link href={href} className="button primary">{action}<ArrowUpRight size={20}/></Link></section>;
}
