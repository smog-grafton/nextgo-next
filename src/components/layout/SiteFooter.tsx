import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { company } from '@/data/site';
import { Mark } from './SiteHeader';

export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-grid">
    <div className="footer-about"><Mark full /><p>{company.description}</p></div>
    <div><h3>Explore</h3><Link href="/">Home</Link><Link href="/about">About us</Link><Link href="/services">Services</Link><Link href="/solutions">Solutions</Link><Link href="/products">Products</Link></div>
    <div><h3>Build with us</h3><p>Talk to our team about communication, payments, custom software or a long-term technology partnership.</p><Link href="/contact">Start a conversation <ArrowUpRight size={16}/></Link></div>
    <div><h3>Information</h3><Link href="/contact">Contact <ArrowUpRight size={16}/></Link><Link href="/careers">Careers <ArrowUpRight size={16}/></Link><Link href="/data-protection">Privacy <ArrowUpRight size={16}/></Link></div>
  </div><div className="footer-bottom"><span>© {new Date().getFullYear()} Next Go Tech Africa. All rights reserved.</span><Link href="/data-protection">Data protection & privacy</Link></div></footer>;
}
