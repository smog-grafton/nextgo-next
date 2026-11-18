import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import { solutionRepository } from '@/lib/repositories';
import { solutions } from '@/data/site';

type SolutionDetailProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() { return solutions.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: SolutionDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = await solutionRepository.getBySlug(slug);
  return solution ? { title: solution.title, description: solution.description } : { title: 'Solution not found' };
}

export default async function SolutionDetail({ params }: SolutionDetailProps) {
  const { slug } = await params;
  const solution = await solutionRepository.getBySlug(slug);
  if (!solution) notFound();
  const Icon = solution.icon;

  return <>
    <section className="solution-detail" style={{ '--solution-accent': solution.accent } as React.CSSProperties}>
      <Link className="back-link" href="/solutions"><ArrowLeft size={18}/> All solutions</Link>
      <div className="solution-detail-copy"><span className="eyebrow">Solution</span><h1>{solution.title}</h1><p>{solution.longDescription}</p><Link className="button primary" href="/contact">Discuss this solution <ArrowUpRight size={20}/></Link></div>
      <div className="solution-prototype"><Icon/><div className="proto-top"><i/><i/><i/></div><b>NG</b><div className="proto-bars"><span/><span/><span/><span/><span/></div><div className="proto-line"/></div>
    </section>
    <section className="detail-body"><div><span className="eyebrow">Best for</span><h2>{solution.bestFor}</h2></div><ul>{solution.points.map((point) => <li key={point}><span><Check size={17}/></span>{point}</li>)}</ul></section>
    <section className="detail-body"><div><span className="eyebrow">What this unlocks</span><h2>A solution shaped around a clear business need.</h2></div><ul>{solution.outcomes.map((outcome) => <li key={outcome}><span><Check size={17}/></span>{outcome}</li>)}</ul></section>
    <section className="detail-cta"><p>Looking for a practical route from requirement to delivery?</p><Link href="/contact" className="text-link">Talk to Next Go Tech Africa <ArrowUpRight size={20}/></Link></section>
  </>;
}
