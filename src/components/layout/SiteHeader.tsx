'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Globe2, Menu, X } from 'lucide-react';
import { products, services, solutions } from '@/data/site';

type MenuName = 'services' | 'solutions' | 'products' | null;

const menuLinks = [
  { label: 'What we do', value: 'services' as const },
  { label: 'Solutions', value: 'solutions' as const },
  { label: 'Products', value: 'products' as const },
];

export function Mark({ full = false }: { full?: boolean }) {
  return (
    <Link href="/" className="brand" aria-label="Next Go Tech Africa home">
      <span className={`brand-logo ${full ? 'brand-logo-footer' : ''}`}>
        <Image src="/images/logos/logo.png" alt="Next Go Tech" fill sizes={full ? '210px' : '58px'} priority={!full} />
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<MenuName>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && (setActive(null), setMobileOpen(false));
    window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey);
  }, []);

  const close = () => { setActive(null); setMobileOpen(false); };

  return (
    <header ref={headerRef} className={`site-header ${scrolled ? 'is-compact' : ''} ${active ? 'has-menu' : ''}`}>
      <div className="header-row">
        <Mark />
        <nav className="desktop-nav" aria-label="Primary navigation">
          <div className="nav-pill">
            {menuLinks.map((item) => (
              <button key={item.value} className={active === item.value ? 'active' : ''} onClick={() => setActive(active === item.value ? null : item.value)} aria-expanded={active === item.value}>
                {item.label}<ChevronDown size={17} aria-hidden="true" />
              </button>
            ))}
            <Link className="extra-link" href="/about">About us</Link>
          </div>
        </nav>
        <div className="header-actions">
          <span className="language" aria-label="English"><Globe2 size={22} /><span>English</span></span>
          <Link className="button outline book" href="/contact">Talk to us</Link>
          <button className="mobile-menu-toggle" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</button>
        </div>
      </div>
      {active && <MegaMenu active={active} close={close} />}
      {mobileOpen && <MobileMenu close={close} />}
    </header>
  );
}

function MegaMenu({ active, close }: { active: Exclude<MenuName, null>; close: () => void }) {
  if (active === 'services') return (
    <div className="mega-menu services-menu" role="region" aria-label="What we do">
      <div className="mega-intro"><span className="eyebrow">What we do</span><h3>Technology built around the way your business operates.</h3><Link href="/services" onClick={close}>Explore all services <b>↗</b></Link></div>
      <div className="mega-grid">{services.map((item) => { const Icon = item.icon; return <Link onClick={close} href={`/services/${item.slug}`} key={item.slug} className="mega-link"><span><Icon size={22} /></span><div><strong>{item.title}</strong><small>{item.blurb}</small></div></Link>; })}</div>
    </div>
  );
  if (active === 'solutions') return (
    <div className="mega-menu solution-menu" role="region" aria-label="Solutions">
      <div className="mega-grid">{solutions.map((item) => { const Icon = item.icon; return <Link onClick={close} href={`/solutions/${item.slug}`} key={item.slug} className="mega-link"><span><Icon size={22} /></span><div><strong>{item.title}</strong><small>{item.description}</small></div></Link>; })}</div>
    </div>
  );
  return (
    <div className="mega-menu case-menu" role="region" aria-label="Products">
      <div><span className="eyebrow">Core technology</span><h3>Infrastructure for communication, payments and business operations.</h3></div>
      <div className="case-menu-links">{products.map((product) => <Link href={`/products/${product.slug}`} onClick={close} key={product.slug}>{product.title} <b>↗</b></Link>)}</div>
    </div>
  );
}

function MobileMenu({ close }: { close: () => void }) {
  return <div className="mobile-menu"><Link href="/services" onClick={close}>What we do</Link><Link href="/solutions" onClick={close}>Solutions</Link><Link href="/products" onClick={close}>Products</Link><Link href="/about" onClick={close}>About us</Link><Link href="/careers" onClick={close}>Careers</Link><Link href="/contact" onClick={close}>Contact</Link><Link href="/contact" onClick={close} className="button primary">Talk to us</Link><p>English</p></div>;
}
