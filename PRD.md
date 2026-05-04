# Product Requirements Document (PRD)
## JM Sport Massage Therapy - Landing Page

**Project Name:** JM Sport Massage Therapy Landing Page  
**Domain:** jmsportmassage.com  
**Document Version:** 1.0  
**Last Updated:** May 4, 2026  

---

## 1. Executive Summary

This document outlines the requirements for a high-converting, SEO-optimized single-page landing website for JM Sport Massage Therapy, a professional massage therapy clinic located in Gresik, East Java, Indonesia. The landing page targets both general individuals seeking massage services and athletes requiring injury recovery and performance optimization. The design follows the DICE design system with a high-contrast monochrome aesthetic, bold typography, and clean layout principles.

---

## 2. Business Objectives

| Objective | Target | Success Metric |
|-----------|--------|-----------------|
| **Drive WhatsApp Bookings** | Increase inquiry volume | 50+ WhatsApp inquiries/month |
| **Improve Local SEO** | Rank for local keywords | Top 3 for "pijat cedera olahraga gresik" |
| **Build Credibility** | Establish professional presence | 4.5+ star rating, 100+ reviews |
| **Increase Brand Awareness** | Reach target audience | 1000+ monthly visitors |
| **Optimize Conversion Rate** | Maximize booking rate | 5-10% CTR on WhatsApp CTA |

---

## 3. Target Audience

### Primary Personas

**Persona 1: Active Professional (25-45 years)**
- Sedentary office workers with muscle tension and fatigue
- Seeking quick relief and relaxation
- Values convenience, cleanliness, and professional service
- Budget: Mid-range, willing to pay for quality

**Persona 2: Athlete/Sports Enthusiast (18-40 years)**
- Engaged in regular sports or fitness activities
- Needs injury recovery and performance optimization
- Values expertise and specialized treatment
- Budget: Flexible, prioritizes results

**Persona 3: Injury Recovery Patient (30-60 years)**
- Recovering from sports injury or chronic pain
- Seeking professional therapeutic intervention
- Values medical credibility and experience
- Budget: Willing to invest in recovery

---

## 4. Key Features & Sections

### 4.1 Navigation (Sticky Header)

**Requirements:**
- Fixed position at top of page (z-index: 50)
- Logo/brand name on left
- Navigation links: Layanan, Manfaat, Testimoni, Lokasi
- Primary CTA button: WhatsApp (Pitch Black background, Arctic White text, 40px border-radius)
- Mobile responsive: Hamburger menu for screens < 768px
- Smooth scroll navigation to sections

**Desktop Layout:**
- Logo (left) | Nav Links (center) | WhatsApp Button (right)
- Horizontal spacing: 24px between elements
- Height: 60-70px with vertical centering

**Mobile Layout:**
- Logo (left) | Hamburger Menu (right)
- Expanded menu: Full-width dropdown with all links and CTA
- Height: 56px (standard mobile)

---

### 4.2 Hero Section (Full-Bleed)

**Requirements:**
- Full viewport height (100vh) or minimum 500px
- Background: Pitch Black (#000000)
- Text color: Arctic White (#ffffff)
- Layout: Split design (2 columns on desktop, stacked on mobile)

**Left Column (Content):**
- Headline: "PULIHKAN TUBUH, TINGKATKAN PERFORMA"
  - Font: Foggy, 106px, weight 400, line-height 0.83
  - Color: Arctic White
  - Margin-bottom: 24px
- Subheading: "Terapi pijat profesional untuk cedera olahraga dan relaksasi harian. Ditangani langsung oleh ahli berpengalaman di Gresik."
  - Font: Favorit, 18px, weight 400, line-height 1.25
  - Color: Light gray (#d0d0d0)
  - Margin-bottom: 32px
- CTA Button: "Booking via WhatsApp"
  - Background: Arctic White (#ffffff)
  - Text color: Pitch Black (#000000)
  - Padding: 14px 32px
  - Border-radius: 40px
  - Font: Favorit, 16px, weight 400
  - Hover: Slight scale increase (1.05), shadow effect

**Right Column (Visual):**
- Placeholder: 400x400px area (light gray background #333333)
- Content: Icon/illustration representing massage therapy
- On mobile: Hide or show below headline

**Spacing:**
- Padding: 60px horizontal, 80px vertical
- Gap between columns: 48px
- Max-width: 1280px, centered

---

### 4.3 Services Section

**Requirements:**
- Background: Arctic White (#ffffff)
- Section padding: 80px vertical, 40px horizontal
- Title: "Layanan Kami"
  - Font: Favorit, 28px, weight 700
  - Color: Pitch Black (#000000)
  - Text-align: center
  - Margin-bottom: 48px

**Service Cards (Grid Layout):**
- Grid: 4 columns on desktop, 2 on tablet, 1 on mobile
- Gap between cards: 24px
- Card styling:
  - Background: Arctic White (#ffffff)
  - Border: 1px solid Ash Gray (#d9d9d9)
  - Border-radius: 4px
  - Padding: 24px
  - Hover effect: Border color change to Pitch Black, slight translateY(-4px)
  - Transition: 0.3s ease

**Card Content (Each Service):**
1. **Terapi Cedera Olahraga**
   - Icon: 🏥 (or custom SVG)
   - Title: "Terapi Cedera Olahraga"
     - Font: Favorit, 24px, weight 700
   - Description: "Penanganan khusus untuk sprain, strain, dan nyeri otot akibat aktivitas fisik."
     - Font: Favorit, 16px, weight 400
     - Color: Medium Gray (#808080)

2. **Sport Massage & Recovery**
   - Icon: 💪
   - Title: "Sport Massage & Recovery"
   - Description: "Mempercepat pemulihan otot setelah aktivitas berat dan meningkatkan performa."

3. **Pijat Relaksasi & Capek**
   - Icon: 🧘
   - Title: "Pijat Relaksasi & Capek"
   - Description: "Menghilangkan ketegangan otot dari rutinitas harian dan meningkatkan relaksasi."

4. **Terapi Tulang & Sendi**
   - Icon: 🦴
   - Title: "Terapi Tulang & Sendi"
   - Description: "Optimasi fungsi gerak tubuh dan penanganan keluhan sendi yang terjadi."

---

### 4.4 Benefits Section (Why Choose Us)

**Requirements:**
- Background: Cloud White (#eeeeee)
- Section padding: 80px vertical, 40px horizontal
- Title: "Mengapa Pilih JM Sport Massage?"
  - Font: Favorit, 28px, weight 700
  - Color: Pitch Black (#000000)
  - Text-align: center
  - Margin-bottom: 48px

**Benefits Layout:**
- Grid: 2 columns on desktop, 1 on mobile
- Gap: 48px vertical, 24px horizontal

**Benefit Item Structure (Each):**
- Flex layout: Icon (left) + Content (right)
- Icon: 12x12px circle with checkmark (Pitch Black background, Arctic White checkmark)
- Icon size: 48px diameter
- Content area:
  - Title: Favorit, 24px, weight 700, Pitch Black
  - Description: Favorit, 16px, weight 400, Medium Gray (#808080)
  - Margin-bottom: 24px between items

**Benefit Items:**
1. **Ahli Berpengalaman**
   - Description: "Tim terapis profesional dengan pengalaman bertahun-tahun dalam penanganan cedera dan terapi."

2. **Lokasi Strategis**
   - Description: "Terletak di pusat Driyorejo, Gresik dengan parkir luas dan akses mudah dari berbagai area."

3. **Harga Terjangkau**
   - Description: "Layanan berkualitas premium dengan harga yang kompetitif dan terjangkau untuk semua kalangan."

4. **Penanganan Personal**
   - Description: "Setiap klien mendapat perhatian khusus dengan program terapi yang disesuaikan dengan kebutuhan."

---

### 4.5 Testimonials Section

**Requirements:**
- Background: Arctic White (#ffffff)
- Section padding: 80px vertical, 40px horizontal
- Title: "Testimoni Klien"
  - Font: Favorit, 28px, weight 700
  - Color: Pitch Black (#000000)
  - Text-align: center
  - Margin-bottom: 16px

**Rating Display:**
- 5 stars (filled, Pitch Black color)
- Rating text: "4.5/5"
  - Font: Favorit, 18px, weight 700
- Subtext: "Dari 75+ ulasan klien yang puas"
  - Font: Favorit, 16px, weight 400
  - Color: Medium Gray (#808080)
- Margin-bottom: 48px

**Testimonial Cards (Grid):**
- Grid: 3 columns on desktop, 1 on mobile
- Gap: 24px
- Card styling:
  - Background: Arctic White (#ffffff)
  - Border: 1px solid Ash Gray (#d9d9d9)
  - Border-radius: 4px
  - Padding: 24px
  - Hover effect: Border to Pitch Black, translateY(-4px)

**Card Content (Each):**
- Stars: 5 filled stars (16px), Pitch Black
- Quote: Favorit, 16px, weight 400, italic, Pitch Black
  - Margin-bottom: 16px
- Author name: Favorit, 14px, weight 700, Pitch Black
- Author title: Favorit, 14px, weight 400, Medium Gray

**Sample Testimonials:**
1. Quote: "The best massage therapy I've experienced. Highly recommended!"
   - Author: ilham Dwi Rachmansyah Putra
   - Title: Local Guide

2. Quote: "Easy access, easy parking, reasonable price. Sangat memuaskan!"
   - Author: Dhika Hai
   - Title: Local Guide

3. Quote: "Sport injury dan sport massage, plus layanan baru untuk baby dan mom massage."
   - Author: sukamto sukamto
   - Title: Local Guide

---

### 4.6 Location & Contact Section

**Requirements:**
- Background: Pitch Black (#000000)
- Text color: Arctic White (#ffffff)
- Section padding: 80px vertical, 40px horizontal
- Title: "Kunjungi Kami"
  - Font: Favorit, 28px, weight 700
  - Color: Arctic White
  - Text-align: center
  - Margin-bottom: 48px

**Layout:**
- Grid: 2 columns on desktop, 1 on mobile
- Gap: 48px

**Left Column (Contact Information):**
- 4 contact items with icon + content layout
- Icon size: 32px
- Icon color: Electric Blue (#0000FE)
- Spacing between items: 32px

**Contact Items:**

1. **Address**
   - Icon: 📍 (MapPin)
   - Title: "Alamat"
     - Font: Favorit, 24px, weight 700
     - Color: Arctic White
   - Content: "Jl. Raya Aquamarin No.H22-23, Paras, Mulung, Kec. Driyorejo, Kabupaten Gresik, Jawa Timur 61177, Indonesia"
     - Font: Favorit, 16px, weight 400
     - Color: Light gray (#d0d0d0)

2. **Phone**
   - Icon: 📞 (Phone)
   - Title: "Hubungi Kami"
     - Font: Favorit, 24px, weight 700
   - Link: +62 857-8258-5590 (clickable tel: link)
     - Font: Favorit, 16px, weight 400
     - Color: Light gray
     - Hover: Electric Blue
   - Subtext: "Hubungi via WhatsApp untuk booking cepat"
     - Font: Favorit, 14px, weight 400
     - Color: Medium gray (#808080)
     - Margin-top: 8px

3. **Hours**
   - Icon: 🕐 (Clock)
   - Title: "Jam Operasional"
     - Font: Favorit, 24px, weight 700
   - Content: "Selasa - Minggu: 15:00 - 21:00"
     - Font: Favorit, 16px, weight 400
     - Color: Light gray
   - Content: "Senin: Tutup"
     - Font: Favorit, 16px, weight 400
     - Color: Light gray

4. **CTA Button**
   - Text: "Hubungi Kami Sekarang"
   - Background: Arctic White (#ffffff)
   - Text color: Pitch Black (#000000)
   - Padding: 14px 32px
   - Border-radius: 40px
   - Font: Favorit, 16px, weight 700
   - Hover: Scale 1.05, slight shadow
   - Link: WhatsApp direct message link

**Right Column (Map Placeholder):**
- Background: Dark gray (#333333)
- Height: 400px
- Border-radius: 8px
- Content: Icon + text + "Buka di Google Maps" link
- Icon: 📍 (48px, Electric Blue color)
- Text: "Jl. Raya Aquamarin, Driyorejo, Gresik"
  - Font: Favorit, 16px, weight 400
  - Color: Light gray
- Link: "Buka di Google Maps →"
  - Font: Favorit, 16px, weight 400
  - Color: Electric Blue
  - Hover: White

---

### 4.7 Footer

**Requirements:**
- Background: Pitch Black (#000000)
- Border-top: 1px solid Dark Gray (#595959)
- Padding: 32px vertical, 40px horizontal
- Text color: Light gray (#d0d0d0)

**Layout:**
- Flex: Space-between on desktop, stacked on mobile
- Max-width: 1280px, centered

**Left Section:**
- Copyright text: "© 2026 JM Sport Massage Therapy. All rights reserved."
  - Font: Favorit, 16px, weight 400
  - Color: Medium gray (#808080)

**Right Section (Links):**
- Flex layout, gap 24px
- Links: "Privacy Policy", "Terms of Service"
  - Font: Favorit, 16px, weight 400
  - Color: Medium gray
  - Hover: Arctic White
  - Transition: 0.3s ease

---

## 5. Design System (DICE)

### 5.1 Color Palette

| Name | Hex Value | Usage |
|------|-----------|-------|
| Pitch Black | #000000 | Primary text, hero backgrounds, borders, icons |
| Arctic White | #ffffff | Background, CTA text, secondary icons |
| Ash Gray | #d9d9d9 | Card borders, subtle dividers |
| Cloud White | #eeeeee | Section backgrounds, secondary areas |
| Medium Gray | #808080 | Secondary text, muted content |
| Dark Gray | #595959 | Placeholder text, ghost button borders |
| Charcoal | #333333 | Alternative backgrounds, map placeholders |
| Electric Blue | #0000FE | Accent color, links, icons |

### 5.2 Typography

**Primary Display Font: Foggy (Bebas Neue fallback)**
- Weight: 400
- Size: 106px (headlines)
- Line-height: 0.83
- Letter-spacing: normal
- Usage: Main page headline only

**Body Font: Favorit (Inter fallback)**
- Weights: 350, 400, 700
- Sizes: 12px, 14px, 16px, 18px, 24px, 28px
- Line-height: 1.25
- Letter-spacing: 0.0600em
- Usage: All body text, navigation, buttons

**Type Scale:**
- Headline (28px, weight 700): Section titles
- Heading-sm (24px, weight 700): Card titles, benefit titles
- Body-lg (18px, weight 400): Subheadings, large body text
- Body (16px, weight 400): Primary body text
- Body-sm (14px, weight 400): Secondary text, testimonial author
- Caption (12px, weight 400): Helper text, labels

### 5.3 Spacing System

**Base Unit:** 4px

| Token | Value | Usage |
|-------|-------|-------|
| spacing-4 | 4px | Micro spacing |
| spacing-8 | 8px | Element gaps |
| spacing-12 | 12px | Small gaps |
| spacing-16 | 16px | Card padding |
| spacing-20 | 20px | Medium gaps |
| spacing-24 | 24px | Section gaps, standard padding |
| spacing-32 | 32px | Large gaps |
| spacing-40 | 40px | Extra large gaps |
| spacing-48 | 48px | Section spacing |
| spacing-60 | 60px | Large section spacing |
| spacing-120 | 120px | Hero spacing |

### 5.4 Border Radius

| Element | Value |
|---------|-------|
| Buttons | 40px |
| Cards | 4px |
| Images | 8px |
| Navigation | 20px |
| Misc | 20px |

### 5.5 Component Specifications

**Primary Action Button**
- Background: Pitch Black (#000000)
- Text: Arctic White (#ffffff), Favorit 16px weight 400
- Padding: 14px 32px
- Border-radius: 40px
- Hover: Background #333333, transform translateY(-2px)
- Transition: 0.3s ease all

**Ghost Button**
- Background: transparent
- Border: 2px solid Dark Gray (#595959)
- Text: Dark Gray (#595959), Favorit 16px weight 400
- Padding: 8px 16px
- Border-radius: 20px
- Hover: Background #eeeeee, border #000000, text #000000

**Card**
- Background: Arctic White (#ffffff)
- Border: 1px solid Ash Gray (#d9d9d9)
- Border-radius: 4px
- Padding: 24px
- Hover: Border #000000, transform translateY(-4px)
- Transition: 0.3s ease all

---

## 6. SEO Requirements

### 6.1 Meta Tags

**Page Title:**
- "JM Sport Massage Therapy - Pijat Cedera Olahraga Gresik"
- Length: 55-60 characters

**Meta Description:**
- "JM Sport Massage Therapy - Pijat cedera olahraga profesional di Gresik. Terapi relaksasi, pemulihan otot, dan penanganan cedera untuk umum dan atlet. Hubungi kami via WhatsApp."
- Length: 155-160 characters

**Meta Keywords:**
- pijat cedera olahraga gresik, sport massage, terapi cedera, pijat relaksasi, massage therapy surabaya, terapi otot, pijat profesional

**Open Graph Tags:**
- og:title: "JM Sport Massage Therapy - Pijat Cedera Olahraga Gresik"
- og:description: "Terapi pijat profesional untuk cedera olahraga dan relaksasi harian. Ditangani langsung oleh ahli berpengalaman."
- og:type: website
- og:image: (Hero section image or branded image)

### 6.2 Semantic HTML

- Use semantic tags: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Proper heading hierarchy: H1 (page title), H2 (section titles), H3 (subsection titles)
- Schema markup: LocalBusiness schema with address, phone, hours

### 6.3 Performance

- Page load time: < 3 seconds
- Lighthouse score: > 90
- Mobile-friendly: Fully responsive, mobile-first design
- Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1

### 6.4 Local SEO

- Include location keywords: Gresik, Driyorejo, Surabaya, East Java
- Embed Google Maps or link to business location
- Include business hours and contact information
- Structured data: LocalBusiness schema

---

## 7. WhatsApp Integration

### 7.1 WhatsApp Link Format

**Base Link:**
```
https://wa.me/{phone_number}?text={pre_filled_message}
```

**Phone Number:** +62857825855590 (without special characters)

**Pre-filled Message:**
- "Halo, saya ingin booking sesi massage di JM Sport Massage Therapy."

**Full Link:**
```
https://wa.me/62857825855590?text=Halo%2C%20saya%20ingin%20booking%20sesi%20massage%20di%20JM%20Sport%20Massage%20Therapy.
```

### 7.2 CTA Placement

- Navigation bar (top-right)
- Hero section (below subheading)
- Benefits section (optional, secondary)
- Contact section (prominent)
- Footer (optional)

### 7.3 CTA Button Styling

- Text: "WhatsApp" or "Hubungi Kami Sekarang"
- Icon: Optional WhatsApp icon (optional)
- Behavior: Open in new tab/window
- Analytics: Track clicks for conversion measurement

---

## 8. Mobile Responsiveness

### 8.1 Breakpoints

| Breakpoint | Width | Device |
|-----------|-------|--------|
| Mobile | < 640px | Phones |
| Tablet | 640px - 1024px | Tablets |
| Desktop | > 1024px | Desktops |

### 8.2 Mobile Adjustments

**Navigation:**
- Hamburger menu for mobile
- Full-width dropdown menu
- Sticky header maintained

**Hero Section:**
- Single column layout
- Headline: 48px (reduced from 106px)
- Remove visual placeholder

**Service Cards:**
- 1 column on mobile, 2 on tablet, 4 on desktop

**Benefits:**
- 1 column on mobile, 2 on desktop

**Testimonials:**
- 1 column on mobile, 3 on desktop

**Contact Section:**
- 1 column on mobile, 2 on desktop
- Map placeholder: Full width

**Padding/Margins:**
- Mobile: 16px horizontal padding
- Tablet: 24px horizontal padding
- Desktop: 40px horizontal padding

---

## 9. Content Requirements

### 9.1 Copy Guidelines

- **Tone:** Professional, friendly, trustworthy
- **Language:** Indonesian (Bahasa Indonesia)
- **Clarity:** Clear, concise, benefit-focused
- **CTA:** Action-oriented, urgency-driven
- **No pricing:** Do not mention prices or rates

### 9.2 Content Sources

- Business information from Google Maps listing
- Reviews from Google Maps (75+ reviews, 4.5 stars)
- Service descriptions based on industry best practices
- Business hours: Tue-Sun 15:00-21:00, Closed Monday
- Address: Jl. Raya Aquamarin No.H22-23, Paras, Mulung, Kec. Driyorejo, Kabupaten Gresik, Jawa Timur 61177

---

## 10. Technical Specifications

### 10.1 Technology Stack

- **Frontend Framework:** React 19
- **Styling:** Tailwind CSS 4 + Custom CSS
- **Typography:** Google Fonts (Inter, Bebas Neue)
- **Icons:** Lucide React
- **Routing:** Wouter (client-side)
- **Build Tool:** Vite
- **Language:** TypeScript

### 10.2 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### 10.3 Accessibility

- WCAG 2.1 Level AA compliance
- Semantic HTML structure
- Proper contrast ratios (DICE design ensures high contrast)
- Keyboard navigation support
- Focus indicators visible
- Alt text for images/icons

---

## 11. Analytics & Tracking

### 11.1 Key Metrics

- Page views
- Unique visitors
- Bounce rate
- Time on page
- Click-through rate (CTR) on WhatsApp CTA
- Conversion rate (bookings)
- Device breakdown (mobile/desktop)
- Traffic source

### 11.2 Events to Track

- WhatsApp button clicks (all locations)
- Section scrolls
- Link clicks
- Form submissions (if booking form added)

---

## 12. Future Enhancements

### Phase 2 (Optional)

- [ ] Booking form with calendar integration
- [ ] Real-time Google Reviews display
- [ ] Photo gallery of clinic/therapists
- [ ] Blog section for massage tips and health content
- [ ] Live chat support
- [ ] Multi-language support (English, Indonesian)
- [ ] Therapist profiles and specializations
- [ ] Package/service pricing display
- [ ] Before/after case studies
- [ ] Video testimonials

---

## 13. Deployment & Hosting

### 13.1 Hosting

- **Platform:** Manus (built-in hosting with custom domain support)
- **Domain:** jmsportmassage.com (custom domain)
- **SSL:** Automatic HTTPS
- **CDN:** Built-in CDN for fast delivery

### 13.2 Deployment Process

1. Create checkpoint in Manus
2. Click "Publish" button in Management UI
3. Configure custom domain in Settings > Domains
4. Verify domain ownership
5. Site goes live

---

## 14. Success Criteria

| Metric | Target | Timeline |
|--------|--------|----------|
| Page Load Time | < 3 seconds | Immediate |
| Lighthouse Score | > 90 | Immediate |
| Mobile Responsiveness | 100% | Immediate |
| SEO Ranking | Top 3 for local keywords | 3 months |
| Monthly Visitors | 1000+ | 3 months |
| WhatsApp CTR | 5-10% | 1 month |
| Conversion Rate | 5-10% | 3 months |
| Bounce Rate | < 40% | 3 months |

---

## 15. Revision History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | May 4, 2026 | Initial PRD creation |

---

**Document Owner:** Design & Product Team  
**Status:** Ready for Development  
**Last Review:** May 4, 2026
