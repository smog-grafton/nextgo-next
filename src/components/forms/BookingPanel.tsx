import Link from 'next/link';
import { ArrowUpRight, MessageSquareText } from 'lucide-react';

export function BookingPanel() {
  return <div className="booking-panel"><div className="booking-intro"><span className="mini-logo">NG</span><h2>Start the conversation</h2><p>Tell us what you are building, integrating or improving. We will review the context and follow up with the appropriate next step.</p><ul><li><MessageSquareText size={17}/> Communication, payments and software</li></ul></div><div className="slot-area"><span className="eyebrow">Project enquiry</span><h3>Talk to Next Go Tech Africa</h3><p className="booking-date">Share a few details and our team will be in touch.</p><Link href="/contact" className="button primary">Send an enquiry <ArrowUpRight size={20}/></Link></div></div>;
}
