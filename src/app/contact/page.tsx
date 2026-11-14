import { MessageSquareText, Network, WalletCards } from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';

export const metadata = { title: 'Contact' };

export default function ContactPage() {
  return <section className="contact-page"><div className="contact-heading"><span className="eyebrow">Get in touch</span><h1>Let’s discuss your project.</h1><p>Tell us about your communication, payments or software needs. Our team will review your enquiry and recommend a path forward.</p></div><div className="contact-layout"><div className="form-shell"><ContactForm /></div><aside className="contact-aside"><div className="location-card"><div className="map-art"><i/><i/><i/><span>NG</span></div><h2>Where we can help</h2><p><MessageSquareText size={18}/> Communication infrastructure</p><p><WalletCards size={18}/> Payments and mobile money</p><p><Network size={18}/> Custom software and integration</p></div><div className="contact-note"><span className="eyebrow">What happens next</span><p>We will review your requirements, clarify the opportunity and recommend the right next step for your team.</p></div></aside></div></section>;
}
