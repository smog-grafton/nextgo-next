import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { products } from '@/data/site';
import { PageHero } from '@/components/sections/PageHero';

export const metadata = { title: 'Products' };

export default function ProductsPage() {
  return <><PageHero eyebrow="Core technology" title="Technology pillars built for African business." intro="Messaging, payments, AI assistants and business software — the core infrastructure Next Go Tech Africa builds on." action="Talk to us" href="/contact"/><section className="solutions-list">{products.map((product, index) => { const Icon = product.icon; return <Link href={`/products/${product.slug}`} key={product.slug} className="solution-row"><span className="solution-number">0{index + 1}</span><span className="solution-icon"><Icon size={30}/></span><div><h2>{product.title}</h2><p>{product.description}</p></div><ArrowUpRight /></Link>; })}</section><section className="detail-body"><div><span className="eyebrow">Built for real operations</span><h2>Technology that connects the systems your business relies on.</h2></div><ul>{['Communication infrastructure', 'Payment and reconciliation tooling', 'AI-powered customer support', 'Custom software and integration'].map((point) => <li key={point}><span><Check size={17}/></span>{point}</li>)}</ul></section></>;
}
