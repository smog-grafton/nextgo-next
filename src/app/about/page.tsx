import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { values } from '@/data/site';
import { PageHero } from '@/components/sections/PageHero';

export const metadata = { title: 'About us' };

export default function AboutPage() {
  return <><PageHero eyebrow="Company" title="Africa’s technology, built by an African technology company." intro="Next Go Tech Africa designs and builds the communication, payment and software infrastructure that businesses across the continent run on — from messaging and mobile money to custom platforms and AI assistants." action="Our story" href="/about/story"/><section className="values-section"><div><span className="eyebrow">The way we work</span><h2>Principles behind our infrastructure.</h2></div><div className="values-grid">{values.map(([title, description], index) => <article key={title}><b>0{index + 1}</b><h3>{title}</h3><p>{description}</p></article>)}</div></section><section className="about-journey"><div><span className="eyebrow">One company, several layers of infrastructure</span><h2>Technology for communication, payments and growth.</h2><p>We operate across connected layers of technology: messaging and communication infrastructure, payment and mobile money integration, custom software development, and audience engagement technology for media and entertainment.</p><Link className="text-link" href="/about/story">Read our story <ArrowUpRight size={19}/></Link></div><div className="journey-shape"><i/><i/><i/><i/><span>Built<br/>for Africa</span></div></section></>;
}
