'use client';

import { useEffect, useState } from 'react';

export function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [needsChoice, setNeedsChoice] = useState(false);
  useEffect(() => setNeedsChoice(localStorage.getItem('nextgo-cookie-choice') === null), []);
  const choose = (value: string) => { localStorage.setItem('nextgo-cookie-choice', value); setOpen(false); setNeedsChoice(false); };
  if (!needsChoice) return null;
  if (!open) return <button className="privacy-launcher" onClick={() => setOpen(true)} aria-label="Open privacy choices">Privacy choices</button>;
  return <aside className="cookie-banner" aria-label="Cookie preferences"><strong>Privacy preference</strong><p>We store this preference in your browser. No analytics or advertising trackers are enabled in this frontend.</p><div><button className="button small outline" onClick={() => choose('essential')}>Essential only</button><button className="button small primary" onClick={() => choose('all')}>Accept preferences</button></div></aside>;
}
