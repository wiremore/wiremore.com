# Wiremore Website v2 — Design

Date: 2026-08-05
Branch: `website-v2`
Status: approved

## Why

The current wiremore.com is a vCard: one paragraph, a logo wall, a legal page. It exists
mainly so the GmbH has a public presence. It does nothing for the business.

Wiremore is the operating company of an independent consulting practice. People land on
it because they see a `@wiremore.com` address, and what they find undersells the work.
The new site has three jobs, and they reinforce rather than compete with each other:

1. **Justify consultancy rates.** Sell product judgment and outcomes, not implementation
   capacity. A studio that thinks about products charges differently than a dev shop that
   takes tickets.
2. **Read unmistakably as a company** with its own practice, methods, clients and IP.
3. **Stay vague about size** without ever stating something untrue.

## Positioning

**Wiremore is a product engineering studio in Berlin.** Deliberately small, operating for
over a decade, backed by a network of senior professionals.

Governing rule for all copy: **specific about work, silent about headcount.** No "our team
of N", no invented employees, no stock photography of people who do not exist. The site
speaks as "we". The only named human is Manuel Bieh, as principal.

The network answers "how do you scale?" without claiming headcount, and it is true: *when
a project needs more hands or another discipline, we bring in people from our network —
professionals we have worked with and would work with again.*

Company age is expressed as "for over a decade", never as a year. (Founded 2012;
incorporated later. The exact year appears nowhere on the site, only in the Impressum
where it is legally required to be accurate.)

Manuel's personal experience (25 years, the React book, the client history) belongs to
Manuel and is presented on the Studio page. It is never attributed to the company.

### Service spine

Three offerings, in this order:

- **Build** — new products and platforms, from first commit to production.
- **Rescue** — codebases that became slow, fragile or unownable. Audits, modernization,
  performance work. Deliberately in the middle: highest urgency, highest rate, the reason
  people call a studio rather than post a job ad.
- **Lead** — interim technical leadership, architecture, hiring and mentoring, so the team
  can carry on without us.

### Voice

Understated and precise. Short declaratives. Specifics instead of adjectives. No
superlatives. Confidence through restraint — it reads senior, ages well, and survives
translation into German, which punishes hype far harder than English does.

## Sitemap

English is the default locale; German is full parity, not a reduced version.

| Route | Purpose |
|---|---|
| `/` | Hero, three offerings, client wall excerpt, method teaser, contact CTA |
| `/what-we-do` | Build / Rescue / Lead in depth |
| `/how-we-work` | Principles, quality process, agent-assisted development |
| `/work` | Client logo wall, ~25 names, discreet framing |
| `/studio` | The company, Manuel as principal, the network, our own products |
| `/contact` | Email CTA with a prompt for what to send |
| `/legal` | Impressum (German only) |
| `/privacy` | Datenschutzerklärung (German only) |
| `404`, `500` | Error pages; the 404 carries the full CRT treatment |

No case studies (explicit decision). Client proof is the named logo wall plus framing.
Own products (Unbogify, Barhopper's Guide) appear as a short section on `/studio` — they
are the cleanest available evidence of an independent business with its own IP.

## Visual identity

Serious structure, nostalgic detail. Manuel grew up with CRTs, Commodore and late-80s
television, and the existing flickering signature logo already nods at it. The nostalgia
stays out of the layout entirely and lives in small moments — that is what keeps it
tasteful rather than themed.

Wiremore must not look like manuelbieh.de wearing a different logo, so it gets its own
identity and does not depend on `@manuel-bieh/design-system`.

### Tokens

| Token | Value | Use |
|---|---|---|
| Paper | `#FAFAF8` | Page background, warm rather than clinical |
| Ink | `#0B0B0C` | Body text, headlines |
| Muted | `#6B6B70` | Secondary text, captions |
| Phosphor | `#D1FF00` | Accent — from the existing palette; a monitor green-yellow |
| Dark | `#111214` | Footer and one hero band |

Phosphor appears roughly four times per page: one word, one underline, one hover state,
one cursor. The restraint is the point.

### Type

**Archivo** and **IBM Plex Mono**, self-hosted through `next/font/google`.

Geist was the original choice and was dropped: it is the Vercel default and every second
site now wears it, which is the opposite of a studio with a point of view. Archivo carries
a width axis, so the hero can go poster-wide without a second display face, and Plex Mono
has a quieter period resonance than any deliberately retro font would.

Monospace carries section labels (`01 / WHAT WE DO`), navigation, the language switch and
captions — it reads simultaneously as terminal and as engineering precision.

A bitmap face (Departure Mono) was considered for section labels and rejected: bitmap
type degrades badly if it ever migrates into body copy, and the mono labels already
deliver the reference.

### Layout

Editorial whitespace, wide measure, large quiet headlines. Scanline texture at ~3%
opacity on dark bands only, and static — animated scanlines look cheap.

## Motion

Rules, because they are what keep this on the right side of the line:

- Nothing loops ambiently, except the text cursor.
- Everything else is one-shot or interaction-triggered.
- Every effect is behind `prefers-reduced-motion: reduce`, and the site is complete and
  correct without any of it.
- No animation library. Hooks and CSS only.

| # | Effect | Trigger | Notes |
|---|---|---|---|
| 1 | Logo power-on | Page load, once | Existing flicker keyframes, then settled. A CRT warming up, not a broken sign. |
| 2 | Hero decode | Page load, once | Headline resolves from scrambled glyphs, ~450ms |
| 3 | Cursor block | Ambient | Blinking `▊` after hero subline and contact address; the one intentional loop |
| 4 | Channel split | Link hover | 1px red/cyan text-shadow offset, 120ms. Chromatic aberration |
| 5 | Logo wall | Logo hover | Grayscale 40% → full, *stepped* easing. The stepped timing is the period tell |
| 6 | Section reveal | Scroll into view | 8px rise, 40ms stagger, IntersectionObserver |
| 7 | Language toggle | Switch | One-frame flicker |
| 8 | 404 | Page load | Full signal-lost treatment — let it go in exactly one place |

## Technical

Branch `website-v2` off `develop` in the existing repository, preserving history.

Stack matches what manuelbieh.de runs, so it stays familiar:

- Next.js 15, pages router
- React 19, TypeScript
- next-i18next
- CSS Modules with PostCSS (`postcss-nested`, `postcss-custom-media`, `postcss-preset-env`)
- yarn

Dependencies on `@manuel-bieh/design-system` and `@manuel-bieh/cv` are removed. Wiremore
gets its own components. The ~25 client logo SVGs are copied in as plain assets, so there
is no cross-repo coupling and no shared release cycle.

### Language handling

The brief asked for "a browser language switch", which can mean two things. Both are
implemented:

- Middleware reads `Accept-Language` on a first visit to `/`, redirects to `/en` or `/de`,
  and records the result in a `NEXT_LOCALE` cookie.
- A visible `EN | DE` toggle overrides the cookie at any time. Visiting any locale-prefixed
  URL refreshes the cookie, so a choice made from the toggle or a shared link sticks.

Two traps, both hit during implementation and both silent:

- With a `src/` directory, middleware must live at `src/middleware.ts`. At the repository
  root it is simply never invoked, and nothing warns about it.
- The usual `'/((?!_next|api|.*\\..*).*)'` matcher does not match the bare root, so `/` —
  the one route that actually needs language detection — was skipped. The matcher lists
  `'/'` explicitly.

English is the default and the fallback for any missing key. The cookie is strictly
functional, which is why the site needs no consent banner.

### Content

All copy lives in `public/locales/{en,de}/common.json`. Text changes never require
touching a component. A test asserts that the English and German key sets are identical —
divergence is the failure mode that actually bites bilingual sites.

### Legal pages

The Impressum data is real and carried over unchanged:

    wiremore GmbH, Zelterstr. 10, 10439 Berlin
    Handelsregister Amtsgericht Dortmund HRB 25711
    USt-IdNr. DE289451798
    Geschäftsführer: Manuel Bieh

The existing privacy text is replaced. It predates the GDPR (it cites BDSG and TMG),
describes Google Analytics and blog comments that do not exist on the site, and contains
`BGridser` typos from a broken find-and-replace. The new Datenschutzerklärung describes
what the site actually does: server logs, a functional locale cookie, email contact, no
analytics, no third-party embeds. **It needs review by Manuel's lawyer before going
live** — it is written to be accurate, not to be legal advice.

## Verification

- `yarn type-check`, `yarn lint`, `yarn build` all pass
- Locale key-parity test passes
- Every page rendered and screenshotted in both languages for review
- Reduced-motion audit: the site is checked with `prefers-reduced-motion: reduce` and must
  be fully usable and visually complete

## Out of scope

Case studies, a blog or notes section, a contact form, analytics, a CMS, and any claim
about team size.
