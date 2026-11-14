# Motion specification

| Motion | Behaviour | Timing |
| --- | --- | --- |
| Header compaction | `is-compact` when scroll exceeds 72px; nonessential links collapse in the nav pill | 420ms cubic-bezier transition |
| Mega menu | Small upward/fade/scale entrance; Escape closes it | 220ms ease |
| Hero | Copy rises very slightly; visual field scales in; decorations bob independently | 1–1.3s entrance, 5s float |
| Reveal | Major homepage sections use `IntersectionObserver` for single opacity/translate reveal | 750ms |
| Cards/buttons | Transform-only hover lift and border/accent response | 200–350ms |
| Mobile drawer | Short vertical opacity entry | 220ms |

All animation uses transform and opacity where practical. A `prefers-reduced-motion: reduce` override collapses durations and disables repeated movement.
