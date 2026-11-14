import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import { solutionRepository } from '@/lib/repositories';
import { solutions } from '@/data/site';

export function generateStaticParams() { return solutions.map(({ slug }) => ({ slug })); }
export default async function SolutionDetail({ params }: { params: { slug: string } }) { const solution = await solutionRepository.getBySlug(params.slug); if (!solution) notFound(); const Icon = solution.icon; return <><section className="solution-detail" style={{ '--solution-accent': solution.accent } as React.CSSProperties}><Link className="back-link" href="/solutions"><ArrowLeft size={18}/> All solutions</Link><div className="solution-detail-copy"><span className="eyebrow">Solutions by business need</span><h1>{solution.title}</h1><p>{solution.longDescription}</p><Link className="button primary" href="/contact">Talk to us <ArrowUpRight size={20}/></Link></div><div className="solution-prototype"><Icon/><div className="proto-top"><i/><i/><i/></div><b>NG</b><div className="proto-bars"><span/><span/><span/><span/><span/></div><div className="proto-line"/></div></section><section className="detail-body"><div><span className="eyebrow">What it can include</span><h2>A foundation adapted to your operation.</h2></div><ul>{solution.points.map((point) => <li key={point}><span><Check size={17}/></span>{point}</li>)}</ul></section></>; }
