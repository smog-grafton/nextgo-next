import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import { serviceRepository } from '@/lib/repositories';
import { services } from '@/data/site';

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }
export default async function ServiceDetail({ params }: { params: { slug: string } }) { const service = await serviceRepository.getBySlug(params.slug); if (!service) notFound(); const Icon = service.icon; return <><section className="detail-hero"><Link className="back-link" href="/services"><ArrowLeft size={18}/> All services</Link><div><span className="eyebrow">{service.kicker}</span><h1>{service.title}</h1><p>{service.longDescription}</p><Link href="/contact" className="button primary">Talk about this <ArrowUpRight size={20}/></Link></div><div className="detail-icon"><Icon size={90}/><i/></div></section><section className="detail-body"><div><span className="eyebrow">Designed for your operation</span><h2>Technology shaped around the work your business needs to do.</h2></div><ul>{service.highlights.map((highlight) => <li key={highlight}><span><Check size={17}/></span>{highlight}</li>)}</ul></section><section className="detail-cta"><p>Need help choosing the right path?</p><Link href="/contact" className="text-link">Talk to us <ArrowUpRight size={20}/></Link></section></>; }
