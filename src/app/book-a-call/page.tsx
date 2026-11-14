import { BookingPanel } from '@/components/forms/BookingPanel';

export const metadata = { title: 'Talk to us' };

export default function BookCallPage() { return <section className="booking-page"><div className="contact-heading"><span className="eyebrow">Let’s talk</span><h1>Start a project conversation.</h1><p>Whether you need communication infrastructure, payment integration or custom software, tell us what you are looking to build.</p></div><BookingPanel /></section>; }
