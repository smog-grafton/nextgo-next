import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { solutions } from '@/data/site';
import { PageHero } from '@/components/sections/PageHero';

export const metadata = { title: 'Solutions' };
export default function SolutionsPage() { return <><PageHero eyebrow="Solutions" title="Solutions by business need." intro="Communication, payments, customer engagement and digital transformation — organized around what your business needs to solve." action="Talk to us" href="/contact"/><section className="solutions-list">{solutions.map((solution, index) => { const Icon = solution.icon; return <Link href={`/solutions/${solution.slug}`} key={solution.slug} className="solution-row"><span className="solution-number">0{index + 1}</span><span className="solution-icon"><Icon size={30}/></span><div><h2>{solution.title}</h2><p>{solution.description}</p></div><ArrowUpRight /></Link>; })}</section></>; }
