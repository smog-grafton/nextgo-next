import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

const content: Record<string, { eyebrow: string; title: string; intro: string; notes: string[] }> = {
  story: { eyebrow: 'Our story', title: 'One company, several layers of infrastructure.', intro: 'Next Go Tech Africa was built around a simple observation: African businesses need communication, payments and software infrastructure that understands the realities of the markets they operate in — variable connectivity, mobile-first customers, and a need for systems that just work.', notes: ['Messaging and communication infrastructure', 'Payment and mobile money integration', 'Custom software and business systems', 'Audience engagement technology through StudioPass'] },
  values: { eyebrow: 'Our values', title: 'Principles that keep our work grounded.', intro: 'We build infrastructure with reliability, Africa-first thinking, security and partnership at its foundation.', notes: ['Reliability businesses can depend on', 'Africa-first understanding of real operations', 'Security as a baseline requirement', 'Long-term technology partnership'] },
  mission: { eyebrow: 'Our mission', title: 'Accessible, reliable technology for African business.', intro: 'Our mission is to build accessible and reliable technology that helps African businesses communicate, operate and grow.', notes: ['Communicate with customers', 'Collect and reconcile payments', 'Automate business operations', 'Build for sustainable growth'] },
  vision: { eyebrow: 'Our vision', title: 'Technology powering Africa’s digital transformation.', intro: 'Our vision is to become a leading African technology company powering communication, payments and digital transformation across the continent.', notes: ['Communication infrastructure', 'Payment infrastructure', 'Digital transformation', 'Continental scale'] },
};

export function generateStaticParams() { return Object.keys(content).map((section) => ({ section })); }

export default function AboutSection({ params }: { params: { section: string } }) {
  const page = content[params.section];
  if (!page) notFound();
  return <section className="simple-detail"><Link className="back-link" href="/about"><ArrowLeft size={18}/> About Next Go Tech Africa</Link><span className="eyebrow">{page.eyebrow}</span><h1>{page.title}</h1><p>{page.intro}</p><div className="simple-detail-list">{page.notes.map((note, i) => <div key={note}><b>0{i + 1}</b>{note}</div>)}</div><Link href="/contact" className="button primary">Talk to us <ArrowUpRight size={20}/></Link></section>;
}
