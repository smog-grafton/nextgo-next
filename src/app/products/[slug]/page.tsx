import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import { products } from '@/data/site';
import { productRepository } from '@/lib/repositories';

export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }

export default async function ProductDetail({ params }: { params: { slug: string } }) {
  const product = await productRepository.getBySlug(params.slug);
  if (!product) notFound();
  const Icon = product.icon;
  return <><section className="solution-detail" style={{ '--solution-accent': product.accent } as React.CSSProperties}><Link className="back-link" href="/products"><ArrowLeft size={18}/> All products</Link><div className="solution-detail-copy"><span className="eyebrow">Core technology</span><h1>{product.title}</h1><p>{product.description}</p><Link className="button primary" href="/contact">Talk to us <ArrowUpRight size={20}/></Link></div><div className="solution-prototype"><Icon/><div className="proto-top"><i/><i/><i/></div><b>NG</b><div className="proto-bars"><span/><span/><span/><span/><span/></div><div className="proto-line"/></div></section><section className="detail-body"><div><span className="eyebrow">What it includes</span><h2>Infrastructure designed for the way your team operates.</h2></div><ul>{product.features.map((feature) => <li key={feature}><span><Check size={17}/></span>{feature}</li>)}</ul></section></>;
}
