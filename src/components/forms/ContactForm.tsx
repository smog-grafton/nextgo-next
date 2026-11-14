'use client';

import { FormEvent, useState } from 'react';
import { Check, Send } from 'lucide-react';

const apiUrl = `${process.env.NEXT_PUBLIC_API_URL ?? 'http://127.0.0.1:8000/api/v1'}/leads`;
const initial = { name: '', email: '', phone: '', company: '', message: '', consent: false };

export function ContactForm() {
  const [form, setForm] = useState(initial);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);
  const set = (name: keyof typeof initial, value: string | boolean) => { setForm((current) => ({ ...current, [name]: value })); setError(''); };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (!form.name || !/^\S+@\S+\.\S+$/.test(form.email) || form.message.trim().split(/\s+/).length < 5 || !form.consent) { setError('Please complete the required fields, add a little project context, and confirm consent.'); return; }
    setSending(true);
    try {
      const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ full_name: form.name, email: form.email, phone: form.phone || undefined, company_name: form.company || undefined, project_description: form.message, intent: 'general_contact', source_page: '/contact', form_type: 'contact_page', website: '' }) });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) { setError(body.message ?? 'We could not send your message. Please try again shortly.'); return; }
      setSubmitted(true);
    } catch { setError('We could not reach the enquiry service. Please check your connection and try again.'); } finally { setSending(false); }
  };

  if (submitted) return <div className="form-success" role="status"><span><Check /></span><h3>Thank you — your message has been sent.</h3><p>Our team will review your enquiry and follow up using the details you provided.</p><button className="button outline" onClick={() => { setForm(initial); setSubmitted(false); }}>Send another message</button></div>;
  return <form className="contact-form" onSubmit={submit} noValidate>
    <div className="form-pair"><Field label="First name" required><input value={form.name} onChange={(e) => set('name', e.target.value)} placeholder="Amina" autoComplete="given-name" /></Field><Field label="Email" required><input value={form.email} onChange={(e) => set('email', e.target.value)} placeholder="amina@example.com" type="email" autoComplete="email" /></Field></div>
    <div className="form-pair"><Field label="Phone"><input value={form.phone} onChange={(e) => set('phone', e.target.value)} placeholder="Your phone number" type="tel" autoComplete="tel" /></Field><Field label="Company"><input value={form.company} onChange={(e) => set('company', e.target.value)} placeholder="Your organisation" autoComplete="organization" /></Field></div>
    <Field label="How can we help?" required><textarea value={form.message} onChange={(e) => set('message', e.target.value)} placeholder="Tell us a little about the project, team, or challenge..." rows={6} /><small>{form.message.trim() ? form.message.trim().split(/\s+/).length : 0} words — a sentence or two is perfect.</small></Field>
    <label className="consent"><input checked={form.consent} onChange={(e) => set('consent', e.target.checked)} type="checkbox" /><span>I agree to be contacted about this enquiry.</span></label>
    {error && <p className="form-error" role="alert">{error}</p>}<button className="button primary send-button" type="submit" disabled={sending}><Send size={20}/>{sending ? 'Sending…' : 'Send message'}</button>
  </form>;
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) { return <label className="field"><span>{label}{required && <em> *</em>}</span>{children}</label>; }
