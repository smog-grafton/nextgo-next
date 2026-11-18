import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Compass } from 'lucide-react';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return <section className="not-found-page"><div className="not-found-code">404</div><span className="eyebrow"><Compass size={20}/>Route unavailable</span><h1>We could not find that page.</h1><p>The address may have changed, the page may no longer be published, or the link may be incomplete. You can return to the main site or explore the technology we build.</p><div><Link href="/" className="button primary"><ArrowLeft size={19}/> Back home</Link><Link href="/products" className="button outline">Explore products <ArrowUpRight size={19}/></Link></div></section>;
}
