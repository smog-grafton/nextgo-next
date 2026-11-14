import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { CookieBanner } from '@/components/ui/CookieBanner';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export const metadata: Metadata = { title: { default: 'Next Go Tech Africa — Technology infrastructure', template: '%s | Next Go Tech Africa' }, description: 'Communication, payment and software infrastructure for African businesses.' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={inter.variable}><body><SiteHeader /><main>{children}</main><SiteFooter /><CookieBanner /></body></html>; }
