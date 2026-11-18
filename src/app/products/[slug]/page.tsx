import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import { products } from '@/data/site';
import { productRepository } from '@/lib/repositories';

type ProductDetailProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: ProductDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await productRepository.getBySlug(slug);
  return product ? { title: product.title, description: product.description } : { title: 'Product not found' };
}

export default async function ProductDetail({ params }: ProductDetailProps) {
  const { slug } = await params;
  const product = await productRepository.getBySlug(slug);
  if (!product) notFound();
  const Icon = product.icon;

  return <>
    <section className="solution-detail" style={{ '--solution-accent': product.accent } as React.CSSProperties}>
      <Link className="back-link" href="/products"><ArrowLeft size={18}/> All products</Link>
      <div className="solution-detail-copy"><span className="eyebrow">Product</span><h1>{product.title}</h1><p>{product.description}</p><Link className="button primary" href="/contact">Discuss {product.title} <ArrowUpRight size={20}/></Link></div>
      <div className="solution-prototype"><Icon/><div className="proto-top"><i/><i/><i/></div><b>NG</b><div className="proto-bars"><span/><span/><span/><span/><span/></div><div className="proto-line"/></div>
    </section>
    <section className="detail-body"><div><span className="eyebrow">Built for</span><h2>{product.audience}</h2></div><ul>{product.features.map((feature) => <li key={feature}><span><Check size={17}/></span>{feature}</li>)}</ul></section>
    <section className="product-story"><div><span className="eyebrow">How it works</span><h2>Designed around the work behind the customer experience.</h2></div><p>{product.operatingModel}</p></section>
    <section className="detail-body"><div><span className="eyebrow">Operational outcomes</span><h2>What your team can make clearer, faster and more dependable.</h2></div><ul>{product.outcomes.map((outcome) => <li key={outcome}><span><Check size={17}/></span>{outcome}</li>)}</ul></section>
    <section className="detail-cta"><p>Want to see how {product.title} could fit your organisation?</p><Link href="/contact" className="text-link">Talk to Next Go Tech Africa <ArrowUpRight size={20}/></Link></section>
  </>;
}
