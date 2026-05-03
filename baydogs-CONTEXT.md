# CONTEXT.md — Bay Dogs Training Site
**Client: Lauren Dobelbower — Bay Dogs Dog Training**
**Developer: Adam Dobelbower**

---

## Project Overview

Redesign and rebuild of baydogstraining.com — a dog training business
website for Lauren Dobelbower based in Maryland. The goal is to replace
the outdated GoDaddy Website Builder site with a modern, warm, fast
Astro site with a CMS so Lauren can manage her own content.

---

## Client Info

- **Client:** Lauren Dobelbower
- **Business:** Bay Dogs Dog Training, LLC
- **Location:** Maryland
- **Current site:** baydogstraining.com (GoDaddy Website Builder)
- **Domain:** baydogstraining.com (keep — already established)
- **Facebook:** https://www.facebook.com/101004679563468
- **Technical level:** Non-technical — needs simple CMS, no code

---

## What Lauren Can Edit (via CMS)

- Testimonials — add new ones, update photos, edit text
- Services — update pricing and descriptions
- General settings — phone, email, tagline, Facebook URL

## What Stays Fixed in Code

- Layout, design, colors, fonts
- Navigation structure
- Hero section design
- Page structure

---

## Current Site Analysis

**Pages:**
- Home
- About
- Meet the Trainer
- Services
- Contact
- Testimonials

**What's good:**
- Strong tagline: "Relationship coaching for you and your dog"
- Lauren's bio is impressive — 15 years experience, IACP member,
  AKC CGC Evaluator, taught at Anne Arundel Community College,
  trained a Presa Canario therapy dog (extremely rare)
- Pricing is clearly listed
- Testimonials are detailed, emotional, and powerful
- Real photos exist (Lauren, dogs, client dogs)

**What needs fixing:**
- GoDaddy template — generic and dated
- Lauren's credentials are buried — need visual prominence
- Testimonials hidden on separate page — need to be on home page
- Stock photos dominate over real photos
- No visual hierarchy — everything feels equal weight
- "Powered by GoDaddy" looks unprofessional
- Copyright says 2022 — looks abandoned
- Contact form needs to actually work (use Netlify Forms)
- Mobile experience is poor

---

## Content Inventory

### Services (with pricing)

**Core Fundamentals Program** — from $799
- Basic concepts for transforming relationship with dog/puppy
- Leadership, boundaries, communication, motivation
- Perfect for puppies or dogs without major behavioral issues

**Core Fundamentals + Behavior Modification Program** — from $949
- Everything in Core Fundamentals
- Specialized techniques for fear, anxiety, reactive behavior
- Anti-social behavior towards dogs or people

**Single Lessons (previous clients only)** — $175/hour
- Fine-tune skills, brush up on training, teach something new
- Only available to clients who completed a program with Bay Dogs

### Lauren's Credentials
- 15+ years experience in dog training
- Trained thousands of dogs and owners
- Member — International Association of Canine Professionals (IACP)
- Approved Canine Good Citizen (CGC) Evaluator — American Kennel Club (AKC)
- Wrote lesson plans and taught courses at Anne Arundel Community College
  - Canine Body Language
  - Pet Therapy Training
- Trained her dog Vinny to become a pet therapy dog
  - One of only two Perro de Presa Canarios ever certified through Pet Partners
- Personal dog: Gizmo (mixed-breed rescue)
- Hobbies: wildlife photography, astrophotography, hiking

### Testimonials (real, with photos)
- Penny (German Shepherd puppy) — Felicity — detailed, emotional
- Koda (protective 3yr old) — detailed behavior transformation
- Memphis — puppy, positive reinforcement focused
- Chester — "becoming the angel I dreamt he'd be"
- Zera — "breath of fresh air"
- More on the testimonials page

---

## Site Structure (Redesign)

```
Home (single scrolling page)
  - Hero — Lauren photo, tagline, "Book Free Consultation" CTA
  - Trust bar — IACP, AKC CGC Evaluator, 15+ years, Maryland
  - About snippet — 2-3 sentences + "Meet Lauren" link
  - Services — 3 cards with pricing
  - Testimonials — 3 featured with photos + "See all" link
  - CTA section — "Ready to get started?" + contact button

About (/about)
  - Lauren's full bio
  - Credentials highlighted visually
  - Her philosophy / approach

Services (/services)
  - Full service descriptions with pricing
  - FAQ if available

Testimonials (/testimonials)
  - All testimonials with photos
  - CMS managed

Contact (/contact)
  - Netlify Form — sends email to Lauren
  - Phone number
  - Free consultation offer
```

---

## Design Direction

**Vibe:** Warm, trustworthy, professional, approachable
**NOT:** Dark, trendy, corporate, generic template

**Color palette:**
- Primary: warm cream/off-white background
- Accent: warm earthy green (nature, dogs, outdoors)
- Text: deep charcoal (not pure black)
- Secondary: warm brown or tan

**Typography:**
- Headlines: clean serif or humanist sans-serif
- Body: readable, warm, not clinical
- NOT monospace, NOT condensed heavy type

**Photography:**
- Real photos of Lauren with dogs lead everywhere
- Client dog photos in testimonials
- Warm, natural lighting feel
- NOT stock photos

**Overall feel:** Like hiring a trusted local expert who loves dogs,
not a corporate franchise. Personal, warm, results-focused.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Astro |
| Styling | Tailwind CSS |
| CMS | Decap CMS |
| Auth | Netlify Identity (invite only) |
| Forms | Netlify Forms (free — 100 submissions/month) |
| Hosting | Netlify (free tier) |
| Deployment | Auto-deploy on git push via GitHub |
| Domain | baydogstraining.com (Namecheap DNS → Netlify) |

---

## Folder Structure

```
baydogs/
│
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   ├── TestimonialCard.astro
│   │   └── ServiceCard.astro
│   │
│   ├── layouts/
│   │   └── Base.astro
│   │
│   ├── pages/
│   │   ├── index.astro          ← home
│   │   ├── about.astro
│   │   ├── services.astro
│   │   ├── testimonials.astro
│   │   └── contact.astro
│   │
│   └── content/                 ← CMS managed content
│       ├── testimonials/        ← .md files per testimonial
│       └── services/            ← .md files per service
│
├── public/
│   ├── images/
│   │   ├── lauren/              ← Lauren's photos
│   │   ├── dogs/                ← client dog photos
│   │   └── uploads/             ← CMS uploaded images
│   └── favicon.ico
│
├── admin/
│   ├── index.html               ← Decap CMS interface
│   └── config.yml               ← CMS field definitions
│
├── _data/
│   └── settings.json            ← phone, email, social links
│
├── CONTEXT.md                   ← this file
├── astro.config.mjs
├── tailwind.config.mjs
├── netlify.toml
└── package.json
```

---

## Decap CMS Collections

### Testimonials
```yaml
- name: "testimonials"
  label: "Testimonials"
  folder: "src/content/testimonials"
  create: true
  fields:
    - { label: "Client Name", name: "name", widget: "string" }
    - { label: "Dog Name", name: "dog", widget: "string" }
    - { label: "Testimonial", name: "body", widget: "text" }
    - { label: "Photo", name: "photo", widget: "image", required: false }
    - { label: "Featured", name: "featured", widget: "boolean", default: false }
```

### Services
```yaml
- name: "services"
  label: "Services"
  folder: "src/content/services"
  create: false
  fields:
    - { label: "Service Name", name: "title", widget: "string" }
    - { label: "Description", name: "description", widget: "text" }
    - { label: "Starting Price", name: "price", widget: "string" }
    - { label: "Note", name: "note", widget: "string", required: false }
    - { label: "Order", name: "order", widget: "number" }
```

### Site Settings
```yaml
- name: "settings"
  label: "Site Settings"
  files:
    - name: "general"
      label: "General"
      file: "_data/settings.json"
      fields:
        - { label: "Phone", name: "phone", widget: "string" }
        - { label: "Email", name: "email", widget: "string" }
        - { label: "Tagline", name: "tagline", widget: "string" }
        - { label: "Facebook URL", name: "facebook", widget: "string" }
```

---

## Netlify Forms Setup

Contact form in `contact.astro`:

```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <input type="text" name="name" placeholder="Your name" required />
  <input type="email" name="email" placeholder="Your email" required />
  <input type="text" name="dog" placeholder="Your dog's name" />
  <textarea name="message" placeholder="Tell me about your dog..."></textarea>
  <button type="submit">Send Message</button>
</form>
```

Netlify detects the `data-netlify="true"` attribute automatically.
Form submissions go to Lauren's email via Netlify notifications.
Free up to 100 submissions/month — more than enough.

---

## Lauren's CMS Workflow

```
Lauren visits baydogstraining.com/admin
        │
        ▼
Logs in (email + password via Netlify Identity)
        │
        ▼
Simple dashboard:
  Testimonials | Services | Settings
        │
        ▼
Example: Add new testimonial
  - Client name, dog name, testimonial text, upload photo
  - Hit Publish
        │
        ▼
Decap CMS commits .md file to GitHub
        │
        ▼
Netlify detects commit → runs Astro build (~30 seconds)
        │
        ▼
New testimonial live on baydogstraining.com
```

Lauren never sees code. Never touches GitHub.

---

## DNS Migration Plan

Current: baydogstraining.com → GoDaddy hosting
Target: baydogstraining.com → Netlify

**Steps:**
1. Build and test site fully on a Netlify preview URL first
2. Get Lauren's approval on the design
3. In Namecheap (or wherever domain is registered) update DNS:
   - A record: @ → 75.2.60.5
   - CNAME: www → apex-loadbalancer.netlify.com
4. Add custom domain in Netlify
5. SSL auto-provisions
6. Cancel GoDaddy hosting (saves Lauren monthly fee)

**Important:** Do not touch DNS until the new site is 100% ready
and Lauren has approved it. Keep old site live until switchover.

---

## Contact Form Email Setup

In Netlify → Site configuration → Forms → Form notifications:
- Add Lauren's email address
- Every contact form submission sends her an email immediately
- Free, no third party needed

---

## Build Order

1. **Astro scaffold** — `npm create astro@latest`
2. **Install Tailwind** — `npx astro add tailwind`
3. **Base layout** — Nav, Footer, Base.astro
4. **Home page** — all sections with real content
5. **About page**
6. **Services page**
7. **Testimonials page**
8. **Contact page** with Netlify Form
9. **Add Decap CMS** — admin/index.html + admin/config.yml
10. **Enable Netlify Identity** in dashboard
11. **Test CMS locally** — `npx decap-server` for local testing
12. **Deploy to Netlify** preview URL
13. **Get Lauren's approval**
14. **Switch DNS** from GoDaddy to Netlify
15. **Invite Lauren** to CMS via Netlify Identity
16. **Walk Lauren through** adding a testimonial herself

---

## Success Criteria

- [ ] Site looks modern, warm, professional — not template-y
- [ ] Real photos of Lauren and dogs are used throughout
- [ ] Lauren's credentials are visually prominent
- [ ] Testimonials appear on home page AND testimonials page
- [ ] Contact form works and sends email to Lauren
- [ ] Lauren can log into /admin and add a testimonial herself
- [ ] Lauren can update service pricing herself
- [ ] Site loads fast on mobile
- [ ] SSL certificate active
- [ ] "Powered by GoDaddy" is gone forever 😄
- [ ] Copyright year is correct
- [ ] GoDaddy hosting cancelled after launch

---

## Notes for AI Assistants

- This is a CLIENT site — not Adam's personal site
- Lauren is non-technical — CMS must be simple and foolproof
- Design must be warm and approachable — NOT dark or developer-aesthetic
- All content (bio, services, testimonials) exists on the current site
- Real photos exist and should replace all stock imagery
- Netlify Forms handles contact — no backend needed
- Astro content collections handle CMS data at build time
- Keep the single Base.astro layout consistent across all pages
- Mobile first — Lauren's clients are likely on their phones

---

*This file is the source of truth for the Bay Dogs redesign.
Update as decisions are made during development.*
